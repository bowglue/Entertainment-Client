import { CancelTokenSource } from "axios";
import { IPageData } from "../../../interface/PageDataInterface";
import { requestBlobAPI } from "../../../services/BlobAPI";
import { loadPageDataAPI } from "../../../services/PageDataAPI";
import { AppDispatch } from "../../Store";
import { clearPageData, loadPageData } from "../../reducer/PageDataReducer";

export const loadPageDataAction =
  (page: string, cancelToken: CancelTokenSource) => (dispath: AppDispatch) => {
    loadPageDataAPI(page, cancelToken)
      .then((data: IPageData) => {
        console.log(data);
        const paylaod = { header: [], rows: data.rows };
        dispath(loadPageData(data));
      })
      .catch((err) => {});
  };

export const clearPageDataAction = () => (dispatch: AppDispatch) => {
  console.log("Clear Entertainment Data");
  dispatch(clearPageData());
};

export const requestBlobAction =
  (
    url: string,
    cancelToken: CancelTokenSource,
    handleObjectURL: (blob: string) => void
  ) =>
  (dispath: AppDispatch) => {
    requestBlobAPI(url, cancelToken)
      .then((res) => handleObjectURL(URL.createObjectURL(res)))
      .catch((err) => {});
  };
