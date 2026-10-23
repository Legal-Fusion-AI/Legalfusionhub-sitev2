import { Languages, PhoneIncoming, RefreshCw } from "lucide-react";

const people = [
  {
    name: "Donna",
    role: "Intake",
    body: "Answers calls, texts, and forms; captures the lead; books the consultation.",
    icon: PhoneIncoming,
  },
  {
    name: "Nikki",
    role: "Follow-up",
    body: "Confirms appointments and follows up so missed consults and no-shows do not go cold.",
    icon: RefreshCw,
  },
  {
    name: "Sofia",
    role: "Spanish intake",
    body: "Answers in Spanish, handles the inquiry, and books the consultation the same way.",
    icon: Languages,
  },
] as const;

export function MeetAis() {
  return (
    <div className="meet-ais">
      {people.map((person) => {
        const Icon = person.icon;
        return (
          <article className="meet-ai" key={person.name}>
            <span className="meet-ai-icon" aria-hidden="true">
              <Icon size={18} />
            </span>
            <p className="meet-ai-role">{person.role}</p>
            <h3>{person.name}</h3>
            <p>{person.body}</p>
          </article>
        );
      })}
    </div>
  );
}
