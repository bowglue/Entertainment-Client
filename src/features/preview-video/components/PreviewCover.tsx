import styled, { FlattenSimpleInterpolation } from "styled-components";

type PreviewCoverProps = {
  isHidden: boolean;
  height: number;
  width: number;
  animation: FlattenSimpleInterpolation | null;
};

const PreviewCover = styled.div<PreviewCoverProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ animation }) => animation}
`;

export default PreviewCover;
