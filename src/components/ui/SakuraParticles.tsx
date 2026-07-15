"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const petals = [
  { left: "3%", delay: "0s", duration: "16s", size: 8, drift: 28 },
  { left: "9%", delay: "1.2s", duration: "19s", size: 6, drift: -18 },
  { left: "15%", delay: "3.4s", duration: "17s", size: 10, drift: 40 },
  { left: "22%", delay: "0.6s", duration: "21s", size: 7, drift: -32 },
  { left: "28%", delay: "4.8s", duration: "15s", size: 9, drift: 22 },
  { left: "34%", delay: "2.1s", duration: "20s", size: 5, drift: -44 },
  { left: "41%", delay: "5.5s", duration: "18s", size: 8, drift: 16 },
  { left: "47%", delay: "1.8s", duration: "22s", size: 11, drift: -26 },
  { left: "53%", delay: "3.0s", duration: "16s", size: 6, drift: 38 },
  { left: "59%", delay: "6.2s", duration: "19s", size: 9, drift: -14 },
  { left: "65%", delay: "0.9s", duration: "17s", size: 7, drift: 48 },
  { left: "71%", delay: "4.1s", duration: "23s", size: 8, drift: -36 },
  { left: "77%", delay: "2.7s", duration: "15s", size: 5, drift: 20 },
  { left: "83%", delay: "5.0s", duration: "20s", size: 10, drift: -22 },
  { left: "89%", delay: "1.4s", duration: "18s", size: 6, drift: 34 },
  { left: "94%", delay: "3.8s", duration: "21s", size: 8, drift: -40 },
  { left: "12%", delay: "7.2s", duration: "19s", size: 7, drift: 12 },
  { left: "38%", delay: "8.0s", duration: "16s", size: 9, drift: -28 },
  { left: "56%", delay: "6.8s", duration: "22s", size: 6, drift: 30 },
  { left: "74%", delay: "7.6s", duration: "17s", size: 8, drift: -16 },
  { left: "6%", delay: "9.1s", duration: "20s", size: 5, drift: 42 },
  { left: "48%", delay: "8.5s", duration: "18s", size: 10, drift: -34 },
  { left: "86%", delay: "9.4s", duration: "21s", size: 7, drift: 24 },
  { left: "31%", delay: "10.2s", duration: "15s", size: 6, drift: -20 },
];

export function SakuraParticles({
  count = 12,
  className,
  fixed,
}: {
  count?: number;
  className?: string;
  /** Full-viewport overlay for all pages */
  fixed?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none overflow-hidden",
        fixed ? "fixed inset-0 z-[40]" : "absolute inset-0",
        className,
      )}
    >
      {petals.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="animate-sakura absolute -top-6 bg-accent/65"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size * 0.72,
              animationDelay: p.delay,
              animationDuration: p.duration,
              borderRadius: "50% 0 50% 50%",
              boxShadow: "0 0 12px rgba(255,79,139,0.35)",
              "--sakura-drift": `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function GlobalSakura() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return <SakuraParticles fixed count={22} className="opacity-70" />;
}
