import { IData } from "../../../../interface/EntertainmentDataInterface";
import { AppDispatch } from "../../../../redux/Store";
import { CoverType } from "../../interface/SliderInterface";
import { loadMetaDataAPI, loadMetaDataAPIMock } from "../../services/SliderAPI";
import {
  clearSliderStore,
  loadMetadataOnStart,
  resetTranslate,
  translate,
  updateActiveCovers,
} from "../SliderReducer";

export const loadMetaDataOnStartAction =
  (id: number, entertainmentType: string) => (dispatch: AppDispatch) => {
    // loadMetaDataAPIMock(type).then(({ metadata, maxItems }) => {
    //   const _metadata =
    //     maxItems >= 20
    //       ? keys(metadata)
    //       : keys(repeatArray(metadata, Math.ceil(20 / maxItems)));

    //   const payloadMetadata = { id, metadata: _metadata, maxItems };
    //   dispatch(loadMetadataOnStart(payloadMetadata));
    // });
    const _entertainmentType =
      entertainmentType === "home" ? "movie" : entertainmentType;
    loadMetaDataAPI(_entertainmentType).then((entertainmentData) => {
      const metadata = keys(entertainmentData);
      const maxItems = entertainmentData.length;
      const payloadMetadata = { id, metadata, maxItems };
      dispatch(loadMetadataOnStart(payloadMetadata));
    });
  };

function repeatArray(arr: IData[], n: number) {
  return Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
}

function keys(arr: IData[]) {
  return arr.map((item, index) => {
    return {
      ...item,
      key: "title_" + index.toString(),
    };
  });
}

interface TranslateActionType {
  id: number;
  translateLength: number;
  isTranslate: boolean;
  incrementActiveItems: number;
  hasTranslate: boolean;
  incrementator: number;
}
export const translateAction =
  ({
    id,
    translateLength,
    isTranslate,
    incrementActiveItems,
    hasTranslate,
    incrementator,
  }: TranslateActionType) =>
  (dispatch: AppDispatch) => {
    const translatePayload = {
      translateLength,
      id,
      isTranslate,
    };
    dispatch(translate(translatePayload));
    setTimeout(() => {
      const resetPayload = {
        id,
        incrementActiveItems,
        incrementator,
        hasTranslate,
      };
      dispatch(resetTranslate(resetPayload));
    }, 800);
  };

export const clearSliderStoreAction = () => (dispatch: AppDispatch) => {
  dispatch(clearSliderStore());
};
