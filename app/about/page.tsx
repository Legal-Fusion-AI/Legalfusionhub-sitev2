import { DemoCta } from "@/components/demo-cta";
import { morrisonProof } from "@/lib/proof";
import { pageMetadata, routeMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata(routeMeta.about);

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
        <div className="shell">
          <p className="source-note">{morrisonProof.sentence}</p>
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
      <section className="section about-entity">
        <div className="shell about-entity-card">
          <h2>{siteConfig.ownerLine}</h2>
          <p>
            {siteConfig.legalName} is a {siteConfig.jurisdiction} limited
            liability company, founded by {siteConfig.founders[0].name} and{" "}
            {siteConfig.founders[1].name}.
          </p>
        </div>
      </section>
    </main>
  );
}
