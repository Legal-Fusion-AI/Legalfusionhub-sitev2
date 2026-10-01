"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { audioSrc, duration, peaks, turns } from "@/components/voice-demo-data";
import { useCallAudio } from "@/components/use-call-audio";

const BUBBLE_KEY = "lfh-voice-bubble-dismissed";
const HIDDEN_PREFIXES = ["/demo"];

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = String(safe % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

export function VoiceDemoWidget() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const titleId = useId();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const {
    audioRef,
    bindAudio,
    playing,
    time,
    progress,
    activeIndex,
    togglePlayback,
    seekToRatio,
    seekFromClientX,
  } = useCallAudio();

  const hidden = HIDDEN_PREFIXES.some(
    (prefix) => pathname === prefix || pathname?.startsWith(`${prefix}/`),
  );

  useEffect(() => {
    if (hidden || open) return;
    if (window.sessionStorage.getItem(BUBBLE_KEY) === "1") return;
    const timer = window.setTimeout(() => setShowBubble(true), 4000);
    return () => window.clearTimeout(timer);
  }, [hidden, open]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      audioRef.current?.pause();
      setOpen(false);
      window.setTimeout(() => launcherRef.current?.focus(), 0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, audioRef]);

  useEffect(() => {
    const current = transcriptRef.current?.querySelector<HTMLElement>("[data-current='true']");
    current?.scrollIntoView({
      block: "nearest",
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [time, reducedMotion]);

  function closePanel() {
    audioRef.current?.pause();
    setOpen(false);
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }

  function dismissBubble() {
    setShowBubble(false);
    window.sessionStorage.setItem(BUBBLE_KEY, "1");
  }

  if (hidden) return null;

  return (
    <div className="voice-widget">
      <audio ref={bindAudio} preload="none" src={audioSrc} />
      <AnimatePresence>
        {showBubble && !open ? (
          <motion.div
            key="bubble"
            className="voice-widget-bubble"
            role="status"
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Hear our AI take a bankruptcy call</p>
            <button type="button" aria-label="Dismiss" onClick={dismissBubble}>
              <X size={14} aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.section
            key="panel"
            className="voice-widget-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="voice-widget-head">
              <Image src="/logo-mark.png" alt="" width={26} height={30} />
              <div>
                <p id={titleId}>Legal Fusion AI Intake</p>
                <span>Bankruptcy</span>
              </div>
              <button ref={closeRef} type="button" aria-label="Close call sample" onClick={closePanel}>
                <X size={18} aria-hidden="true" />
              </button>
            </header>

            <div className="voice-widget-player">
              <button
                type="button"
                className="voice-widget-play"
                aria-label={playing ? "Pause recording" : "Play recording"}
                onClick={togglePlayback}
              >
                {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
              </button>
              <div
                ref={waveformRef}
                className="voice-widget-wave"
                role="slider"
                tabIndex={0}
                aria-label="Seek in recording"
                aria-valuemin={0}
                aria-valuemax={Math.round(duration)}
                aria-valuenow={Math.round(time)}
                aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
                onPointerDown={(event) => {
                  event.currentTarget.setPointerCapture(event.pointerId);
                  seekFromClientX(event.clientX, waveformRef.current);
                }}
                onPointerMove={(event) => {
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    seekFromClientX(event.clientX, waveformRef.current);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") seekToRatio((time + 5) / duration);
                  if (event.key === "ArrowLeft") seekToRatio((time - 5) / duration);
                }}
              >
                {peaks.map((peak, index) => {
                  const played = (index + 1) / peaks.length <= progress;
                  return (
                    <span
                      key={index}
                      className={played ? "is-played" : undefined}
                      style={{ height: `${Math.max(14, peak * 100)}%` }}
                    />
                  );
                })}
              </div>
              <p className="voice-widget-time">
                {formatTime(time)} / {formatTime(duration)}
              </p>
            </div>

            <div ref={transcriptRef} className="voice-widget-transcript">
              {turns.map((turn, index) => {
                if (activeIndex < 0 || index > activeIndex) return null;
                const current = index === activeIndex;
                return (
                  <article key={turn.start} data-current={current ? "true" : "false"}>
                    <p className="voice-widget-speaker">
                      {turn.speaker === "agent" ? (
                        <Sparkles size={13} aria-hidden="true" />
                      ) : null}
                      {turn.speaker === "agent" ? "Agent" : "Caller"}
                    </p>
                    <p className={current ? "is-current" : undefined}>{turn.text}</p>
                  </article>
                );
              })}
            </div>

            <footer className="voice-widget-foot">
              <div>
                <p>This is a recording.</p>
                <p>Want to hear how our AI handles your real calls?</p>
              </div>
              <Link className="button button-accent" href={siteConfig.demoPath}>
                Book a demo
              </Link>
            </footer>
          </motion.section>
        ) : null}
      </AnimatePresence>

      {open ? null : (
        <button
          ref={launcherRef}
          type="button"
          className="voice-widget-launcher"
          aria-label="Hear a sample bankruptcy intake call"
          onClick={() => {
            dismissBubble();
            setOpen(true);
            void audioRef.current?.play();
          }}
        >
          <span className="voice-widget-pulse" aria-hidden="true" />
          <span className="voice-widget-pulse voice-widget-pulse-coral" aria-hidden="true" />
          <Image src="/logo-mark.png" alt="" width={44} height={51} />
        </button>
      )}
    </div>
  );
}
