import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  flex-grow: 1;
`;

const MainHeaderContainer = styled.div`
  /* background-color: blue; */
  position: relative;
  width: 100%;
  height: 35vw;
  padding: 71px 0;
`;

const MainGenresContainer = styled.div`
  background-color: red;
  margin: 1vw 0;
  position: relative;
`;

const MainSlidersContainer = styled.div`
  /* background-color: orange; */
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 4vw;
  /* min-height: 100vh; */
`;

function Main({ children }: any) {
  return <MainContainer>{children}</MainContainer>;
}

Main.Header = ({ children }: any) => {
  return <MainHeaderContainer>{children}</MainHeaderContainer>;
};

Main.Genres = ({ children }: any) => {
  return <MainGenresContainer>{children}</MainGenresContainer>;
};

Main.Sliders = ({ children }: any) => {
  return <MainSlidersContainer>{children}</MainSlidersContainer>;
};

export default Main;
