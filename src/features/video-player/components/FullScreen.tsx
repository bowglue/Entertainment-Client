import React from "react";
import styled from "styled-components";
import { backgroundEffect } from "../utils/ButtonHoverCss";

const FullScreenButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  ${backgroundEffect}
`;

type FullScreenProps = {
  toggleFullScreen: () => void;
  isFullScreen: boolean;
};
const FullScreen = ({ toggleFullScreen, isFullScreen }: FullScreenProps) => {
  return (
    <FullScreenButton onClick={toggleFullScreen}>
      {!isFullScreen ? (
        <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z" />
        </svg>
      ) : (
        <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2z" />
        </svg>
      )}
    </FullScreenButton>
  );
};

export default FullScreen;
