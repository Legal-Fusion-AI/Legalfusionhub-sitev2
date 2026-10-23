import Link from "next/link";
import { CallSample } from "@/components/call-sample";
import { HeroCallCard } from "@/components/hero-call-card";
import { TryDonnaCta } from "@/components/try-donna-cta";
import { siteConfig } from "@/lib/site-config";

const proofPills = [
  "24/7 calls, texts, forms",
  "2.4 s average pickup",
  "Books into your calendar",
] as const;

const journey = [
  { label: "Call", glyph: "phone" },
  { label: "Text", glyph: "chat" },
  { label: "Form", glyph: "form" },
  { label: "Consult", glyph: "calendar" },
  { label: "Retain", glyph: "person" },
] as const;

export function HomePage() {
  return (
    <main className="rp-home">
      <section className="rp-hero">
        <div className="shell rp-hero-grid">
          <div className="rp-hero-copy">
            <p className="rp-kicker">
              For consumer bankruptcy firms
              <span aria-hidden="true"> →</span>
            </p>
            <h1>The AI receptionist for bankruptcy law firms.</h1>
            <p className="rp-lede">
              Donna answers every call, text, and web form, day or night,
              qualifies by your criteria, and books the consultation. Nikki
              follows up until the client retains.
            </p>
            <div className="rp-hero-actions">
              <Link className="button button-accent" href={siteConfig.demoPath}>
                Book a demo
              </Link>
              <TryDonnaCta />
            </div>
            <p className="rp-stats">
              <strong>Morrison Law Group</strong>, June 12 to September 9,
              2026: 4,681 calls answered, 2.4 second average pickup, 56
              consultations booked, 390 staff hours reclaimed.
            </p>
            <p className="rp-disclosure">
              Callers are told they are speaking with an AI assistant.
            </p>
            <ul className="rp-pills">
              {proofPills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>
          </div>
          <HeroCallCard />
        </div>
      </section>

      <section className="rp-journey" aria-label="Client journey">
        <div className="shell rp-journey-inner">
          <ol>
            {journey.map((step) => (
              <li key={step.label} data-glyph={step.glyph}>
                <span>{step.label}</span>
              </li>
            ))}
          </ol>
          <div className="rp-journey-meta">
            <p>Client journey</p>
            <p className="rp-live">Live</p>
          </div>
        </div>
      </section>

      <div id="call-transcript">
        <CallSample />
      </div>
    </main>
  );
}
