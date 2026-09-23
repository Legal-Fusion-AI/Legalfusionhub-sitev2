import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JourneyBoard } from "@/components/journey-board";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Legal Fusion Hub designs, builds, and manages client acquisition for bankruptcy law firms.",
};

const phases = [
  {
    title: "We map the real journey.",
    text: "We start with calls, forms, referral sources, qualification rules, calendars, intake, and every handoff between them.",
    points: ["Lead-source inventory", "Response-time review", "Firm-specific qualification", "Escalation requirements"],
  },
  {
    title: "We build around your firm.",
    text: "The system is configured to your practice, voice, tools, schedule, and criteria—not dropped in as a generic template.",
    points: ["Conversation design", "Calendar and CRM connections", "Automated follow-up", "Human handoff rules"],
  },
  {
    title: "We run and improve it.",
    text: "Launch is the beginning. We monitor the journey, review what happens, and adjust as your firm and lead flow change.",
    points: ["Launch monitoring", "Workflow maintenance", "Journey optimization", "Operational reporting"],
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow-hero">
          <h1>A client acquisition system shaped around how your firm actually works.</h1>
          <p>
            Hub connects the moments before a client hires you—and remains
            managed after it goes live.
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
          <h2>Bring us your current process. Leave with a clearer system.</h2>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
