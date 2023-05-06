import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingItem from "../../components/LoadingItem";
import { getPreviewVideoAPI } from "../../features/preview-video/services/PreviewModalAPI";
import { IData } from "../../interface/EntertainmentDataInterface";
import { IPreviewDataMock } from "../../utils/PreviewData";
import VideoPlayer from "../../features/video-player/components/VideoPlayer";

const PreviewContainer = styled.div`
  position: relative;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  border-radius: 3px;
  overflow: hidden;
`;

const Preview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

interface DetailsPreviewProps {
  metadata: IData;
}

const DetailsPreview = ({ metadata }: DetailsPreviewProps) => {
  const [previewVideo, setPreviewVideo] = useState<IPreviewDataMock | null>(
    null
  );
  useEffect(() => {
    getPreviewVideoAPI(metadata.id).then((response) => {
      if (response) setPreviewVideo(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PreviewContainer>
      {/* {!previewVideo ? (
        <LoadingItem padding={"24.5% 25%"} />
      ) : (
         <Preview src={previewVideo?.preview} controls /> */}
      <VideoPlayer />
      {/* )} */}
    </PreviewContainer>
  );
};

export default DetailsPreview;
