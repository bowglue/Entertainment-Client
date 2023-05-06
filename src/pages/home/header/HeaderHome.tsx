import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import { loadHeaderAction } from "../../../redux/action/header/HeaderAction";
import HeaderHomeCarouselBg from "./HeaderHomeCarouselBg";
import HeaderHomeCarouselCard from "./HeaderHomeCarouselCard";

function HeaderHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { header } = useAppSelector((state) => state.PageDataReducer);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      infinitScroll();
    }, 10000);
    return () => clearInterval(scrollInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  function infinitScroll(): void {
    if (currentIndex === header.length - 1) return setCurrentIndex(0);
    return setCurrentIndex(currentIndex + 1);
  }

  function onChangeCurrentIndex(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <>
      <HeaderHomeCarouselBg currentIndex={currentIndex} data={header} />
      <HeaderHomeCarouselCard currentIndex={currentIndex} data={header} />
    </>
  );
}

export default HeaderHome;
