import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailsBackground from "./DetailsBackground";
import DetailsDivider from "./DetailsDivider";
import DetailsHeader from "./DetailsHeader";
import DetailsMain from "./DetailsMain";
import Providers from "./Providers";
import Recommendation from "./Recommendation";
import { IEntertainmentData } from "../../interface/EntertainmentDataInterface";
import { useEffect, useState } from "react";

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const DetailsContent = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 80px 0;
  max-width: 1920px;
  width: 100%;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  /* row-gap: 0.75rem; */
`;

const empty: IEntertainmentData = {
  id: 0,
  title: "",
  wide: "",
  poster: "",
  focus: "",
  logo: "",
  genres: "",
  releaseDate: 0,
};

const Details = () => {
  const { state } = useLocation();
  const [metadata, setMetadata] = useState<IEntertainmentData>(empty);
  useEffect(() => {
    setMetadata(state.metadata);
  }, []);
  return (
    <DetailsContainer key={metadata.id}>
      <DetailsBackground src={metadata.focus} />
      <DetailsContent>
        <DetailsHeader metadata={metadata} />
        <DetailsDivider style={{ margin: "0.5rem 0 1.25rem" }} />
        <DetailsMain metadata={metadata} />
        <Providers />
        <Recommendation metadata={metadata} />
      </DetailsContent>
    </DetailsContainer>
  );
};

export default Details;
