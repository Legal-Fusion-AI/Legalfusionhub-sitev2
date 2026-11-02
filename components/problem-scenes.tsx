import { CalendarX, PhoneOff, Snowflake } from "lucide-react";

const cards = [
  {
    title: "Calls go unanswered.",
    problem: "A call or text gets no response, including after hours.",
    fix: "Donna answers day or night, handles the inquiry, and captures the lead.",
    icon: PhoneOff,
  },
  {
    title: "A lead never becomes a consultation.",
    problem: "The inquiry is captured and then stalls.",
    fix: "We qualify bankruptcy leads by your criteria, follow up, and book the consultation.",
    icon: CalendarX,
  },
  {
    title: "Leads go cold.",
    problem: "Missed a consultation or did not show.",
    fix: "Nikki follows up, keeps the lead warm, and books a new time.",
    icon: Snowflake,
  },
] as const;

export function ProblemScenes() {
  return (
    <div className="problem-cards">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <article className="problem-card" key={card.title}>
            <span className="problem-card-icon" aria-hidden="true">
              <Icon size={18} strokeWidth={2} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.problem}</p>
            <p className="problem-card-fix">{card.fix}</p>
          </article>
        );
      })}
    </div>
  );
}
