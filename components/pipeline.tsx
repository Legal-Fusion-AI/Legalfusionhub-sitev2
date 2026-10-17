import { Repeat2 } from "lucide-react";
import { Avatar, type AvatarName } from "@/components/mac-window";

type Stage = {
  id: string;
  title: string;
  note: string;
  lead?: { who: AvatarName; name: string; meta: string };
  tone: "new" | "qualified" | "booked" | "retained";
};

const stages: Stage[] = [
  {
    id: "new",
    title: "New",
    note: "Owen answers the call or text and captures the lead.",
    lead: { who: "jordan", name: "A. Jordan", meta: "Bankruptcy inquiry" },
    tone: "new",
  },
  {
    id: "qualified",
    title: "Qualified",
    note: "We qualify bankruptcy leads by your criteria.",
    lead: { who: "reed", name: "S. Reed", meta: "Criteria met" },
    tone: "qualified",
  },
  {
    id: "booked",
    title: "Consultation booked",
    note: "The consultation is on the calendar.",
    lead: { who: "keller", name: "M. Keller", meta: "Thu 10:30 a.m." },
    tone: "booked",
  },
  {
    id: "retained",
    title: "Retained",
    note: "The client signs with your firm.",
    lead: { who: "nguyen", name: "L. Nguyen", meta: "Retained client" },
    tone: "retained",
  },
];

export function Pipeline() {
  return (
    <div className="pipeline">
      <ol className="pipeline-row">
        {stages.map((stage) => (
          <li className={`pipeline-stage is-${stage.tone}`} key={stage.id}>
            <h3>{stage.title}</h3>
            {stage.lead ? (
              <div className="pipeline-card">
                <Avatar who={stage.lead.who} />
                <span>
                  <strong>{stage.lead.name}</strong>
                  <em>{stage.lead.meta}</em>
                </span>
              </div>
            ) : null}
            <p className="pipeline-note">{stage.note}</p>
          </li>
        ))}
      </ol>
      <div className="pipeline-nurture">
        <span className="pipeline-nurture-icon">
          <Repeat2 size={18} strokeWidth={2} aria-hidden="true" />
        </span>
        <div>
          <h3>Nurture</h3>
          <p>
            Missed a consultation or did not show? Donna follows up, keeps the
            lead warm, and books a new time. Nobody falls through.
          </p>
        </div>
        <div className="pipeline-card">
          <Avatar who="alvarez" />
          <span>
            <strong>P. Alvarez</strong>
            <em>No-show, re-booked</em>
          </span>
        </div>
      </div>
    </div>
  );
}
