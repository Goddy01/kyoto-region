"use client";

import Image from "next/image";
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
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:items-end md:pb-24"
    >
      <div className="absolute inset-0 bg-bg">
        <motion.div
          style={reduce ? undefined : { y: mediaY }}
          className="absolute inset-0 scale-105"
        >
          {reduce ? (
            <Image
              src="/images/hero/banner.png"
              alt="Kyoto Region — EST 2026"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero/banner.png"
              aria-hidden
            >
              <source src="/videos/1st.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.2) 40%, rgba(5,5,5,0.4) 70%, rgba(5,5,5,0.92) 100%)",
          }}
        />
        <div
          aria-hidden
          className="animate-pulse-glow absolute top-1/3 left-1/2 h-[50vw] w-[50vw] max-h-[520px] max-w-[520px] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
        <SakuraParticles count={10} className="opacity-70" />
      </div>

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeExpoOut }}
          className="mb-5 text-xs font-medium tracking-[0.32em] text-accent uppercase"
        >
          零 · Chapter 00 · Enter the region
        </motion.p>

        <h1 className="sr-only">Kyoto Region</h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeExpoOut }}
          className="font-display max-w-xl text-2xl tracking-tight text-foreground md:text-4xl"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: easeExpoOut }}
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
          transition={{ delay: 0.95, duration: 0.6, ease: easeExpoOut }}
          className="animate-scroll-cue mt-14 inline-flex items-center gap-2 text-xs tracking-[0.24em] text-muted uppercase"
        >
          Scroll
          <ChevronDown size={14} className="text-accent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
