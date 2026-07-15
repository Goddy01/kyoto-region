"use client";

import { cn } from "@/lib/cn";

const petals = [
  { left: "8%", delay: "0s", duration: "14s", size: 8 },
  { left: "18%", delay: "2s", duration: "18s", size: 6 },
  { left: "28%", delay: "4s", duration: "16s", size: 10 },
  { left: "42%", delay: "1s", duration: "20s", size: 7 },
  { left: "55%", delay: "3s", duration: "15s", size: 9 },
  { left: "68%", delay: "5s", duration: "19s", size: 6 },
  { left: "78%", delay: "0.5s", duration: "17s", size: 8 },
  { left: "88%", delay: "2.5s", duration: "21s", size: 7 },
  { left: "95%", delay: "6s", duration: "14s", size: 5 },
  { left: "35%", delay: "7s", duration: "22s", size: 9 },
  { left: "62%", delay: "3.5s", duration: "16s", size: 6 },
  { left: "12%", delay: "8s", duration: "18s", size: 7 },
];

export function SakuraParticles({
  count = 12,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {petals.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="animate-sakura absolute -top-4 rounded-full bg-accent/70"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.7,
            animationDelay: p.delay,
            animationDuration: p.duration,
            borderRadius: "50% 0 50% 50%",
            boxShadow: "0 0 12px rgba(255,79,139,0.35)",
          }}
        />
      ))}
    </div>
  );
}
