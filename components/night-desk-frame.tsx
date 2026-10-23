"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function NightDeskFrame({ children }: { children: React.ReactNode }) {
  const [showMark, setShowMark] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const root = document.querySelector(".night-desk");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chapters = root.querySelectorAll(".nd-chapter");

    if (reduced) {
      chapters.forEach((chapter) => chapter.classList.add("is-lit"));
      return;
    }

    const lights = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-lit", entry.isIntersecting);
        }
      },
      { threshold: 0.28, rootMargin: "0px 0px -12% 0px" },
    );
    chapters.forEach((chapter) => lights.observe(chapter));
    return () => lights.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const turn = document.getElementById("the-turn");
      const call = document.getElementById("watch-call");
      if (turn) setShowMark(turn.getBoundingClientRect().top < 88);
      if (call) setShowSticky(call.getBoundingClientRect().top < 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="night-desk">
      <header className={`nd-top${showMark ? " is-on" : ""}`}>
        <Link className="nd-wordmark" href="/">
          Retainer Pro
        </Link>
      </header>
      {showSticky ? (
        <Link className="nd-sticky" href={siteConfig.demoPath} scroll>
          Book a demo
          <span>Bring one recent inquiry.</span>
        </Link>
      ) : null}
      {children}
    </div>
  );
}
