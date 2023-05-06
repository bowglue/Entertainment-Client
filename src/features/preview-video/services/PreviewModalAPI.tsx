import { IPreviewDataMock, PreviewData } from "../../../utils/PreviewData";

export function getPreviewVideoAPI(
  id: number
): Promise<IPreviewDataMock | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PreviewData.find((preview) => preview.id === id));
    }, Math.random() * 1000);
  });
}
