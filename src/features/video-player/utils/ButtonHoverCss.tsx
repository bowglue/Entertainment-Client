import { css } from "styled-components";

export const backgroundEffect = css`
  display: flex;
  padding: 0;
  margin: 0;

  &:hover svg {
    background-color: rgba(0, 0, 0, 0.5);
  }

  svg {
    border-radius: 3px;
    padding: 0.3rem;
  }
`;
