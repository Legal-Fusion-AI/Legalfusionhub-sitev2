"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import {
  CalendarCheck,
  Check,
  ClipboardList,
  FolderOpen,
  ListChecks,
  Phone,
  PhoneIncoming,
} from "lucide-react";
import { Avatar, MacWindow } from "@/components/mac-window";
import { useLayoutEffect, useRef, useState } from "react";

const steps = [
  {
    id: "answer",
    status: "Answering the call",
    title: "Never miss a call",
    body: "Hub answers calls 24/7, handles the inquiry, and captures the lead.",
    icon: PhoneIncoming,
  },
  {
    id: "capture",
    status: "Capturing the inquiry",
    title: "The lead is on the record",
    body: "The prospective client and the bankruptcy inquiry are saved with the call.",
    icon: ClipboardList,
  },
  {
    id: "qualify",
    status: "Qualifying the lead",
    title: "Turn leads into clients",
    body: "Hub qualifies by your firm’s criteria and follows up until the lead is ready.",
    icon: ListChecks,
  },
  {
    id: "book",
    status: "Booking the consultation",
    title: "The consultation is on the calendar",
    body: "Hub schedules the consultation and keeps the inquiry attached to that appointment.",
    icon: CalendarCheck,
  },
  {
    id: "portal",
    status: "Continuing the matter",
    title: "Legal Fusion Portal",
    body: "After a client is retained, Portal is where the firm and the client continue: questionnaires, documents, case data, and bankruptcy forms.",
    icon: FolderOpen,
  },
] as const;

type Step = (typeof steps)[number];

type Point = { x: number; y: number };

type LineModel = {
  d: string;
  labels: { x: number; y: number; text: string }[];
  width: number;
  height: number;
};

const CORNER = 16;

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
                  <strong>Inquiry saved</strong>
                </li>
                <li>
                  <span>Product</span>
                  <strong>Legal Fusion Hub</strong>
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
      <MacWindow title="Case file">
        <div className="mac-body mac-panel">
          <div className="mac-card">
            <div className="mac-case-head">
              <div>
                <h4>Harbor & Stone Law</h4>
                <p>Case 24-10311</p>
              </div>
              <span className="mac-pill">Retained</span>
            </div>
            <ul className="mac-rows">
              <li>
                <span>Questionnaire</span>
                <strong>In progress</strong>
              </li>
              <li>
                <span>Documents</span>
                <strong>On file</strong>
              </li>
              <li>
                <span>Bankruptcy forms</span>
                <strong>Ready</strong>
              </li>
            </ul>
          </div>
        </div>
      </MacWindow>
    </motion.div>
  );
}

function dedupe(points: Point[]) {
  const next: Point[] = [];
  for (const point of points) {
    const prev = next[next.length - 1];
    if (!prev || Math.hypot(prev.x - point.x, prev.y - point.y) > 0.5) {
      next.push(point);
    }
  }
  return next;
}

function fillet(points: Point[]) {
  const path = dedupe(points);
  if (path.length < 2) return "";

  let d = `M ${path[0].x} ${path[0].y}`;
  for (let index = 1; index < path.length - 1; index += 1) {
    const prev = path[index - 1];
    const current = path[index];
    const next = path[index + 1];
    const inboundX = current.x - prev.x;
    const inboundY = current.y - prev.y;
    const outboundX = next.x - current.x;
    const outboundY = next.y - current.y;
    const inbound = Math.hypot(inboundX, inboundY);
    const outbound = Math.hypot(outboundX, outboundY);
    const radius = Math.min(CORNER, inbound / 2, outbound / 2);

    if (radius < 1) {
      d += ` L ${current.x} ${current.y}`;
      continue;
    }

    const enterX = current.x - (inboundX / inbound) * radius;
    const enterY = current.y - (inboundY / inbound) * radius;
    const leaveX = current.x + (outboundX / outbound) * radius;
    const leaveY = current.y + (outboundY / outbound) * radius;
    d += ` L ${enterX} ${enterY} Q ${current.x} ${current.y} ${leaveX} ${leaveY}`;
  }

  const last = path[path.length - 1];
  d += ` L ${last.x} ${last.y}`;
  return d;
}

function Pill({
  step,
  pillRef,
}: {
  step: Step;
  pillRef: (node: HTMLHeadingElement | null) => void;
}) {
  const Icon = step.icon;
  const reveal = useReveal(0.05);
  return (
    <motion.h3 className="zigzag-pill" ref={pillRef} {...reveal}>
      <Icon size={16} strokeWidth={2} aria-hidden="true" />
      {step.title}
    </motion.h3>
  );
}

function Copy({ step }: { step: Step }) {
  const reveal = useReveal(0.1);
  return (
    <>
      <p className="zigzag-status">{step.status}</p>
      <motion.p className="zigzag-body" {...reveal}>
        {step.body}
      </motion.p>
    </>
  );
}

export function JourneyProcess() {
  const trackRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const groupRefs = useRef<(HTMLElement | null)[]>([]);
  const [line, setLine] = useState<LineModel>({ d: "", labels: [], width: 0, height: 0 });
  const [phone, setPhone] = useState(false);
  const reduce = useReducedMotion();
  const promptReveal = useReveal(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.92", "end 0.7"],
  });

  useLayoutEffect(() => {
    const query = window.matchMedia("(max-width: 720px)");
    const sync = () => setPhone(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const width = track.clientWidth;
      const height = track.clientHeight;
      const prompt = promptRef.current;
      const pills = pillRefs.current.filter((node): node is HTMLHeadingElement => node !== null);
      const groups = groupRefs.current.filter((node): node is HTMLElement => node !== null);
      if (
        !prompt ||
        pills.length !== steps.length ||
        groups.length !== steps.length ||
        width < 1
      ) {
        return;
      }

      const box = (node: HTMLElement) => {
        let left = 0;
        let top = 0;
        let current: HTMLElement | null = node;
        while (current && current !== track) {
          left += current.offsetLeft;
          top += current.offsetTop;
          const parent: Element | null = current.offsetParent;
          current = parent instanceof HTMLElement ? parent : null;
        }
        const width = node.offsetWidth;
        const height = node.offsetHeight;
        return {
          left,
          right: left + width,
          top,
          bottom: top + height,
          midY: top + height / 2,
          cx: left + width / 2,
        };
      };

      const promptBox = box(prompt);
      const pillBoxes = pills.map(box);
      const groupBoxes = groups.map(box);
      const narrow = window.matchMedia("(max-width: 1020px)").matches;
      const lastPillBox = pillBoxes[pillBoxes.length - 1];

      if (narrow) {
        const spine = 14;
        let path = fillet([
          { x: spine, y: Math.max(0, promptBox.top - 12) },
          { x: spine, y: lastPillBox.midY },
        ]);
        const spur = (y: number, x: number) => {
          const radius = Math.min(CORNER, Math.abs(x - spine) / 2);
          return ` M ${spine} ${y - radius} Q ${spine} ${y} ${spine + radius} ${y} L ${x} ${y}`;
        };
        path += spur(promptBox.midY, promptBox.left);
        for (const pill of pillBoxes) path += spur(pill.midY, pill.left - 8);
        setLine({ d: path, labels: [], width, height });
        return;
      }

      const points: Point[] = [
        { x: promptBox.right, y: promptBox.midY },
        { x: pillBoxes[0].cx, y: promptBox.midY },
      ];
      if (Math.abs(promptBox.midY - pillBoxes[0].midY) > 1) {
        points.push({ x: pillBoxes[0].cx, y: pillBoxes[0].midY });
      }
      const labels: LineModel["labels"] = [
        {
          x: (promptBox.right + pillBoxes[0].left) / 2,
          y: promptBox.midY,
          text: steps[0].status,
        },
      ];

      for (let index = 0; index < pillBoxes.length - 1; index += 1) {
        const from = pillBoxes[index];
        const to = pillBoxes[index + 1];
        const crossY = (groupBoxes[index].bottom + groupBoxes[index + 1].top) / 2;
        points.push({ x: from.cx, y: from.bottom });
        points.push({ x: from.cx, y: crossY });
        points.push({ x: to.cx, y: crossY });
        points.push({ x: to.cx, y: to.top });
        labels.push({
          x: (from.cx + to.cx) / 2,
          y: crossY,
          text: steps[index + 1].status,
        });
      }

      points.push({ x: lastPillBox.cx, y: lastPillBox.bottom });

      setLine({ d: fillet(points), labels, width, height });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    measure();
    return () => observer.disconnect();
  }, []);

  const first = steps[0];

  return (
    <div className="zigzag" ref={trackRef}>
      {line.d && (
        <svg
          className="zigzag-svg"
          viewBox={`0 0 ${line.width} ${line.height}`}
          width={line.width}
          height={line.height}
          aria-hidden="true"
        >
          <path className="zigzag-path-track" d={line.d} />
          <motion.path
            className="zigzag-path-draw"
            d={line.d}
            style={{ pathLength: reduce || phone ? 1 : scrollYProgress }}
          />
        </svg>
      )}
      {line.labels.map((label) => (
        <span
          className="zigzag-label"
          key={label.text}
          style={{ left: label.x, top: label.y }}
        >
          {label.text}
        </span>
      ))}

      <div
        className="zigzag-group"
        ref={(node) => {
          groupRefs.current[0] = node;
        }}
      >
        <div className="zigzag-lead">
          <motion.div className="zigzag-prompt" ref={promptRef} {...promptReveal}>
            <span className="zigzag-avatar">
              <Avatar who="jordan" />
              <span className="zigzag-chat" aria-hidden="true">
                <Phone strokeWidth={2.5} />
              </span>
            </span>
            <p>I need to talk to someone about filing bankruptcy.</p>
          </motion.div>
          <Pill
            step={first}
            pillRef={(node) => {
              pillRefs.current[0] = node;
            }}
          />
        </div>
        <div className="zigzag-follow">
          <div className="zigzag-main">
            <Copy step={first} />
          </div>
          <div className="zigzag-scene">
            <Scene step={first} />
          </div>
        </div>
      </div>

      {steps.slice(1).map((step, index) => {
        const stepIndex = index + 1;
        const side = stepIndex % 2 === 0 ? "right" : "left";
        return (
          <article
            className={`zigzag-beat is-${side}`}
            key={step.id}
            ref={(node) => {
              groupRefs.current[stepIndex] = node;
            }}
          >
            <div className="zigzag-main">
              <Pill
                step={step}
                pillRef={(node) => {
                  pillRefs.current[stepIndex] = node;
                }}
              />
              <Copy step={step} />
            </div>
            <div className="zigzag-scene">
              <Scene step={step} />
            </div>
          </article>
        );
      })}

    </div>
  );
}
