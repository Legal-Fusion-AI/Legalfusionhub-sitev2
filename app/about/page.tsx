import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Legal Fusion Hub was built from more than 24 years inside bankruptcy practice.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="subpage-hero about-hero">
        <div className="shell about-hero-grid">
          <div>
            <h1>Built by people who know what happens after the lead arrives.</h1>
          </div>
          <div>
            <p>
              Legal Fusion began inside a high-volume bankruptcy practice—not
              inside a generic marketing playbook. That operating experience
              shapes how we think about response, qualification, intake,
              signing, and the work your team must carry next.
            </p>
          </div>
        </div>
      </section>
      <section className="about-proof">
        <div className="shell about-proof-grid">
          <div>
            <strong>8,000+</strong>
            <span>bankruptcy cases filed</span>
          </div>
          <div>
            <strong>24+ years</strong>
            <span>of legal practice</span>
          </div>
          <div>
            <strong>One principle</strong>
            <span>automation handles repetition; people handle judgment</span>
          </div>
        </div>
      </section>
      <section className="section about-story">
        <div className="shell about-story-grid">
          <h2>The system should respect both sides of the conversation.</h2>
          <div>
            <p>
              A prospective client deserves a prompt, clear next step. A firm
              team deserves complete context and fewer repetitive tasks. Hub is
              designed to serve both without pretending that every conversation
              should be automated.
            </p>
            <p>
              We use automation where consistency matters, define human
              handoffs where judgment matters, and manage the connections in
              between.
            </p>
            <Link className="inline-link" href="/demo">
              Talk through your firm’s process{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
