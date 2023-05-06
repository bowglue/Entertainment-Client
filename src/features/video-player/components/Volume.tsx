import React from "react";
import styled from "styled-components";
import { backgroundEffect } from "../utils/ButtonHoverCss";

const VolumeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
`;

const VolumeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  ${backgroundEffect}
`;

const VolumeInputContainer = styled.div`
  position: relative;
  border-radius: 3px;
  width: 120px;
  height: 100%;
  padding: 0 0.7rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
`;

const VolumeInput = styled.input.attrs({
  type: "range",
  min: "0",
  max: "1",
  step: "any",
})`
  /* appearance: none; */
  width: 100%;
  outline: none;
  height: 100%;
  padding: 0;
  margin: 0;
`;

type VolumeProps = {
  toggleVolume: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
};

const Volume = ({ volume, handleVolumeChange, toggleVolume }: VolumeProps) => {
  const [displayVolume, setDisplayVolume] = React.useState(false);
  function handleMouseEnter() {
    setDisplayVolume(true);
  }
  function handleMouseLeave() {
    setDisplayVolume(false);
  }

  const handleIcon = () => {
    if (volume === 0)
      return (
        <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
          <path d="M7 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L11 9H8c-.55 0-1 .45-1 1z" />
        </svg>
      );

    if (volume <= 0.5)
      return (
        <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
          <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1z" />
        </svg>
      );

    return (
      <svg height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF">
        <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z" />
      </svg>
    );
  };
  return (
    <VolumeContainer onMouseLeave={handleMouseLeave}>
      <VolumeButton onClick={toggleVolume} onMouseEnter={handleMouseEnter}>
        {handleIcon()}
      </VolumeButton>
      {displayVolume && (
        <VolumeInputContainer>
          <VolumeInput value={volume} onChange={handleVolumeChange} />
        </VolumeInputContainer>
      )}
    </VolumeContainer>
  );
};

export default Volume;
