import Image from "next/image";
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
            <h3>Before Retainer Pro</h3>
            <figure className="real-problem-visual">
              <Image
                src="/media/before-aug2025.png"
                alt="August 2025 dashboard. 523 total calls and 1,813 actions triggered."
                width={1632}
                height={433}
                sizes="(max-width: 980px) calc(100vw - 48px), 540px"
                className="real-problem-dash"
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption>
                August 2025: 523 calls, 1,813 actions triggered
              </figcaption>
            </figure>
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
            <h3>After Retainer Pro</h3>
            <figure className="real-problem-visual">
              <Image
                src="/media/after-sep2025.png"
                alt="September 2025 dashboard. 1,843 total calls and 7,673 actions triggered."
                width={1653}
                height={444}
                sizes="(max-width: 980px) calc(100vw - 48px), 540px"
                className="real-problem-dash"
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption>
                September 2025: 1,843 calls, 7,673 actions triggered
              </figcaption>
            </figure>
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
