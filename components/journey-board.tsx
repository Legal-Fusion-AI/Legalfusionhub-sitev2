"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CalendarCheck,
  Check,
  FileSignature,
  PhoneIncoming,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const stages = [
  {
    id: "answer",
    short: "Answered",
    title: "Every call enters the system.",
    body: "A new bankruptcy inquiry is answered immediately, even after hours. The caller hears your firm’s voice—not a generic phone tree.",
    meta: "12:41 AM",
    detail: "New Chapter 7 inquiry",
    icon: PhoneIncoming,
  },
  {
    id: "qualify",
    short: "Qualified",
    title: "The right questions happen next.",
    body: "Hub follows your criteria, captures the matter details your team needs, and separates a real consultation from a wrong-number distraction.",
    meta: "2m 18s",
    detail: "Location and case fit confirmed",
    icon: Sparkles,
  },
  {
    id: "book",
    short: "Booked",
    title: "Interest becomes a consultation.",
    body: "The lead gets a real time on the right calendar, with confirmations and reminders already in motion.",
    meta: "Tomorrow",
    detail: "Consultation · 10:30 AM",
    icon: CalendarCheck,
  },
  {
    id: "sign",
    short: "Advanced",
    title: "Your team receives a prepared lead.",
    body: "Intake notes, source, appointment, and next steps arrive together so your staff can focus on the human conversation.",
    meta: "Ready",
    detail: "Intake brief delivered",
    icon: FileSignature,
  },
];

type JourneyBoardProps = {
  compact?: boolean;
};

export function JourneyBoard({ compact = false }: JourneyBoardProps) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = stages[active];
  const Icon = stage.icon;

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className={`dispatch-board${compact ? " dispatch-board-compact" : ""}`}>
      <div className="dispatch-topbar">
        <div>
          <span className="live-dot" />
          Acquisition system
        </div>
        <span>Live</span>
      </div>

      <div className="route-tabs" role="tablist" aria-label="Lead journey">
        <span className="route-line" aria-hidden="true" />
        <motion.span
          className="route-progress"
          animate={{ width: `${(active / (stages.length - 1)) * 100}%` }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
        {stages.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active >= index ? "route-tab route-tab-passed" : "route-tab"}
            onClick={() => setActive(index)}
            key={item.id}
          >
            <span>{active > index ? <Check size={12} /> : index + 1}</span>
            {item.short}
          </button>
        ))}
      </div>

      <div className="dispatch-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="dispatch-message"
            key={stage.id}
            initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6, filter: "blur(3px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="dispatch-icon">
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <p className="dispatch-time">{stage.meta}</p>
            <h3>{stage.title}</h3>
            <p>{stage.body}</p>
          </motion.div>
        </AnimatePresence>

        <div className="lead-ticket">
          <div className="ticket-head">
            <div className="avatar">AJ</div>
            <div>
              <strong>New prospective client</strong>
              <span>Bankruptcy inquiry</span>
            </div>
            <span className="status-pill">{stage.short}</span>
          </div>
          <div className="ticket-row">
            <span>Current action</span>
            <strong>{stage.detail}</strong>
          </div>
          <div className="ticket-row">
            <span>Owner</span>
            <strong>Legal Fusion Hub</strong>
          </div>
          <div className="ticket-footer">
            <Check size={14} aria-hidden="true" />
            Synced to your firm’s workflow
          </div>
        </div>
      </div>
    </div>
  );
}
