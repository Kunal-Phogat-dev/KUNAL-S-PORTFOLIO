"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Fitness Coach SaaS",
    description: "AI-powered workout generator and diet planner.",
    image: "/fitness_saas.png",
    tags: ["Next.js", "OpenAI", "Stripe"],
    liveUrl: "https://fitforge-vert.vercel.app/",
    githubUrl: "https://github.com/Kunal-Phogat-dev/FITFORGE",
    caseUrl: "/projects",
  },
  {
    title: "Modern E-commerce",
    description: "High-conversion storefront with 3D product viewer.",
    image: "/ecommerce_store.png",
    tags: ["Next.js", "Tailwind", "Stripe"],
    liveUrl: "https://nova-ecom.vercel.app/",
    caseUrl: "/projects",
  },
  {
    title: "AI Notes App",
    description: "Notion-style editor with built-in AI writing assistant.",
    image: "/ai_notes.png",
    tags: ["React", "Supabase", "Gemini"],
    liveUrl: "https://demo.vercel.app",
    caseUrl: "/projects",
  },
  {
    title: "Premium SaaS Landing Page",
    description: "Blazing-fast, high-converting landing page for AI tools with smooth animations, strong CTAs, and premium design.",
    image: "/saas_landing_page.png",
    tags: ["Next.js 15", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    liveUrl: "https://demo.vercel.app",
    caseUrl: "/projects",
  },
];

import { SectionBackground } from "@/components/ui/section-background";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-zinc-50/50 dark:bg-zinc-950/50 border-y border-black/5 dark:border-white/5 overflow-hidden">
      <SectionBackground variant="projects" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
              <p className="text-muted-foreground text-lg">Recent projects built for performance and conversion.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative w-full h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl z-20"
              >
                <div className="absolute inset-0 bg-zinc-900 z-0" />

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out z-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="text-zinc-500 font-mono text-2xl font-bold tracking-widest uppercase">
                      COMING SOON
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-white/10 backdrop-blur-md border border-white/20 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-base md:text-xl text-zinc-300 font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all bg-cyan-500 hover:bg-cyan-400 text-black hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                      Live Demo <ExternalLink size={18} />
                    </Link>
                    <Link href={project.caseUrl} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:scale-105">
                      Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
