import {
  IPreviewBounding,
  IWindowData,
} from "../../preview-video/interface/IPreview";

export function handlePreviewBounding(coverMask: HTMLDivElement) {
  const { top, bottom, left, right, width, height } =
    coverMask.getBoundingClientRect();
  const previewBounding: IPreviewBounding = {
    top,
    bottom,
    left,
    right,
    width,
    height,
  };

  return previewBounding;
}

export function handleWindowData() {
  const windowData: IWindowData = {
    scrollY: window.scrollY,
    innerHeight: window.innerHeight,
  };
  return windowData;
}
