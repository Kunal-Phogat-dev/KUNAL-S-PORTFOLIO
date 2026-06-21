"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type BackgroundVariant = 
  | "hero" 
  | "about" 
  | "skills" 
  | "projects" 
  | "services" 
  | "chat" 
  | "minimal";

interface SectionBackgroundProps {
  variant: BackgroundVariant;
  disabled?: boolean;
}

// Reusable Spotlight component using the background-attachment: fixed trick.
// This confines the background to the section's absolute boundaries while keeping the gradient origin perfectly synced with the viewport mouse coordinates.
const CursorSpotlight = ({ 
  background, 
  maskImage, 
  className = "", 
  opacity = 1 
}: { 
  background?: string; 
  maskImage?: string; 
  className?: string;
  opacity?: number;
}) => (
  <div
    className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ${className}`}
    style={{
      opacity,
      backgroundImage: background,
      backgroundAttachment: background ? "fixed" : undefined,
      maskImage: maskImage,
      WebkitMaskImage: maskImage,
      maskAttachment: maskImage ? "fixed" : undefined,
      WebkitMaskAttachment: maskImage ? "fixed" : undefined,
    } as React.CSSProperties & { maskAttachment?: string; WebkitMaskAttachment?: string }}
  />
);

export function SectionBackground({ variant, disabled = false }: SectionBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (disabled || !mounted) return null;

  switch (variant) {
    case "hero":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Base Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_20%,black_100%)]" />
          
          {/* Cursor Interaction: Soft cyan circular glow */}
          <CursorSpotlight 
            background="radial-gradient(800px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(6, 182, 212, 0.15), transparent 40%)" 
          />
          
          <div 
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full animate-float-slow will-change-transform" 
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-float-reverse will-change-transform" 
          />
        </div>
      );
    
    case "about":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,black_100%)]" />
          
          {/* Cursor Interaction: Tighter blue-tinted spotlight */}
          <CursorSpotlight 
            background="radial-gradient(700px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(59, 130, 246, 0.12), transparent 40%)" 
          />

          <div 
            className="absolute top-0 left-1/2 w-[2px] h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2 blur-sm animate-scanline will-change-transform"
          />
        </div>
      );

    case "skills":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Faint base circuit */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,black_100%)]" />
          
          {/* Cursor Interaction: The cursor acts as a flashlight revealing a much brighter circuit board underneath */}
          <CursorSpotlight 
            className="opacity-[0.4] dark:opacity-[0.15]"
            background="radial-gradient(circle at 2px 2px, black 1px, transparent 0)"
            maskImage="radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, transparent 60%)"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundSize: "32px 32px" }} />
          
          {/* Soft generic glow backing the mask */}
          <CursorSpotlight 
            background="radial-gradient(700px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(6, 182, 212, 0.08), transparent 50%)" 
          />
        </div>
      );

    case "projects":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-zinc-950/20" />
          
          {/* Cursor Interaction: Deep purple/cyan moody glow */}
          <CursorSpotlight 
            background="radial-gradient(900px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(139, 92, 246, 0.08), transparent 50%)" 
          />
          
          <div 
            className="absolute top-0 left-0 w-[800px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full animate-float-slow will-change-transform" 
          />
          <div 
            className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full animate-float-reverse will-change-transform" 
          />
        </div>
      );

    case "services":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(6,182,212,0.03)_40px,rgba(6,182,212,0.03)_41px)]" />
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_10%,black_100%)]" />
          
          {/* Cursor Interaction: Clean teal glow */}
          <CursorSpotlight 
            background="radial-gradient(800px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(45, 212, 191, 0.1), transparent 40%)" 
          />
        </div>
      );

    case "chat":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent)", backgroundSize: "30px 30px" }} />
          
          {/* Cursor Interaction: Wide elliptical beam (scanning vibe) */}
          <CursorSpotlight 
            background="radial-gradient(1000px 350px ellipse at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(6, 182, 212, 0.15), transparent 50%)" 
          />
          
          <div 
            className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scanline will-change-transform"
          />
        </div>
      );

    case "minimal":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay dark:mix-blend-plus-lighter" />
          
          {/* Cursor Interaction: Almost invisible white/gray glow */}
          <CursorSpotlight 
            background="radial-gradient(700px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(255, 255, 255, 0.03), transparent 40%)" 
          />
        </div>
      );
      
    default:
      return null;
  }
}
