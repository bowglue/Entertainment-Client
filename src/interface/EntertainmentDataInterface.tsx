export interface IEntertainmentData {
  id: number;
  key?: string;
  title: string;
  wide: string;
  poster: string;
  focus: string;
  logo: string;
  genres: string;
  releaseDate: number;
}

export interface ISliderMetadata {
  id: number;
  label: string;
}

export interface ICoverCardProps {
  metadata: IEntertainmentData;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  itemRef?: React.RefObject<HTMLDivElement>;
  request?: boolean;
}
