import { loadHeaderAPI } from "../../../services/HeaderAPI";
import { loadHeaderData } from "../../reducer/HeaderReducer";
import { AppDispatch } from "../../Store";

export const loadHeaderAction = () => (dispatch: AppDispatch) => {
  loadHeaderAPI().then((response) => dispatch(loadHeaderData(response)));
};
