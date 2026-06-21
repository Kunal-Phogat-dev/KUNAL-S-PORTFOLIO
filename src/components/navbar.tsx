"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-black/5 dark:border-white/5 bg-background/50"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter">
        KUNAL<span className="text-cyan-500">.</span>PHOGAT
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
        <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
        <Link href="#services" className="hover:text-cyan-400 transition-colors">Services</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="#contact"
          className="hidden md:block px-4 py-2 text-sm font-medium bg-white text-black dark:bg-white dark:text-black rounded-full hover:bg-gray-200 transition-colors"
        >
          Start My Project
        </Link>
      </div>
    </motion.header>
  );
}
