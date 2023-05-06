import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { setBookmarks, setSound } from "../../reducer/GlobalReducer";
import { AppDispatch } from "../../Store";

export const setSoundAction = () => (dispatch: AppDispatch) => {
  dispatch(setSound());
};

export const setBookmarksAction =
  (video: IEntertainmentData) => (dispatch: AppDispatch) => {
    dispatch(setBookmarks(video));
  };
