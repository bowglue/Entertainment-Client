import React, { useEffect } from "react";
import Main from "../../layout/Main";
import { SliderMappingType } from "../../features/slider/interface/SliderInterface";
import SliderProvider from "../../features/slider/context/SliderContext";
import PreviewModal from "../../features/preview-video/components/PreviewModal";
import Slider from "../../features/slider/components/Slider";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import HeaderHome from "../home/header/HeaderHome";
import useServiceAPI from "../../hooks/useServiceAPI";
import {
  clearPageDataAction,
  loadPageDataAction,
} from "../../redux/action/pages/PageDataAction";

function Games() {
  const dispatch = useAppDispatch();
  const sliders = useAppSelector((state) => state.SliderReducer);
  const { rows } = useAppSelector((state) => state.PageDataReducer);
  useServiceAPI((cancelToken) =>
    dispatch(loadPageDataAction("games", cancelToken))
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
      <Main.Sliders>
        {rows.map((row) => {
          return (
            <SliderProvider key={row.sliderId} sliderMapping={row}>
              <Slider />
            </SliderProvider>
          );
        })}
        <PreviewModal />
      </Main.Sliders>
    </>
  );
}

export default Games;
