"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Landing Pages",
    agencyPrice: "$2,000+",
    price: "$350",
    timeline: "Live in 7 days",
    description: "High-converting, blazingly fast landing pages designed to turn visitors into customers.",
    features: ["Custom Design", "Framer Motion Animations", "SEO Optimization", "1-Week Delivery"],
    popular: false,
  },
  {
    title: "E-commerce Stores",
    agencyPrice: "$5,000+",
    price: "$600",
    timeline: "Live in 14 days",
    description: "Complete online stores with premium aesthetics and seamless checkout experiences.",
    features: ["Stripe / Next.js", "Payment Integration", "CMS Setup", "2-Week Delivery"],
    popular: true,
  },
  {
    title: "AI-Powered Tools",
    agencyPrice: "$8,000+",
    price: "$800",
    timeline: "Live in 21 days",
    description: "Custom AI dashboards, wrappers, and automations tailored to your business needs.",
    features: ["LLM Integration", "Database Setup", "Auth & Subscriptions", "3-Week Delivery"],
    popular: false,
  },
];

import { useState } from "react";

import { SectionBackground } from "@/components/ui/section-background";

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <SectionBackground variant="services" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Straightforward pricing. No hidden fees. Exceptional quality delivered fast.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const isSelected = hoveredIndex === idx || (hoveredIndex === null && service.popular);

              return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative group bg-zinc-100/50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-black/10 dark:border-white/10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl z-0`}
              >
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      layoutId="active-card-glow"
                      className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-[-1] shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] border border-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0 } }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_100%)]" />
                      <div className="absolute inset-[2px] rounded-[22px] bg-zinc-50 dark:bg-zinc-950" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {service.popular && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider rounded-full transition-opacity duration-300 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
                <div className="mb-4">
                  <div className="text-base text-zinc-600 dark:text-zinc-300 font-semibold mb-1">
                    Agencies charge <span className="line-through decoration-red-500 decoration-2">{service.agencyPrice}</span>
                  </div>
                  <div className="text-3xl font-black text-cyan-500 dark:text-cyan-400">
                    {service.price} <span className="text-lg font-normal text-zinc-500 dark:text-zinc-400">— {service.timeline}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 flex-1">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check size={16} className="text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-3">
                  <Link 
                    href="#contact" 
                    className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${isSelected ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/20'}`}
                  >
                    Start My Project
                  </Link>
                  <p className="text-[11px] text-center text-zinc-500 font-medium leading-tight">
                    ✓ 2 revisions included. You don't pay the final 50% until you're happy.
                  </p>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
