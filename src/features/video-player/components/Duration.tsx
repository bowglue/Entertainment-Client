import React from "react";
import styled from "styled-components";
const DurationContainer = styled.div`
  color: #fff;
  font-size: 16px;
  min-width: fit-content;

  padding: 0.3rem;
`;

type DurationProps = {
  children: React.ReactNode;
};
const Duration = ({ children }: DurationProps) => {
  return <DurationContainer>{children}</DurationContainer>;
};

export default Duration;
