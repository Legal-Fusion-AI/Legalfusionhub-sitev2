"use client";

import { Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const MP4 = "/media/unanswered-combined.mp4";
const VTT = "/media/unanswered-combined.vtt";
const POSTER = "/media/unanswered-combined-poster.jpg";

export function CallVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    const track = video.textTracks[0];
    if (track) track.mode = "showing";
    void video.play();
  }, []);

  useEffect(() => {
    function onPlayRequest() {
      start();
    }
    window.addEventListener("play-call-video", onPlayRequest);
    return () => window.removeEventListener("play-call-video", onPlayRequest);
  }, [start]);

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
