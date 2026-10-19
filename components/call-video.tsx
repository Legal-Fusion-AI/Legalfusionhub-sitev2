"use client";

import { Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const MP4 = "/media/unanswered-combined.mp4";
const VTT = "/media/unanswered-combined.vtt";
const POSTER = "/media/unanswered-combined-poster.jpg";

type CallVideoProps = {
  src?: string;
  captions?: string;
  poster?: string;
  ariaLabel?: string;
  listenForHeroPlay?: boolean;
};

export function CallVideo({
  src = MP4,
  captions = VTT,
  poster = POSTER,
  ariaLabel = "Recorded after-hours call answered by AI, with captions",
  listenForHeroPlay = true,
}: CallVideoProps) {
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
    if (!listenForHeroPlay) return;
    function onPlayRequest() {
      start();
    }
    window.addEventListener("play-call-video", onPlayRequest);
    return () => window.removeEventListener("play-call-video", onPlayRequest);
  }, [listenForHeroPlay, start]);

  return (
    <div className="call-video-frame">
      <video
        ref={videoRef}
        className="call-video-el"
        poster={poster}
        preload="metadata"
        playsInline
        controls={started}
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src={captions} srcLang="en" label="English" default />
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
