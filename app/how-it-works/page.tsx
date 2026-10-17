import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DemoCta } from "@/components/demo-cta";
import { JourneyBoard } from "@/components/journey-board";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Legal Fusion Hub answers the call, qualifies bankruptcy leads by your criteria, and books the consultation that turns them into retained clients.",
};

const phases = [
  {
    title: "We answer the call.",
    text: "Owen answers calls and texts day or night, handles the inquiry, and captures the lead. No call goes to voicemail.",
    points: ["Calls and texts answered 24/7", "Inquiry handled", "New lead captured"],
  },
  {
    title: "We book the consultation.",
    text: "We qualify bankruptcy leads by your criteria, follow up, and book the consultation. Before the meeting we gather a few details so the attorney can weigh Chapter 7 against other options. That is to help the attorney, not to qualify the lead.",
    points: ["Qualified by your criteria", "Follow up", "Consultation booked", "Details ready for the attorney"],
  },
  {
    title: "We nurture the misses.",
    text: "When someone misses a consultation or does not show, Donna follows up, keeps the lead warm, and books a new time.",
    points: ["No-show follow-up", "Lead kept warm", "New time booked"],
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow-hero">
          <h1>From first call to retained client.</h1>
          <p>
            We answer the call, qualify bankruptcy leads by your criteria, and
            book the consultation. Setup is light. We start with your firm name,
            a greeting, and your slogan.
          </p>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <JourneyBoard compact />
          <DemoCta lead="See the path from a bankruptcy call to a retained client." />
        </div>
      </section>
      <section className="section phase-section">
        <div className="shell phase-list">
          {phases.map((phase, index) => (
            <article key={phase.title}>
              <span className="phase-index">{index + 1}</span>
              <div>
                <h2>{phase.title}</h2>
                <p>{phase.text}</p>
              </div>
              <ul>
                {phase.points.map((point) => (
                  <li key={point}>
                    <Check size={15} aria-hidden="true" /> {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="shell">
          <DemoCta lead="We answer, qualify, and book. The demo shows it on your matters." />
        </div>
      </section>
      <section className="page-cta">
        <div className="shell page-cta-inner">
          <h2>Every call answered. More clients retained.</h2>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
