import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JourneyBoard } from "@/components/journey-board";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Legal Fusion Hub answers the call, books the consultation, and hands a retained client to Legal Fusion Portal.",
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
  {
    title: "Portal carries the matter forward.",
    text: "After a client is retained, Legal Fusion Portal is where the firm and the client continue: questionnaires, documents, case data, and bankruptcy forms.",
    points: ["Questionnaires", "Documents", "Case data", "Bankruptcy forms"],
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow-hero">
          <h1>One company. A complete client journey.</h1>
          <p>
            Legal Fusion Hub answers the call and books the consultation.
            Legal Fusion Portal is where the firm and the client continue
            after someone is retained.
          </p>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <JourneyBoard compact />
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
      </section>
      <section className="page-cta">
        <div className="shell page-cta-inner">
          <h2>More than software. A stronger tomorrow for law firms.</h2>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
