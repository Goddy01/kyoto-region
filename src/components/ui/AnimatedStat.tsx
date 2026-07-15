"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { Stat } from "@/data/types";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);

  return value;
}

export function AnimatedStat({
  stat,
  className,
  index = 0,
}: {
  stat: Stat;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useCountUp(stat.value, inView);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative border-l border-white/10 pl-5 text-left transition-colors duration-500 hover:border-accent/50",
        className,
      )}
    >
      <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="font-hero text-5xl tracking-[0.04em] text-foreground tabular-nums md:text-6xl">
        {stat.prefix}
        {value}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-xs tracking-[0.22em] text-muted uppercase">
        {stat.label}
      </p>
    </div>
  );
}
