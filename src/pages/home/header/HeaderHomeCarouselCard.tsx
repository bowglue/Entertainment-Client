import styled from "styled-components";
import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";
import HeaderHomeCard from "./HeaderHomeCard";

const HeaderHomeCarouselCardContainer = styled.div`
  position: relative;
  height: 100%;
  margin: 0 8vw;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 3px;

  padding: 3px;

  background: linear-gradient(
    to right,
    white,
    transparent 40%,
    transparent 60%,
    white
  );
`;

const HeaderHomeCarouselCardMask = styled.div`
  display: grid;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  border-radius: 3px;
`;

interface IHeaderHomeCarouselCard {
  currentIndex: number;
  data: IEntertainmentData[];
}

function HeaderHomeCarouselCard({
  currentIndex,
  data,
}: IHeaderHomeCarouselCard) {
  return (
    <HeaderHomeCarouselCardContainer>
      <HeaderHomeCarouselCardMask>
        {data &&
          data.map((header, index) => {
            const isVisible = index === currentIndex;
            return (
              <HeaderHomeCard
                key={header.title}
                data={header}
                isVisible={isVisible}
              />
            );
          })}
      </HeaderHomeCarouselCardMask>
    </HeaderHomeCarouselCardContainer>
  );
}

export default HeaderHomeCarouselCard;
