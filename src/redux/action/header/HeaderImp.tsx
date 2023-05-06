import { PayloadAction } from "@reduxjs/toolkit";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { IHeaderState } from "../../reducer/HeaderReducer";

export function loadHeaderDataImp(
  state: IHeaderState,
  action: PayloadAction<IEntertainmentData[]>
) {
  state.headerData = action.payload;
}
