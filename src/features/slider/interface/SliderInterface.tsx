import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";

export interface ISliderState {
  sliderID: number;
  covers: IEntertainmentData[];
}

export interface ICardIndexPayload {
  sliderID: number;
  cardID: number | null;
}

export interface IActivePayload {
  sliderID: number;
  active: boolean;
}

export interface IHoverControllerProps {
  type: CardType;
  sliderItemRef: React.RefObject<HTMLDivElement>;
  itemRef: React.RefObject<HTMLDivElement>;
  itemID: number;
}

export type HoverControllerType = ({
  type,
  sliderItemRef,
  itemRef,
  itemID,
}: IHoverControllerProps) => (metadata: IEntertainmentData) => void;

export type SliderMappingType = {
  header: string;
  type: CardType;
  metadata: IEntertainmentData[];
  maxItems: number;
  isTranslate: boolean;
  hasTranslate: boolean;
  translateLength: number;
  activeItems: number;
};

export type CardType = "wide" | "poster";
