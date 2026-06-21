"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Zap, Rocket, GraduationCap, Code2, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stats = [
  { icon: <CheckCircle2 className="text-cyan-400 mb-2" size={48} />, value: "", label: "Projects Shipped" },
  { icon: <Zap className="text-cyan-400 mb-2" size={32} />, value: "100%", label: "On-time Delivery" },
  { icon: <Rocket className="text-cyan-400 mb-2" size={32} />, value: "AI", label: "Powered Solutions" },
];

const timeline = [
  {
    year: "2023",
    title: "First Production Application",
    description: "Designed and developed a fully functional web application from scratch, handling everything from database architecture to frontend UI.",
    icon: <Code2 size={20} className="text-zinc-900 dark:text-white" />
  },
  {
    year: "2024",
    title: "E-Commerce Platforms",
    description: "Engineered high-converting e-commerce storefronts featuring complex state management, custom carts, and seamless Stripe integrations.",
    icon: <Briefcase size={20} className="text-zinc-900 dark:text-white" />
  },
  {
    year: "2025",
    title: "SaaS Product Delivery",
    description: "Architected and scaled end-to-end SaaS platforms, focusing on robust backend infrastructure, premium aesthetics, and responsive design.",
    icon: <GraduationCap size={20} className="text-zinc-900 dark:text-white" />
  },
  {
    year: "2026",
    title: "AI-Powered Integrations",
    description: "Incorporated advanced AI workflows (OpenAI, Gemini) into modern web apps to automate complex operations and drive massive user engagement.",
    icon: <Rocket size={20} className="text-zinc-900 dark:text-white" />
  }
];

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/(\d+)(.*)/);
  if (!numMatch) return <span>{value}</span>;
  
  const targetNumber = parseInt(numMatch[1], 10);
  const suffix = numMatch[2] || "";

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(targetNumber);
    }
  }, [inView, motionValue, targetNumber]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

import { SectionBackground } from "@/components/ui/section-background";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <SectionBackground variant="about" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <blockquote className="text-xl md:text-2xl text-muted-foreground border-l-4 border-cyan-500 pl-6 italic font-medium leading-relaxed">
              "I believe in building products that matter. I combine premium aesthetics with high-performance code to deliver digital experiences that not only look incredible but also drive real business growth."
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-100 dark:bg-zinc-900 transition-colors group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                {stat.value && (
                  <h3 className="text-4xl font-black text-zinc-900 dark:text-white mb-1">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                )}
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="mt-32" ref={containerRef}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground">The path from curiosity to shipping production apps.</p>
            </div>

            <div className="relative max-w-2xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10 -translate-x-1/2" />
              <motion.div 
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500 origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                style={{ scaleY: lineHeight }}
              />

              {/* Timeline Items */}
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] -translate-x-1/2 flex items-center justify-center z-10">
                    {item.icon}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-20 md:pl-0 md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold font-mono text-sm rounded-full mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
