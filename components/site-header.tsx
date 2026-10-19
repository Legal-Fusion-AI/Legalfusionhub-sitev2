"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import blackLogo from "@/blacklogo.png";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Retainer Pro home">
      <Image className="brand-logo" src={blackLogo} alt="" priority />
    </Link>
  );
}

const links = [
  { href: "/#why-use-ai", label: "Why Use AI" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "Team + Vision" },
  { href: "/demo", label: "Contact" },
];

export function SiteHeader() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${isCompact ? " is-compact" : ""}`}>
      <div className="header-capsule">
        <div className="header-veil" aria-hidden="true" />
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button-accent button-small" href="/demo">
            Book a demo
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="button button-accent" href="/demo">
              Book a demo
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
