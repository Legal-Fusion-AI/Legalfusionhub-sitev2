"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

const MP4 = "/media/unanswered-call.mp4";
const VTT = "/media/unanswered-call.vtt";
const POSTER = "/media/unanswered-poster.jpg";

export function CallVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function start() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    const track = video.textTracks[0];
    if (track) track.mode = "showing";
    void video.play();
  }

  return (
    <div className="call-video-frame">
      <video
        ref={videoRef}
        className="call-video-el"
        poster={POSTER}
        preload="metadata"
        playsInline
        controls={started}
        aria-label="Recorded after-hours call answered by AI, with captions"
      >
        <source src={MP4} type="video/mp4" />
        <track kind="captions" src={VTT} srcLang="en" label="English" default />
      </video>
      {started ? null : (
        <button
          type="button"
          className="call-video-play"
          aria-label="Play the recorded after-hours call"
          onClick={start}
        >
          <Play size={26} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
