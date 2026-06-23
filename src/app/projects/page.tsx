"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const allProjects = [
  {
    title: "Fitness Coach SaaS",
    category: "AI",
    description: "An AI-powered workout generator and diet planner that creates personalized routines based on user biometrics. Built to handle heavy concurrent user loads with real-time database updates.",
    metrics: [
      { label: "Active Users", value: "10k+" },
      { label: "Revenue MRR", value: "$5k" }
    ],
    image: "/fitness_saas.png",
    tags: ["Next.js", "OpenAI", "Stripe", "PostgreSQL"],
    links: { live: "https://fitforge-vert.vercel.app/", github: "https://github.com/Kunal-Phogat-dev/FITFORGE" }
  },
  {
    title: "Modern E-commerce",
    category: "E-commerce",
    description: "A high-conversion digital storefront featuring a custom 3D product viewer. Re-architected the entire checkout flow resulting in a massive drop in cart abandonment.",
    metrics: [
      { label: "Conversion Rate", value: "+42%" },
      { label: "Load Time", value: "0.8s" }
    ],
    image: "/ecommerce_store.png",
    tags: ["Next.js", "Tailwind", "Stripe", "Framer Motion"],
    links: { live: "https://nova-ecom.vercel.app/", github: "https://github.com/Kunal-Phogat-dev/NOVA-ECOM" }
  },
  {
    title: "AI Notes App",
    category: "AI",
    description: "A Notion-style block editor with a built-in AI writing assistant. Features offline sync, conflict resolution, and lightning-fast semantic search across all notes.",
    metrics: [
      { label: "Daily Active", value: "2,500" },
      { label: "Query Speed", value: "<50ms" }
    ],
    image: "/ai_notes.png",
    tags: ["React", "Supabase", "Gemini", "Tailwind"],
    links: { live: "https://nova-notes-red.vercel.app/", github: "https://github.com/Kunal-Phogat-dev/NOVA_NOTES" }
  },
  {
    title: "Premium SaaS Landing Page",
    category: "Landing Page",
    description: "Blazing-fast, high-converting landing page for AI tools with smooth animations, strong CTAs, and premium design.",
    metrics: [
      { label: "Conversion", value: "15%" },
      { label: "Performance", value: "99/100" }
    ],
    image: "/saas_landing_page.png",
    tags: ["Next.js", "Tailwind", "Framer Motion", "shadcn/ui"],
    links: { live: "#" }
  },
  {
    title: "Client Project",
    category: "Available",
    description: "Your next big idea goes here. Let's build something extraordinary together. Fast execution and premium quality guaranteed.",
    metrics: [
      { label: "Status", value: "Available" },
      { label: "Timeline", value: "2-4 Weeks" }
    ],
    image: "",
    tags: ["Custom", "Scalable", "Fast"],
    links: { live: "/#contact" }
  }
];

const CATEGORIES = ["All", "AI", "E-commerce", "Landing Page", "Available"];
const TECH_STACKS = ["All", "Next.js", "React", "Supabase", "Stripe", "OpenAI", "Gemini", "Tailwind", "Framer Motion", "shadcn/ui"];

export default function ProjectsPage() {
  const [filterType, setFilterType] = useState<"category" | "tech">("category");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = allProjects.filter(p => {
    if (activeFilter === "All") return true;
    if (filterType === "category") return p.category === activeFilter;
    if (filterType === "tech") return p.tags.includes(activeFilter);
    return true;
  });

  const handleFilterTypeChange = (type: "category" | "tech") => {
    setFilterType(type);
    setActiveFilter("All");
  };

  const activeFiltersList = filterType === "category" ? CATEGORIES : TECH_STACKS;

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan-400 mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Selected Work</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Deep dives into my most recent projects. Exploring the technical challenges, the solutions, and the business impact.
              </p>
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-lg w-fit">
                <button 
                  onClick={() => handleFilterTypeChange("category")}
                  className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${filterType === "category" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow" : "text-muted-foreground"}`}
                >
                  By Category
                </button>
                <button 
                  onClick={() => handleFilterTypeChange("tech")}
                  className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${filterType === "tech" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow" : "text-muted-foreground"}`}
                >
                  By Tech Stack
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-3 mb-16">
            <AnimatePresence mode="popLayout">
              {activeFiltersList.map(filter => (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter 
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]" 
                    : "bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Detailed Case Study Layout */}
          <div className="flex flex-col gap-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                  key={project.title}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
                >
                  {/* Image Container */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl">
                      <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full text-zinc-500 font-mono tracking-widest group-hover:scale-105 transition-transform duration-700">
                          COMING SOON
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-2/5 flex flex-col">
                    <div className="flex gap-4 items-center mb-6">
                      <span className="text-sm font-bold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                        {project.category}
                      </span>
                      <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      {project.metrics?.map(metric => (
                        <div key={metric.label} className="flex flex-col gap-1">
                          <span className="text-3xl font-black text-zinc-900 dark:text-white">{metric.value}</span>
                          <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 mt-auto">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group/link">
                          View Live Site <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                          <GitBranch size={18} aria-hidden="true" /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-24 text-muted-foreground text-lg">
                No projects found for this filter.
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
