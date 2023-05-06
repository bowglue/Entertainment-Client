import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import HeaderHomeBg from "./HeaderHomeBg";

interface IHeaderHomeCarouselBg {
  currentIndex: number;
  data: IEntertainmentData[];
}

function HeaderHomeCarouselBg({ currentIndex, data }: IHeaderHomeCarouselBg) {
  if (data.length === 0) return null;
  return (
    <>
      {data.map((header, index) => {
        const isVisible = index === currentIndex;
        return (
          isVisible && <HeaderHomeBg key={header.title} src={header.focus} />
        );
      })}
    </>
  );
}

export default HeaderHomeCarouselBg;
