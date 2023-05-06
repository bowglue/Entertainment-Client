import { createSlice } from "@reduxjs/toolkit";
import { IEntertainmentData } from "../../interface/EntertainmentDataInterface";
import { loadHeaderDataImp } from "../action/header/HeaderImp";

export interface IHeaderState {
  headerData: IEntertainmentData[];
}

const initialState: IHeaderState = {
  headerData: [],
};

export const HeaderSlice = createSlice({
  name: "Header",
  initialState: initialState,
  reducers: {
    loadHeaderData: loadHeaderDataImp,
  },
});

export const { loadHeaderData } = HeaderSlice.actions;
export default HeaderSlice.reducer;
