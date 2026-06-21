"use client";

import { motion } from "framer-motion";

import { 
  Code2, 
  Terminal, 
  Layout, 
  FileJson, 
  Zap, 
  Database, 
  Server, 
  Cloud, 
  Sparkles, 
  CreditCard, 
  Globe, 
  GitBranch, 
  PenTool,
  Triangle 
} from "lucide-react";

const coreSkills = [
  { name: "Next.js", icon: Zap },
  { name: "React", icon: Code2 },
  { name: "Stripe", icon: CreditCard },
  { name: "Supabase", icon: Database },
  { name: "Tailwind", icon: Layout },
  { name: "TypeScript", icon: Terminal },
  { name: "Gemini", icon: Sparkles },
  { name: "Vercel", icon: Triangle }
];

import { SectionBackground } from "@/components/ui/section-background";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      <SectionBackground variant="skills" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground text-lg">The weapons of choice for shipping fast.</p>
          </motion.div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-6">
            {coreSkills.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-3 aspect-square bg-zinc-100/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default group relative flex flex-col items-center justify-center gap-2"
              >
                <item.icon className="w-7 h-7 text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider text-center leading-tight">
                  {item.name}
                </span>
                
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-black/10 dark:border-white/10"
          >
            <p className="text-muted-foreground text-sm font-medium">
              <span className="text-zinc-900 dark:text-white font-bold">Also proficient in:</span> Node.js, PostgreSQL, Firebase, Figma, Git
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
