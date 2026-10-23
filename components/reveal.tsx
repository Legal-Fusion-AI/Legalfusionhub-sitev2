"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before the reveal starts, for staggering siblings. */
  delay?: number;
  /** Pixels the content rises from. */
  distance?: number;
  className?: string;
};

/** Nothing stays hidden longer than this, whatever the observer does. */
const SAFETY_MS = 2500;

/**
 * Fades and lifts content into place the first time it scrolls into view.
 * Same job as React Bits' AnimatedContent, built on the Motion library the
 * site already ships instead of adding GSAP.
 *
 * Content that is already on screen when the page loads (including a deep
 * link straight to a lower section) shows at once, and a safety timer makes
 * sure nothing is ever left invisible. Static when the visitor prefers
 * reduced motion.
 */
export function Reveal({ children, delay = 0, distance = 28, className }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView || onScreen) {
      void controls.start("visible");
      return;
    }

    const timer = window.setTimeout(() => void controls.start("visible"), SAFETY_MS);
    return () => window.clearTimeout(timer);
  }, [inView, controls, reduce]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
