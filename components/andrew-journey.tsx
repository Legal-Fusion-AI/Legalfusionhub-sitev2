import { Quote } from "lucide-react";
import {
  journeyBeats,
  journeyClosingQuote,
  type JourneyStage,
  type JourneyWho,
} from "@/components/andrew-journey-data";

const stageTone: Record<JourneyStage, string> = {
  New: "new",
  Qualified: "qualified",
  "Consultation booked": "booked",
  Retained: "retained",
};

const employeeLabel = {
  donna: "Donna · Phone",
  nikki: "Nikki · Texts and follow-up",
} as const;

function whoLabel(who: JourneyWho): string {
  if (who === "andrew") return "Andrew";
  if (who === "donna") return "Donna";
  return "Nikki";
}

export function AndrewJourney() {
  return (
    <div className="lead-journey">
      <ol className="lj-beats">
        {journeyBeats.map((beat) => (
          <li className="lj-beat" key={beat.id}>
            <div className="lj-head">
              <span className={`lj-stage is-${stageTone[beat.stage]}`}>
                {beat.stage}
              </span>
              <span className="lj-time">{beat.time}</span>
              {beat.by ? (
                <span className="lj-by">{employeeLabel[beat.by]}</span>
              ) : (
                <span className="lj-by is-firm">With the attorney</span>
              )}
            </div>
            {beat.note ? <p className="lj-note">{beat.note}</p> : null}
            {beat.lines ? (
              <div className="lj-lines">
                {beat.lines.map((line, index) => (
                  <p
                    className={`lj-line is-${line.who === "andrew" ? "in" : "out"}`}
                    key={index}
                  >
                    <span className="lj-who">{whoLabel(line.who)}</span>
                    <span className="lj-text">{line.text}</span>
                  </p>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <figure className="lj-quote">
        <Quote size={22} strokeWidth={2} aria-hidden="true" />
        <blockquote>{journeyClosingQuote}</blockquote>
        <figcaption>Andrew, after his consultation</figcaption>
      </figure>
    </div>
  );
}
