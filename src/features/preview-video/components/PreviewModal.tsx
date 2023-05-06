import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import useTransitionPreviewModal from "../hooks/useTransitionPreviewModal";
import { PreviewCardProps } from "../interface/IPreview";
import { setIsActiveAction } from "../redux/PreviewAction";
import { Preview_Mapping } from "../utils/PreviewMapping";

function PreviewModal() {
  const dispatch = useAppDispatch();
  const { previewData, isActive, itemID } = useAppSelector(
    (state) => state.PreviewReducer
  );
  const { metadata, previewBounding, windowData, type } = previewData;
  const { isMounted, isHidden, handleTransitionEnd } =
    useTransitionPreviewModal(isActive);
  const Preview = Preview_Mapping.get(type!)!;
  const previewCardProps: PreviewCardProps = {
    metadata: metadata!,
    previewBounding: previewBounding!,
    isHidden,
    windowData: windowData!,
    handleTransitionEnd,
    onMouseLeave: handleMouseLeave,
    itemID,
  };

  function handleMouseLeave() {
    dispatch(setIsActiveAction(false));
  }

  return ReactDOM.createPortal(
    <>
      {isMounted && (
        <Link
          to={"/details/" + metadata!.title}
          state={{ metadata }}
          onClick={() => dispatch(setIsActiveAction(false))}
        >
          <Preview {...previewCardProps} />
        </Link>
      )}
    </>,
    document.getElementById("preview") as HTMLDivElement
  );
}

export default PreviewModal;
