"use client";

import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
  speed = 40,
  reverse,
}: {
  items: string[];
  className?: string;
  speed?: number;
  reverse?: boolean;
}) {
  const row = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/5 bg-surface/70 py-5",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="marquee-track">
        <div
          className={cn(
            "flex w-max gap-12 whitespace-nowrap",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
          )}
          style={{ animationDuration: `${speed}s` }}
        >
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display inline-flex items-center gap-12 text-sm tracking-[0.28em] text-muted uppercase md:text-base"
            >
              <span className="text-accent">京</span>
              <span className="text-foreground/80">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
