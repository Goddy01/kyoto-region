"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FadeUp, TextReveal } from "@/components/motion/FadeUp";

const movements = [
  {
    kanji: "慎",
    label: "Restraint",
    title: "Silence before the shot",
    body: "We prepare like monks. No noise. No fluff. Intent arrives before the first round.",
  },
  {
    kanji: "咲",
    label: "Bloom",
    title: "Violence with elegance",
    body: "When the window opens, Kyoto doesn't hesitate — executions land clean and cinematic.",
  },
  {
    kanji: "結",
    label: "Bond",
    title: "One call, five minds",
    body: "Chemistry is our map pool. Trust forged in VOD reviews and quiet bootcamp dinners.",
  },
  {
    kanji: "極",
    label: "Peak",
    title: "Hardware as proof",
    body: "Titles are receipts. Every placement is evidence of hours the public never sees.",
  },
];

export function RitualScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "-75%"],
  );

  return (
    <section ref={ref} id="philosophy" className="relative h-[300vh] bg-bg">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs tracking-[0.32em] text-accent uppercase">
              三 · Philosophy · Four movements
            </p>
          </FadeUp>
          <TextReveal
            text="How Kyoto moves."
            className="font-display text-display-md mt-4 md:text-display-lg"
            delay={0.1}
          />
        </div>

        <motion.div style={{ x }} className="flex w-max gap-6 px-6 lg:px-8">
          {movements.map((m, i) => (
            <article
              key={m.kanji}
              className="glass relative flex h-[48vh] w-[78vw] max-w-[420px] shrink-0 flex-col justify-between overflow-hidden p-8 md:h-[52vh] md:w-[38vw] md:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[9rem] leading-none text-accent/10 md:text-[12rem]"
              >
                {m.kanji}
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] text-accent uppercase">
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

        <div className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="h-px w-full bg-white/10">
            <motion.div
              className="h-px origin-left bg-accent"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
