"use client";

import { Play } from "lucide-react";
import { PLAY_DEMO_CALL_EVENT } from "@/components/call-audio";
import { useEffect, useRef, useState } from "react";
import {
  CALL_DURATION_SECONDS,
  callMoments,
  formatClock,
  speakerLabel,
} from "@/components/call-line-data";

const LOOP_MS = 14000;
const HOLD_MS = 2400;
const TICK_EVERY = 30;

const ticks = Array.from(
  { length: Math.floor(CALL_DURATION_SECONDS / TICK_EVERY) + 1 },
  (_, i) => i * TICK_EVERY,
);
if (ticks[ticks.length - 1] !== CALL_DURATION_SECONDS) {
  ticks.push(CALL_DURATION_SECONDS);
}

function pct(seconds: number) {
  return `${(seconds / CALL_DURATION_SECONDS) * 100}%`;
}

/**
 * One real call, drawn as a line. A playhead travels the recording's length;
 * markers light as it passes them and the caption shows what was said.
 * Honors reduced motion by rendering the finished state. Pauses when offscreen.
 */
export function CallLine() {
  const [time, setTime] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);
  const activeRef = useRef(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const root = rootRef.current;
    const observer = root
      ? new IntersectionObserver(([entry]) => {
          activeRef.current = entry.isIntersecting;
          if (entry.isIntersecting && !frameRef.current) {
            startRef.current = null;
            frameRef.current = requestAnimationFrame(frame);
          }
        })
      : null;

    function frame(now: number) {
      if (!activeRef.current) {
        frameRef.current = 0;
        return;
      }
      if (startRef.current === null) startRef.current = now;
      const elapsed = (now - startRef.current) % (LOOP_MS + HOLD_MS);
      const next =
        elapsed >= LOOP_MS
          ? CALL_DURATION_SECONDS
          : (elapsed / LOOP_MS) * CALL_DURATION_SECONDS;
      setTime(next);
      frameRef.current = requestAnimationFrame(frame);
    }

    if (root) observer?.observe(root);
    frameRef.current = requestAnimationFrame(frame);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [reduceMotion]);

  const shown = reduceMotion ? CALL_DURATION_SECONDS : time;
  let activeIndex = 0;
  callMoments.forEach((moment, index) => {
    if (shown >= moment.at) activeIndex = index;
  });
  const active = callMoments[activeIndex];

  function hearCall(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("hear-a-real-call");
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new Event(PLAY_DEMO_CALL_EVENT));
    if (window.location.hash !== "#hear-a-real-call") {
      history.replaceState(null, "", "#hear-a-real-call");
    }
  }

  return (
    <div
      className="call-line"
      ref={rootRef}
      aria-label="One real call, 3 minutes 28 seconds, from answered to consultation booked"
    >
      <div className="call-line-head">
        <h2 className="call-line-title">Listen to one real call.</h2>
        <span className="call-line-clock" aria-hidden="true">
          {formatClock(shown)} / {formatClock(CALL_DURATION_SECONDS)}
        </span>
      </div>

      <div className="call-line-track" aria-hidden="true">
        <div className="call-line-rail" />
        <div className="call-line-fill" style={{ width: pct(shown) }} />
        <div className="call-line-ticks">
          {ticks.map((tick) => (
            <span key={tick} style={{ left: pct(tick) }}>
              {formatClock(tick)}
            </span>
          ))}
        </div>
        {callMoments.map((moment, index) => {
          const lit = shown >= moment.at;
          const classes = [
            "call-line-marker",
            `is-${moment.speaker}`,
            moment.label ? "has-label" : "is-quiet",
            moment.place === "below" ? "is-below" : "",
            index === 0 ? "is-first" : "",
            index === callMoments.length - 1 ? "is-last" : "",
            lit ? "is-lit" : "",
            index === activeIndex ? "is-on" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div className={classes} key={moment.at} style={{ left: pct(moment.at) }}>
              <i />
              {moment.label ? (
                <span className="call-line-label">
                  <small>{formatClock(moment.at)}</small>
                  <b>{moment.label}</b>
                </span>
              ) : null}
            </div>
          );
        })}
        <div className="call-line-playhead" style={{ left: pct(shown) }} />
      </div>

      <p
        className={`call-line-now${active.speaker === "caller" ? " is-caller" : ""}`}
        aria-live="polite"
      >
        <small>
          {formatClock(active.at)} · {speakerLabel[active.speaker]}
        </small>
        <span>{active.said}</span>
      </p>

      <div className="call-line-foot">
        <a className="call-line-play" href="#hear-a-real-call" onClick={hearCall}>
          <b>
            <Play size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </b>
          Play the whole call · {formatClock(CALL_DURATION_SECONDS)}
        </a>
        <span>Nobody on staff had to pick up. The consultation was on the calendar before the call ended.</span>
      </div>
    </div>
  );
}
