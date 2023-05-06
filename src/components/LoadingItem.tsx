import React from "react";
import styled, { keyframes } from "styled-components";

const pulsationAnimation = keyframes`
from{left: -100%}
to{left: 100%}
`;

const LoadingItemContainer = styled.div<{ padding: string }>`
  position: relative;
  background-color: #1a1a1a;
  overflow: hidden;
  padding: ${({ padding }) => padding};
  border-radius: 3px;
`;

const Pulsation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #2b2b2b, transparent);
  animation: 1.5s ${pulsationAnimation} linear infinite;
`;

const LoadingItem = ({ padding }: { padding: string }) => {
  return (
    <LoadingItemContainer padding={padding}>
      <Pulsation />
    </LoadingItemContainer>
  );
};

export default LoadingItem;
