import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IScreenShots } from "../../../data/projects";

interface SliderProps {
  images: IScreenShots[];
}

const Slider = ({ images }: SliderProps) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden aspect-video bg-stone-100">
        <div
          className="flex h-full transition-transform duration-300"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map(({ src, desc }) =>
            src.endsWith(".mp4") ? (
              <video
                key={src}
                src={src}
                aria-label={desc}
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-full shrink-0 object-cover scale-101 object-top origin-top"
              />
            ) : (
              <img
                key={src}
                src={src}
                alt={desc}
                className="w-full h-full shrink-0 z-10 object-cover object-top origin-top"
              />
            ),
          )}
        </div>
      </div>

      {hasMultiple && (
        <div className="flex justify-between items-stretch border-y border-black">
          <div className="flex items-center gap-4 pl-4 min-w-0">
            <p className="flex items-center text-sm text-black font-light font-sans tabular-nums">
              {String(index + 1).padStart(2, "0")}
              <span className="text-stone-400 pl-1">
                / {String(images.length).padStart(2, "0")}
              </span>
            </p>
            <p className="text-sm text-stone-600 truncate border-l border-stone-300 pl-4">
              {images[index].desc}
            </p>
          </div>

          <div className="flex shrink-0">
            <button
              aria-label="이전 스크린샷"
              onClick={prev}
              className="cursor-pointer bg-black hover:bg-black/80 duration-300 p-2.5"
            >
              <ChevronLeft strokeWidth={1.5} size={28} color="white" />
            </button>
            <button
              aria-label="다음 스크린샷"
              onClick={next}
              className="cursor-pointer bg-black hover:bg-black/80 duration-300 p-2.5 border-l border-white/20"
            >
              <ChevronRight strokeWidth={1.5} size={28} color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
