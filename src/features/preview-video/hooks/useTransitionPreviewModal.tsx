import { useEffect, useRef, useState } from "react";

const useTransitionPreviewModal = (isActive: boolean) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (isMounted) {
      if (isHidden) setIsMounted(false);
      setIsHidden(true);
      return;
    }

    if (isActive) {
      setIsMounted(true);
      setIsHidden(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  useEffect(() => {
    if (!isMounted) return;

    timeoutRef.current = setTimeout(() => {
      setIsHidden(false);
    }, 10);
  }, [isMounted]);

  const handleTransitionEnd = () => {
    if (isHidden) setIsMounted(false);
  };

  return { isMounted, isHidden, handleTransitionEnd };
};

export default useTransitionPreviewModal;
