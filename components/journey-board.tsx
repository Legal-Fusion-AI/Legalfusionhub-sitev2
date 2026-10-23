"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Calendar,
  CalendarCheck,
  Check,
  MessageSquare,
  Phone,
  PhoneIncoming,
  UserRound,
  UserRoundCheck,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MacWindow } from "@/components/mac-window";
import logoMark from "@/public/logo-mark.png";

const sourceIcons = {
  phone: Phone,
  chat: MessageSquare,
  calendar: Calendar,
  calendarCheck: CalendarCheck,
  retained: UserRoundCheck,
} as const;

const sources = [
  { label: "Phone calls", glyph: "phone", stage: 0, tone: "teal" },
  { label: "Inquiries", glyph: "chat", stage: 0, tone: "ink" },
  { label: "Follow-up", glyph: "calendar", stage: 1, tone: "coral" },
  { label: "Consultations", glyph: "calendarCheck", stage: 1, tone: "lime" },
  { label: "Retained", glyph: "retained", stage: 1, tone: "teal-dark" },
] as const;

const stages = [
  {
    id: "engage",
    short: "Engage",
    title: "Someone calls your firm. Donna picks up on the first ring.",
    body: "She answers the phone around the clock, finds out what the person needs, and makes sure nothing gets lost before your team sees it. Nikki picks up the texts and web forms.",
    meta: "Any hour",
    detail: "Donna answered and listened",
    owner: "Finding a time that works",
    icon: PhoneIncoming,
  },
  {
    id: "acquire",
    short: "Acquire",
    title: "Then she turns the call into a client.",
    body: "Donna qualifies bankruptcy leads by your criteria and books the consultation. Nikki follows up so the appointment doesn't go cold.",
    meta: "Qualified",
    detail: "Qualified and booked",
    owner: "Consultation, Thursday at 4 PM",
    icon: CalendarCheck,
  },
];

const HOLD_MS = 2800;
const GAP_MS = 700;
const TRAVEL_MS = 1700;

function elbowPath(x: number, center: number, height: number, rail: number) {
  const delta = center - x;
  if (Math.abs(delta) < 1) return `M ${x} 0 L ${x} ${height}`;

  const direction = Math.sign(delta);
  const radius = Math.min(14, Math.abs(delta) / 2, rail * 0.4, (height - rail) * 0.4);

  return [
    `M ${x} 0`,
    `L ${x} ${rail - radius}`,
    `Q ${x} ${rail} ${x + direction * radius} ${rail}`,
    `L ${center - direction * radius} ${rail}`,
    `Q ${center} ${rail} ${center} ${rail + radius}`,
    `L ${center} ${height}`,
  ].join(" ");
}

function JourneyWires({
  activeSource,
  lit,
  replayKey,
}: {
  activeSource: number;
  lit: boolean;
  replayKey: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const next = { w: element.clientWidth, h: element.clientHeight };
      setBox((current) =>
        current.w === next.w && current.h === next.h ? current : next,
      );
    };

    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => observer.disconnect();
  }, []);

  const { w, h } = box;
  const rail = Math.max(28, h * 0.36);
  const active = sources[activeSource];
  const activePath =
    w > 0 && h > 0
      ? elbowPath(((activeSource + 0.5) / sources.length) * w, w / 2, h, rail)
      : "";

  return (
    <div className="journey-wire-layer" ref={ref}>
      <svg
        className="journey-wires"
        viewBox={w > 0 && h > 0 ? `0 0 ${w} ${h}` : undefined}
        aria-hidden="true"
      >
        {w > 0 &&
          h > 0 &&
          sources.map((source, index) => {
            if (lit && index === activeSource) return null;
            const x = ((index + 0.5) / sources.length) * w;
            return (
              <path
                key={source.label}
                d={elbowPath(x, w / 2, h, rail)}
                className="journey-wire"
              />
            );
          })}
        {lit && activePath && (
          <path
            d={activePath}
            className={`journey-wire is-active journey-wire-${active.tone}`}
          />
        )}
      </svg>
      {lit && activePath && (
        <span
          key={`${active.label}-${replayKey}`}
          className={`journey-spark journey-spark-${active.tone}`}
          style={{
            offsetPath: `path("${activePath}")`,
            animationDuration: `${TRAVEL_MS}ms`,
          }}
        />
      )}
    </div>
  );
}

type JourneyBoardProps = {
  compact?: boolean;
};

export function JourneyBoard({ compact = false }: JourneyBoardProps) {
  const [activeSource, setActiveSource] = useState(0);
  const [lit, setLit] = useState(true);
  const [cycle, setCycle] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = sources[activeSource].stage;
  const stage = stages[active];
  const Icon = stage.icon;
  const tone = sources[activeSource].tone;

  function selectSource(index: number) {
    setActiveSource(index);
    setLit(true);
    setCycle((current) => current + 1);
  }

  useEffect(() => {
    if (reduceMotion) return;

    if (compact) {
      const timer = window.setInterval(() => {
        setActiveSource((current) => {
          const nextStage = (sources[current].stage + 1) % stages.length;
          return sources.findIndex((source) => source.stage === nextStage);
        });
      }, 5200);
      return () => window.clearInterval(timer);
    }

    let cancelled = false;
    let timer = 0;

    const schedule = () => {
      timer = window.setTimeout(() => {
        if (cancelled) return;
        setLit(false);
        timer = window.setTimeout(() => {
          if (cancelled) return;
          setActiveSource((current) => (current + 1) % sources.length);
          setLit(true);
          schedule();
        }, GAP_MS);
      }, HOLD_MS);
    };

    schedule();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reduceMotion, compact, cycle]);

  return (
    <div
      className={`journey-scene${compact ? " journey-scene-compact" : ""}`}
      aria-label="Client journey"
    >
      {!compact && (
        <div className="journey-flow">
          <div className="journey-sources">
            {sources.map((source, index) => {
              const on = lit && index === activeSource;
              const SourceIcon = sourceIcons[source.glyph];
              return (
                <button
                  className={`journey-source journey-source-${source.tone}${
                    on ? " is-active" : ""
                  }`}
                  key={source.label}
                  type="button"
                  aria-label={source.label}
                  aria-pressed={on}
                  title={source.label}
                  onClick={() => selectSource(index)}
                >
                  <span className="journey-source-icon">
                    <SourceIcon size={18} strokeWidth={2.15} aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>
          <p className="journey-sources-caption" aria-hidden="true">
            {sources[activeSource].label}
          </p>
          <JourneyWires
            activeSource={activeSource}
            lit={lit && !reduceMotion}
            replayKey={cycle}
          />
        </div>
      )}

      <div className="journey-stage">
        {!compact && (
          <div className="journey-node" aria-hidden="true">
            {lit && !reduceMotion && (
              <span
                key={`${activeSource}-${cycle}`}
                className={`journey-node-pulse journey-node-pulse-${tone}`}
                style={{ animationDelay: `${TRAVEL_MS}ms` }}
              />
            )}
            <Image src={logoMark} alt="" width={36} height={36} />
          </div>
        )}

        <MacWindow
          title="One caller's path"
          aside={
            <span className="mac-pill">
              <span className="live-dot" />
              Live
            </span>
          }
        >
          <div className="mac-body">
            <div className="mac-segment" role="tablist" aria-label="Client journey">
              <motion.span
                className="mac-segment-thumb"
                animate={{ x: `${active * 100}%` }}
                transition={{
                  duration: reduceMotion ? 0 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-hidden="true"
              />
              {stages.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  onClick={() =>
                    selectSource(
                      sources.findIndex((source) => source.stage === index),
                    )
                  }
                  key={item.id}
                >
                  {item.short}
                </button>
              ))}
            </div>

            <div className="dispatch-content">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  className="dispatch-message"
                  key={stage.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="dispatch-icon">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <p className="dispatch-time">{stage.meta}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mac-card">
                <div className="mac-card-head">
                  <span className="mac-avatar mac-avatar-icon" aria-hidden="true">
                    <UserRound size={14} strokeWidth={2.2} />
                  </span>
                  <span>
                    <strong>A first-time caller</strong>
                    <em>Wants to talk to someone about bankruptcy</em>
                  </span>
                  <span className="mac-pill">{stage.short}</span>
                </div>
                <ul className="mac-rows">
                  <li>
                    <span>What happened</span>
                    <strong>{stage.detail}</strong>
                  </li>
                  <li>
                    <span>What&apos;s next</span>
                    <strong>{stage.owner}</strong>
                  </li>
                </ul>
                <div className="mac-card-foot">
                  <Check size={14} aria-hidden="true" />
                  From the first call to a retained client.
                </div>
              </div>
            </div>
          </div>
        </MacWindow>
      </div>
    </div>
  );
}
