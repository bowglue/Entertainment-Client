import styled from "styled-components";
import {
  default as CoverGradient,
  default as GradientItem,
} from "../../../components/GradientItem";
import PosterCard from "../../../components/PosterCard";
import {
  GradientCover,
  GradientPreviewCoverPoster,
  GradientPreviewVideoPoster,
} from "../../../utils/Gradient";
import usePosterPreviewElementStyle from "../hooks/usePosterPreviewElementStyle";
import { PreviewCardProps } from "../interface/IPreview";
import {
  PreviewCoverPosterAnimation,
  PreviewVideoPosterAnimation,
} from "./PreviewAnimation";
import PreviewCover from "./PreviewCover";
import PreviewVideo from "./PreviewVideo";

type PreviewPosterContainerProps = {
  width: number;
  height: number;
  isHidden: boolean;
};

const PreviewPosterContainer = styled.div<PreviewPosterContainerProps>`
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
`;

const PreviewPoster = ({
  metadata,
  previewBounding,
  isHidden,
  windowData,
  handleTransitionEnd,
  onMouseLeave,
  itemID,
}: PreviewCardProps) => {
  usePosterPreviewElementStyle({
    previewBounding,
    windowData,
    itemID,
    isHidden,
  });

  const previewWideContainerProps = {
    width: previewBounding.width,
    height: previewBounding.height,
    isHidden,
  };

  const previewVideoContainerProps = {
    isHidden,
    metadata,
    animation: PreviewVideoPosterAnimation(isHidden, previewBounding.width),
  };

  const PreviewCoverProps = {
    isHidden,
    height: previewBounding.height,
    width: previewBounding.width,
    animation: PreviewCoverPosterAnimation(isHidden, previewBounding.width),
  };

  const posterCardProps = {
    metadata,
    request: false,
  };

  return (
    <PreviewPosterContainer
      {...previewWideContainerProps}
      onTransitionEnd={handleTransitionEnd}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <PreviewVideo {...previewVideoContainerProps}>
        <CoverGradient isHidden={false} gradient={GradientPreviewVideoPoster} />
      </PreviewVideo>
      <PreviewCover
        {...PreviewCoverProps}
        onTransitionEnd={(event) => event.stopPropagation()}
      >
        <PosterCard {...posterCardProps}>
          <GradientItem isHidden={!isHidden} gradient={GradientCover} />
          <GradientItem
            isHidden={isHidden}
            gradient={GradientPreviewCoverPoster}
          />
        </PosterCard>
      </PreviewCover>
    </PreviewPosterContainer>
  );
};

export default PreviewPoster;
