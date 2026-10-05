import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DemoCta } from "@/components/demo-cta";
import { JourneyBoard } from "@/components/journey-board";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Legal Fusion Hub answers the call, qualifies the lead, and books the consultation that turns it into a retained client.",
};

const phases = [
  {
    title: "Hub answers the call.",
    text: "Calls and inquiries get an immediate, professional response 24/7. Hub answers, handles the inquiry, and captures the lead.",
    points: ["24/7 call answering", "Inquiry handling", "New lead capture"],
  },
  {
    title: "Hub turns the lead into a client.",
    text: "Hub qualifies by your firm’s criteria, follows up, schedules consultations, and helps convert bankruptcy leads into retained clients.",
    points: ["Qualification", "Follow up", "Scheduled consultations", "Retained bankruptcy clients"],
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow-hero">
          <h1>From first call to retained client.</h1>
          <p>
            Legal Fusion Hub answers the call, qualifies the lead, and books
            the consultation that turns a bankruptcy inquiry into a retained
            client.
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
          <DemoCta lead="Hub answers, qualifies, and books. The demo shows it on your matters." />
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
