"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { duration as recordedDuration, turns } from "@/components/voice-demo-data";

export function useCallAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const bindAudio = useCallback((node: HTMLAudioElement | null) => {
    audioRef.current = node;
    setAudio(node);
  }, []);

  useEffect(() => {
    if (!audio) return;
    let frame = 0;

    const tick = () => {
      setTime(audio.currentTime);
      frame = window.requestAnimationFrame(tick);
    };

    const onPlay = () => {
      setPlaying(true);
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(tick);
    };
    const onPause = () => {
      setPlaying(false);
      window.cancelAnimationFrame(frame);
      setTime(audio.currentTime);
    };
    const onEnded = () => {
      setPlaying(false);
      window.cancelAnimationFrame(frame);
      setTime(audio.duration || recordedDuration);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    return () => {
      window.cancelAnimationFrame(frame);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audio]);

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  }

  function seekToRatio(ratio: number) {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Math.min(1, Math.max(0, ratio)) * (audio.duration || recordedDuration);
    audio.currentTime = next;
    setTime(next);
  }

  function seekFromClientX(clientX: number, element: HTMLElement | null) {
    const bounds = element?.getBoundingClientRect();
    if (!bounds || bounds.width === 0) return;
    seekToRatio((clientX - bounds.left) / bounds.width);
  }

  let activeIndex = -1;
  for (let index = 0; index < turns.length; index += 1) {
    if (time >= turns[index].start) activeIndex = index;
  }

  const progress = recordedDuration > 0 ? Math.min(1, time / recordedDuration) : 0;

  return {
    audioRef,
    bindAudio,
    playing,
    time,
    progress,
    activeIndex,
    togglePlayback,
    seekToRatio,
    seekFromClientX,
  };
}
