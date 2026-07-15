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
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["KYOTO", "REGION"];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:items-center md:pb-0"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-bg">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 70% 40%, rgba(255,79,139,0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(216,27,96,0.12) 0%, transparent 50%), linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #050505 100%)",
          }}
        />
        <div className="pattern-asanoha absolute inset-0 opacity-30" />
        <div
          aria-hidden
          className="animate-pulse-glow absolute top-1/4 right-1/4 h-[40vw] w-[40vw] max-h-[480px] max-w-[480px] rounded-full bg-accent/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        {/* Abstract esports silhouette plane */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-full md:w-1/2"
          style={{
            background:
              "linear-gradient(90deg, #050505 0%, transparent 40%), linear-gradient(180deg, transparent 10%, rgba(5,5,5,0.2) 50%, #050505 95%), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,79,139,0.03) 80px, rgba(255,79,139,0.03) 81px)",
          }}
        />
        <SakuraParticles count={14} />
      </div>

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeExpoOut }}
          className="mb-6 text-xs font-medium tracking-[0.32em] text-accent uppercase"
        >
          Esports Organization
        </motion.p>

        <h1 className="font-display text-display-xl max-w-5xl text-foreground">
          {words.map((word, wi) => (
            <span key={word} className="mr-[0.2em] inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25 + wi * 0.12,
                  ease: easeExpoOut,
                }}
              >
                {wi === 1 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.55, ease: easeExpoOut }}
          className="mt-7 max-w-lg text-base text-muted md:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: easeExpoOut }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/recruitment" variant="primary">
            Join Kyoto Region
          </Button>
          <Button href="/roster" variant="secondary">
            View Team
          </Button>
        </motion.div>

        <motion.a
          href="#stats"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: easeExpoOut }}
          className="animate-scroll-cue mt-16 inline-flex items-center gap-2 text-xs tracking-[0.24em] text-muted uppercase md:mt-24"
        >
          Scroll
          <ChevronDown size={14} className="text-accent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
