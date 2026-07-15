"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { SakuraParticles } from "@/components/ui/SakuraParticles";
import { easeExpoOut } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg">
        {!reduce && (
          <motion.div
            style={{ y: mediaY }}
            className="absolute inset-0 scale-105"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
            >
              <source src="/videos/1st.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}

        <div
          className="absolute inset-0"
          style={{
            background: reduce
              ? `
                radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,79,139,0.18) 0%, transparent 55%),
                linear-gradient(180deg, #050505 0%, #0a0a0a 45%, #050505 100%)
              `
              : `
                radial-gradient(ellipse 70% 55% at 50% 45%, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.55) 55%, rgba(5,5,5,0.88) 100%),
                linear-gradient(180deg, rgba(5,5,5,0.55) 0%, transparent 30%, transparent 55%, rgba(5,5,5,0.92) 100%)
              `,
          }}
        />
        <div
          aria-hidden
          className="animate-pulse-glow absolute top-1/2 left-1/2 h-[48vw] w-[48vw] max-h-[480px] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[130px]"
        />
        <div className="pattern-asanoha absolute inset-0 opacity-20" />
        <SakuraParticles count={10} className="opacity-60" />
      </div>

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative z-10 flex min-h-[100svh] w-full flex-col"
      >
        {/* True viewport-centered content axis */}
        <div className="flex flex-1 items-center justify-center px-6 pt-24 pb-8">
          <div className="grid w-full max-w-5xl justify-items-center gap-8 text-center md:gap-10">
            <h1 className="hero-title text-foreground">
              {["KYOTO", "REGION"].map((word, wi) => (
                <span key={word} className="hero-word overflow-hidden pb-[0.04em]">
                  <motion.span
                    className="inline-block will-change-transform"
                    initial={reduce ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.25 + wi * 0.14,
                      ease: easeExpoOut,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: easeExpoOut }}
            >
              <Link
                href="/recruitment"
                className={cn(
                  "btn-glossy group relative inline-flex items-center justify-center overflow-hidden",
                  "px-7 py-3.5 text-sm font-medium tracking-wide text-white",
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-80"
                />
                <span className="relative z-10">Join Kyoto Region</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#philosophy"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: easeExpoOut }}
          className="animate-scroll-cue mx-auto mb-10 inline-flex items-center gap-2 text-xs tracking-[0.24em] text-muted uppercase"
        >
          Scroll
          <ChevronDown size={14} className="text-accent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
