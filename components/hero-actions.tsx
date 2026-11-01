"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { TryDonnaButton } from "@/components/try-donna-button";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

export function HeroActions() {
  const demoLine = siteConfig.DEMO_LINE;
  // "?&body=" is the form both iOS and Android Messages accept.
  const smsHref = `sms:${demoLine.replace(/[^\d+]/g, "")}?&body=${encodeURIComponent(
    "Hi Nikki, I'd like to see how you work.",
  )}`;

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
        <a className="button button-outline" href={smsHref}>
          <MessageSquare size={17} aria-hidden="true" />
          Text Nikki now
        </a>
      </div>
      <p className="hero-demo-line">
        Or call or text{" "}
        <a href={phoneTelHref(demoLine)}>{demoLine.replace(/^\+1 /, "")}</a> from your
        phone.
      </p>
    </div>
  );
}
