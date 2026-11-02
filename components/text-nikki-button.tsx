"use client";

import { MessageSquare, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { prefersPhone } from "@/lib/device";
import { siteConfig } from "@/lib/site-config";

// [DRAFT, needs Mara OK] Topics rotated after "Ask Nikki about".
const TOPICS = [
  "booking a free consultation",
  "what to bring to your appointment",
  "office hours and locations",
  "help in Spanish",
];

// [DRAFT, needs Mara OK] One-click first questions, shown after the form and before
// the visitor's first message.
const STARTERS = [
  "How does the demo work?",
  "Book a free consultation",
  "What should I bring?",
];

/** CloseBot widget internals used for the starter buttons. Checked 2026-11-01. */
const CB = {
  input: ".cb-input",
  send: ".cb-send",
  visitorMessage: ".cb-msg-item.lead",
} as const;

const TYPE_MS = 45;
const HOLD_MS = 1800;

/** Types each topic out, holds it, then moves to the next. */
function useRotatingTopic(active: boolean): string {
  const [topic, setTopic] = useState(0);
  const [length, setLength] = useState(0);

  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!active) return;
    const full = TOPICS[topic];
    if (reduced) {
      const timer = window.setTimeout(() => setTopic((t) => (t + 1) % TOPICS.length), HOLD_MS * 2);
      return () => window.clearTimeout(timer);
    }
    if (length < full.length) {
      const timer = window.setTimeout(() => setLength((l) => l + 1), TYPE_MS);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setLength(0);
      setTopic((t) => (t + 1) % TOPICS.length);
    }, HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [active, reduced, topic, length]);

  return reduced ? TOPICS[topic] : TOPICS[topic].slice(0, length);
}

/**
 * CloseBot mounts its widget once per page load, into #cb-widget-container if that
 * element exists within about 2 s of the script loading, or as a corner bubble if not.
 * So the script is added only after the container is on the page, and the panel stays
 * mounted (hidden) after it first opens.
 */
function loadCloseBot() {
  const { scriptSrc } = siteConfig.closebot;
  if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
  const script = document.createElement("script");
  script.src = scriptSrc;
  script.async = true;
  document.body.appendChild(script);
}

type TextNikkiButtonProps = {
  className?: string;
};

export function TextNikkiButton({ className = "button button-outline" }: TextNikkiButtonProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [showStarters, setShowStarters] = useState(false);
  const typed = useRotatingTopic(open);

  const demoLine = siteConfig.DEMO_LINE;
  // "?&body=" is the form both iOS and Android Messages accept.
  const smsHref = `sms:${demoLine.replace(/[^\d+]/g, "")}?&body=${encodeURIComponent(
    "Hi Nikki, I'd like to see how you work.",
  )}`;

  useEffect(() => {
    if (open) loadCloseBot();
  }, [open]);

  // Starters show once CloseBot enables its text box (the form is done) and hide
  // after the visitor's first message.
  useEffect(() => {
    if (!mounted) return;
    const container = document.getElementById(siteConfig.closebot.containerId);
    if (!container) return;
    const update = () => {
      const input = container.querySelector<HTMLInputElement>(CB.input);
      setShowStarters(
        !!input && !input.disabled && !container.querySelector(CB.visitorMessage),
      );
    };
    const observer = new MutationObserver(update);
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled"],
    });
    update();
    return () => observer.disconnect();
  }, [mounted]);

  function sendStarter(text: string) {
    const container = document.getElementById(siteConfig.closebot.containerId);
    const input = container?.querySelector<HTMLInputElement>(CB.input);
    const send = container?.querySelector<HTMLButtonElement>(CB.send);
    if (!input || !send) return;
    input.value = text;
    send.click();
    setShowStarters(false);
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    // Phones text the demo line for real; everything else chats in the page.
    if (prefersPhone()) return;
    event.preventDefault();
    setMounted(true);
    setOpen(true);
  }

  return (
    <>
      <a className={className} href={smsHref} onClick={handleClick}>
        <MessageSquare size={17} aria-hidden="true" />
        Text Nikki now
      </a>

      {mounted ? (
        <div className="nikki-overlay" hidden={!open} onClick={() => setOpen(false)}>
          <div
            className="nikki-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className="nikki-close"
              aria-label="Close the chat with Nikki"
              onClick={() => setOpen(false)}
            >
              <X size={18} aria-hidden="true" />
            </button>
            <p id={titleId} className="nikki-prompt">
              Ask Nikki about{" "}
              <span className="nikki-topic" aria-hidden="true">
                {typed}
                <i className="nikki-caret" />
              </span>
              <span className="sr-only">your bankruptcy questions</span>
            </p>
            <div id={siteConfig.closebot.containerId} className="nikki-chat" />
            {showStarters ? (
              <div className="nikki-starters" aria-label="Quick questions for Nikki">
                {STARTERS.map((text) => (
                  <button
                    key={text}
                    type="button"
                    className="nikki-starter"
                    onClick={() => sendStarter(text)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            ) : null}
            {/* [DRAFT, needs Mara OK] disclosure line. */}
            <p className="nikki-note">
              Nikki is an AI assistant. This is a sample demo, so nothing goes to a real firm.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
