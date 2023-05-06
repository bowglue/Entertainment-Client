import { ReactElement } from "react";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { CoverType } from "../../slider/interface/SliderInterface";

export interface IPreviewState {
  previewData: IPreviewPayload;
  isActive: boolean;
  translatePoster: boolean;
  itemID: number;
}

export interface IPreviewPayload {
  metadata: IEntertainmentData | null;
  previewBounding: IPreviewBounding | null;
  windowData: IWindowData | null;
  type: CoverType | null;
}

export interface IPreviewBounding {
  top: number;
  bottom: number;
  left: number;
  right: number;
  height: number;
  width: number;
}

export interface IWindowData {
  scrollY: number;
  innerHeight: number;
}

type LabelType = "sound" | "bookmark";
export interface IPreviewControlItem {
  label: LabelType;
  icon: (arg0: boolean) => ReactElement<any, any>;
  action: any;
}

export interface PreviewCardProps {
  metadata: IEntertainmentData;
  previewBounding: IPreviewBounding;
  isHidden: boolean;
  windowData: IWindowData;
  handleTransitionEnd: () => void;
  onMouseLeave: () => void;
  itemID: number;
}

export interface previewActionPayload {
  previewData: IPreviewPayload;
  active: boolean;
  itemID: number;
}
