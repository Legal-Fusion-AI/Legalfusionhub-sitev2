"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Toggles `is-visible` on the showcase grid while any part of it is on
 * screen. CSS pauses the looping screen animations when the class is absent.
 */
export function ShowcaseVisibility({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // Entries can batch; the last one reflects the current state.
        const latest = entries[entries.length - 1];
        node.classList.toggle("is-visible", latest.isIntersecting);
      },
      { rootMargin: "80px 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="showcase-grid" ref={ref}>
      {children}
    </div>
  );
}
