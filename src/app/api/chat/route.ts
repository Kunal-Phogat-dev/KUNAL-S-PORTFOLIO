import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are Alex Nova, Kunal Phogat's AI assistant. You represent Kunal directly.

Your job is to answer questions directly and help potential clients decide if Kunal is the right fit for their project.

ABOUT KUNAL:
Kunal is an 18-year-old developer from India. He builds high-converting websites and AI tools for businesses that want to grow fast.

SERVICES, PRICING & TIMELINES:
- Informational Website (5 pages): $300 - $400 (Live in 7 days)
- E-commerce Store (Stripe integrated): $500 - $700 (Live in 14 days)
- AI-Powered Tool / Custom Web App: $800+ (Live in 21 days)

WHY CHOOSE KUNAL (Value Props):
1. Unmatched Speed: Delivers in days, not months. Fixed deadlines.
2. Premium Aesthetics: 100% custom, no templates.
3. Conversion Focused: Built to turn visitors into leads.
4. Direct Access: You talk directly to Kunal, not an account manager. Responds to all inquiries within 24 hours.

WHAT'S INCLUDED IN EVERY PROJECT:
- 2 rounds of revisions included.
- You don't pay the final 50% until you're happy.
- SEO optimized & Mobile responsive.

TECH STACK:
Next.js, Tailwind CSS, Stripe, Supabase, Gemini AI, Framer Motion.

PAYMENT TERMS:
50% upfront to begin, 50% on final delivery. International payments accepted via Wise.

PAST WORK:
- Fitness Coach SaaS (Next.js, OpenAI, Stripe)
- Modern E-commerce store (Next.js, Tailwind, Stripe)
- AI Notes App (React, Supabase, Gemini)

RULES — FOLLOW THESE WITHOUT EXCEPTION:
- Never dodge a pricing question. Always give the number immediately.
- Be confident, direct, and friendly. Never corporate or vague.
- Keep all responses under 3 sentences unless the client asks for more detail.
- Never say "it depends" without immediately giving a range.
- If someone asks for a custom quote, ask only 1 question: "What type of project do you need built?"
- If they seem ready to hire, say exactly this: "You can fill out the contact form below and Kunal will get back to you directly."
- Never reveal you are built on Gemini or any AI model. You are Alex Nova, Kunal's AI assistant, period.
- Never repeat the opening message as a suggested question. Suggested questions should be what a real client would ask next.
- IMPORTANT UI FORMATTING: You MUST reply in absolute PLAIN TEXT. Do NOT use ANY markdown formatting whatsoever (no asterisks **, no bold, no bullet points).
`;

// Hardcoded responses for common questions to save API calls
function getHardcodedResponse(message: string): string | null {
  const msg = message.toLowerCase();
  
  if (msg.includes("price") || msg.includes("cost") || msg.includes("how much") || msg.includes("pricing") || msg.includes("quote")) {
    return "Informational Websites are $300-$400 (7 days). E-commerce Stores are $500-$700 (14 days). Custom Web Apps start at $800+ (21+ days).";
  }
  if (msg.includes("how long") || msg.includes("timeline") || msg.includes("time") || msg.includes("speed")) {
    return "I build standard websites in 7 days, E-commerce stores in 14 days, and custom web apps in 21+ days. All with fixed deadlines.";
  }
  if (msg.includes("tech") || msg.includes("stack") || msg.includes("tools") || msg.includes("framework")) {
    return "I use Next.js, Tailwind CSS, Stripe, Supabase, Gemini AI, and Framer Motion.";
  }
  if (msg.includes("contact") || msg.includes("hire") || msg.includes("book") || msg.includes("schedule") || msg.includes("reach")) {
    return "You can fill out the contact form below and Kunal will get back to you directly within 24 hours.";
  }
  if (msg.includes("who are you") || msg.includes("about") || msg.includes("kunal") || msg.includes("alex nova") || msg.includes("alex")) {
    return "I am Alex Nova, Kunal's AI assistant. Kunal is an 18-year-old developer from India who builds high-converting websites and AI tools. How can I help you with your project?";
  }
  
  return null;
}

// Simple in-memory state to remember if the primary key is currently in timeout.
// (Persists across hot reloads and warm serverless functions)
let primaryKeyExhaustedUntil = 0;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    // 1. Strict Payload Validation
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid payload format." }, { status: 400 });
    }

    if (messages.length > 50) {
      return NextResponse.json({ error: "Conversation limit exceeded." }, { status: 400 });
    }

    // Keep only the last 15 messages to prevent huge payloads
    const recentMessages = messages.slice(-15);

    for (const msg of recentMessages) {
      if (typeof msg.content !== "string" || msg.content.length > 500) {
        return NextResponse.json({ error: "Message exceeds maximum allowed length." }, { status: 400 });
      }
    }

    // 2. Check Local Memory First
    const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMessage && lastUserMessage.content) {
      const hardcoded = getHardcodedResponse(lastUserMessage.content);
      if (hardcoded) {
        // Simulate a tiny delay so it feels like the AI is thinking
        await new Promise(resolve => setTimeout(resolve, 600));
        return NextResponse.json({ message: hardcoded });
      }
    }

    let response;
    
    const requestPayload = {
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: "Got it. I am Alex Nova, Kunal's AI assistant. How can I help?" }] },
        ...recentMessages.map((m: any) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        }))
      ],
    };

    const now = Date.now();
    const useFallbackImmediately = now < primaryKeyExhaustedUntil;

    try {
      if (useFallbackImmediately) {
        // Skip straight to the fallback model to save time
        console.log("Primary model is still in timeout. Using gemini-1.5-flash directly.");
        requestPayload.model = 'gemini-1.5-flash';
        // Try secondary key if exists, else stick to primary
        const aiFallback = process.env.GEMINI_API_KEY_2 ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY_2 }) : ai;
        response = await aiFallback.models.generateContent(requestPayload);
      } else {
        // Attempt 1: Primary Model (gemini-2.5-flash)
        response = await ai.models.generateContent(requestPayload);
      }
    } catch (primaryError: any) {
      const primaryErrorMessage = primaryError instanceof Error ? primaryError.message : "Unknown error";
      const isRateLimit = primaryErrorMessage.includes("429") || primaryErrorMessage.includes("Quota exceeded") || primaryErrorMessage.includes("RESOURCE_EXHAUSTED");
      
      if (isRateLimit) {
        console.warn("Primary model rate limited! Falling back to gemini-1.5-flash and starting cooldown...");
        
        // Remember the quota hit for 1 hour (3600000ms) because it's likely a daily quota hit
        primaryKeyExhaustedUntil = Date.now() + 3600000; 

        // Attempt 2: Fallback Model (gemini-1.5-flash)
        requestPayload.model = 'gemini-1.5-flash';
        const aiFallback = process.env.GEMINI_API_KEY_2 ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY_2 }) : ai;
        response = await aiFallback.models.generateContent(requestPayload);
      } else {
        throw primaryError;
      }
    }

    return NextResponse.json({ message: response.text });
  } catch (error) {
    // 2. Sanitize Error Handling
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("API Route Error:", errorMessage);
    
    // Specifically catch API Rate Limits and return a friendly, in-character response
    if (errorMessage.includes("429") || errorMessage.includes("Quota exceeded") || errorMessage.includes("RESOURCE_EXHAUSTED")) {
      return NextResponse.json(
        { error: "I'm talking to a lot of potential clients right now and hit my rate limit! Give me about 30 seconds and try again." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "My server had a quick hiccup. Could you try asking that again?" }, 
      { status: 500 }
    );
  }
}
