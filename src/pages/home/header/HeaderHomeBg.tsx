import styled from "styled-components";

const HeaderHomeBgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vw;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.bgColor.main},
      transparent 50%
    );
  }
`;

const HeaderHomeBgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

function HeaderHomeBg({ src }: { src: string }) {
  return (
    <HeaderHomeBgContainer>
      <HeaderHomeBgImg src={src} />
    </HeaderHomeBgContainer>
  );
}

export default HeaderHomeBg;
