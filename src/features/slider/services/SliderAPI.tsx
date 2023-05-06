import axios from "axios";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { Data } from "../../../utils/SliderData";
import { CardType } from "../interface/SliderInterface";

interface LoadSliderMetadata {
  metadata: IEntertainmentData[];
  maxItems: number;
}
export function loadMetaDataAPIMock(
  type: CardType
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
): Promise<IEntertainmentData[]> {
  const url = "/api/v1/entertainment/type/" + entertainmentType;
  const headers = { "Content-Type": "application/json" };
  const { data } = await axios.get(url, { headers: headers });
  return data;
}
