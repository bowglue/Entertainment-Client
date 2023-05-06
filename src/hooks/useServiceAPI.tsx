import axios, { CancelTokenSource } from "axios";
import React, { useEffect, useState } from "react";

const useServiceAPI = (
  functionAPI: (
    cancelToken: CancelTokenSource,
    handleCache: (blob: string) => void
  ) => void
) => {
  const [objectURL, setObjectURL] = useState<string>();
  useEffect(() => {
    const source = axios.CancelToken.source();
    functionAPI(source, handleObjectURL);
    return () => {
      source.cancel("Request cancelled");
      if (objectURL) URL.revokeObjectURL(objectURL);
    };
  }, []);

  function handleObjectURL(blob: string) {
    setObjectURL(blob);
  }

  return { objectURL };
};

export default useServiceAPI;
