"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendarCheck, Check, FolderOpen, PhoneIncoming } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import coloredLogo from "@/coloredlogo.png";

const sources = [
  { label: "Phone calls", glyph: "phone", stage: 0, tone: "teal" },
  { label: "Inquiries", glyph: "chat", stage: 0, tone: "ink" },
  { label: "Follow-up", glyph: "calendar", stage: 1, tone: "coral" },
  { label: "Consultations", glyph: "calendarCheck", stage: 1, tone: "lime" },
  { label: "Documents", glyph: "folder", stage: 2, tone: "teal" },
  { label: "Forms", glyph: "form", stage: 2, tone: "coral" },
] as const;

const stages = [
  {
    id: "engage",
    short: "Engage",
    title: "Never miss a call.",
    body: "Hub answers calls 24/7, handles inquiries, and captures the lead.",
    meta: "24/7",
    detail: "New inquiry captured",
    owner: "Legal Fusion Hub",
    icon: PhoneIncoming,
  },
  {
    id: "acquire",
    short: "Acquire",
    title: "Turn the lead into a client.",
    body: "Hub qualifies by the firm’s criteria, follows up, and schedules the consultation.",
    meta: "Qualified",
    detail: "Consultation scheduled",
    owner: "Legal Fusion Hub",
    icon: CalendarCheck,
  },
  {
    id: "serve",
    short: "Serve",
    title: "Keep the client for the long term.",
    body: "Legal Fusion Portal is where the firm and the client continue: questionnaires, documents, case data, and bankruptcy forms.",
    meta: "Retained",
    detail: "Case file ready",
    owner: "Legal Fusion Portal",
    icon: FolderOpen,
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

const solidGlyphs = {
  phone: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  chat: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
  calendar: "M8 3.1V1.2h2.2V3.1h3.6V1.2H16V3.1h3.2a2 2 0 0 1 2 2V19.2a2 2 0 0 1-2 2H4.8a2 2 0 0 1-2-2V5.1a2 2 0 0 1 2-2H8zm-.6 9.2h2.15v2.15H7.4V12.3zm3.7 0h2.15v2.15h-2.15V12.3zm3.7 0h2.15v2.15H14.8V12.3zM7.4 15.7h2.15v2.15H7.4V15.7zm3.7 0h2.15v2.15h-2.15V15.7zm3.7 0h2.15v2.15H14.8V15.7z",
  calendarCheck: "M8 3.1V1.2h2.2V3.1h3.6V1.2H16V3.1h3.2a2 2 0 0 1 2 2V19.2a2 2 0 0 1-2 2H4.8a2 2 0 0 1-2-2V5.1a2 2 0 0 1 2-2H8zm1.1 9.3 1.9 1.9 4.7-4.6 1.5 1.5-6.2 6.1-3.4-3.4 1.5-1.5z",
  folder: "M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
  form: "M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2.2 11h7.6v1.7H8.2V13zm0 3.6h7.6V18H8.2v-1.4z",
} as const;

function SolidGlyph({ name }: { name: keyof typeof solidGlyphs }) {
  const punched = name === "calendar" || name === "calendarCheck" || name === "form";
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d={solidGlyphs[name]}
        fill="currentColor"
        fillRule={punched ? "evenodd" : "nonzero"}
      />
    </svg>
  );
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

    setLit(true);
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
              return (
                <button
                  className={`journey-source journey-source-${source.tone}${
                    on ? " is-active" : ""
                  }`}
                  key={source.label}
                  type="button"
                  aria-label={source.label}
                  aria-pressed={on}
                  onClick={() => selectSource(index)}
                >
                  <span className="journey-source-icon">
                    <SolidGlyph name={source.glyph} />
                  </span>
                  <span className="journey-source-label">{source.label}</span>
                </button>
              );
            })}
          </div>
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
            <Image src={coloredLogo} alt="" width={36} height={36} />
          </div>
        )}

        <div className="dispatch-board">
          <div className="dispatch-topbar">
            <div>
              <span className="live-dot" />
              Client journey
            </div>
            <span>Live</span>
          </div>

          <div className="route-tabs" role="tablist" aria-label="Client journey">
            <span className="route-line" aria-hidden="true" />
            <motion.span
              className="route-progress"
              animate={{ width: `${(active / (stages.length - 1)) * 68}%` }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-hidden="true"
            />
            {stages.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === index}
                className={
                  active >= index ? "route-tab route-tab-passed" : "route-tab"
                }
                onClick={() =>
                  selectSource(
                    sources.findIndex((source) => source.stage === index),
                  )
                }
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
                initial={
                  reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, y: -6, filter: "blur(3px)" }
                }
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
                <span>Product</span>
                <strong>{stage.owner}</strong>
              </div>
              <div className="ticket-footer">
                <Check size={14} aria-hidden="true" />
                One company. A complete client journey.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
