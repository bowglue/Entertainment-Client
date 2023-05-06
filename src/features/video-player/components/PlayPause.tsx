import styled from "styled-components";
import { backgroundEffect } from "../utils/ButtonHoverCss";

const PlayPauseContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  ${backgroundEffect}
`;

type PlayPauseProps = {
  togglePlay: () => void;
  isPlaying: boolean;
};

const PlayPause = ({ togglePlay, isPlaying }: PlayPauseProps) => {
  return (
    <PlayPauseContainer onClick={togglePlay}>
      {!isPlaying ? (
        <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
          <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
        </svg>
      ) : (
        <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
          <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z" />
        </svg>
      )}
    </PlayPauseContainer>
  );
};

export default PlayPause;
