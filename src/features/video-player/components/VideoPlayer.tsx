import styled from "styled-components";
import useDashPlayer from "../../../hooks/useDashPlayer";
import useControls from "../hooks/useControls";
import Controls from "./Controls";

const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  /* max-height: 100vh; */
`;

const Video = styled.video`
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
`;

const VideoPlayer = () => {
  const { videoRef } = useDashPlayer("335984.mpd");
  const controls = useControls(videoRef);
  const {
    videoContainerRef,
    handleTimeUpdate,
    handleDurationChange,
    togglePlay,
  } = controls;

  return (
    <VideoPlayerContainer ref={videoContainerRef}>
      <Video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onClick={togglePlay}
      />
      <Controls {...controls} />
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
