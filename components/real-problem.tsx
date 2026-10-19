import { ArrowDown, ArrowRight, Check, X } from "lucide-react";

const beforeItems = [
  "Missed calls and lost opportunities",
  "Inconsistent follow-up",
  "Leads falling through the cracks",
  "Staff overwhelmed with routine tasks",
];

const afterItems = [
  "Every call answered 24/7",
  "Automated, consistent follow-up",
  "No lead left without a next step",
  "Team focused on high-value work",
];

export function RealProblem() {
  return (
    <section className="real-problem" aria-labelledby="real-problem-title">
      <div className="shell">
        <h2 id="real-problem-title">The Real Problem Isn&apos;t Leads</h2>
        <p className="real-problem-quote">
          &ldquo;Call them, text them, but if you only email, don&apos;t blame them
          when you don&apos;t hear back.&rdquo;
        </p>
        <p className="real-problem-line">
          Firms don&apos;t have a lead problem.{" "}
          <span>They have a follow-up problem.</span>
        </p>
        <div className="real-problem-compare">
          <article className="real-problem-card is-before">
            <h3>Before Legal Fusion Hub</h3>
            <div className="real-problem-visual" aria-hidden="true">
              <svg viewBox="0 0 280 56" role="presentation">
                <polyline
                  points="8,18 48,26 88,16 128,34 168,38 208,30 248,46 272,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ul>
              {beforeItems.map((item) => (
                <li key={item}>
                  <span className="real-problem-mark">
                    <X size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <div className="real-problem-arrow" aria-hidden="true">
            <ArrowRight className="real-problem-arrow-desk" size={28} strokeWidth={2.4} />
            <ArrowDown className="real-problem-arrow-mobile" size={28} strokeWidth={2.4} />
          </div>
          <article className="real-problem-card is-after">
            <h3>After Legal Fusion Hub</h3>
            <div className="real-problem-visual" aria-hidden="true">
              <svg viewBox="0 0 280 56" role="presentation">
                <polyline
                  points="8,34 48,30 88,28 128,24 168,22 208,20 248,18 272,16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ul>
              {afterItems.map((item) => (
                <li key={item}>
                  <span className="real-problem-mark">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
