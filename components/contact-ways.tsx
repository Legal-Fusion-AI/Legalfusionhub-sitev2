"use client";

import Script from "next/script";
import { ArrowRight, CalendarDays, ClipboardList, Phone, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { BookingWidget } from "@/components/booking-widget";
import { InquiryEmbed } from "@/components/inquiry-form";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

type WayKey = "call" | "form" | "calendar";

type Way = {
  key: WayKey;
  icon: ReactNode;
  label: string;
  title: string;
  blurb: string;
};

const ways: Way[] = [
  {
    key: "call",
    icon: <Phone size={22} strokeWidth={2} aria-hidden="true" />,
    label: "Phone",
    title: "Prefer to talk?",
    blurb: "Call us and we will help you take the next step.",
  },
  {
    key: "form",
    icon: <ClipboardList size={22} strokeWidth={2} aria-hidden="true" />,
    label: "Try it yourself",
    title: "Fill out the form",
    blurb: "Fill it out like a client would, and Nikki will text you.",
  },
  {
    key: "calendar",
    icon: <CalendarDays size={22} strokeWidth={2} aria-hidden="true" />,
    label: "Live demo",
    title: "Book a live demo with Jeff",
    blurb: "Pick a time that works for you. A real person follows up.",
  },
];

/** Old in-page anchors still open the matching popup. */
const hashToWay: Record<string, WayKey> = {
  "#book-a-live-demo": "calendar",
  "#inquiry": "form",
  "#call": "call",
};

type ContactModalProps = {
  open: boolean;
  wide?: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

function ContactModal({ open, wide = false, title, onClose, children }: ContactModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  return (
    <div className="contact-modal-overlay" hidden={!open} onClick={onClose}>
      <div
        className={`contact-modal${wide ? " contact-modal-wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="contact-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <X size={18} aria-hidden="true" />
        </button>
        <h2 id={titleId} className="contact-modal-title">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export function ContactWays() {
  const [open, setOpen] = useState<WayKey | null>(null);
  // Embeds stay mounted after their first open so a half-filled form or calendar survives closing.
  const [mounted, setMounted] = useState<Set<WayKey>>(() => new Set());

  function show(key: WayKey) {
    setMounted((prev) => (prev.has(key) ? prev : new Set(prev).add(key)));
    setOpen(key);
  }

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const fromHash = () => {
      const key = hashToWay[window.location.hash];
      if (key) show(key);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <div className="contact-body">
      <section className="contact-ways-wrap" id="contact-options" aria-label="Ways to reach us">
        <div className="shell contact-ways">
          {ways.map((way) => (
            <button
              key={way.key}
              type="button"
              className={`contact-way contact-way-${way.key}`}
              aria-haspopup="dialog"
              onClick={() => show(way.key)}
            >
              <span className="contact-way-icon">{way.icon}</span>
              <span className="contact-kicker">{way.label}</span>
              <span className="contact-way-title">{way.title}</span>
              <span className="contact-way-blurb">{way.blurb}</span>
              <span className="contact-way-go" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <ContactModal open={open === "call"} title="Prefer to talk?" onClose={close}>
        <p className="contact-modal-lead">Call us and we will help you take the next step.</p>
        <a className="contact-modal-phone" href={phoneTelHref()}>
          <Phone size={22} strokeWidth={2} aria-hidden="true" />
          {siteConfig.PHONE_NUMBER}
        </a>
        <a className="button button-accent contact-modal-action" href={phoneTelHref()}>
          Call now
        </a>
      </ContactModal>

      {mounted.has("form") ? (
        <ContactModal open={open === "form"} title="Fill it out like a client would." onClose={close}>
          <p className="contact-modal-lead">
            Pretend you need help with bankruptcy. Use your real cell number, and Nikki will text
            you. This is a demo, so nothing goes to a real firm.
          </p>
          <div className="contact-modal-embed">
            <InquiryEmbed />
          </div>
        </ContactModal>
      ) : null}

      {mounted.has("calendar") ? (
        <ContactModal
          open={open === "calendar"}
          wide
          title="Book a live demo with Jeff"
          onClose={close}
        >
          <p className="contact-modal-lead">Pick a time that works for you.</p>
          <div className="contact-modal-embed">
            <BookingWidget />
          </div>
        </ContactModal>
      ) : null}

      <Script id="ghl-form-embed" src={siteConfig.embedScriptSrc} strategy="lazyOnload" />
    </div>
  );
}
