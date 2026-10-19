import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudiesBoard } from "@/components/case-studies-board";
import { JsonLd } from "@/components/json-ld";
import { getCallTranscript } from "@/lib/call-transcript";
import { publishedCaseStudies } from "@/lib/case-studies";
import { pageMetadata, routeMeta, videoObjectJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(routeMeta.caseStudies);

export default function CaseStudiesPage() {
  const transcript = getCallTranscript();
  const studies = publishedCaseStudies();

  return (
    <main>
      <JsonLd data={videoObjectJsonLd(transcript)} />
      <section className="subpage-hero">
        <div className="shell narrow-hero">
          <h1>Real conversations. Real results.</h1>
          <p>
            Recorded bankruptcy intake calls. Speakers are labeled by role.
            Names are not shown.
          </p>
        </div>
      </section>
      <section className="section case-studies-section">
        <div className="shell">
          <CaseStudiesBoard
            studies={studies}
            turnsBySource={{ "unanswered-combined": transcript }}
          />
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
