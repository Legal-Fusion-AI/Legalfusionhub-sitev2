"use client";

import Link from "next/link";
import { FileText, Pause, Phone, Play, Sparkles } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { audioSrc, duration, peaks, turns } from "@/components/voice-demo-data";
import { useCallAudio } from "@/components/use-call-audio";
import { donnaSampleTel } from "@/lib/homepage";
import { siteConfig } from "@/lib/site-config";

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = String(safe % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

export function CallSample() {
  const reducedMotion = useReducedMotion();
  const waveformRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"call" | "transcript">("call");
  const {
    bindAudio,
    playing,
    time,
    progress,
    activeIndex,
    togglePlayback,
    seekToRatio,
    seekFromClientX,
  } = useCallAudio();

  useEffect(() => {
    if (tab !== "transcript") return;
    const current = transcriptRef.current?.querySelector<HTMLElement>("[data-current='true']");
    current?.scrollIntoView({
      block: "nearest",
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [time, reducedMotion, tab]);

  function seekFromPointer(clientX: number) {
    seekFromClientX(clientX, waveformRef.current);
  }

  function playClip() {
    setTab("call");
    if (!playing) togglePlayback();
  }

  return (
    <section className="section call-sample-section" id="call">
      <div className="shell call-sample">
        <div className="section-heading">
          <h2>Hear a real after-hours intake.</h2>
          <p>
            A short clip from hello to a booked consultation. No human touched
            the call. The transcript below is scrubbed for privacy.
          </p>
        </div>
        <div className="call-sample-card">
          <audio ref={bindAudio} preload="none" src={audioSrc} />
          <div className="call-tabs" role="tablist" aria-label="Call proof">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "call"}
              className={tab === "call" ? "is-active" : undefined}
              onClick={playClip}
            >
              {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
              Play the recorded after-hours call
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "transcript"}
              className={tab === "transcript" ? "is-active" : undefined}
              onClick={() => setTab("transcript")}
            >
              <FileText size={15} aria-hidden="true" />
              Read the scrubbed transcript
            </button>
          </div>

          {tab === "call" ? (
            <div role="tabpanel">
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
                    seekFromPointer(event.clientX);
                  }}
                  onPointerMove={(event) => {
                    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                      seekFromPointer(event.clientX);
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
              <p className="call-one-liner">Donna on intake. Your calendar gets the consult.</p>
              <div className="call-try">
                <a className="call-try-link" href={`tel:${donnaSampleTel}`}>
                  <Phone size={16} aria-hidden="true" />
                  Try Donna now
                </a>
                <p className="call-try-label">Hear Donna on a sample firm line</p>
                <p className="call-try-note">
                  This is a sample experience — you’ll hear the AI disclosure.
                  This line does not book or quote price. When you’re ready
                  for your firm’s setup, book a demo with Jeff.
                </p>
                <Link className="button" href={siteConfig.demoPath}>
                  Book a demo
                </Link>
                <p className="hero-helper">Bring one recent inquiry.</p>
              </div>
            </div>
          ) : (
            <div role="tabpanel" ref={transcriptRef} className="voice-widget-transcript call-sample-transcript">
              {turns.map((turn, index) => {
                const current = index === activeIndex;
                return (
                  <article key={turn.start} data-current={current ? "true" : "false"}>
                    <p className="voice-widget-speaker">
                      {turn.speaker === "agent" ? <Sparkles size={13} aria-hidden="true" /> : null}
                      {turn.speaker === "agent" ? "Donna" : "Caller"}
                    </p>
                    <p className={current ? "is-current" : undefined}>{turn.text}</p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
