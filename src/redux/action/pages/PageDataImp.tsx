import { PayloadAction } from "@reduxjs/toolkit";
import { IPageData } from "../../../interface/PageDataInterface";

export function loadPageDataImp(
  state: IPageData,
  action: PayloadAction<IPageData>
) {
  return action.payload;
}

export function clearPageDataImp() {
  return { header: [], rows: [] };
}
