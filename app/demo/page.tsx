import { Check } from "lucide-react";
import { ContactWays } from "@/components/contact-ways";
import { pageMetadata, routeMeta } from "@/lib/seo";

export const metadata = pageMetadata(routeMeta.demo);

export default function DemoPage() {
  return (
    <main>
      <section className="demo-page">
        <div className="shell demo-copy">
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
      </section>
      <section className="section booking-section" id="contact-options">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <h2>Get in touch.</h2>
            <p>Send an inquiry, call us, or pick a time on the calendar.</p>
          </div>
          <ContactWays />
        </div>
      </section>
    </main>
  );
}
