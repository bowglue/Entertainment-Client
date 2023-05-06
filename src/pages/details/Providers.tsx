import React from "react";
import styled from "styled-components";
import { ProvidersData } from "../../utils/ProvidersData";
import DetailsSectionHeader from "./DetailsSectionHeader";

const ProvidersContainer = styled.div`
  position: "relative";
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;

  img {
    width: 10%;
    border-radius: 3px;
  }
`;

const Providers = () => {
  return (
    <>
      <DetailsSectionHeader>Providers</DetailsSectionHeader>
      <ProvidersContainer>
        {ProvidersData.map(({ id, provider }) => {
          return <img key={id} src={provider} alt="" />;
        })}
      </ProvidersContainer>
    </>
  );
};

export default Providers;
