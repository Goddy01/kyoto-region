"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { easeExpoOut, easeQuartOut } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/LanguageProvider";

const TITLE = ["KYOTO", "REGION"] as const;

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg">
        {!reduce && (
          <motion.div
            style={{ y: mediaY, scale: mediaScale }}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 1.8, ease: easeExpoOut }}
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

        {reduce && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero/arena.jpg)" }}
          />
        )}

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 50% 42%, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.55) 55%, rgba(5,5,5,0.9) 100%),
              linear-gradient(180deg, rgba(5,5,5,0.6) 0%, transparent 28%, transparent 52%, rgba(5,5,5,0.95) 100%)
            `,
          }}
        />
        <div
          aria-hidden
          className="animate-pulse-glow absolute top-1/2 left-1/2 h-[42vw] w-[42vw] max-h-[420px] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
        <div className="pattern-asanoha absolute inset-0 opacity-[0.14]" />
        <div className="scanlines absolute inset-0 opacity-[0.35]" aria-hidden />
      </div>

      <div
        className="pointer-events-none absolute top-24 right-10 bottom-10 left-10 z-0 md:top-32 md:right-14 md:bottom-14 md:left-14"
        aria-hidden
      >
        <span className="hud-corner hud-corner-tl" />
        <span className="hud-corner hud-corner-tr" />
        <span className="hud-corner hud-corner-bl" />
        <span className="hud-corner hud-corner-br" />
      </div>

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative z-10 flex min-h-[100svh] w-full flex-col"
      >
        <div className="flex flex-1 items-center justify-center px-6 pt-24 pb-8">
          <div className="grid w-full max-w-5xl justify-items-center gap-7 text-center md:gap-9">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeExpoOut }}
              className="text-[10px] tracking-[0.42em] text-accent uppercase md:text-[11px]"
            >
              {t.home.heroEyebrow}
            </motion.p>

            <h1 className="hero-title text-foreground">
              {TITLE.map((word, wi) => (
                <span
                  key={word}
                  className="hero-word overflow-hidden pb-[0.04em]"
                >
                  <motion.span
                    className="gloss-text inline-block will-change-transform"
                    initial={reduce ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 1.15,
                      delay: 0.28 + wi * 0.12,
                      ease: easeExpoOut,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: easeQuartOut }}
              className="h-px w-24 origin-center bg-gradient-to-r from-transparent via-accent to-transparent md:w-32"
              aria-hidden
            />

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.62, ease: easeExpoOut }}
              className="max-w-md text-sm tracking-wide text-muted md:text-base"
            >
              {t.footer.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78, ease: easeExpoOut }}
            >
              <Link
                href="/recruitment"
                className={cn(
                  "btn-glossy group relative inline-flex items-center justify-center overflow-hidden",
                  "px-8 py-3.5 text-sm font-medium tracking-[0.14em] text-white uppercase",
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-80"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative z-10">{t.home.joinCta}</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#philosophy"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6, ease: easeExpoOut }}
          className="animate-scroll-cue mx-auto mb-10 inline-flex flex-col items-center gap-2 text-[10px] tracking-[0.32em] text-muted uppercase"
        >
          <span className="inline-flex items-center gap-2">
            {t.home.enter}
            <ChevronDown size={14} className="text-accent" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
