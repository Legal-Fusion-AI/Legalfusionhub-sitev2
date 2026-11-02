import { AndrewJourney } from "@/components/andrew-journey";
import { CaseStudiesBoard } from "@/components/case-studies-board";
import { ClosingBand } from "@/components/closing-band";
import { RealProblem } from "@/components/real-problem";
import { Reveal } from "@/components/reveal";
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
            Listen to real AI calls from Morrison Law Group, shared with
            permission.
          </p>
        </div>
      </section>
      <CaseStudiesBoard studies={studies} />
      <RealProblem />
      <section className="section examples-section" id="see-it-in-action">
        <div className="shell">
          <Reveal className="lower-head">
            <h2>See Nikki in action.</h2>
            <p>
              One real lead, start to finish. A Morrison Law Group client we
              will call Andrew found the firm at 4 a.m. and retained it the
              next day. Names and details are anonymized.
            </p>
          </Reveal>
          <AndrewJourney />
        </div>
      </section>
      <ClosingBand lead="See how a text at 4 a.m. becomes a retained client. Or skip the demo and call Donna yourself." />
    </main>
  );
}
