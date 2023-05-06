import styled from "styled-components";
import GradientItem from "../../components/GradientItem";
import PosterCard from "../../components/PosterCard";
import { IEntertainmentData } from "../../interface/EntertainmentDataInterface";
import { GradientCover } from "../../utils/Gradient";
import DetailsPreview from "./DetailsPreview";

const DetailsMainContainer = styled.div`
  position: relative;
  display: grid;
  gap: 0.75rem 1rem;
  grid-template-columns: 1fr 3.75fr;
  grid-template-rows: auto 1fr 1fr;
  max-height: 690px;
`;

const Buttons = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 15px 15px;
  border: solid white;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 6px;
  width: "100%";
  font-weight: bold;

  &:hover {
    color: black;
    background-color: white;
  }
`;

interface DetailsMainProps {
  metadata: IEntertainmentData;
}

const DetailsMain = ({ metadata }: DetailsMainProps) => {
  return (
    <DetailsMainContainer>
      <PosterCard
        metadata={metadata}
        style={{ borderRadius: "3px", overflow: "hidden" }}
      >
        <GradientItem gradient={GradientCover} />
      </PosterCard>
      <Buttons>Watch Movie</Buttons>
      <Buttons>Add To My List</Buttons>
      <DetailsPreview metadata={metadata} />
    </DetailsMainContainer>
  );
};

export default DetailsMain;
