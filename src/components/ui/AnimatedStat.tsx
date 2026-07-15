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
}: {
  stat: Stat;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useCountUp(stat.value, inView);

  return (
    <div ref={ref} className={cn("text-center md:text-left", className)}>
      <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-xs tracking-[0.22em] text-muted uppercase">
        {stat.label}
      </p>
    </div>
  );
}
