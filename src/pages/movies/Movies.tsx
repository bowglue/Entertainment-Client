import { useEffect } from "react";
import PreviewModal from "../../features/preview-video/components/PreviewModal";
import Slider from "../../features/slider/components/Slider";
import SliderProvider from "../../features/slider/context/SliderContext";
import { SliderMappingType } from "../../features/slider/interface/SliderInterface";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import useServiceAPI from "../../hooks/useServiceAPI";
import Main from "../../layout/Main";
import {
  clearPageDataAction,
  loadPageDataAction,
} from "../../redux/action/pages/PageDataAction";
import HeaderHome from "../home/header/HeaderHome";
import AdsComponent from "../../components/AdsComponent";

function Movies() {
  const dispatch = useAppDispatch();
  const sliders = useAppSelector((state) => state.SliderReducer);
  const { rows } = useAppSelector((state) => state.PageDataReducer);
  useServiceAPI((cancelToken) =>
    dispatch(loadPageDataAction("movies", cancelToken))
  );
  useEffect(() => {
    return () => {
      dispatch(clearPageDataAction());
    };
  }, []);

  return (
    <>
      <Main.Header>
        <HeaderHome />
      </Main.Header>
      <Main.Genres>Movies Genres</Main.Genres>
      <Main.Sliders>
        {rows &&
          rows.map((row) => {
            return (
              <SliderProvider key={row.sliderId} sliderMapping={row}>
                <Slider />
              </SliderProvider>
            );
          })}
        <PreviewModal />
        <AdsComponent dataAdSlot={"X7XXXXXX5X"} />
      </Main.Sliders>
    </>
  );
}

export default Movies;
