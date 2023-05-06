import axios, { CancelTokenSource } from "axios";

export async function requestBlobAPI(
  url: string,
  cancelToken: CancelTokenSource
) {
  const headers = { "Content-Type": "application/json" };
  const { data } = await axios.get(url, {
    headers: headers,
    cancelToken: cancelToken.token,
    responseType: "blob",
  });
  return data;
}
