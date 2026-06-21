import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
}

export function Skeleton({ className, accent = false, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80",
        accent && "dark:bg-cyan-900/20 bg-cyan-100/50",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 z-10 w-full h-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "linear",
        }}
      />
    </div>
  );
}
