"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUp, AtSign, Briefcase, GitBranch } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-50 dark:bg-zinc-950 border-t border-black/5 dark:border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Subtle animated top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="inline-block text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white" aria-label="Go to homepage">
              KUNAL<span className="text-cyan-500">.</span>PHOGAT
            </Link>
            <div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">18yo Developer. 7-Day Delivery. Real Results.</p>
              <p className="text-zinc-500 max-w-sm leading-relaxed">Turning ideas into results at lightning speed. Obsessed with performance and premium aesthetics.</p>
            </div>
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-700 dark:text-cyan-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available Now
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-zinc-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-cyan-500 transition-colors relative group inline-block">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-500 transition-colors relative group inline-block">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-500 transition-colors relative group inline-block">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-500 transition-colors relative group inline-block">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-zinc-900 dark:text-white mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-cyan-500 transition-colors w-fit">
                  <AtSign size={16} aria-hidden="true" className="group-hover:scale-110 transition-transform" /> 
                  <span className="relative">Twitter<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-cyan-500 transition-colors w-fit">
                  <Briefcase size={16} aria-hidden="true" className="group-hover:scale-110 transition-transform" /> 
                  <span className="relative">LinkedIn<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-cyan-500 transition-colors w-fit">
                  <GitBranch size={16} aria-hidden="true" className="group-hover:scale-110 transition-transform" /> 
                  <span className="relative">GitHub<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@kunalphogat.com" className="group flex items-center gap-3 hover:text-cyan-500 transition-colors w-fit">
                  <Mail size={16} className="group-hover:scale-110 transition-transform" /> 
                  <span className="relative">Email<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span></span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-zinc-500"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Kunal Phogat. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="flex items-center gap-1 font-medium">Made with obsession in India <span role="img" aria-label="India flag">🇮🇳</span></p>
            
            <button 
              onClick={scrollToTop}
              className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-full text-zinc-900 dark:text-white hover:border-cyan-500 hover:text-cyan-500 transition-all group shadow-sm hidden lg:block"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Back to Top */}
          <button 
            onClick={scrollToTop}
            className="w-full py-3 mt-4 bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-xl text-zinc-900 dark:text-white hover:border-cyan-500 hover:text-cyan-500 transition-all group shadow-sm flex items-center justify-center gap-2 lg:hidden"
            aria-label="Back to top"
          >
            Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
