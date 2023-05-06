import axios, { CancelTokenSource } from "axios";

export async function loadPageDataAPI(
  page: string,
  cancelToken: CancelTokenSource
) {
  const url = "/api/v1/page/" + page;
  const headers = { "Content-Type": "application/json" };
  const { data } = await axios.get(url, {
    headers: headers,
    cancelToken: cancelToken.token,
  });
  return data;
}
