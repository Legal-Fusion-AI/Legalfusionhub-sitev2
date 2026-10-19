import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AndrewJourney } from "@/components/andrew-journey";
import { CaseStudiesBoard } from "@/components/case-studies-board";
import { DemoCta } from "@/components/demo-cta";
import { RealProblem } from "@/components/real-problem";
import { publishedCaseStudies } from "@/lib/case-studies";
import { pageMetadata, routeMeta } from "@/lib/seo";

export const metadata = pageMetadata(routeMeta.caseStudies);

export default function CaseStudiesPage() {
  const studies = publishedCaseStudies();

  return (
    <main className="case-studies-page">
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
      <CaseStudiesBoard studies={studies} />
      <RealProblem />
      <section className="section examples-section" id="see-it-in-action">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>See it in action.</h2>
            <p>
              One real lead, start to finish. A Morrison Law Group client we
              will call Andrew found us at 4 a.m. and retained the firm the next
              day. Names and details are anonymized.
            </p>
          </div>
          <AndrewJourney />
          <DemoCta lead="Bring one recent call or text to the demo. We will show it answered." />
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
