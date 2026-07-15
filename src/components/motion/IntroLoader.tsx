"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easeExpoInOut, easeExpoOut } from "@/lib/motion";

export function IntroLoader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }

    const seen =
      typeof window !== "undefined" &&
      sessionStorage.getItem("kr-intro") === "1";
    if (seen) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";
    let frame = 0;
    const start = performance.now();
    const duration = 2200;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("kr-intro", "1");
        setTimeout(() => {
          setShow(false);
          document.body.style.overflow = "";
        }, 380);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(16px)",
            transition: { duration: 0.85, ease: easeExpoInOut },
          }}
        >
          <div className="sakura-glow pointer-events-none absolute inset-0 opacity-80" />
          <div className="pattern-asanoha pointer-events-none absolute inset-0 opacity-40" />

          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute h-2 w-2 rounded-full bg-accent"
              style={{
                left: `${8 + ((i * 7) % 84)}%`,
                top: `${12 + ((i * 11) % 70)}%`,
                borderRadius: "50% 0 50% 50%",
              }}
              initial={{ opacity: 0, y: -20, scale: 0.6 }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, 40 + i * 8, 110 + i * 12],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2.2,
                delay: i * 0.08,
                ease: easeExpoOut,
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeExpoOut }}
            className="relative mb-6 h-16 w-16 md:h-20 md:w-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-white.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeExpoOut }}
            className="relative text-[10px] tracking-[0.42em] text-accent uppercase"
          >
            Chapter 00 · Entering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
            className="font-display relative mt-6 text-4xl tracking-tight md:text-6xl"
          >
            KYOTO REGION
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: easeExpoOut }}
            className="relative mt-4 text-xs tracking-[0.28em] text-muted uppercase"
          >
            散華 · Assembling bloom
          </motion.p>

          <div className="relative mt-14 w-48">
            <div className="h-px w-full bg-white/10" />
            <motion.div
              className="absolute top-0 left-0 h-px bg-accent"
              style={{ width: `${progress}%` }}
            />
            <p className="mt-3 text-center font-display text-sm tabular-nums text-muted">
              {String(progress).padStart(3, "0")}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
