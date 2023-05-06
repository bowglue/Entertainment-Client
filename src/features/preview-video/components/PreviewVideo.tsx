import { useEffect, useRef, useState } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import CoverVideo from "../../../components/CoverVideo";
import { useAppSelector } from "../../../hooks/ReduxHooks";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { IPreviewDataMock } from "../../../utils/PreviewData";
import { getPreviewVideoAPI } from "../services/PreviewModalAPI";
import PreviewControls from "./PreviewControls";
import useDashPlayer from "../../../hooks/useDashPlayer";

type PreviewVideoContainerProps = {
  width: number;
  animation: FlattenSimpleInterpolation;
};

const PreviewVideoContainer = styled.div<PreviewVideoContainerProps>`
  position: relative;
  width: ${({ width }) => width}px;
  background-color: black;
  ${({ animation }) => animation};
`;

type PreviewVideoProps = {
  isHidden: boolean;
  width?: number;
  metadata: IEntertainmentData;
  animation: FlattenSimpleInterpolation;
  children: React.ReactNode;
};

const PreviewVideo = ({
  isHidden,
  width,
  metadata,
  animation,
  children,
}: PreviewVideoProps) => {
  const { videoRef } = useDashPlayer("335984.mpd");
  // const videoRef = useRef<HTMLVideoElement>(null);
  const { sound } = useAppSelector((state) => state.GlobalReducer);
  const [previewVideo, setPreviewVideo] = useState<IPreviewDataMock | null>(
    null
  );
  const previewVideoContainerProps = {
    width: width!,
    animation,
  };
  const previewControlsProps = {
    metadata,
  };

  useEffect(() => {
    getPreviewVideoAPI(metadata.id).then((response) => {
      if (response) setPreviewVideo(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isHidden && videoRef.current) videoRef.current.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHidden]);

  const handleTransitionEnd = () => {
    if (videoRef.current && !isHidden) videoRef.current.play();
  };

  return (
    <PreviewVideoContainer
      {...previewVideoContainerProps}
      onTransitionEnd={handleTransitionEnd}
    >
      <CoverVideo ref={videoRef} muted={!sound} />
      {children}
      <PreviewControls {...previewControlsProps} />
    </PreviewVideoContainer>
  );
};

export default PreviewVideo;
