import { createSlice } from "@reduxjs/toolkit";
import { IPreviewState } from "../interface/IPreview";
import {
  setIsActiveImp,
  setPreviewDataImp,
  setTranslatePosterImp,
} from "./PreviewImp";

const initialState: IPreviewState = {
  previewData: {
    metadata: null,
    previewBounding: null,
    windowData: null,
    type: null,
  },
  isActive: false,
  translatePoster: false,
  itemID: 0,
};

export const previewSlice = createSlice({
  name: "preview",
  initialState: initialState,
  reducers: {
    setPreviewData: setPreviewDataImp,
    setIsActive: setIsActiveImp,
    setTranslatePoster: setTranslatePosterImp,
  },
});

export const { setPreviewData, setIsActive, setTranslatePoster } =
  previewSlice.actions;
export default previewSlice.reducer;
