import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Legal Fusion Portal",
  description:
    "After a client is retained, Legal Fusion Portal is where the firm and the client continue: questionnaires, documents, case data, and bankruptcy forms.",
};

const phases = [
  {
    title: "Clients complete the questionnaire.",
    text: "Portal gives the retained client a clear place to answer the questions the case needs.",
    points: ["Guided questions", "The firm’s matter", "A record the team can use"],
  },
  {
    title: "Documents stay with the case.",
    text: "The client and the firm collect the documents in the same place, instead of chasing them across inboxes.",
    points: ["Client uploads", "Firm review", "One case file"],
  },
  {
    title: "The firm prepares the forms.",
    text: "Case data and bankruptcy forms live with the questionnaire and the documents, so the work after retention stays in one application.",
    points: ["Case data", "Bankruptcy forms", "Firm and client access"],
  },
];

export default function PortalPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow-hero">
          <p className="hero-kicker">Serve, manage, and grow</p>
          <h1>Legal Fusion Portal</h1>
          <p>
            After a client is retained, Portal is where the firm and the client
            continue: questionnaires, documents, case data, and bankruptcy
            forms.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/demo">
              Book a demo <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a className="text-link" href={siteConfig.portalUrl}>
              Open the portal <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
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
          <h2>See Portal as part of the full client journey.</h2>
          <Link className="button" href="/demo">
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
