import { useEffect, useState } from "react";

export interface FetchImageProps {
  cover: string;
  logo: string;
  request: boolean;
}

const useFetchImage = ({ cover, logo, request }: FetchImageProps) => {
  const [images, setImages] = useState<{ cover: string; logo: string }>({
    cover: "",
    logo: "",
  });

  useEffect(() => {
    if (!request) return;
    const controller = new AbortController();
    const itemCoverBlob = fetchItemImage(cover, controller);
    const itemTitleBlob = fetchItemImage(logo, controller);
    Promise.all([itemCoverBlob, itemTitleBlob])
      .then((blobs) => {
        const cover = URL.createObjectURL(blobs[0]);
        const logo = URL.createObjectURL(blobs[1]);
        setImages({ cover, logo });
      })
      .catch(() => {});

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchItemImage(
    url: string,
    controller: AbortController
  ): Promise<Blob> {
    return fetch(url, {
      signal: controller.signal,
    }).then((res) => res.blob());
  }

  return images;
};

export default useFetchImage;
