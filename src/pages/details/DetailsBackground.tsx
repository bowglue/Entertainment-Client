import React from "react";
import styled from "styled-components";

const DetailsBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* bottom: 120px; */

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        78.83deg,
        rgb(7, 7, 7),
        rgba(9, 13, 16, 0) 61.46%
      ),
      linear-gradient(
        1turn,
        rgb(7, 7, 7),
        rgba(9, 13, 16, 0) 48.44%,
        rgba(7, 7, 7, 0.4)
      );
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  opacity: 0.7;
`;

interface DetailsBackgroundProps {
  src: string;
}
const DetailsBackground = ({ src }: DetailsBackgroundProps) => {
  return (
    <DetailsBackgroundContainer>
      <Image src={src} alt="Background Image" />
    </DetailsBackgroundContainer>
  );
};

export default DetailsBackground;
