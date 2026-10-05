"use client";

import { Pause, Play, Sparkles } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { audioSrc, duration, peaks, turns } from "@/components/voice-demo-data";
import { DemoCta } from "@/components/demo-cta";
import { useCallAudio } from "@/components/use-call-audio";

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
    const current = transcriptRef.current?.querySelector<HTMLElement>("[data-current='true']");
    current?.scrollIntoView({
      block: "nearest",
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [time, reducedMotion]);

  function seekFromPointer(clientX: number) {
    seekFromClientX(clientX, waveformRef.current);
  }

  return (
    <section className="section call-sample-section">
      <div className="shell call-sample">
        <div className="section-heading">
          <h2>Hear Hub take a real bankruptcy call.</h2>
          <p>
            A recorded intake conversation, from the first hello through a
            booked consultation.
          </p>
          <DemoCta lead="This is the call. The demo shows it on your line." />
        </div>
        <div className="call-sample-card">
          <audio ref={bindAudio} preload="none" src={audioSrc} />
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
          <div ref={transcriptRef} className="voice-widget-transcript call-sample-transcript">
            {turns.map((turn, index) => {
              const current = index === activeIndex;
              return (
                <article key={turn.start} data-current={current ? "true" : "false"}>
                  <p className="voice-widget-speaker">
                    {turn.speaker === "agent" ? <Sparkles size={13} aria-hidden="true" /> : null}
                    {turn.speaker === "agent" ? "Agent" : "Caller"}
                  </p>
                  <p className={current ? "is-current" : undefined}>{turn.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
