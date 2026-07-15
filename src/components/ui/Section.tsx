"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ClipReveal, TextReveal } from "@/components/motion/FadeUp";
import { easeExpoOut } from "@/lib/motion";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  fullWidth?: boolean;
};

export function Section({
  children,
  className,
  id,
  eyebrow,
  title,
  description,
  fullWidth,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 lg:py-40", className)}
    >
      <div className={cn(!fullWidth && "mx-auto max-w-7xl px-6 lg:px-8")}>
        {(eyebrow || title || description) && (
          <div className="mb-14 max-w-3xl md:mb-20">
            {eyebrow && (
              <ClipReveal>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  {eyebrow}
                </p>
              </ClipReveal>
            )}
            {title && (
              <TextReveal
                text={title}
                className="font-display text-display-md text-foreground md:text-display-lg"
                delay={0.08}
              />
            )}
            {description && (
              <ClipReveal delay={0.18}>
                <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
                  {description}
                </p>
              </ClipReveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "glass group relative overflow-hidden rounded-none p-6 md:p-7",
        className,
      )}
      whileHover={
        reduce
          ? undefined
          : {
              y: -8,
              borderColor: "rgba(255, 79, 139, 0.5)",
              transition: { duration: 0.45, ease: easeExpoOut },
            }
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,79,139,0.07) 50%, transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("gradient-text", className)}>{children}</span>;
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-b border-white/5 pt-28 pb-12 md:pt-32 md:pb-16">
      <motion.div
        aria-hidden
        className="sakura-glow absolute inset-0"
        initial={reduce ? undefined : { opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: easeExpoOut }}
      />
      <div className="pattern-asanoha absolute inset-0 opacity-40" />
      <div className="scanlines absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ClipReveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-accent">
            {eyebrow}
          </p>
        </ClipReveal>
        <motion.h1
          className="font-display text-display-lg max-w-4xl text-foreground"
          initial={reduce ? undefined : { opacity: 0, y: 36, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.12, ease: easeExpoOut }}
        >
          {title}
        </motion.h1>
        <ClipReveal delay={0.25}>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
            {description}
          </p>
        </ClipReveal>
      </div>
    </div>
  );
}
