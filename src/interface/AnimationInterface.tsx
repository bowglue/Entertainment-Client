import { css } from "styled-components";

export interface IAnimationTransitionProps {
  mountAnimation: ReturnType<typeof css>;
  isComponentActive: boolean;
  animationLength: number;
  children?: any;
}
