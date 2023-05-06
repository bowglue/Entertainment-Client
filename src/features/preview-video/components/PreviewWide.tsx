import styled from "styled-components";
import GradientItem from "../../../components/GradientItem";
import CoverGradient from "../../../components/GradientItem";
import WideCard from "../../../components/WideCard";
import {
  GradientCover,
  GradientPreviewCoverWide,
  GradientPreviewVideoWide,
} from "../../../utils/Gradient";
import useWidePreviewElementStyle from "../hooks/useWidePreviewElementStyle";
import { PreviewCardProps } from "../interface/IPreview";
import {
  PreviewCoverWideAnimation,
  PreviewVideoWideAnimation,
} from "./PreviewAnimation";
import PreviewCover from "./PreviewCover";
import PreviewVideo from "./PreviewVideo";

type PreviewWideContainerProps = {
  width: number;
  height: number;
  isHidden: boolean;
};

const PreviewWideContainer = styled.div<PreviewWideContainerProps>`
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
`;

const PreviewWide = ({
  metadata,
  previewBounding,
  isHidden,
  windowData,
  handleTransitionEnd,
  onMouseLeave,
  itemID,
}: PreviewCardProps) => {
  useWidePreviewElementStyle({
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

  const PreviewVideoProps = {
    isHidden,
    width: previewBounding.width,
    metadata,
    animation: PreviewVideoWideAnimation(isHidden, previewBounding.height),
  };

  const PreviewCoverProps = {
    isHidden,
    height: previewBounding.height,
    width: previewBounding.width,
    animation: PreviewCoverWideAnimation(isHidden, previewBounding.height),
  };

  const wideCardProps = {
    metadata,
    request: false,
  };

  return (
    <PreviewWideContainer
      {...previewWideContainerProps}
      onTransitionEnd={handleTransitionEnd}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <PreviewVideo {...PreviewVideoProps}>
        <CoverGradient isHidden={false} gradient={GradientPreviewVideoWide} />
      </PreviewVideo>
      <PreviewCover {...PreviewCoverProps}>
        <WideCard {...wideCardProps}>
          <GradientItem isHidden={!isHidden} gradient={GradientCover} />
          <GradientItem
            isHidden={isHidden}
            gradient={GradientPreviewCoverWide}
          />
        </WideCard>
      </PreviewCover>
    </PreviewWideContainer>
  );
};

export default PreviewWide;
