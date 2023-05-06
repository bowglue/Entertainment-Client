import { css } from "styled-components";

export const GradientCover = css`
  bottom: 0;
  height: 50%;
  background-image: linear-gradient(to top, #000000, transparent);
`;

export const GradientPreviewCoverWide = css`
  top: -1px;
  height: calc(100% + 1px);
  background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0.5));
`;

export const GradientPreviewVideoWide = css`
  height: 50%;
  bottom: 0;
  background-image: linear-gradient(to top, #000000, transparent);
`;

export const GradientPreviewCoverPoster = css`
  right: -1px;
  bottom: 0;
  width: calc(100% + 1px);
  background-image: linear-gradient(to left, #000000, rgba(0, 0, 0, 0.5));
`;

export const GradientPreviewVideoPoster = css`
  left: 0;
  bottom: 0;
  width: 50%;
  background-image: linear-gradient(to right, #000000, transparent);
`;
