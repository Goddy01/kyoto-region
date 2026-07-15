"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  magnetic?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "primary" && "bg-accent text-white hover:bg-accent-deep overflow-hidden",
    variant === "secondary" &&
      "border border-white/20 bg-transparent text-foreground hover:border-accent hover:text-accent",
    variant === "ghost" && "text-muted hover:text-foreground px-3 py-2",
    className,
  );

  const shared = {
    className: styles,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: magnetic && !reduce ? { x: springX, y: springY } : undefined,
    whileTap: reduce ? undefined : { scale: 0.97 },
  };

  const content = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.div className="inline-block" style={shared.style}>
        <Link
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          onClick={onClick}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={cn(styles, "group")}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={shared.whileTap}
      style={shared.style}
      className={cn(styles, "group")}
    >
      {content}
    </motion.button>
  );
}
