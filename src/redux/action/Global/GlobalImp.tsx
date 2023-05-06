import { PayloadAction } from "@reduxjs/toolkit";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { GlobalState } from "../../reducer/GlobalReducer";

export function setSoundImp(state: GlobalState) {
  state.sound = !state.sound;
}
export function setBookmarksImp(
  state: GlobalState,
  action: PayloadAction<IEntertainmentData>
) {
  const isSaved = state.bookmarks.some(
    (bookmark: IEntertainmentData) => bookmark.id === action.payload.id
  );

  if (!isSaved) {
    state.bookmarks = state.bookmarks.concat(action.payload);
    return;
  }

  state.bookmarks = state.bookmarks.filter(
    (bookmark) => bookmark.id !== action.payload.id
  );
}
