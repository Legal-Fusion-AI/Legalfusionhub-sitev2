"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ExampleClip } from "@/components/examples-data";

export function ClipPlayer({ clip }: { clip: ExampleClip }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audio = clip.audio;
  const span = audio ? Math.max(0.001, audio.end - audio.start) : 0;

  useEffect(() => {
    const node = audioRef.current;
    if (!node || !audio) return;

    const onTime = () => {
      if (node.currentTime >= audio.end) {
        node.pause();
        node.currentTime = audio.start;
        setPlaying(false);
        setProgress(1);
        return;
      }
      setProgress(Math.min(1, (node.currentTime - audio.start) / span));
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    node.addEventListener("timeupdate", onTime);
    node.addEventListener("play", onPlay);
    node.addEventListener("pause", onPause);
    return () => {
      node.removeEventListener("timeupdate", onTime);
      node.removeEventListener("play", onPlay);
      node.removeEventListener("pause", onPause);
    };
  }, [audio, span]);

  if (!audio) {
    return (
      <div className="clip-placeholder" role="note">
        <span className="clip-placeholder-tag">Sample clip</span>
        <p>Audio clip pending. Drop the recording in and it plays here.</p>
        {clip.assetNeeded ? <p className="clip-placeholder-need">{clip.assetNeeded}</p> : null}
      </div>
    );
  }

  function toggle() {
    const node = audioRef.current;
    if (!node) return;
    if (node.paused) {
      if (node.currentTime < audio!.start || node.currentTime >= audio!.end - 0.05) {
        node.currentTime = audio!.start;
      }
      void node.play();
    } else {
      node.pause();
    }
  }

  return (
    <div className="clip-player">
      <audio ref={audioRef} preload="none" src={audio.src} />
      <button
        type="button"
        className="clip-play"
        aria-label={playing ? "Pause clip" : "Play clip"}
        onClick={toggle}
      >
        {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
      </button>
      <span className="clip-track" aria-hidden="true">
        <span className="clip-track-fill" style={{ transform: `scaleX(${progress})` }} />
      </span>
      <span className="clip-length">{clip.length}</span>
    </div>
  );
}
