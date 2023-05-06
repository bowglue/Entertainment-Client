import styled from "styled-components";
import useFetchImage from "../features/slider/hooks/useFetchImage";
import usehandleCover from "../features/slider/hooks/useHandleCover";
import { ICoverCardProps } from "../interface/EntertainmentDataInterface";
import CoverImage from "./CoverImage";
import CoverTitle from "./CoverTitle";
import LoadingItem from "./LoadingItem";

const PosterCardContainer = styled.div`
  position: relative;
  height: 100%;
`;

const PosterCard = ({
  metadata,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  itemRef,
  request = true,
}: ICoverCardProps) => {
  const { poster, logo } = metadata;
  return (
    <>
      {!metadata.wide || !metadata.logo ? (
        <LoadingItem padding={"75% 0"} />
      ) : (
        <PosterCardContainer
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={itemRef}
        >
          <CoverImage src={poster} alt="" />
          {children}
          <CoverTitle
            src={logo}
            alt="Video Title Image"
            style={{ left: "0", right: "0", bottom: "1.5vw", width: "60%" }}
          />
        </PosterCardContainer>
      )}
    </>
  );
};

export default PosterCard;
