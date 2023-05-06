import { CardType } from "../features/slider/interface/SliderInterface";
import { IEntertainmentData } from "./EntertainmentDataInterface";

export interface IPageData {
  header: IEntertainmentData[];
  rows: IRowsData[];
}

export interface IRowsData {
  sliderId: number;
  header: string;
  cardType: CardType;
  entertainmentData: IEntertainmentData[];
  maxItems: number;
}
