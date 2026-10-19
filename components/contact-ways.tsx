import Script from "next/script";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { BookingWidget } from "@/components/booking-widget";
import { InquiryEmbed } from "@/components/inquiry-form";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

export function ContactWays() {
  return (
    <div className="contact-ways">
      <article className="contact-way">
        <span className="contact-way-icon" aria-hidden="true">
          <Mail size={18} strokeWidth={2} />
        </span>
        <h3>Send an inquiry</h3>
        <InquiryEmbed />
      </article>

      <article className="contact-way">
        <span className="contact-way-icon" aria-hidden="true">
          <Phone size={18} strokeWidth={2} />
        </span>
        <h3>Call us</h3>
        <a className="contact-phone" href={phoneTelHref()}>
          {siteConfig.PHONE_NUMBER}
        </a>
      </article>

      <article className="contact-way is-book" id="book-a-live-demo">
        <span className="contact-way-icon" aria-hidden="true">
          <CalendarCheck size={18} strokeWidth={2} />
        </span>
        <h3>Book a live demo</h3>
        <p>Pick a time that works for you.</p>
        <BookingWidget />
      </article>

      <Script
        id="ghl-form-embed"
        src={siteConfig.embedScriptSrc}
        strategy="lazyOnload"
      />
    </div>
  );
}
