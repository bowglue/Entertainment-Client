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

export const MoviesMapping: SliderMappingType[] = [
  {
    ...defaultMapping,
    header: "Action Movies",
  },
  // {
  //   ...defaultMapping,
  //   header: "Most Popular Movies",
  //   type: "poster",
  // },   console.log(metadata);
];
