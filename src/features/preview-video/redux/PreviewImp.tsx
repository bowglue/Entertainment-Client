import { PayloadAction } from "@reduxjs/toolkit";
import { IPreviewPayload, IPreviewState } from "../interface/IPreview";

export function setPreviewDataImp(
  state: IPreviewState,
  action: PayloadAction<{ data: IPreviewPayload; itemID: number }>
) {
  return {
    ...state,
    previewData: { ...action.payload.data },
    itemID: action.payload.itemID,
  };
}

export function setIsActiveImp(
  state: IPreviewState,
  action: PayloadAction<boolean>
) {
  return {
    ...state,
    isActive: action.payload,
  };
}

export function setTranslatePosterImp(
  state: IPreviewState,
  action: PayloadAction<boolean>
) {
  return {
    ...state,
    translatePoster: action.payload,
  };
}
