import React from "react";
import styled from "styled-components";
import { IEntertainmentData } from "../../interface/EntertainmentDataInterface";
const DetailsHeaderContainer = styled.div`
  position: relative;

  h2 {
    font-weight: 800;
    font-size: 48px;
    line-height: 50px;
    margin: 0;
  }

  h4 {
    font-size: 18px;
    line-height: 28px;
    color: #9699a3;
    margin: 0;
  }
`;

interface DetailsHeaderProps {
  metadata: IEntertainmentData;
}

const DetailsHeader = ({ metadata }: DetailsHeaderProps) => {
  const { title, genres, releaseDate } = metadata;
  return (
    <DetailsHeaderContainer>
      <h2>{title}</h2>
      <h4>{genres.replace(/,/g, " · ")}</h4>
      <h4>{releaseDate}</h4>
    </DetailsHeaderContainer>
  );
};

export default DetailsHeader;
