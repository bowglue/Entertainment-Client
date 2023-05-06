import styled from "styled-components";
import useMountTransition from "../../../hooks/useMountTransition";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { MountedTranslate, UnMountedTranslateOpacity } from "./HeaderAnimation";

const HeaderHomeCardContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  grid-area: 1/1;
  min-height: 0;
  animation-name: ${({ isVisible }) =>
    isVisible ? MountedTranslate : UnMountedTranslateOpacity};
  animation-duration: 1000ms;
  /* animation-timing-function: ease; */
  animation-fill-mode: forwards;
  height: 100%;
`;

const HeaderHomeCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  left: 4vw;
  bottom: 5vw;
  width: 25%;
`;

function HeaderHomeCard({
  data,
  isVisible,
}: {
  data: IEntertainmentData;
  isVisible: boolean;
}) {
  const shouldRender = useMountTransition(isVisible, 1000);
  return (
    <>
      {shouldRender && (
        <HeaderHomeCardContainer isVisible={isVisible}>
          <HeaderHomeCardImg src={data.focus} />
          <CardOverlay>
            <img style={{ width: "100%" }} src={data.logo} alt="Title" />
          </CardOverlay>
        </HeaderHomeCardContainer>
      )}
    </>
  );
}

export default HeaderHomeCard;
