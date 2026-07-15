"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function PetalCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 380, damping: 28, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 380, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setEnabled(true);
    document.documentElement.classList.add("petal-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, input, textarea, select, label, [role='button']",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("petal-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-md transition-all duration-300"
        style={{
          width: hovering ? 36 : 22,
          height: hovering ? 36 : 22,
        }}
      />
      <span
        className="relative block bg-accent transition-transform duration-300"
        style={{
          width: hovering ? 18 : 14,
          height: hovering ? 13 : 10,
          borderRadius: "50% 0 50% 50%",
          boxShadow:
            "0 0 18px rgba(255,79,139,0.6), inset -2px -2px 5px rgba(255,255,255,0.4)",
          transform: hovering ? "rotate(28deg) scale(1.2)" : "rotate(14deg)",
        }}
      />
    </motion.div>
  );
}
