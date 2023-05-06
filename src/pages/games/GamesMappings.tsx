import { SliderMappingType } from "../../features/slider/interface/SliderInterface";

const defaultMapping: SliderMappingType = {
  header: "",
  type: "wide",
  metadata: [],
  maxItems: 0,
  isTranslate: false,
  hasTranslate: false,
  translateLength: 0,
  activeItems: 0,
};

export const GamesMapping: SliderMappingType[] = [
  {
    ...defaultMapping,
    header: "Action Games",
  },
  {
    ...defaultMapping,
    header: "Most Popular Games",
    type: "poster",
  },
];
