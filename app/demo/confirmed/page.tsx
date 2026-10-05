import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "You're booked",
  description:
    "Your Legal Fusion Hub demo is booked. A confirmation and calendar invite are on the way.",
  robots: {
    index: false,
    follow: false,
  },
};

const next = [
  "Check your inbox for the calendar invite.",
  "We’ll show how Hub answers calls, qualifies bankruptcy leads, and books the consultation.",
  "Bring one place in your firm’s journey where leads stall.",
];

export default function DemoConfirmedPage() {
  return (
    <main className="demo-page">
      <div className="shell demo-copy confirm-page">
        <span className="confirm-mark">
          <Check size={24} aria-hidden="true" />
        </span>
        <h1>You’re booked.</h1>
        <p>
          A confirmation and calendar invite are on the way. The call is 45
          minutes. We’ll look at how your firm turns calls into retained
          clients.
        </p>
        <ul>
          {next.map((item) => (
            <li key={item}>
              <Check size={17} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="confirm-actions">
          <Link className="button" href="/">
            Back to the homepage <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="text-link" href="/how-it-works">
            See how it works
          </Link>
        </div>
      </div>
    </main>
  );
}
