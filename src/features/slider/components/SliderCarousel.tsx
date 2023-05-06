import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { useSliderContext } from "../context/SliderContext";
import SliderButton from "./SliderButton";
import SliderItem from "./SliderItem";

const TranslateDelay = 800;

const SliderCarouselContainer = styled.div`
  position: relative;
  padding: 0 3vw;
`;

interface ITranslateInfo {
  isTranslate: boolean;
  translateLength: number;
}

const SliderCarouselMask = styled.div<ITranslateInfo>`
  display: flex;
  translate: ${({ translateLength }) => translateLength}%;

  ${({ isTranslate }) =>
    isTranslate &&
    css`
      pointer-events: none;
      transition: translate ${TranslateDelay}ms;
    `};
  /*transition: translate ${TranslateDelay}ms;*/
`;

type TranslateType = {
  isTranslate: boolean;
  hasTranslate: boolean;
  translateLength: number;
};

interface SliderCarouselProps {
  showButton: boolean;
}

function SliderCarousel({ showButton }: SliderCarouselProps) {
  const dispatch = useAppDispatch();
  const [translate, setTranslate] = useState<TranslateType>({
    isTranslate: false,
    hasTranslate: false,
    translateLength: 0,
  });
  const activeItemsRef = useRef<number>(6);
  const { cardType, entertainmentData, maxItems } = useSliderContext();
  const { hasTranslate, isTranslate, translateLength } = translate;
  const cardsPerPage = 6;
  const itemWidth = 100 / cardsPerPage;
  const displayItems = !hasTranslate ? Math.min(maxItems + 1, 10) : 20;
  const entertainmentDataRef = useRef<IEntertainmentData[]>(entertainmentData);

  function onTranslate(incrementator: number) {
    if (isTranslate) return;
    const cardToSlide = handleNumberOfCardToSlide(incrementator);
    const _translateLength =
      translateLength - incrementator * itemWidth * cardToSlide;
    handleTranslate(_translateLength, true);

    setTimeout(() => {
      const translateLength = -100 - 100 / 6;
      handleTranslate(translateLength, false);
      activeItemsRef.current = updateActiveItems(incrementator, cardToSlide);

      const count = hasTranslate
        ? incrementator * cardToSlide
        : Math.min(maxItems - 13, -1);

      entertainmentDataRef.current = rotateArray(
        entertainmentDataRef.current,
        count
      );
    }, TranslateDelay);
  }

  function handleNumberOfCardToSlide(incrementator: number): number {
    const cardLeft =
      incrementator === 1
        ? maxItems - (activeItemsRef.current % maxItems)
        : activeItemsRef.current - cardsPerPage;
    if (cardLeft <= 0) return cardsPerPage;
    return Math.min(cardLeft, cardsPerPage);
  }

  function handleTranslate(
    translateLength: number,
    isTranslate: boolean,
    hasTranslate: boolean = true
  ) {
    setTranslate({
      translateLength: translateLength,
      isTranslate: isTranslate,
      hasTranslate: hasTranslate,
    });
  }

  function updateActiveItems(
    incrementator: number,
    cardToSlide: number
  ): number {
    const updateActiveCovers =
      activeItemsRef.current + incrementator * cardToSlide;

    if (updateActiveCovers <= 0) {
      return maxItems;
    }
    if (updateActiveCovers > maxItems || updateActiveCovers < 6) {
      return cardsPerPage;
    }
    return updateActiveCovers;
  }

  function rotateArray(arr: IEntertainmentData[], count: number) {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  }

  if (entertainmentData.length === 0) return null;
  return (
    <SliderCarouselContainer>
      {hasTranslate && (
        <SliderButton
          position="left"
          showButton={showButton}
          onClick={() => onTranslate(-1)}
        />
      )}

      <SliderCarouselMask {...translate}>
        {entertainmentDataRef.current
          .slice(0, displayItems)
          .map((metadata, itemID) => {
            const sliderItemProps = {
              itemID,
              type: cardType,
              metadata,
            };
            return <SliderItem key={metadata.id} {...sliderItemProps} />;
          })}
      </SliderCarouselMask>
      <SliderButton
        position="right"
        showButton={showButton}
        onClick={() => onTranslate(1)}
      />
    </SliderCarouselContainer>
  );
}

export default SliderCarousel;
