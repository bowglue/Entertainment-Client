import { PayloadAction } from "@reduxjs/toolkit";
import { IEntertainmentData } from "../../../../interface/EntertainmentDataInterface";
import { MoviesMapping } from "../../../../pages/movies/MoviesMappings";
import { SliderMappingType } from "../../interface/SliderInterface";

export function loadMetadataOnStartImp(
  state: Array<SliderMappingType>,
  action: PayloadAction<{
    id: number;
    metadata: IEntertainmentData[];
    maxItems: number;
  }>
) {
  const { id, metadata, maxItems } = action.payload;
  const slider = state[id];
  slider.maxItems = maxItems;
  slider.activeItems = 6;
  slider.metadata = metadata;
  slider.hasTranslate = false;
  slider.translateLength = 0;
}

export function translateImp(
  state: Array<SliderMappingType>,
  action: PayloadAction<{
    id: number;
    isTranslate: boolean;
    translateLength: number;
  }>
) {
  const { id, isTranslate, translateLength } = action.payload;
  const slider = state[id];
  slider.isTranslate = isTranslate;
  slider.translateLength = translateLength;
}

export function resetTranslateImp(
  state: Array<SliderMappingType>,
  action: PayloadAction<{
    id: number;
    incrementActiveItems: number;
    incrementator: number;
  }>
) {
  const { id, incrementator, incrementActiveItems } = action.payload;
  const slider = state[id];
  slider.isTranslate = false;
  slider.translateLength = -100 - 100 / 6;
  updateActiveCoversImp(state, action);

  if (!slider.hasTranslate) {
    slider.metadata = rotateArray(
      slider.metadata,
      Math.min(slider.maxItems - 13, -1)
    );
    slider.hasTranslate = true;
    return;
  }

  slider.metadata = rotateArray(
    slider.metadata,
    incrementator * incrementActiveItems
  );
}

export function updateActiveCoversImp(
  state: Array<SliderMappingType>,
  action: PayloadAction<{
    id: number;
    incrementActiveItems: number;
    incrementator: number;
  }>
) {
  const { id, incrementActiveItems, incrementator } = action.payload;
  const slider = state[id];
  const updateActiveCovers =
    slider.activeItems + incrementator * incrementActiveItems;

  if (updateActiveCovers <= 0) {
    slider.activeItems = slider.maxItems;
    return;
  }

  if (updateActiveCovers > slider.maxItems || updateActiveCovers < 6) {
    slider.activeItems = 6;
    return;
  }

  slider.activeItems = updateActiveCovers;
}

function rotateArray(arr: IEntertainmentData[], count: number) {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
}

export function clearSliderStoreImp(state: Array<SliderMappingType>) {
  return MoviesMapping;
}
