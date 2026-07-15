export const easeExpoOut = [0.16, 1, 0.3, 1] as const;
export const easeQuartOut = [0.25, 1, 0.5, 1] as const;
export const easeExpoInOut = [0.87, 0, 0.13, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easeExpoOut },
  },
};

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: easeExpoOut },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: easeExpoOut },
  },
};

export const clipUp = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.95, ease: easeExpoOut },
  },
};
