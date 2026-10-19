"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/case-study-card";
import type { CallTurn } from "@/lib/call-transcript";
import {
  caseStudyFilters,
  filterCaseStudies,
  type CaseStudyFilter,
  type CaseStudyTranscriptSource,
  type PublishedCaseStudy,
} from "@/lib/case-studies";

export function CaseStudiesBoard({
  studies,
  turnsBySource,
}: {
  studies: PublishedCaseStudy[];
  turnsBySource: Partial<Record<CaseStudyTranscriptSource, CallTurn[]>>;
}) {
  const [tag, setTag] = useState<CaseStudyFilter>("All Cases");
  const visible = useMemo(
    () => filterCaseStudies(studies, tag),
    [studies, tag],
  );

  return (
    <>
      <div className="case-study-filter-band">
        <div
          className="case-study-filters"
          role="group"
          aria-label="Filter recorded calls"
        >
          {caseStudyFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                tag === filter
                  ? "case-study-filter is-active"
                  : "case-study-filter"
              }
              aria-pressed={tag === filter}
              onClick={() => setTag(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <section className="case-studies-section">
        <div className="shell">
          {visible.length > 0 ? (
            <div className="case-study-grid">
              {visible.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  turns={
                    study.transcriptSource
                      ? turnsBySource[study.transcriptSource]
                      : undefined
                  }
                />
              ))}
            </div>
          ) : (
            <p className="case-study-empty">
              No recorded calls in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
