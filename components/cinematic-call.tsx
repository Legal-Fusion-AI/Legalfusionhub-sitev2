"use client";

import { Pause, Phone, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { audioSrc, duration, peaks, turns } from "@/components/voice-demo-data";
import { useCallAudio } from "@/components/use-call-audio";
import { donnaSampleTel } from "@/lib/homepage";

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = String(safe % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

export function CinematicCall() {
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
    <section className="nd-chapter nd-call is-lit" id="watch-call">
      <div className="nd-shell">
        <p className="nd-label">The call</p>
        <h2>Watch one call.</h2>
        <p className="nd-lead">Real after-hours intake. No human touched it.</p>
        <p className="nd-time-span">
          <span>late at night</span>
          <i aria-hidden="true" />
          <span>next morning</span>
        </p>

        <div className="nd-player">
          <audio ref={bindAudio} preload="metadata" src={audioSrc} />
          <div className="nd-player-stage">
            <button
              type="button"
              className="nd-play"
              aria-label={playing ? "Pause recording" : "Play the recorded after-hours call"}
              onClick={togglePlayback}
            >
              {playing ? <Pause size={22} aria-hidden="true" /> : <Play size={22} aria-hidden="true" />}
            </button>
            <div
              ref={waveformRef}
              className="nd-wave"
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
                    style={{ height: `${Math.max(18, peak * 100)}%` }}
                  />
                );
              })}
            </div>
            <p className="nd-time-readout">
              {formatTime(time)}
              <span> / {formatTime(duration)}</span>
            </p>
          </div>

          <div ref={transcriptRef} className="nd-transcript">
            <p className="nd-label">Scrubbed transcript</p>
            {turns.map((turn, index) => {
              const current = index === activeIndex;
              return (
                <button
                  key={turn.start}
                  type="button"
                  className="nd-line"
                  data-current={current ? "true" : "false"}
                  onClick={() => seekToRatio(turn.start / duration)}
                >
                  <span className="nd-speaker">{turn.speaker === "agent" ? "Donna" : "Caller"}</span>
                  <span className={current ? "is-current" : undefined}>{turn.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="nd-disclosure">
          Callers are told they are speaking with an AI assistant. Your firm
          approves the greeting.
        </p>

        <div className="nd-try">
          <a className="nd-try-link" href={`tel:${donnaSampleTel}`}>
            <Phone size={16} aria-hidden="true" />
            Try Donna now
          </a>
          <p>
            Hear Donna on a sample firm line. This is a sample experience —
            you’ll hear the AI disclosure. This line does not book or quote
            price. When you’re ready for your firm’s setup, book a demo with
            Jeff.
          </p>
        </div>

        <a className="nd-ghost nd-out-cue" href="#who-did-that">
          Who did that?
        </a>
      </div>
    </section>
  );
}
