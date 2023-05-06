import React, { createContext, useContext, useState } from "react";

const PosterContext = createContext<number | null>(null);
const PosterUpdateContext = createContext<(args0: number | null) => void>(
  (args0: number | null) => null
);

export function usePosterContext() {
  return useContext(PosterContext);
}

export function useUpdatePosterContext() {
  return useContext(PosterUpdateContext);
}

const PosterProvider = ({ children }: { children: React.ReactNode }) => {
  const [hoverPosterID, setHoverPosterID] = useState<number | null>(null);

  function handleHoverPosterID(coverID: number | null) {
    setHoverPosterID(coverID);
  }
  return (
    <PosterContext.Provider value={hoverPosterID}>
      <PosterUpdateContext.Provider value={handleHoverPosterID}>
        {children}
      </PosterUpdateContext.Provider>
    </PosterContext.Provider>
  );
};

export default PosterProvider;
