"use client";

import Link from "next/link";

export function HeroActions() {
  function hearCall(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("hear-a-real-call");
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new Event("play-call-video"));
    if (window.location.hash !== "#hear-a-real-call") {
      history.replaceState(null, "", "#hear-a-real-call");
    }
  }

  return (
    <div className="hero-actions">
      <Link
        id="hero-primary-cta"
        className="button button-accent"
        href="/demo"
      >
        Book a demo
      </Link>
      <a className="button button-outline" href="#hear-a-real-call" onClick={hearCall}>
        Hear a real call
      </a>
    </div>
  );
}
