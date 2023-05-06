import { IEntertainmentData } from "../interface/EntertainmentDataInterface";
import { HeaderData } from "../utils/HeaderData";

export function loadHeaderAPI(): Promise<IEntertainmentData[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(HeaderData);
    }, Math.random() * 1000);
  });
}
