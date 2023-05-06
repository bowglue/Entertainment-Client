import { createContext, useContext } from "react";
import { IRowsData } from "../../../interface/PageDataInterface";

const SliderContext = createContext<IRowsData>({
  sliderId: 0,
  header: "",
  entertainmentData: [],
  cardType: "wide",
  maxItems: 0,
});

export function useSliderContext() {
  return useContext(SliderContext);
}

interface SliderProvdiderProps {
  children: React.ReactNode;
  sliderMapping: IRowsData;
}

const SliderProvider = ({ children, sliderMapping }: SliderProvdiderProps) => {
  return (
    <SliderContext.Provider value={sliderMapping}>
      {children}
    </SliderContext.Provider>
  );
};

export default SliderProvider;
