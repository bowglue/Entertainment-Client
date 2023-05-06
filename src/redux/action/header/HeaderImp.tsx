import { PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../../interface/EntertainmentDataInterface";
import { IHeaderState } from "../../reducer/HeaderReducer";

export function loadHeaderDataImp(
  state: IHeaderState,
  action: PayloadAction<IData[]>
) {
  state.headerData = action.payload;
}
