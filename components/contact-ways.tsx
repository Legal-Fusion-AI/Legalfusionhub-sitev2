import Script from "next/script";
import { ArrowRight, Phone } from "lucide-react";
import { BookingWidget } from "@/components/booking-widget";
import { InquiryEmbed } from "@/components/inquiry-form";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

const demoSteps = [
  "See how we answer calls and capture leads.",
  "See how we qualify leads by your criteria and book consultations.",
  "Meet Donna on intake and Nikki on follow-up.",
] as const;

export function ContactWays() {
  return (
    <div className="contact-body">
      <section
        className="contact-split-wrap"
        id="contact-options"
        aria-labelledby="inquiry-heading"
      >
        <div className="shell contact-split">
          <article className="contact-card contact-card-form">
            <header className="contact-card-head">
              <p className="contact-kicker">Try it yourself</p>
              <h2 id="inquiry-heading">Fill it out like a client would.</h2>
              <p>
                Pretend you need help with bankruptcy. Use your real cell
                number, and Nikki will text you. This is a demo, so nothing
                goes to a real firm.
              </p>
            </header>
            <InquiryEmbed />
          </article>

          <aside className="contact-aside">
            <article className="contact-card contact-card-call">
              <div className="contact-card-head">
                <p className="contact-kicker">Phone</p>
                <h3>Prefer to talk?</h3>
                <p>Call us and we will help you take the next step.</p>
              </div>
              <a className="contact-phone" href={phoneTelHref()}>
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                {siteConfig.PHONE_NUMBER}
              </a>
            </article>

            <article className="contact-card contact-card-expect">
              <div className="contact-card-head">
                <p className="contact-kicker">Live demo</p>
                <h3>What to expect</h3>
                <p>A real person follows up.</p>
              </div>
              <ol className="contact-steps">
                {demoSteps.map((step, index) => (
                  <li key={step}>
                    <span className="contact-step-num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <a className="contact-calendar-link" href="#book-a-live-demo">
                Book a live demo with Jeff
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          </aside>
        </div>
      </section>

      <section
        className="contact-calendar"
        id="book-a-live-demo"
        aria-labelledby="calendar-heading"
      >
        <div className="shell">
          <header className="contact-calendar-head">
            <p className="contact-kicker">Calendar</p>
            <h2 id="calendar-heading">Book a live demo with Jeff</h2>
            <p>Pick a time that works for you.</p>
          </header>
          <div className="contact-card contact-card-calendar">
            <BookingWidget />
          </div>
        </div>
      </section>

      <Script
        id="ghl-form-embed"
        src={siteConfig.embedScriptSrc}
        strategy="lazyOnload"
      />
    </div>
  );
}
