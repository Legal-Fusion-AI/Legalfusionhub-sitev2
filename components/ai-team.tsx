import { PhoneIncoming, Repeat2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { demoCallTurns } from "@/lib/demo-call";

/**
 * Donna and Nikki as two people you'd introduce, not two features. Donna is
 * phone only; Nikki owns texts, web inquiries, and follow-up. Both speak
 * English and Spanish. Donna's line is the real first line of the demo
 * recording. Nikki has no recording yet, so she gets a plain description and
 * no quote.
 */
const team = [
  {
    id: "donna",
    name: "Donna",
    role: "Answers the phone",
    tone: "teal",
    icon: PhoneIncoming,
    blurb:
      "Donna picks up every call, day or night, in English or Spanish. She finds out what the person needs, asks your firm's intake questions, and books the consultation while they're still on the line.",
    says: demoCallTurns[0]?.text,
  },
  {
    id: "nikki",
    name: "Nikki",
    role: "Texts, web inquiries, and follow-up",
    tone: "coral",
    icon: Repeat2,
    blurb:
      "Nikki responds instantly to texts and web inquiries, in English or Spanish. She confirms the appointment, sends the reminder, and reaches back out when someone misses, so a booked consultation doesn't quietly go cold.",
  },
] as const;

export function AiTeam() {
  return (
    <div className="ai-team">
      {team.map((person, index) => {
        const Icon = person.icon;
        return (
          <Reveal key={person.id} delay={0.08 * index}>
            <article className={`ai-person is-${person.tone}`}>
              <div className="ai-person-head">
                <span className="ai-person-mark" aria-hidden="true">
                  {person.name[0]}
                </span>
                <div>
                  <h3>{person.name}</h3>
                  <p className="ai-person-role">
                    <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                    {person.role}
                  </p>
                </div>
              </div>
              <p className="ai-person-blurb">{person.blurb}</p>
              {"says" in person && person.says ? (
                <blockquote className="ai-person-says">
                  <span>From the recording</span>
                  <p>&ldquo;{person.says}&rdquo;</p>
                </blockquote>
              ) : null}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
