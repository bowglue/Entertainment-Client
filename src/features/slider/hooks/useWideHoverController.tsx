import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import {
  IPreviewPayload,
  previewActionPayload,
} from "../../preview-video/interface/IPreview";
import { previewAction } from "../../preview-video/redux/PreviewAction";
import { IHoverControllerProps } from "../interface/SliderInterface";
import { handlePreviewBounding, handleWindowData } from "../utils/PreviewSetup";

const useWideHoverController = ({
  type,
  itemRef,
  itemID,
}: IHoverControllerProps) => {
  const dispatch = useAppDispatch();
  function handleHover(metadata: IEntertainmentData) {
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
  return handleHover;
};

export default useWideHoverController;
