const columns = [
  {
    title: "What Donna asks",
    items: [
      "First-time call or existing case",
      "Name, and individual vs joint filing",
      "Business ownership in the last two years",
      "A consultation time that works",
    ],
  },
  {
    title: "What she escalates",
    items: [
      "Intake details the attorney needs before the consult (including Chapter 7 vs other options)",
      "In-person vs Zoom preferences",
      "Priority concerns the caller raises",
    ],
  },
  {
    title: "What she never answers",
    items: [
      "Legal advice",
      "Fees or likely outcomes",
      "Which chapter to file — that decision stays with the attorney",
    ],
  },
] as const;

export function NeverAnswers() {
  return (
    <section className="section never-answers-section" id="never-answers">
      <div className="shell">
        <div className="section-heading section-heading-wide">
          <h2>Built for bankruptcy firms.</h2>
          <p>
            Donna collects what your attorney needs and leaves legal judgment
            to your team.
          </p>
        </div>
        <div className="never-answers">
          {columns.map((column) => (
            <article className="never-answers-col" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="never-answers-line">
          AI handles intake and follow-up; your attorneys handle the law.
        </p>
      </div>
    </section>
  );
}
