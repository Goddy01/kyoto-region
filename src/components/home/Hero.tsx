"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SakuraParticles } from "@/components/ui/SakuraParticles";
import { siteConfig } from "@/data/site";
import { easeExpoOut } from "@/lib/motion";

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
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col items-center px-6 pt-28 pb-10 text-center md:pt-32 md:pb-12 lg:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeExpoOut }}
          className="text-[10px] font-medium tracking-[0.36em] text-accent uppercase md:text-xs"
        >
          零 · Chapter 00 · Enter the region
        </motion.p>

        <div className="flex flex-1 flex-col items-center justify-center py-10 md:py-12">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: easeExpoOut }}
            className="mb-5 text-[10px] tracking-[0.32em] text-muted uppercase md:text-xs"
          >
            EST 2026
          </motion.p>

          <h1 className="hero-title text-foreground">
            {["KYOTO", "REGION"].map((word, wi) => (
              <span key={word} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={reduce ? false : { y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.35 + wi * 0.14,
                    ease: easeExpoOut,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.7, ease: easeExpoOut }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted md:mt-8 md:max-w-lg md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: easeExpoOut }}
            className="mt-8 md:mt-10"
          >
            <Button href="/recruitment" variant="primary">
              Join Kyoto Region
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#stats"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6, ease: easeExpoOut }}
          className="animate-scroll-cue inline-flex items-center gap-2 text-xs tracking-[0.24em] text-muted uppercase"
        >
          Scroll
          <ChevronDown size={14} className="text-accent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
