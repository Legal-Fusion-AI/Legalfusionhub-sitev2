"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyDemoBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("hero-primary-cta");
    if (!cta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={visible ? "sticky-demo-bar is-visible" : "sticky-demo-bar"}
      hidden={!visible}
    >
      <Link className="button button-accent" href="/demo">
        Book a demo
      </Link>
    </div>
  );
}
