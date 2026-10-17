"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  MessageSquareText,
  PhoneIncoming,
  Repeat2,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { ClipPlayer } from "@/components/example-clip";
import { examples, type Example } from "@/components/examples-data";
import { aiEmployees } from "@/lib/site-config";

const features = [
  {
    id: "answer-calls",
    icon: PhoneIncoming,
    title: "Owen answers every call, day or night.",
    text: "No call goes to voicemail. Owen picks up, handles the inquiry, and captures the lead.",
    exampleId: "after-hours-call",
  },
  {
    id: "answer-texts",
    icon: MessageSquareText,
    title: "Owen texts back in seconds.",
    text: "A text gets a real answer fast, so the lead stays warm instead of going cold.",
    exampleId: "andrew-text",
  },
  {
    id: "qualify-book",
    icon: CalendarClock,
    title: "We qualify bankruptcy leads by your criteria, then book the consultation.",
    text: "Owen gathers what the attorney needs and puts the consultation on the calendar.",
    exampleId: "after-hours-call",
  },
  {
    id: "nurture",
    icon: Repeat2,
    title: "Donna keeps missed appointments and no-shows from going cold.",
    text: "When someone misses a consultation, Donna follows up and books a new time.",
    exampleId: "no-show-nurture",
  },
] as const;

const employeeName = Object.fromEntries(
  aiEmployees.map((employee) => [employee.id, `${employee.name} on ${employee.role}`]),
) as Record<string, string>;

function speakerName(speaker: string): string {
  if (speaker === "owen") return "Owen";
  if (speaker === "donna") return "Donna";
  return "Caller";
}

export function Examples() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const active: Example | undefined = examples.find((item) => item.id === openId);

  useEffect(() => {
    if (!openId) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  function open(exampleId: string, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setOpenId(exampleId);
  }

  function close() {
    setOpenId(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <>
      <ul className="example-features">
        {features.map((feature) => {
          const Icon = feature.icon;
          const example = examples.find((item) => item.id === feature.exampleId);
          return (
            <li className="example-feature" key={feature.id}>
              <span className="example-feature-icon">
                <Icon size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="example-feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                {example ? (
                  <button
                    type="button"
                    className="example-open"
                    onClick={(event) => open(example.id, event.currentTarget)}
                    aria-haspopup="dialog"
                  >
                    See it: {example.label}
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="example-overlay"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={close}
          >
            <motion.section
              className="example-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="example-dialog-head">
                <span className="example-dialog-channel">
                  {active.channel === "call" ? (
                    <PhoneIncoming size={15} aria-hidden="true" />
                  ) : (
                    <MessageSquareText size={15} aria-hidden="true" />
                  )}
                  {active.channel === "call" ? "Sample phone call" : "Sample text thread"}
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  className="example-dialog-close"
                  aria-label="Close example"
                  onClick={close}
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </header>

              <h2 id={titleId}>{active.label}</h2>
              <p className="example-dialog-summary">{active.summary}</p>
              <p className="example-dialog-by">{employeeName[active.employee]}</p>

              <div className="example-clips">
                {active.clips.map((clip) => (
                  <article className="example-clip" key={clip.id}>
                    <div className="example-clip-head">
                      <span className="example-clip-cat">{clip.category}</span>
                      <span className="example-clip-len">{clip.length}</span>
                    </div>
                    <div className="example-lines">
                      {clip.lines.map((line, index) => (
                        <p className={`example-line is-${line.speaker}`} key={index}>
                          <span className="example-line-who">{speakerName(line.speaker)}</span>
                          <span className="example-line-text">{line.text}</span>
                        </p>
                      ))}
                    </div>
                    <ClipPlayer clip={clip} />
                  </article>
                ))}
              </div>

              <footer className="example-dialog-foot">
                <p>Each clip stays under 15 seconds, split by what is happening.</p>
                <Link className="button button-accent" href="/demo">
                  Book a demo
                </Link>
              </footer>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
