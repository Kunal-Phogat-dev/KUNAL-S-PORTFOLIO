"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSparkling, setIsSparkling] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    setIsSparkling(true);
    setTimeout(() => setIsSparkling(false), 500);

    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  if (!mounted) return <div className="w-[52px] h-[28px]" />;

  return (
    <div className="relative group flex items-center justify-center z-50">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center w-[52px] h-[28px] rounded-full p-[4px] cursor-pointer outline-none overflow-hidden transition-colors duration-500 ease-in-out shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),0_1px_2px_rgba(255,255,255,0.05)]"
        style={{
          backgroundColor: isDark ? "#0f172a" : "#e2e8f0", // Deep navy vs light gray
          justifyContent: isDark ? "flex-end" : "flex-start",
        }}
        aria-label="Toggle Theme"
      >
        {/* Inner track reflection to make it look like a glass capsule */}
        <div className="absolute inset-0 rounded-full border border-white/20 dark:border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-2 right-2 h-[4px] bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 rounded-full pointer-events-none" />

        {/* The Liquid Orb */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
            mass: 1.2
          }}
          className="relative w-[20px] h-[20px] rounded-full flex items-center justify-center z-10"
          style={{
            background: isDark 
              ? "linear-gradient(135deg, #06b6d4, #0891b2)" // Neon cyan
              : "linear-gradient(135deg, #3b82f6, #2563eb)", // Electric blue
            boxShadow: isDark 
              ? "0 0 10px rgba(6,182,212,0.8), inset 0 2px 4px rgba(255,255,255,0.6)"
              : "0 0 10px rgba(59,130,246,0.5), inset 0 2px 4px rgba(255,255,255,0.8)",
          }}
        >
          {/* Rotating Icons inside the liquid */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center text-white"
            >
              {isDark ? <Moon size={12} strokeWidth={2.5} /> : <Sun size={12} strokeWidth={2.5} />}
            </motion.div>
          </AnimatePresence>

          {/* Glossy liquid highlight */}
          <div className="absolute top-[2px] left-[4px] w-[6px] h-[4px] bg-white/70 rounded-full blur-[0.5px] transform rotate-[-15deg] pointer-events-none" />
          <div className="absolute bottom-[2px] right-[4px] w-[4px] h-[2px] bg-black/30 rounded-full blur-[1px] pointer-events-none" />
        </motion.div>

        {/* Tiny Sparkles / Splash on Toggle */}
        <AnimatePresence>
          {isSparkling && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
              <motion.div 
                initial={{ opacity: 1, scale: 0, x: isDark ? 5 : -5, y: 0 }}
                animate={{ opacity: 0, scale: 1.5, x: isDark ? 15 : -15, y: -12 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute w-1 h-1 rounded-full blur-[0.5px] ${isDark ? "bg-cyan-300" : "bg-blue-300"}`}
              />
              <motion.div 
                initial={{ opacity: 1, scale: 0, x: isDark ? 5 : -5, y: 0 }}
                animate={{ opacity: 0, scale: 1, x: isDark ? 20 : -20, y: 8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`absolute w-1.5 h-1.5 rounded-full blur-[0.5px] ${isDark ? "bg-cyan-400" : "bg-blue-400"}`}
              />
            </div>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Hover Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-50">
        Switch to {isDark ? "Light" : "Dark"}
      </div>
    </div>
  );
}
