import styled, { css, FlattenSimpleInterpolation } from "styled-components";

type GradientItemProps = {
  isHidden?: boolean;
  gradient: FlattenSimpleInterpolation;
};

const GradientItem = styled.div<GradientItemProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  ${({ gradient }) => gradient}
  opacity: 0;
  transition: opacity 500ms;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      opacity: 1;
    `}
`;

GradientItem.defaultProps = {
  isHidden: false,
};

export default GradientItem;
