import React, { useEffect, useRef, useState } from "react";

const useControls = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", updateFullScreen, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", updateFullScreen);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullScreen, isPlaying]);

  useEffect(() => {
    if (!videoContainerRef.current) return;
    const videoContainer = videoContainerRef.current;
    videoContainer.addEventListener("mousemove", handleMouseMove);
    return () => {
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleKeyDown(e: KeyboardEvent) {
    const tagName = document.activeElement?.tagName.toLowerCase();
    if (tagName === "input") return;
    switch (e.key.toLowerCase()) {
      case "f":
        toggleFullScreen();
        break;
      case "arrowright":
        handleFastForward(10);
        break;
      case "arrowleft":
        handleFastForward(-10);
        break;
      case " ":
        togglePlay();
        break;
      default:
        break;
    }
  }

  function handleMouseMove() {
    if (!videoContainerRef.current) return;
    videoContainerRef.current.style.cursor = "default";
    setShowControls(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!videoContainerRef.current) return;
      setShowControls(false);
      videoContainerRef.current.style.cursor = "none";
    }, 3000);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
    return !isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  }

  function toggleFullScreen() {
    if (!videoContainerRef.current) return;
    const videoContainer = videoContainerRef.current;
    if (!isFullScreen) return videoContainer.requestFullscreen();
    document.exitFullscreen();
  }

  function updateFullScreen() {
    setIsFullScreen(!isFullScreen);
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVolume(e.target.valueAsNumber);
    videoRef.current!.volume = e.target.valueAsNumber;
    videoRef.current!.muted = false;
  }

  function toggleVolume() {
    videoRef.current!.muted = !videoRef.current!.muted;
    const volume = videoRef.current?.muted ? 0 : videoRef.current?.volume!;
    setVolume(volume);
  }

  function handleTimeUpdate() {
    if (!timelineRef.current || !videoRef.current) return;
    const percent = videoRef.current.currentTime / videoRef.current.duration;
    timelineRef.current.style.setProperty(
      "--progress-position",
      percent.toString()
    );
    setCurrentTime(videoRef.current.currentTime || 0);
  }

  function handleDurationChange() {
    setDuration(videoRef.current?.duration || 0);
  }

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function handleFastForward(time: number) {
    if (!videoRef.current) return;
    videoRef.current.currentTime = videoRef.current.currentTime + time;
  }

  function handlePreviewOnMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!timelineRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    timelineRef.current.style.setProperty(
      "--preview-position",
      percent.toString()
    );
  }

  function handleToogleScrubbing(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    handleScrubbe(e);
    document.addEventListener("mousemove", handleScrubbe);
    document.addEventListener("mouseup", function ok(e) {
      document.removeEventListener("mousemove", handleScrubbe);
      document.removeEventListener("mouseup", ok);
    });
  }

  function handleScrubbe(e: MouseEvent | React.MouseEvent<HTMLDivElement>) {
    if (!timelineRef.current || !videoRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    timelineRef.current.style.setProperty(
      "--progress-position",
      percent.toString()
    );

    videoRef.current.currentTime = percent * videoRef.current.duration;
    setCurrentTime(videoRef.current.currentTime);
  }
  return {
    currentTime: formatTime(currentTime),
    handlePreviewOnMouseMove,
    handleToogleScrubbing,
    timelineRef,
    duration: formatTime(duration),
    togglePlay,
    isPlaying,
    handleFastForward,
    volume,
    handleVolumeChange,
    toggleVolume,
    toggleFullScreen,
    isFullScreen,
    handleDurationChange,
    handleTimeUpdate,
    videoContainerRef,
    showControls,
  };
};

export default useControls;
