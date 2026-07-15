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
        "relative overflow-hidden border-y border-white/5 bg-surface/60 py-4",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-10 whitespace-nowrap",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display inline-flex items-center gap-10 text-sm tracking-[0.22em] text-muted uppercase md:text-base"
          >
            <span className="text-accent">京</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
