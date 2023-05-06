import React from "react";
import styled, { css } from "styled-components";
import Duration from "./Duration";
import FastForward from "./FastForward";
import FullScreen from "./FullScreen";
import PlayPause from "./PlayPause";
import Timeline from "./Timeline";
import Volume from "./Volume";

type ControlsContainerProps = {
  showControls: boolean;
};

const ControlsContainer = styled.div<ControlsContainerProps>`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  z-index: 100;
  opacity: 1;
  pointer-events: all;
  transition: opacity 300ms ease;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    width: 100%;
    aspect-ratio: 6/1;
    z-index: -1;
    pointer-events: none;
  }

  ${({ showControls }) =>
    !showControls &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

const ControlsTimeline = styled.div`
  display: flex;
  align-items: center;
  margin-inline: 0.7rem;
`;

const StyledControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 0.5rem;
  width: 100%;
  padding: 0px 16px;
  margin-bottom: 0.7rem;
  box-sizing: border-box;
`;

const StyledControlsLeft = styled.div`
  display: flex;
  column-gap: 0.7rem;
`;

const StyledControlsRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type ControlsProps = {
  currentTime: string;
  handlePreviewOnMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleToogleScrubbing: (e: React.MouseEvent<HTMLDivElement>) => void;
  timelineRef: React.RefObject<HTMLDivElement>;
  duration: string;
  togglePlay: () => void;
  isPlaying: boolean;
  handleFastForward: (args0: number) => void;
  volume: number;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVolume: () => void;
  toggleFullScreen: () => void;
  isFullScreen: boolean;
  showControls: boolean;
};

const Controls = ({
  currentTime,
  handlePreviewOnMouseMove,
  handleToogleScrubbing,
  timelineRef,
  duration,
  togglePlay,
  isPlaying,
  handleFastForward,
  volume,
  handleVolumeChange,
  toggleVolume,
  toggleFullScreen,
  isFullScreen,
  showControls,
}: ControlsProps) => {
  return (
    <ControlsContainer showControls={showControls}>
      <ControlsTimeline>
        <Duration>{currentTime}</Duration>
        <Timeline
          previewOnMouseMove={handlePreviewOnMouseMove}
          toggleScrubbing={handleToogleScrubbing}
          timelineRef={timelineRef}
        />
        <Duration>{duration}</Duration>
      </ControlsTimeline>
      <StyledControls>
        <StyledControlsLeft>
          <PlayPause {...{ togglePlay, isPlaying }} />
          <FastForward {...{ handleFastForward }} />
          <Volume
            {...{
              volume,
              handleVolumeChange,
              toggleVolume,
            }}
          />
        </StyledControlsLeft>
        {/* <StyledControlsCenter>
          <Title />
        </StyledControlsCenter> */}
        <StyledControlsRight>
          <FullScreen {...{ toggleFullScreen, isFullScreen }} />
        </StyledControlsRight>
      </StyledControls>
    </ControlsContainer>
  );
};

export default Controls;
