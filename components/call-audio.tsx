"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatClock } from "@/components/call-line-data";
import type { DemoCallTurn } from "@/lib/demo-call";

export const PLAY_DEMO_CALL_EVENT = "play-demo-call";

type CallAudioProps = {
  src: string;
  captions?: string;
  turns: DemoCallTurn[];
  durationSeconds: number;
  tag?: string;
};

/**
 * Audio player for the recorded demo call. Shows the line being spoken as it
 * plays. Starts when the hero's "Play the full call" link fires the
 * play-demo-call event.
 */
export function CallAudio({
  src,
  captions,
  turns,
  durationSeconds,
  tag,
}: CallAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(durationSeconds);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    void audio.play();
  }, []);

  useEffect(() => {
    window.addEventListener(PLAY_DEMO_CALL_EVENT, play);
    return () => window.removeEventListener(PLAY_DEMO_CALL_EVENT, play);
  }, [play]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void audio.play();
    else audio.pause();
  }

  function seek(event: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Number(event.target.value);
    audio.currentTime = next;
    setCurrent(next);
  }

  let activeIndex = -1;
  turns.forEach((turn, index) => {
    if (current >= turn.at) activeIndex = index;
  });
  const active = activeIndex >= 0 ? turns[activeIndex] : null;
  const started = current > 0 || playing;

  return (
    <div className="call-audio">
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => {
          const d = event.currentTarget.duration;
          if (Number.isFinite(d) && Math.abs(d - durationSeconds) > 1) setDuration(d);
        }}
      >
        <source src={src} type="audio/mpeg" />
        {captions ? (
          <track kind="captions" src={captions} srcLang="en" label="English" />
        ) : null}
      </audio>

      <div className="call-audio-row">
        <button
          type="button"
          className="call-audio-toggle"
          onClick={toggle}
          aria-label={playing ? "Pause the recorded call" : "Play the recorded call"}
        >
          {playing ? (
            <Pause size={24} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          ) : (
            <Play size={24} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          )}
        </button>
        <div className="call-audio-body">
          <div className="call-audio-meta">
            <span>{tag ?? "Recorded call"}</span>
            <span className="call-audio-time">
              {formatClock(current)} / {formatClock(duration)}
            </span>
          </div>
          <input
            className="call-audio-seek"
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={Math.min(current, duration)}
            onChange={seek}
            aria-label="Position in the recorded call"
            style={{ "--progress": `${(Math.min(current, duration) / duration) * 100}%` } as React.CSSProperties}
          />
        </div>
      </div>

      <p
        className={`call-audio-now${active?.speaker === "caller" ? " is-caller" : ""}`}
        aria-live="polite"
      >
        {active && started ? (
          <>
            <small>
              {active.start} · {active.label}
            </small>
            <span>{active.text}</span>
          </>
        ) : (
          <>
            <small>Press play</small>
            <span>The transcript follows along as the call plays.</span>
          </>
        )}
      </p>
    </div>
  );
}
