"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before the reveal starts, for staggering siblings. */
  delay?: number;
  /** Pixels the content rises from. */
  distance?: number;
  className?: string;
};

/**
 * Fades and lifts content into place the first time it scrolls into view.
 * Same job as React Bits' AnimatedContent, built on the Motion library the
 * site already ships instead of adding GSAP. Static when the visitor prefers
 * reduced motion.
 */
export function Reveal({ children, delay = 0, distance = 28, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
