import { createSlice } from "@reduxjs/toolkit";
import { IPageData } from "../../interface/PageDataInterface";
import { clearPageDataImp, loadPageDataImp } from "../action/pages/PageDataImp";

const initialState: IPageData = {
  header: [],
  rows: [],
};

export const PageDataSlice = createSlice({
  name: "PageData",
  initialState: initialState,
  reducers: {
    loadPageData: loadPageDataImp,
    clearPageData: clearPageDataImp,
  },
});

export const { loadPageData, clearPageData } = PageDataSlice.actions;
export default PageDataSlice.reducer;
