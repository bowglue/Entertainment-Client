import { IEntertainmentData } from "../../../interface/EntertainmentDataInterface";

interface HandleCoverProps {
  onMouseEnter?: (args0: IEntertainmentData) => void;
  onMouseLeave?: () => void;
  cover: string;
  logo: string;
  request: boolean;
}
const usehandleCover = ({
  onMouseEnter,
  onMouseLeave,
  cover,
  logo,
  request,
}: HandleCoverProps) => {
  function handleMouseEnter(updatedMetadata: IEntertainmentData) {
    if (onMouseEnter) {
      onMouseEnter(updatedMetadata);
    }
  }
  function handleMouseLeave() {
    if (onMouseLeave) onMouseLeave();
  }

  function handleCoverSrc(type: string) {
    if (request) return cover;
    return type;
  }

  function handleLogoSrc(title: string) {
    if (request) return logo;
    return title;
  }

  return { handleMouseEnter, handleMouseLeave, handleCoverSrc, handleLogoSrc };
};

export default usehandleCover;
