"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FadeUp, TextReveal } from "@/components/motion/FadeUp";
import { useI18n } from "@/i18n/LanguageProvider";

const kanji = ["慎", "咲", "結", "極"] as const;

export function RitualScroll() {
  const { t } = useI18n();
  const movements = t.home.movements;
  const ref = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (!railRef.current || !trackRef.current) return;
      const next = Math.max(
        0,
        trackRef.current.scrollWidth - railRef.current.clientWidth,
      );
      setTravel(next);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [movements]);

  const x = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -travel]);

  return (
    <section ref={ref} id="philosophy" className="relative h-[300vh] bg-bg">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 sakura-glow opacity-40" />

        <div className="relative mx-auto mb-10 w-full max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs tracking-[0.32em] text-accent uppercase">
              {t.home.philosophyEyebrow}
            </p>
          </FadeUp>
          <TextReveal
            text={t.home.philosophyTitle}
            className="font-display text-display-md mt-4 md:text-display-lg"
            delay={0.1}
          />
        </div>

        <div
          ref={railRef}
          className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 lg:px-8"
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-6">
            {movements.map((m, i) => (
              <article
                key={kanji[i]}
                className="glass hud-frame esports-sheen relative flex h-[48vh] w-[min(78vw,420px)] shrink-0 flex-col justify-between overflow-hidden p-8 md:h-[52vh] md:w-[min(38vw,420px)] md:p-10"
              >
                <span className="sheen-beam" aria-hidden />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,79,139,0.25) 0%, transparent 42%)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[9rem] leading-none text-accent/10 md:text-[12rem]"
                >
                  {kanji[i]}
                </div>
                <div className="relative">
                  <p className="placement-chip">
                    <span className="inline-block h-1.5 w-1.5 bg-accent" />
                    0{i + 1} · {m.label}
                  </p>
                  <h3 className="font-display mt-6 text-3xl tracking-tight md:text-4xl">
                    {m.title}
                  </h3>
                </div>
                <p className="relative max-w-sm text-sm leading-relaxed text-muted md:text-base">
                  {m.body}
                </p>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 text-[10px] tracking-[0.24em] text-muted uppercase">
            <span>01</span>
            <span>04</span>
          </div>
          <div className="mt-3 h-px w-full bg-white/10">
            <motion.div
              className="h-px origin-left bg-gradient-to-r from-accent to-accent-deep"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
