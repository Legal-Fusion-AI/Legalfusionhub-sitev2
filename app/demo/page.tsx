import Script from "next/script";
import { Check } from "lucide-react";
import { pageMetadata, routeMeta } from "@/lib/seo";

export const metadata = pageMetadata(routeMeta.demo);

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
              See how we answer calls and capture leads
            </li>
            <li>
              <Check size={17} aria-hidden="true" />
              See how we qualify leads by your criteria and book consultations
            </li>
            <li>
              <Check size={17} aria-hidden="true" />
              Meet Donna on intake and Nikki on follow-up
            </li>
          </ul>
          <div className="demo-duration">
            <strong>45 minutes</strong>
            <span>No pressure. A look at your firm’s journey.</span>
          </div>
        </div>
        <div className="form-panel">
          <div className="form-panel-head">
            <h2>Book your demo</h2>
            <p>Pick a time that works for you.</p>
          </div>
          <iframe
            src="https://link.legalfusionhub.com/widget/booking/VIkP0t3qGITBDSeHxeGs"
            allow="payment"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="VIkP0t3qGITBDSeHxeGs_1791207135940"
            title="Book a demo with Legal Fusion Hub"
          />
          <Script
            src="https://link.legalfusionhub.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </main>
  );
}
