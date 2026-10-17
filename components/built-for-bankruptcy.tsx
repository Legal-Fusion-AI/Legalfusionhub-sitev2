const groups = [
  {
    title: "What Donna asks",
    items: [
      "Whether this is a first-time call or an existing case",
      "Name, and whether the filing is individual or joint",
      "Business ownership in the last two years",
      "A consultation time that works",
    ],
  },
  {
    title: "What she escalates",
    items: [
      "Intake details the attorney needs before the consult, including Chapter 7 versus other options",
      "In-person versus Zoom preferences to your team",
      "Priority concerns a caller raises, so the attorney sees them first",
    ],
  },
  {
    title: "What she never answers",
    items: [
      "Legal advice",
      "Fees or likely outcomes",
      "Which chapter to file. That decision stays with the attorney.",
    ],
  },
];

export function BuiltForBankruptcy() {
  return (
    <div className="bankruptcy-grid">
      {groups.map((group) => (
        <article className="bankruptcy-card" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
