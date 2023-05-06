import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import {
  IPreviewPayload,
  previewActionPayload,
} from "../../preview-video/interface/IPreview";
import { previewAction } from "../../preview-video/redux/PreviewAction";
import {
  usePosterContext,
  useUpdatePosterContext,
} from "../context/PosterContext";
import { IHoverControllerProps } from "../interface/SliderInterface";
import { handlePreviewBounding, handleWindowData } from "../utils/PreviewSetup";

const usePosterHoverController = ({
  type,
  sliderItemRef,
  itemRef,
  itemID,
}: IHoverControllerProps) => {
  const dispatch = useAppDispatch();
  const { translatePoster } = useAppSelector((state) => state.PreviewReducer);
  const posterID = usePosterContext();
  const updatePosterID = useUpdatePosterContext();

  useEffect(() => {
    if (translatePoster) {
      handlePosterTransition();
      if (itemRef.current && itemID === posterID)
        itemRef.current.style.opacity = "0";
      return;
    }
    resetPosterPosition();
    updatePosterID(null);
    if (itemRef.current) itemRef.current.style.opacity = "1";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translatePoster]);

  function handleHover(metadata: IEntertainmentData) {
    updatePosterID(itemID);
    if (!itemRef.current) return;
    const previewBounding = handlePreviewBounding(itemRef.current);
    const windowData = handleWindowData();
    const previewData: IPreviewPayload = {
      metadata,
      previewBounding,
      windowData,
      type,
    };

    const previewPayload: previewActionPayload = {
      previewData,
      active: true,
      itemID,
    };
    dispatch(previewAction(previewPayload));
  }

  function handlePosterTransition() {
    if (!sliderItemRef.current || posterID === null) return;
    switch (posterID) {
      case 5:
      case 12:
        itemID < posterID && (sliderItemRef.current.style.translate = "-200%");
        break;
      case 4:
      case 11:
        itemID < posterID && (sliderItemRef.current.style.translate = "-100%");
        itemID > posterID && (sliderItemRef.current.style.translate = "100%");
        break;
      default:
        itemID > posterID && (sliderItemRef.current.style.translate = "200%");
        break;
    }
  }

  function resetPosterPosition() {
    if (sliderItemRef.current) sliderItemRef.current.style.translate = "";
  }

  return handleHover;
};

export default usePosterHoverController;
