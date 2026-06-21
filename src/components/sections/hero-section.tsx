"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Code2, Database, Layout, Sparkles, CreditCard, Box, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const techStack = [
  { name: 'Next.js 15', icon: Box },
  { name: 'Tailwind CSS', icon: Layout },
  { name: 'Framer Motion', icon: Zap },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Supabase', icon: Database },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Gemini AI', icon: Sparkles },
  { name: 'shadcn/ui', icon: Layout },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
};

import { SectionBackground } from "@/components/ui/section-background";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - 250);
      mouseY.set(e.clientY - rect.top - 250);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">
      <SectionBackground variant="hero" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium w-fit border border-cyan-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for freelance work
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Tell me what you need. Get a live website in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">7 days.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-lg">
            18-year-old web developer from India. I specialize in building blazing-fast, modern web applications that elevate your brand and convert visitors into paying customers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-4">
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton className="relative group overflow-hidden rounded-full p-[1px]" aria-label="See Live Projects">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                <Link href="#projects" className="relative flex items-center gap-2 px-8 py-4 bg-background rounded-full font-bold text-foreground transition-all group-hover:bg-transparent group-hover:text-zinc-900 dark:text-white">
                  See Live Projects <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton className="px-8 py-4 rounded-full font-bold text-foreground border border-border hover:bg-white/5 transition-colors" aria-label="Start My Project">
                <Link href="#contact">Start My Project</Link>
              </MagneticButton>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              ✓ 2 revisions included. You don't pay the final 50% until you're happy.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 w-full max-w-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5 relative">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  <span className="font-bold text-zinc-900 dark:text-white text-sm uppercase tracking-wider">Today</span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">You fill out the contact form (2 mins)</p>
              </div>

              <div className="flex flex-col gap-1.5 relative">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <span className="font-bold text-zinc-900 dark:text-white text-sm uppercase tracking-wider">Day 1</span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">We align on design and scope</p>
              </div>

              <div className="flex flex-col gap-1.5 relative">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <span className="font-bold text-zinc-900 dark:text-white text-sm uppercase tracking-wider">Day 7</span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">Your site goes live</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative lg:h-[600px] flex items-center justify-center w-full max-w-md mx-auto lg:max-w-none"
        >
          {/* Floating Badges (Outside Image, Draggable) */}
          <motion.div
            drag
            dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
            whileDrag={{ scale: 1.1 }}
            className="hidden md:block absolute top-32 -right-8 lg:-right-12 z-30 cursor-grab active:cursor-grabbing"
          >
            <div className="px-5 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-black/5 dark:border-white/10 font-mono text-sm font-bold text-cyan-600 dark:text-cyan-400 shadow-2xl">
              Ship Fast 🚀
            </div>
          </motion.div>

          <motion.div
            drag
            dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
            whileDrag={{ scale: 1.1 }}
            className="hidden md:block absolute bottom-32 -left-8 lg:-left-12 z-30 cursor-grab active:cursor-grabbing"
          >
            <div className="px-5 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-black/5 dark:border-white/10 font-mono text-sm font-bold text-blue-600 dark:text-blue-400 shadow-2xl">
              100% On-Time
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
            className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden relative flex flex-col items-center justify-center z-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-30 mix-blend-overlay dark:mix-blend-plus-lighter z-20"></div>
            <Image
              src="/avatar.jpg"
              alt="Kunal Phogat"
              fill
              priority={true}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/50 backdrop-blur-sm py-3">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, halfIdx) => (
            <div key={halfIdx} className="flex shrink-0">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 px-8 whitespace-nowrap">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center gap-1">
                      <tech.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
