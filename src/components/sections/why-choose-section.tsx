"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/section-background";

const reasons = [
  {
    title: "⚡ Unmatched Speed",
    description: "While agencies take months, I deliver in days. Every project has a fixed deadline — written in the agreement.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "🎨 Premium Aesthetics",
    description: "No templates. Every site is designed from scratch specifically for your brand.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "💰 Conversion Focused",
    description: "Every element has a purpose. Built to turn visitors into leads, not just look good.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "🤝 Direct Access",
    description: "You talk directly to me — not an account manager. WhatsApp or email, always within 24 hours.",
    color: "from-orange-500/20 to-red-500/20",
  }
];

export function WhyChooseSection() {
  return (
    <section id="why-choose-me" className="py-24 relative bg-zinc-50 dark:bg-zinc-950 border-y border-black/5 dark:border-white/5 overflow-hidden">
      <SectionBackground variant="minimal" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I don't just write code. I build high-performing digital assets designed to scale your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-black/10 dark:border-white/10 hover:border-cyan-500/50 transition-colors overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-30 mix-blend-overlay dark:mix-blend-plus-lighter z-0 pointer-events-none"></div>
              
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${reason.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -mr-20 -mt-20`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
