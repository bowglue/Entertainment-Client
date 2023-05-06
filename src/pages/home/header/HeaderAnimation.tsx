import { keyframes } from "styled-components";

export const MountedTranslate = keyframes`
    0%{ transform: translateX(100%) }
    100%{ transform: translateX(0)}
`;

export const UnMountedTranslate = keyframes`
    0%{ transform: translateX(0)}
    100%{ transform: translateX(-100%)}
`;

export const MountedOpacity = keyframes`
   0%{ opacity: 0}
  100%{ opacity: 1}
`;

export const UnMountedOpacity = keyframes`
   0%{ opacity: 1}
  100%{ opacity: 0}
`;

export const MountedTranslateOpacity = keyframes`
    0%{ opacity: 0; transform: translateX(100%) }
    100%{ opacity: 1; transform: translateX(0)}
`;

export const UnMountedTranslateOpacity = keyframes`
    0%{ opacity: 1; transform: translateX(0)}
    100%{ opacity: 0; transform: translateX(-100%)}
`;
