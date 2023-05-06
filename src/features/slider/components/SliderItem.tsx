import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GradientItem from "../../../components/GradientItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import { GradientCover } from "../../../utils/Gradient";
import { setIsActiveAction } from "../../preview-video/redux/PreviewAction";
import { CardType } from "../interface/SliderInterface";
import { Item_Mapping } from "../utils/ItemMapping";
import useServiceAPI from "../../../hooks/useServiceAPI";
import { requestBlobAction } from "../../../redux/action/pages/PageDataAction";

const SliderItemContainer = styled.div`
  width: 16.667%;
  flex-shrink: 0;
  padding: 0 0.3vw;
  box-sizing: border-box;
  transition: translate 500ms;
`;

function SliderItem({
  itemID,
  type,
  metadata,
}: {
  itemID: number;
  type: CardType;
  metadata: IEntertainmentData;
}) {
  const dispatch = useAppDispatch();
  const { isActive } = useAppSelector((state) => state.PreviewReducer);
  const { Item, hoverController } = Item_Mapping.get(type)!;
  const sliderItemRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const onHover = hoverController({
    type,
    sliderItemRef,
    itemRef,
    itemID,
  })!;
  const card = useServiceAPI((cancelToken, handleObjectURL) => {
    const url = type === "wide" ? metadata.wide : metadata.poster;
    dispatch(requestBlobAction(url, cancelToken, handleObjectURL));
  });
  const logo = useServiceAPI((cancelToken, handleObjectURL) =>
    dispatch(requestBlobAction(metadata.logo, cancelToken, handleObjectURL))
  );
  const entertainment = {
    ...metadata,
    logo: logo.objectURL!,
    poster: type === "poster" ? card.objectURL! : metadata.poster,
    wide: type === "wide" ? card.objectURL! : metadata.wide,
  };

  function handleMouseEnter() {
    if (isActive) dispatch(setIsActiveAction(false));
    timeoutRef.current = setTimeout(() => {
      onHover(entertainment);
    }, 550);
  }

  function handleMouseLeave() {
    clearTimeout(timeoutRef.current);
  }

  return (
    <SliderItemContainer data-ticket={itemID + 1} ref={sliderItemRef}>
      <Link to={"/details/" + metadata.title} state={{ metadata }}>
        <Item
          metadata={entertainment}
          style={{ borderRadius: "3px", overflow: "hidden" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          itemRef={itemRef}
        >
          <GradientItem gradient={GradientCover} />
        </Item>
      </Link>
    </SliderItemContainer>
  );
}

export default SliderItem;
