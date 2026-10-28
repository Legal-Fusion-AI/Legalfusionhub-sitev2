"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  ListChecks,
  Phone,
  PhoneIncoming,
  UserCheck,
} from "lucide-react";
import { Avatar, MacWindow } from "@/components/mac-window";
import { useEffect, useRef, useState } from "react";
import { AndrewThreadModal } from "@/components/andrew-thread-modal";

const steps = [
  {
    id: "answer",
    label: "Answered",
    title: "Never miss a call, text, or online inquiry.",
    body: "Retainer Pro answers calls, texts, and online inquiries 24/7, handles the inquiry, and captures the lead.",
    icon: PhoneIncoming,
  },
  {
    id: "capture",
    label: "Captured",
    title: "The lead is on the record",
    body: "The prospective client and the bankruptcy inquiry are saved with the call.",
    icon: ClipboardList,
  },
  {
    id: "qualify",
    label: "Qualified",
    title: "Turn leads into clients",
    body: "Retainer Pro qualifies by your firm's criteria and follows up until the lead is ready.",
    icon: ListChecks,
  },
  {
    id: "book",
    label: "Consult booked",
    title: "The consultation is on the calendar",
    body: "Retainer Pro schedules the consultation and keeps the inquiry attached to that appointment. Before the consultation we gather a few details so the attorney can weigh Chapter 7 against other options. That is to help the attorney, not to qualify the lead. If someone misses a consultation or does not show, Nikki follows up, keeps the lead warm, and books a new time. Nobody is forgotten.",
    icon: CalendarCheck,
  },
  {
    id: "retained",
    label: "Retained",
    title: "The client signs with your firm",
    body: "The consultation happens with the full inquiry in hand, and the lead becomes a retained client.",
    icon: UserCheck,
  },
] as const;

type Step = (typeof steps)[number];

function useReveal(delay = 0) {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: {
      duration: reduce ? 0 : 0.55,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

function Scene({ step }: { step: Step }) {
  const reveal = useReveal(0.08);

  if (step.id === "answer") {
    return (
      <motion.div {...reveal}>
        <MacWindow title="Phone">
          <div className="mac-body mac-panel">
            <div className="mac-card">
              <div className="mac-card-head">
                <Avatar who="jordan" />
                <span>
                  <strong>Prospective client</strong>
                  <em>Incoming call</em>
                </span>
                <span className="mac-pill">Answered</span>
              </div>
              <ul className="mac-rows">
                <li>
                  <span>Matter</span>
                  <strong>Bankruptcy</strong>
                </li>
                <li>
                  <span>Response</span>
                  <strong>24/7</strong>
                </li>
              </ul>
            </div>
          </div>
        </MacWindow>
      </motion.div>
    );
  }

  if (step.id === "capture") {
    return (
      <motion.div {...reveal}>
        <MacWindow title="Lead">
          <div className="mac-body mac-panel">
            <div className="mac-card">
              <div className="mac-card-head">
                <Avatar who="jordan" />
                <span>
                  <strong>A. Jordan</strong>
                  <em>Bankruptcy inquiry</em>
                </span>
                <span className="mac-pill">Captured</span>
              </div>
              <ul className="mac-rows">
                <li>
                  <span>Current action</span>
                  <strong>Inquiry captured</strong>
                </li>
                <li>
                  <span>Handled by</span>
                  <strong>Retainer Pro</strong>
                </li>
              </ul>
            </div>
          </div>
        </MacWindow>
      </motion.div>
    );
  }

  if (step.id === "qualify") {
    return (
      <motion.div {...reveal}>
        <MacWindow title="Pipeline">
          <div className="mac-body mac-panel">
            <div className="mac-card">
              <div className="mac-card-head">
                <Avatar who="jordan" />
                <span>
                  <strong>A. Jordan</strong>
                  <em>Lead qualified</em>
                </span>
                <span className="mac-pill">Criteria met</span>
              </div>
              <ul className="mac-rows mac-checks">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Practice fit confirmed
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Criteria matched
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Follow-up underway
                </li>
              </ul>
            </div>
          </div>
        </MacWindow>
      </motion.div>
    );
  }

  if (step.id === "book") {
    return (
      <motion.div {...reveal}>
        <MacWindow title="Calendar">
          <div className="mac-body mac-panel">
            <div className="mac-card">
              <div className="mac-when">
                <span>Thursday</span>
                <strong>10:30 AM</strong>
              </div>
              <ul className="mac-rows">
                <li>
                  <span>With</span>
                  <strong>The firm</strong>
                </li>
                <li>
                  <span>Status</span>
                  <strong>Scheduled</strong>
                </li>
              </ul>
            </div>
          </div>
        </MacWindow>
      </motion.div>
    );
  }

  return (
    <motion.div {...reveal}>
      <MacWindow title="Client">
        <div className="mac-body mac-panel">
          <div className="mac-card">
            <div className="mac-card-head">
              <Avatar who="jordan" />
              <span>
                <strong>A. Jordan</strong>
                <em>Bankruptcy inquiry</em>
              </span>
              <span className="mac-pill">Retained</span>
            </div>
            <ul className="mac-rows">
              <li>
                <span>Consultation</span>
                <strong>Completed</strong>
              </li>
              <li>
                <span>Status</span>
                <strong>Retained client</strong>
              </li>
            </ul>
          </div>
        </div>
      </MacWindow>
    </motion.div>
  );
}

function ThreadTrigger({ onChoose }: { onChoose: (start: "lead" | "text") => void }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(start: "lead" | "text") {
    setOpen(false);
    onChoose(start);
  }

  return (
    <div className="zigzag-pill-wrap inquiry-thread-wrap" ref={wrapRef}>
      <button
        type="button"
        className="inquiry-thread-btn"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Tap to watch a real lead become a retained client
        <ChevronDown
          className={open ? "zigzag-pill-caret is-open" : "zigzag-pill-caret"}
          size={15}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <div className="zigzag-choices" role="menu" aria-label="See the real thread">
          <button
            type="button"
            role="menuitem"
            className="zigzag-choice"
            onClick={() => choose("lead")}
          >
            Never miss a lead
          </button>
          <button
            type="button"
            role="menuitem"
            className="zigzag-choice"
            onClick={() => choose("text")}
          >
            Never miss a text
          </button>
        </div>
      ) : null}
    </div>
  );
}

function InquiryStep({
  step,
  side,
  onChooseThread,
}: {
  step: Step;
  side: "left" | "right";
  onChooseThread: (start: "lead" | "text") => void;
}) {
  const copyReveal = useReveal(0.05);
  const Icon = step.icon;

  return (
    <li className={`inquiry-step is-${side}`}>
      <div className="inquiry-copy">
        <span className="inquiry-label">
          <Icon size={14} strokeWidth={2} aria-hidden="true" />
          {step.label}
        </span>
        <motion.h3 {...copyReveal}>{step.title}</motion.h3>
        <p>{step.body}</p>
        {step.id === "answer" ? (
          <ThreadTrigger onChoose={onChooseThread} />
        ) : null}
      </div>
      <span className="inquiry-marker" aria-hidden="true" />
      <div className="inquiry-scene">
        <Scene step={step} />
      </div>
    </li>
  );
}

export function JourneyProcess() {
  const promptReveal = useReveal(0);
  const [threadStart, setThreadStart] = useState<"lead" | "text" | null>(null);

  return (
    <div className="inquiry-timeline">
      <motion.div className="zigzag-prompt inquiry-prompt" {...promptReveal}>
        <span className="zigzag-avatar">
          <Avatar who="jordan" />
          <span className="zigzag-chat" aria-hidden="true">
            <Phone strokeWidth={2.5} />
          </span>
        </span>
        <p>I need to talk to someone about filing bankruptcy.</p>
      </motion.div>

      <ol className="inquiry-steps">
        {steps.map((step, index) => (
          <InquiryStep
            key={step.id}
            step={step}
            side={index % 2 === 0 ? "left" : "right"}
            onChooseThread={setThreadStart}
          />
        ))}
      </ol>

      {threadStart ? (
        <AndrewThreadModal start={threadStart} onClose={() => setThreadStart(null)} />
      ) : null}
    </div>
  );
}
