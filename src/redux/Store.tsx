import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./reducer/HeaderReducer";
import SliderReducer from "../features/slider/redux/SliderReducer";
import GlobalReducer from "./reducer/GlobalReducer";
import PreviewReducer from "../features/preview-video/redux/PreviewReducer";
import PageDataReducer from "./reducer/PageDataReducer";

export const store = configureStore({
  reducer: {
    SliderReducer,
    HeaderReducer,
    GlobalReducer,
    PreviewReducer,
    PageDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
