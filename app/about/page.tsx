import type { Metadata } from "next";
import { DemoCta } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Legal Fusion Hub was built inside bankruptcy practice to turn the first call into a retained client, so your firm stays human where it counts.",
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
              We began inside a high-volume bankruptcy practice. We saw what a
              missed call costs. We automate the moments that matter so your
              firm stays human where it counts.
            </p>
          </div>
        </div>
      </section>
      <section className="about-proof">
        <div className="shell about-proof-grid">
          <div>
            <strong>4,681</strong>
            <span>calls answered, none sent to voicemail</span>
          </div>
          <div>
            <strong>2.4 sec</strong>
            <span>average pickup, versus 25 to 35 seconds for a person</span>
          </div>
          <div>
            <strong>390 hours</strong>
            <span>of staff time reclaimed</span>
          </div>
        </div>
        <div className="shell">
          <p className="source-note">
            Morrison Law Group. 90-day pilot, June 12 to September 9, 2026.
          </p>
          <DemoCta lead="Bankruptcy intake, from the first call to a retained client." />
        </div>
      </section>
      <section className="section about-story">
        <div className="shell about-story-grid">
          <h2>Built by people who know what a missed call costs.</h2>
          <div>
            <p>
              We answer the call, qualify bankruptcy leads by your criteria, and
              book the consultation that turns them into retained clients. Donna
              handles intake. Nikki handles follow-up and the misses.
            </p>
            <p>Every call answered. More clients retained.</p>
            <DemoCta lead="See how a missed call becomes a booked consultation." />
          </div>
        </div>
      </section>
    </main>
  );
}
