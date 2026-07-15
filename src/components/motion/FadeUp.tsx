"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clipUp, easeExpoOut, fadeUp, staggerContainer, staggerFast } from "@/lib/motion";
import { cn } from "@/lib/cn";

type FadeUpProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "span" | "p" | "h2" | "h3";
};

export function FadeUp({
  children,
  className,
  delay = 0,
}: FadeUpProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  fast,
}: {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={fast ? staggerFast : staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** Line / word mask reveal — Mina-style clip choreography */
export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn(className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className="flex flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.07, delayChildren: delay },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden pb-[0.12em]">
            <motion.span className="inline-block" variants={clipUp}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "115%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1, delay, ease: easeExpoOut }}
      >
        {children}
      </motion.div>
    </div>
  );
}
