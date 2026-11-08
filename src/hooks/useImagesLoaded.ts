import { useEffect, useState } from "react";

/**
 * 이미지들을 미리 받아 화면에 그릴 준비(decode)까지 끝나면 true.
 * CSS backgroundImage처럼 onLoad를 받을 수 없는 이미지의 스켈레톤 표시에 씀.
 * 이미지가 깨져도 스켈레톤이 계속 남지 않도록 실패도 "끝남"으로 처리.
 */
export const useImagesLoaded = (srcs: string[]) => {
  const key = srcs.join("|");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      key.split("|").map((src) => {
        const img = new Image();
        img.src = src;
        return img.decode().catch(() => undefined);
      }),
    ).then(() => {
      if (!cancelled) setLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return loaded;
};
