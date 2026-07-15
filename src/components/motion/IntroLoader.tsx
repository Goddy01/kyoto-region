"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easeExpoInOut, easeExpoOut, easeQuartOut } from "@/lib/motion";

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
    const duration = 2400;

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
        }, 420);
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
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-bg"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: easeExpoInOut },
          }}
        >
          <div className="sakura-glow pointer-events-none absolute inset-0 opacity-70" />
          <div className="pattern-asanoha pointer-events-none absolute inset-0 opacity-30" />
          <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />

          <div className="pointer-events-none absolute inset-8 md:inset-12" aria-hidden>
            <span className="hud-corner hud-corner-tl" />
            <span className="hud-corner hud-corner-tr" />
            <span className="hud-corner hud-corner-bl" />
            <span className="hud-corner hud-corner-br" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: easeExpoOut }}
            className="relative mb-8 h-16 w-16 md:h-20 md:w-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-white.png"
              alt=""
              className="h-full w-full object-contain drop-shadow-[0_0_28px_rgba(255,79,139,0.35)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeExpoOut }}
            className="relative text-[10px] tracking-[0.42em] text-accent uppercase"
          >
            Chapter 00 · Sync
          </motion.p>

          <div className="relative mt-5 overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.95, delay: 0.12, ease: easeExpoOut }}
              className="font-hero relative text-5xl tracking-[0.12em] text-foreground uppercase md:text-7xl"
            >
              KYOTO
            </motion.p>
          </div>
          <div className="relative overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.95, delay: 0.22, ease: easeExpoOut }}
              className="font-hero relative text-5xl tracking-[0.12em] text-foreground uppercase md:text-7xl"
            >
              REGION
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: easeExpoOut }}
            className="relative mt-5 text-xs tracking-[0.28em] text-muted uppercase"
          >
            散華 · Assembling bloom
          </motion.p>

          <div className="relative mt-14 w-56">
            <div className="flex items-end justify-between text-[10px] tracking-[0.2em] text-muted uppercase">
              <span>Load</span>
              <span className="font-display text-sm tabular-nums text-foreground">
                {String(progress).padStart(3, "0")}
              </span>
            </div>
            <div className="mt-3 h-[2px] w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-deep via-accent to-white/80"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: easeQuartOut }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
