import type { Metadata } from "next";
import { Check } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "See how Legal Fusion Hub answers calls and turns bankruptcy leads into retained clients.",
};

export default function DemoPage() {
  return (
    <main className="demo-page">
      <div className="shell demo-grid">
        <div className="demo-copy">
          <h1>See how your firm turns calls into retained clients.</h1>
          <p>
            A working look at how calls are answered and how bankruptcy leads
            become retained clients.
          </p>
          <ul>
            <li>
              <Check size={17} aria-hidden="true" />
              See how Hub answers calls and captures leads
            </li>
            <li>
              <Check size={17} aria-hidden="true" />
              See how Hub qualifies leads and books consultations
            </li>
            <li>
              <Check size={17} aria-hidden="true" />
              Hear how Hub handles a real bankruptcy intake call
            </li>
          </ul>
          <div className="demo-duration">
            <strong>30 minutes</strong>
            <span>No pressure. A look at your firm’s journey.</span>
          </div>
        </div>
        <div className="form-panel">
          <div className="form-panel-head">
            <h2>Book your demo</h2>
            <p>Tell us who you are and which part of the journey needs attention.</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </main>
  );
}
