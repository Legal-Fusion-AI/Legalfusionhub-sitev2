import type { Metadata } from "next";
import { DemoCta } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Legal Fusion Hub was built from more than 24 years inside bankruptcy practice to turn the first call into a retained client.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="subpage-hero about-hero">
        <div className="shell about-hero-grid">
          <div>
            <h1>Bankruptcy intake, answered 24/7.</h1>
          </div>
          <div>
            <p>
              Legal Fusion began inside a high-volume bankruptcy practice.
              That experience is why the company covers the path from the
              first call to a retained client.
            </p>
          </div>
        </div>
      </section>
      <section className="about-proof">
        <div className="shell about-proof-grid">
          <div>
            <strong>10,000+</strong>
            <span>bankruptcy cases filed</span>
          </div>
          <div>
            <strong>24+ years</strong>
            <span>of legal practice</span>
          </div>
          <div>
            <strong>One company</strong>
            <span>focused on signing the client</span>
          </div>
        </div>
        <div className="shell">
          <DemoCta lead="Bankruptcy intake, from the first call to a retained client." />
        </div>
      </section>
      <section className="section about-story">
        <div className="shell about-story-grid">
          <h2>Built by people who know what a missed call costs.</h2>
          <div>
            <p>
              Legal Fusion Hub answers the call, qualifies bankruptcy leads by
              your firm’s criteria, and books the consultation that turns them
              into retained clients.
            </p>
            <p>Every call answered. More clients retained.</p>
            <DemoCta lead="See how a missed call becomes a booked consultation." />
          </div>
        </div>
      </section>
    </main>
  );
}
