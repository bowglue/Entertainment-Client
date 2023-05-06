import React from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  height: 8px;
  margin-inline: 0.5rem;
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  align-items: center;
`;

const TimelineProgress = styled.div`
  background-color: rgba(100, 100, 100, 0.5);
  height: 4px;
  width: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  ${TimelineContainer}:hover & {
    height: 100%;
  }

  ${TimelineContainer}:hover &::before {
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: calc(100% - var(--preview-position) * 100%);
    background-color: rgb(150, 150, 150);
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: calc(100% - var(--progress-position) * 100%);
    background-color: rgb(255, 255, 255);
  }
`;

type TimelineProps = {
  previewOnMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  toggleScrubbing: (e: React.MouseEvent<HTMLDivElement>) => void;
  timelineRef: React.RefObject<HTMLDivElement>;
};

const Timeline = ({
  previewOnMouseMove,
  toggleScrubbing,
  timelineRef,
}: TimelineProps) => {
  return (
    <TimelineContainer
      onMouseMove={previewOnMouseMove}
      onMouseDown={toggleScrubbing}
      ref={timelineRef}
    >
      <TimelineProgress />
    </TimelineContainer>
  );
};

export default Timeline;
