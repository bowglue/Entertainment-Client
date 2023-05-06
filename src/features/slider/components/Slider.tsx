import { useState } from "react";
import styled from "styled-components";
import RowHeader from "../../../components/RowHeader";
import { useSliderContext } from "../context/SliderContext";
import { Item_Mapping } from "../utils/ItemMapping";
import SliderCarousel from "./SliderCarousel";

const SliderContainer = styled.div`
  position: relative;
  overflow-x: clip;
`;

function Slider() {
  const [showButton, setShowButton] = useState(false);
  const { header, cardType } = useSliderContext();
  const PosterProvider = Item_Mapping.get(cardType)?.PosterProvider;
  const Slider = (
    <SliderContainer
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <RowHeader>{header}</RowHeader>
      <SliderCarousel showButton={showButton} />
    </SliderContainer>
  );

  if (PosterProvider) return <PosterProvider>{Slider}</PosterProvider>;
  return Slider;
}

export default Slider;
