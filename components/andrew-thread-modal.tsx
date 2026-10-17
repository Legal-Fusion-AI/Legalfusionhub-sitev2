"use client";

import { RotateCcw, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  threadItems,
  threadTextStartIndex,
  type JourneyWho,
  type ThreadItem,
} from "@/components/andrew-journey-data";

const TYPING_MS = 650;

function senderName(who: JourneyWho): string {
  if (who === "andrew") return "Andrew";
  if (who === "donna") return "Donna";
  return "Nikki";
}

function side(item: ThreadItem): "in" | "out" {
  return item.kind === "msg" && item.who === "andrew" ? "in" : "out";
}

export function AndrewThreadModal({
  start,
  onClose,
}: {
  start: "lead" | "text";
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const startIndex = start === "text" ? threadTextStartIndex : 0;
  const total = threadItems.length;
  const max = total - startIndex;

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const [count, setCount] = useState(prefersReduced ? max : 1);
  const [showAll, setShowAll] = useState(prefersReduced);

  const done = showAll || count >= max;
  const shown = showAll ? max : count;
  const visible = threadItems.slice(startIndex, startIndex + shown);
  const nextItem = !done ? threadItems[startIndex + shown] : undefined;

  useEffect(() => {
    if (showAll || prefersReduced || count >= max) return;
    const timer = window.setTimeout(() => setCount((c) => Math.min(max, c + 1)), TYPING_MS);
    return () => window.clearTimeout(timer);
  }, [count, showAll, prefersReduced, max]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count, showAll, done]);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  function replay() {
    setShowAll(false);
    setCount(prefersReduced ? max : 1);
  }

  return (
    <div className="thread-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="thread-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="thread-head">
          <div>
            <p id={titleId} className="thread-title">
              Andrew&apos;s thread
            </p>
            <p className="thread-sub">One real lead, anonymized. Donna and Nikki, no staff.</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="thread-close"
            aria-label="Close the thread"
            onClick={onClose}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <div className="thread-log" ref={logRef} aria-live="polite">
          {visible.map((item, index) => {
            const previous = index > 0 ? visible[index - 1] : undefined;
            const chip = !previous || previous.stage !== item.stage ? item.stage : null;
            const isRetained = item.stage === "Retained";
            return (
              <div key={`${startIndex + index}-${item.text.slice(0, 8)}`}>
                {chip ? <p className="thread-stage">{chip}</p> : null}
                {item.kind === "event" && isRetained ? (
                  <p className="thread-retained">
                    <span>Retained</span>
                    {item.text}
                  </p>
                ) : item.kind === "event" ? (
                  <p className="thread-event">
                    <span className="thread-event-by">{senderName(item.who)}</span>
                    {item.text}
                  </p>
                ) : (
                  <div className={`thread-msg is-${side(item)}`}>
                    <span className="thread-who">{senderName(item.who)}</span>
                    <p className="thread-bubble">{item.text}</p>
                  </div>
                )}
              </div>
            );
          })}

          {!done && nextItem ? (
            <div className={`thread-msg is-${side(nextItem)}`} aria-hidden="true">
              <span className="thread-typing">
                <i />
                <i />
                <i />
              </span>
            </div>
          ) : null}
        </div>

        <footer className="thread-foot">
          {!done ? (
            <button type="button" className="thread-ctrl" onClick={() => setShowAll(true)}>
              Skip, show all
            </button>
          ) : (
            <button type="button" className="thread-ctrl" onClick={replay}>
              <RotateCcw size={15} aria-hidden="true" />
              Replay
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
