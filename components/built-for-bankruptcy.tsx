import { ArrowUpRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

const groups = [
  {
    title: "What Donna asks",
    tone: "teal",
    icon: Check,
    lead: "The questions your intake team would ask, in your words.",
    items: [
      "Whether this is a first-time call or an existing case",
      "Name, and whether the filing is individual or joint",
      "Business ownership in the last two years",
      "A consultation time that works",
    ],
  },
  {
    title: "What she hands to your team",
    tone: "ink",
    icon: ArrowUpRight,
    lead: "So the attorney walks into the consultation already prepared.",
    items: [
      "Intake details the attorney needs before the consult, including Chapter 7 versus other options",
      "In-person versus Zoom preferences",
      "Priority concerns a caller raises, so the attorney sees them first",
    ],
  },
  {
    title: "What she never answers",
    tone: "coral",
    icon: X,
    lead: "Those decisions stay with the attorney. Always.",
    items: [
      "Legal advice",
      "Fees or likely outcomes",
      "Which chapter to file",
    ],
  },
] as const;

export function BuiltForBankruptcy() {
  return (
    <div className="bankruptcy-grid">
      {groups.map((group, index) => {
        const Icon = group.icon;
        return (
          <Reveal key={group.title} delay={0.08 * index}>
            <article className={`bankruptcy-card is-${group.tone}`}>
              <span className="bankruptcy-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={2.4} />
              </span>
              <h3>{group.title}</h3>
              <p className="bankruptcy-lead">{group.lead}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
