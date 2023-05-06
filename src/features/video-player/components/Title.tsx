import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  /* justify-content: center; */
`;

const Title = () => {
  return <TitleContainer>Video Title</TitleContainer>;
};

export default Title;
