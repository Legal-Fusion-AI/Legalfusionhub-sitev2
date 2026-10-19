import { CallTranscript } from "@/components/call-transcript";
import { CallVideo } from "@/components/call-video";
import type { CallTurn } from "@/lib/call-transcript";
import type { PublishedCaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({
  study,
  turns,
}: {
  study: PublishedCaseStudy;
  turns?: CallTurn[];
}) {
  const hasCaptions = Boolean(study.media.captions);

  return (
    <article className="case-study-card">
      <CallVideo
        src={study.media.src}
        captions={study.media.captions}
        poster={study.media.poster}
        square={study.media.square}
        ariaLabel={
          hasCaptions ? `${study.title}, with captions` : study.title
        }
        playLabel={`Play ${study.title}`}
        listenForHeroPlay={false}
      />
      <div className="case-study-card-body">
        <h2>{study.title}</h2>
        <p>{study.summary}</p>
        <ul className="case-study-tags" aria-label="Call tags">
          {study.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul className="case-study-roles" aria-label="Speakers">
          {study.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        {turns && turns.length > 0 ? <CallTranscript turns={turns} /> : null}
      </div>
    </article>
  );
}
