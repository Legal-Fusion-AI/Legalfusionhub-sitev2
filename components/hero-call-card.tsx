"use client";

import { Pause, Play } from "lucide-react";
import { audioSrc, duration } from "@/components/voice-demo-data";
import { useCallAudio } from "@/components/use-call-audio";

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = String(safe % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

export function HeroCallCard() {
  const { bindAudio, playing, time, togglePlayback } = useCallAudio();

  return (
    <aside className="rp-call-card">
      <p className="rp-call-kicker">
        Real call. No human touched it.{" "}
        <span>{formatTime(playing || time > 0 ? time : duration)}</span>
      </p>
      <audio ref={bindAudio} preload="metadata" src={audioSrc} />
      <div className="rp-phone">
        <div className="rp-phone-screen">
          <p className="rp-phone-missed">
            <i /> Missed
          </p>
          <p className="rp-phone-answered">
            Answered 24/7
            <span />
          </p>
          <button
            type="button"
            className="rp-phone-play"
            aria-label={playing ? "Pause recording" : "Play the recorded after-hours call"}
            onClick={togglePlayback}
          >
            {playing ? <Pause size={28} aria-hidden="true" /> : <Play size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <a className="rp-transcript-link" href="#call-transcript">
        Read the call transcript
      </a>
    </aside>
  );
}
