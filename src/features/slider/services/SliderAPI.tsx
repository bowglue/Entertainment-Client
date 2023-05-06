import axios from "axios";
import { IData } from "../../../interface/EntertainmentDataInterface";
import { Data } from "../../../utils/SliderData";
import { CoverType } from "../interface/SliderInterface";

interface LoadSliderMetadata {
  metadata: IData[];
  maxItems: number;
}
export function loadMetaDataAPIMock(
  type: CoverType
): Promise<LoadSliderMetadata> {
  return new Promise((resolve, reject) => {
    const metadata = Data;
    const maxItems = metadata.length;
    setTimeout(() => {
      resolve({ metadata, maxItems });
    }, Math.random() * 100);
  });
}

export async function loadMetaDataAPI(
  entertainmentType: string
): Promise<IData[]> {
  const url = "/api/v1/entertainment/type/" + entertainmentType;
  const headers = { "Content-Type": "application/json" };
  const { data } = await axios.get(url, { headers: headers });
  return data;
}
