import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Legal Fusion Hub was built from more than 24 years inside bankruptcy practice to cover a complete client journey.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="subpage-hero about-hero">
        <div className="shell about-hero-grid">
          <div>
            <h1>Technology for a stronger practice, built inside one.</h1>
          </div>
          <div>
            <p>
              Legal Fusion began inside a high-volume bankruptcy practice.
              That experience is why the company covers the whole client
              journey — from the first call to a retained client and the work
              that follows.
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
            <strong>One company</strong>
            <span>a complete client journey</span>
          </div>
        </div>
      </section>
      <section className="section about-story">
        <div className="shell about-story-grid">
          <h2>The same company should still be there after the client hires you.</h2>
          <div>
            <p>
              Legal Fusion Hub answers the call and turns bankruptcy leads
              into retained clients. Legal Fusion Portal is where the firm and
              the client continue: questionnaires, documents, case data, and
              bankruptcy forms.
            </p>
            <p>
              More than software. A stronger tomorrow for law firms.
            </p>
            <Link className="inline-link" href="/demo">
              Book a demo <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
