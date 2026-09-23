import type { Metadata } from "next";
import { Check } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Book a working session about client acquisition for your bankruptcy law firm.",
};

export default function DemoPage() {
  return (
    <main className="demo-page">
      <div className="shell demo-grid">
        <div className="demo-copy">
          <h1>Let’s find the gaps between your next call and your next client.</h1>
          <p>
            This is a working conversation about your current lead flow,
            response time, intake, calendar, and follow-up.
          </p>
          <ul>
            <li>
              <Check size={17} aria-hidden="true" />
              Walk through where inquiries arrive today
            </li>
            <li>
              <Check size={17} aria-hidden="true" />
              Identify the handoffs that lose momentum
            </li>
            <li>
              <Check size={17} aria-hidden="true" />
              See what a managed Hub implementation could look like
            </li>
          </ul>
          <div className="demo-duration">
            <strong>30 minutes</strong>
            <span>No pressure. No generic pitch deck.</span>
          </div>
        </div>
        <div className="form-panel">
          <div className="form-panel-head">
            <h2>Book your demo</h2>
            <p>Tell us who you are and where the process needs attention.</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </main>
  );
}
