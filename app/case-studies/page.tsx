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
    <main className="case-studies-page">
      <JsonLd data={videoObjectJsonLd(transcript)} />
      <section className="case-studies-hero">
        <div className="shell">
          <h1>
            <span className="case-studies-accent">Real Conversations.</span>{" "}
            <span className="case-studies-ink">Real Results.</span>
          </h1>
          <p>
            See how our AI front desk handles real bankruptcy intake calls:
            politely, accurately, and without missed steps.
          </p>
          <p className="case-studies-note">
            Sage and Samantha are Morrison Law Group&apos;s AI assistants, shown
            with permission.
          </p>
        </div>
      </section>
      <CaseStudiesBoard
        studies={studies}
        turnsBySource={{ "unanswered-combined": transcript }}
      />
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
