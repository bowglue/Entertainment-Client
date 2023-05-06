import styled from "styled-components";
import useFetchImage from "../features/slider/hooks/useFetchImage";
import usehandleCover from "../features/slider/hooks/useHandleCover";
// import useFetchImage from "../hooks/useFetchImage";
import { ICoverCardProps } from "../interface/EntertainmentDataInterface";

import CoverImage from "./CoverImage";
import CoverTitle from "./CoverTitle";
import LoadingItem from "./LoadingItem";

const WideCardContainer = styled.div`
  position: relative;
  height: 100%;
`;

const WideCard = ({
  metadata,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  itemRef,
  request = true,
}: ICoverCardProps) => {
  const { wide, logo } = metadata;
  return (
    <>
      {!metadata.wide || !metadata.logo ? (
        <LoadingItem padding={"28% 0"} />
      ) : (
        <WideCardContainer
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={itemRef}
        >
          <CoverImage src={wide} alt="" />
          {children}
          <CoverTitle
            src={logo}
            alt="Video Title Image"
            style={{ left: "0.5vw", bottom: "0.5vw" }}
          />
        </WideCardContainer>
      )}
    </>
  );
};

export default WideCard;
