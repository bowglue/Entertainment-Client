import { AppDispatch } from "../../../redux/Store";
import { previewActionPayload } from "../interface/IPreview";
import {
  setIsActive,
  setPreviewData,
  setTranslatePoster,
} from "./PreviewReducer";

export const setIsActiveAction =
  (active: boolean) => (dispatch: AppDispatch) => {
    dispatch(setIsActive(active));
  };

export const previewAction =
  (payload: previewActionPayload) => (dispatch: AppDispatch) => {
    dispatch(setIsActive(payload.active));
    const previewData = { data: payload.previewData, itemID: payload.itemID };
    dispatch(setPreviewData(previewData));
  };

export const setTranslatePosterAction =
  (isTranslate: boolean) => (dispatch: AppDispatch) => {
    dispatch(setTranslatePoster(isTranslate));
  };
