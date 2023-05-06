import { useEffect } from "react";
import { IPreviewBounding, IWindowData } from "../interface/IPreview";

interface WidePreviewElementStyleProps {
  previewBounding: IPreviewBounding;
  windowData: IWindowData;
  itemID: number;
  isHidden: boolean;
}

const useWidePreviewElementStyle = ({
  previewBounding,
  windowData,
  itemID,
  isHidden,
}: WidePreviewElementStyleProps) => {
  const previewElement = document.getElementById("preview");

  useEffect(() => {
    if (!isHidden) {
      positionPreview();
      handleScaleOrigin();
      scalePreview();
      return;
    }
    clearScaleStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHidden]);

  useEffect(() => {
    return () => {
      clearPositionPreviewStyle();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function positionPreview() {
    if (!previewElement) return;
    previewElement.style.bottom =
      windowData!.innerHeight -
      (previewBounding.bottom + windowData.scrollY) +
      "px";
    previewElement.style.left = previewBounding.left + "px";
  }

  function scalePreview() {
    if (!previewElement) return;
    previewElement.style.transition = "scale 400ms ease";
    previewElement.style.scale = "1.5";
  }

  function handleScaleOrigin() {
    if (!previewElement) return;
    switch (itemID) {
      case 0:
      case 7:
        previewElement.style.transformOrigin = "center left";
        break;
      case 5:
      case 12:
        previewElement.style.transformOrigin = "center right";
        break;
      default:
        previewElement.style.transformOrigin = "center center";
        break;
    }
  }

  function clearScaleStyle() {
    if (!previewElement) return;
    previewElement.style.scale = "";
  }

  function clearPositionPreviewStyle() {
    if (!previewElement) return;
    previewElement.style.bottom = "";
    previewElement.style.left = "";
    previewElement.style.transition = "";
    previewElement.style.scale = "";
  }
};

export default useWidePreviewElementStyle;
