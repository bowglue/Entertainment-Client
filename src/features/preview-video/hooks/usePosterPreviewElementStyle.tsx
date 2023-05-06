import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { IPreviewBounding, IWindowData } from "../interface/IPreview";
import { setTranslatePosterAction } from "../redux/PreviewAction";

interface PosterPreviewElementStyleProps {
  previewBounding: IPreviewBounding;
  windowData: IWindowData;
  itemID: number;
  isHidden: boolean;
}

const usePosterPreviewElementStyle = ({
  previewBounding,
  windowData,
  itemID,
  isHidden,
}: PosterPreviewElementStyleProps) => {
  const dispatch = useAppDispatch();
  const previewElement = document.getElementById("preview");

  useEffect(() => {
    if (!isHidden) {
      onPreviewOpen();
      return;
    }
    onPreviewClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHidden]);

  useEffect(() => {
    return () => {
      onPreviewClose();
      clearPositionStyle();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function positionPreview() {
    if (!previewElement) return;
    previewElement.style.top = previewBounding.top + windowData.scrollY + "px";
    switch (itemID) {
      case 5:
      case 12:
        previewElement.style.right =
          window.innerWidth - previewBounding.right + "px";
        break;
      default:
        previewElement.style.left = previewBounding.left + "px";
        break;
    }
  }

  function translatePreviewElement() {
    if (!previewElement) return;
    switch (itemID) {
      case 4:
      case 11:
        previewElement.style.transition = "translate 500ms";
        previewElement.style.translate = `calc(${-previewBounding.width}px - 0.6vw)`;
        break;
      default:
        break;
    }
  }

  function clearTranslateStyle() {
    if (!previewElement) return;
    previewElement.style.translate = "";
  }

  function clearPositionStyle() {
    if (!previewElement) return;
    previewElement.style.top = "";
    previewElement.style.left = "";
    previewElement.style.right = "";
    previewElement.style.transition = "";
  }

  function onPreviewOpen() {
    positionPreview();
    translatePreviewElement();
    dispatch(setTranslatePosterAction(true));
  }

  function onPreviewClose() {
    clearTranslateStyle();
    dispatch(setTranslatePosterAction(false));
  }
};

export default usePosterPreviewElementStyle;
