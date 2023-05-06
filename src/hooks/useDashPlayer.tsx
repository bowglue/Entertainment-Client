import dashjs from "dashjs";
import { useEffect, useRef } from "react";

const useDashPlayer = (manifest: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<dashjs.MediaPlayerClass | null>(null);

  useEffect(() => {
    initPlayer();
    return () => {
      if (playerRef.current) playerRef.current.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initPlayer = () => {
    const url = "/videos/" + manifest;
    // const url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
    const newPlayer = dashjs.MediaPlayer().create();
    newPlayer.initialize(videoRef.current!, url, false);
    playerRef.current = newPlayer;
    canPlay();
    videoEnded();
  };

  function canPlay() {
    playerRef.current?.on(
      dashjs.MediaPlayer.events["CAN_PLAY"],
      function canPlay() {
        playerRef.current?.off(dashjs.MediaPlayer.events["CAN_PLAY"], canPlay);
      }
    );
  }

  function videoEnded() {
    playerRef.current?.on(
      dashjs.MediaPlayer.events["PLAYBACK_ENDED"],
      function ended() {
        playerRef.current?.off(
          dashjs.MediaPlayer.events["PLAYBACK_ENDED"],
          ended
        );
      }
    );
  }

  return { videoRef, playerRef };
};

export default useDashPlayer;
