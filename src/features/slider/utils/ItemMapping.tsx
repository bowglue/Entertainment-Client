import PosterCard from "../../../components/PosterCard";
import WideCard from "../../../components/WideCard";
import { ICoverCardProps } from "../../../interface/EntertainmentDataInterface";
import PosterProvider from "../context/PosterContext";
import usePosterHoverController from "../hooks/usePosterHoverController";
import useWideHoverController from "../hooks/useWideHoverController";
import { CardType, HoverControllerType } from "../interface/SliderInterface";

export interface ISliderMapping {
  Item: React.FC<ICoverCardProps>;
  PosterProvider?: React.FC<{ children: React.ReactNode }>;
  hoverController: HoverControllerType;
}

export const Item_Mapping: Map<CardType, ISliderMapping> = new Map([
  [
    "wide",
    {
      Item: WideCard,
      hoverController: useWideHoverController,
    },
  ],
  [
    "poster",
    {
      Item: PosterCard,
      PosterProvider: PosterProvider,
      hoverController: usePosterHoverController,
    },
  ],
]);
