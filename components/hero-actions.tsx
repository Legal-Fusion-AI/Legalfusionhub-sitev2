"use client";

import Link from "next/link";
import { TextNikkiButton } from "@/components/text-nikki-button";
import { TryDonnaButton } from "@/components/try-donna-button";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

export function HeroActions() {
  const demoLine = siteConfig.DEMO_LINE;

  return (
    <div className="hero-actions-wrap">
      <div className="hero-actions">
        <Link
          id="hero-primary-cta"
          className="button button-accent"
          href={siteConfig.bookPath}
        >
          Book a demo
        </Link>
        <TryDonnaButton />
        <TextNikkiButton />
      </div>
      <p className="hero-demo-line">
        Or call or text{" "}
        <a href={phoneTelHref(demoLine)}>{demoLine.replace(/^\+1 /, "")}</a> from your
        phone.
      </p>
    </div>
  );
}
