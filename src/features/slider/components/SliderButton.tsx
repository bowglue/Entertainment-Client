import React from "react";
import styled from "styled-components";
import LeftSliderIcon from "../../../assets/icons/left_slider_button.png";
import RightSliderIcon from "../../../assets/icons/right_slider_button.png";

type PositionType = "left" | "right";

const SliderButtonContainer = styled.div<{ position: PositionType }>`
  position: absolute;
  cursor: pointer;
  ${({ position }) => (position === "right" ? "right: 0 " : "left: 0")};
  bottom: 0;
  height: 100%;
  width: calc(3vw - 0.3vw);
  z-index: 1;
`;

const ButtonImg = styled.img`
  transition: scale 300ms ease;
`;

interface SliderButtonMaskProps {
  position: PositionType;
  showButton: boolean;
}

const SliderButtonMask = styled.div<SliderButtonMaskProps>`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  translate: ${({ position, showButton }) =>
    showButton ? "0%" : position === "right" ? "100%" : "-100%"};
  transition: translate 300ms ease;

  &:hover ${ButtonImg} {
    scale: 1.5;
  }
`;

interface ISliderButton {
  position: PositionType;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  showButton: boolean;
}

function SliderButton({ position, onClick, showButton }: ISliderButton) {
  const icon = position === "right" ? RightSliderIcon : LeftSliderIcon;
  const sliderButtonMaskProps = {
    position,
    onClick,
    showButton,
  };
  return (
    <SliderButtonContainer position={position}>
      <SliderButtonMask {...sliderButtonMaskProps}>
        <ButtonImg src={icon} alt="" />
      </SliderButtonMask>
    </SliderButtonContainer>
  );
}

export default SliderButton;
