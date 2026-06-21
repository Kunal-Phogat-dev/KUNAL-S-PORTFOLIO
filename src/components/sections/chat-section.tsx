"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

import { SectionBackground } from "@/components/ui/section-background";

function TypingMessage({ content }: { content: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setCompleted(false);
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(content.substring(0, i));
      i++;
      if (i > content.length) {
        clearInterval(interval);
        setCompleted(true);
      }
    }, 20); // 20ms per character
    
    return () => clearInterval(interval);
  }, [content]);

  return (
    <span>
      {displayedText}
      {!completed && <span className="inline-block w-1.5 h-4 ml-1 bg-cyan-500 animate-pulse align-middle" />}
    </span>
  );
}

export function ChatSection() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey, I'm Alex Nova. Want to know about Kunal's skills, pricing, or availability? Just ask." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();

    const container = chatContainerRef.current;
    if (!container) return;

    // Observe the chat container for text changes from the typing animation
    const observer = new MutationObserver(() => {
      scrollToBottom();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, [messages]);

  const suggestedQuestions = [
    "What's your pricing for an e-commerce site?",
    "How fast can you deliver a landing page?",
    "Do you use templates or custom designs?"
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      
      if (!res.ok) {
        setMessages([...newMessages, { role: "assistant", content: data.error || "I'm experiencing high traffic right now. Please try again!" }]);
        return;
      }

      if (data.message) {
        setMessages([...newMessages, { role: "assistant", content: data.message }]);
      }
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "assistant", content: "Connection error. Please check your internet and try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="ai-chat" className="py-24 bg-background relative overflow-hidden">
      <SectionBackground variant="chat" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chat with my AI</h2>
            <p className="text-muted-foreground text-lg">Available 24/7 to answer your questions about my services and pricing.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-[600px] relative z-10"
          >
            {/* Chat Area */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto overscroll-none p-6 space-y-6">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                      <Bot size={20} className="text-cyan-400" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-6 py-4 ${msg.role === 'user' ? 'bg-cyan-600 text-zinc-900 dark:text-white rounded-tr-sm' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 rounded-tl-sm'}`}>
                    {msg.role === 'assistant' ? <TypingMessage content={msg.content} /> : msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
                      <User size={20} className="text-zinc-300" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                    <Bot size={20} className="text-cyan-400" />
                  </div>
                  <div className="bg-zinc-200 dark:bg-zinc-800 rounded-2xl rounded-tl-sm px-6 py-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border-t border-black/5 dark:border-white/5">
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      disabled={loading}
                      className="px-3 py-1.5 text-xs font-medium bg-zinc-200/50 hover:bg-cyan-500/10 hover:text-cyan-600 dark:bg-zinc-800/50 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400 text-zinc-600 dark:text-zinc-300 rounded-full border border-black/5 dark:border-white/5 transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="absolute right-2 p-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
