"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MessageCircle, Link2, Calendar, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

import { SectionBackground } from "@/components/ui/section-background";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    
    // Simulate a network request (e.g. sending to Formspree/Resend)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    form.reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };
  return (
    <section id="contact" className="py-24 relative bg-zinc-50/80 dark:bg-zinc-950/80 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <SectionBackground variant="minimal" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Let's build something <span className="text-cyan-400">great.</span></h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Whether you need a high-converting landing page, a complex web app, or an AI integration, I ship fast and deliver results.
            </p>
            
            <div className="pt-6 space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">Send me an email</span>
              </a>
              
              <a href="#" className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <span className="font-medium text-lg">Book a 15-min discovery call</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-full flex items-center justify-center transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-full flex items-center justify-center transition-all">
                <Link2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-full flex items-center justify-center transition-all">
                <Globe size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-100/50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-black/10 dark:border-white/10"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Name</label>
                  <input type="text" id="name" name="name" maxLength={100} required className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email</label>
                  <input type="email" id="email" name="email" maxLength={150} required className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Project Type</label>
                <div className="relative">
                  <select id="project" name="project" className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-zinc-900 dark:text-white appearance-none cursor-pointer pr-10">
                    <option value="landing_page" className="bg-white dark:bg-zinc-900">Landing Page</option>
                    <option value="ecommerce" className="bg-white dark:bg-zinc-900">E-commerce Store</option>
                    <option value="ai_app" className="bg-white dark:bg-zinc-900">AI Application</option>
                    <option value="other" className="bg-white dark:bg-zinc-900">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Budget</label>
                <div className="relative">
                  <select id="budget" name="budget" className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-zinc-900 dark:text-white appearance-none cursor-pointer pr-10">
                    <option value="300-400" className="bg-white dark:bg-zinc-900">$300–$400 — Informational website, 5 pages, live in 7 days</option>
                    <option value="500-700" className="bg-white dark:bg-zinc-900">$500–$700 — E-commerce store, Stripe integrated, live in 14 days</option>
                    <option value="800+" className="bg-white dark:bg-zinc-900">$800+ — AI-powered tool or custom web app</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Message</label>
                <textarea id="message" name="message" maxLength={1000} required rows={4} className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting && <Loader2 size={20} className="animate-spin" />}
                  {isSuccess && <CheckCircle2 size={20} />}
                  {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send My Request"}
                </button>
                <div className="text-xs text-center text-zinc-500 font-medium space-y-1 mt-1">
                  <p>✓ 2 revisions included. You don't pay the final 50% until you're happy.</p>
                  <p className="text-cyan-600 dark:text-cyan-400 font-bold">⚡ I respond to all inquiries within 24 hours.</p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
