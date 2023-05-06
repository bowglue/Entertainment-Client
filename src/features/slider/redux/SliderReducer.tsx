import { createSlice } from "@reduxjs/toolkit";
import { MoviesMapping } from "../../../pages/movies/MoviesMappings";
import { SliderMappingType } from "../interface/SliderInterface";
import {
  clearSliderStoreImp,
  loadMetadataOnStartImp,
  resetTranslateImp,
  translateImp,
  updateActiveCoversImp,
} from "./action/SliderImp";

const initialState: Array<SliderMappingType> = MoviesMapping;

export const SliderSlice = createSlice({
  name: "slider",
  initialState: initialState,
  reducers: {
    loadMetadataOnStart: loadMetadataOnStartImp,
    translate: translateImp,
    resetTranslate: resetTranslateImp,
    updateActiveCovers: updateActiveCoversImp,
    clearSliderStore: clearSliderStoreImp,
  },
});

export const {
  loadMetadataOnStart,
  translate,
  resetTranslate,
  updateActiveCovers,
  clearSliderStore,
} = SliderSlice.actions;
export default SliderSlice.reducer;
