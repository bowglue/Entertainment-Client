import { css } from "styled-components";

export const WideTransitionTime = 400;
export const PosterTransitionTime = 500;

export const PreviewVideoWideAnimation = (isHidden: boolean, height: number) =>
  css`
    transition: height ${WideTransitionTime}ms ease;
    height: ${!isHidden ? height * 0.95 : 0}px; ;
  `;

export const PreviewCoverWideAnimation = (isHidden: boolean, height: number) =>
  css`
    transition: height ${WideTransitionTime}ms ease;
    height: ${!isHidden && height * 0.7}px; ;
  `;

export const PreviewVideoPosterAnimation = (isHidden: boolean, width: number) =>
  css`
    transition: width ${PosterTransitionTime}ms;
    width: ${!isHidden ? width * 2.28 : 0}px; ;
  `;

export const PreviewCoverPosterAnimation = (isHidden: boolean, width: number) =>
  css`
    transition: width ${PosterTransitionTime}ms;
    width: ${!isHidden && width * 0.8}px; ;
  `;
