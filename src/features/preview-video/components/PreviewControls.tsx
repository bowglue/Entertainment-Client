import styled from "styled-components";
import AddBookmark from "../../../assets/icons/AddBookmark_24.svg";
import Bookmark from "../../../assets/icons/Bookmark_24.svg";
import Mute from "../../../assets/icons/Mute_24.svg";
import Unmute from "../../../assets/icons/UnMute_24.svg";
import Divider from "../../../components/Divider";
import FavoriteIcon from "../../../components/FavoriteIcon";
import SoundIcon from "../../../components/SoundIcon";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import { IData } from "../../../interface/EntertainmentDataInterface";
import {
  setBookmarksAction,
  setSoundAction,
} from "../../../redux/action/Global/GlobalAction";

const PreviewControlsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 4px;
  padding: 0.3rem;
  max-height: 24px;
  background-color: rgba(22, 34, 44, 0.5);
  border-radius: 3px;
`;

interface PreviewControlsProps {
  metadata: IData;
}

const PreviewControls = ({ metadata }: PreviewControlsProps) => {
  const dispatch = useAppDispatch();
  const { sound, bookmarks } = useAppSelector((state) => state.GlobalReducer);
  const isBookemarked = bookmarks.some(
    (bookmark: IData) => bookmark.id === metadata.id
  );

  return (
    <PreviewControlsContainer>
      <SoundIcon
        src={sound ? Unmute : Mute}
        alt="Unmute"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(setSoundAction());
        }}
      />
      <Divider />
      <FavoriteIcon
        src={!isBookemarked ? AddBookmark : Bookmark}
        alt="Unbookmark"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(setBookmarksAction(metadata));
        }}
      />
    </PreviewControlsContainer>
  );
};

export default PreviewControls;
