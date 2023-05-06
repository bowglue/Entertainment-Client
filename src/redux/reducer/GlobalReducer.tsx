import { createSlice } from "@reduxjs/toolkit";
import { IEntertainmentData } from "../../interface/EntertainmentDataInterface";
import { setBookmarksImp, setSoundImp } from "../action/Global/GlobalImp";

export interface GlobalState {
  sound: boolean;
  bookmarks: IEntertainmentData[];
}

const initialState: GlobalState = {
  sound: true,
  bookmarks: [],
};

export const GlobalSlice = createSlice({
  name: "Global",
  initialState: initialState,
  reducers: {
    setSound: setSoundImp,
    setBookmarks: setBookmarksImp,
  },
});

export const { setSound, setBookmarks } = GlobalSlice.actions;
export default GlobalSlice.reducer;
