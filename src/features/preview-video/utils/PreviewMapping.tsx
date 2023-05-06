import { CardType } from "../../slider/interface/SliderInterface";
import PreviewPoster from "../components/PreviewPoster";
import PreviewWide from "../components/PreviewWide";
import { PreviewCardProps } from "../interface/IPreview";

export const Preview_Mapping: Map<
  CardType,
  React.FC<PreviewCardProps>
> = new Map([
  ["wide", PreviewWide],
  ["poster", PreviewPoster],
]);
