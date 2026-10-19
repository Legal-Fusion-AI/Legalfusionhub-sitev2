import { CallTranscript } from "@/components/call-transcript";
import { CallVideo } from "@/components/call-video";
import type { CallTurn } from "@/lib/call-transcript";
import type { PublishedCaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({
  study,
  turns,
}: {
  study: PublishedCaseStudy;
  turns: CallTurn[];
}) {
  return (
    <article className="case-study-card">
      <CallVideo
        src={study.media.src}
        captions={study.media.captions}
        poster={study.media.poster}
        ariaLabel={`${study.title}, with captions`}
        listenForHeroPlay={false}
      />
      <div className="case-study-card-body">
        <h2>{study.title}</h2>
        <p>{study.summary}</p>
        <ul className="case-study-roles" aria-label="Speakers">
          {study.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <CallTranscript turns={turns} />
      </div>
    </article>
  );
}
