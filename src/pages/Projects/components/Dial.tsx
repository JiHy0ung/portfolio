const Dial = ({
  size = 420,
  items,
  active,
  onSelect,
  spanDegrees = 50,
}: {
  size?: number;
  items: string[];
  active: string;
  onSelect: (item: string) => void;
  spanDegrees?: number;
}) => {
  const center = size / 2;
  const outerR = size / 2 - 4;
  const innerR = size * 0.38;

  const circumference = 2 * Math.PI * outerR;
  const spanCircumference = (spanDegrees / 360) * circumference;
  const count = items.length;
  const segment = spanCircumference / count;
  const gap = segment * 0.1;
  const arcLength = segment - gap;
  const rotationOffset = -90 + (180 - spanDegrees) / 2;

  const activeIndex = items.indexOf(active);
  const activeOffset = -(activeIndex * segment) - gap / 2;

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: size / 2, height: size }}
    >
      <div
        className="absolute"
        style={{ width: size, height: size, left: -size / 2 }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={center}
            cy={center}
            r={outerR}
            fill="none"
            stroke="#dad7cd"
            strokeWidth={1}
          />

          {items.map((item, i) => {
            const offset = -(i * segment) - gap / 2;
            return (
              <circle
                key={item}
                cx={center}
                cy={center}
                r={outerR}
                fill="none"
                stroke="transparent"
                strokeWidth={16}
                strokeDasharray={`${arcLength} ${circumference - arcLength}`}
                strokeDashoffset={offset}
                className="cursor-pointer"
                onClick={() => onSelect(item)}
                transform={`rotate(${rotationOffset} ${center} ${center})`}
              />
            );
          })}

          <circle
            cx={center}
            cy={center}
            r={outerR}
            fill="none"
            stroke="#be123c"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference - arcLength}`}
            strokeDashoffset={activeOffset}
            transform={`rotate(${rotationOffset} ${center} ${center})`}
            style={{
              transition:
                "stroke-dashoffset 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: "none",
            }}
          />
        </svg>

        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            width: innerR * 2,
            height: innerR * 2,
            top: center - innerR,
            left: center - innerR,
            background: "#1c1c1a",
            animation: "pulse 2.5s ease-in-out infinite",
          }}
        >
          <svg
            width={innerR * 2}
            height={innerR * 2}
            viewBox={`0 0 ${innerR * 2} ${innerR * 2}`}
            className="absolute inset-0"
          >
            <g style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.8))" }}>
              {(() => {
                const traceR = innerR * 0.75;
                const segCount = 48;
                const minWidth = 0.1;
                const maxWidth = 1.5;

                return Array.from({ length: segCount }, (_, i) => {
                  const t0 = -90 + (i / segCount) * 180;
                  const t1 = -90 + ((i + 1) / segCount) * 180;
                  const midDeg = (t0 + t1) / 2;

                  const rad0 = (t0 * Math.PI) / 180;
                  const rad1 = (t1 * Math.PI) / 180;

                  const x0 = innerR + traceR * Math.cos(rad0);
                  const y0 = innerR + traceR * Math.sin(rad0);
                  const x1 = innerR + traceR * Math.cos(rad1);
                  const y1 = innerR + traceR * Math.sin(rad1);

                  const widthFactor = Math.abs(
                    Math.cos((midDeg * Math.PI) / 180),
                  );
                  const width = minWidth + (maxWidth - minWidth) * widthFactor;

                  return (
                    <line
                      key={i}
                      x1={x0}
                      y1={y0}
                      x2={x1}
                      y2={y1}
                      stroke="#d8d8d8"
                      strokeOpacity={0.5}
                      strokeWidth={width}
                      strokeLinecap="round"
                    />
                  );
                });
              })()}
            </g>

            {(() => {
              const traceR = innerR * 0.75;
              const topX = innerR;
              const topY = innerR - traceR;
              const bottomX = innerR;
              const bottomY = innerR + traceR;

              const pathD = `M ${topX} ${topY} A ${traceR} ${traceR} 0 0 1 ${bottomX} ${bottomY}`;
              const rangeStart = 35;
              const rangeEnd = 65;
              const offsetDistance = `${rangeStart + ((activeIndex + 0.5) / count) * (rangeEnd - rangeStart)}%`;

              return (
                <g
                  style={{
                    offsetPath: `path("${pathD}")`,
                    offsetDistance,
                    transition:
                      "offset-distance 0.45s cubic-bezier(0.4,0,0.2,1)",
                    filter: "drop-shadow(0 0 8px rgba(255,255,255,1))",
                  }}
                >
                  <path
                    d="M12 0C12.3 9 15 11.7 24 12C15 12.3 12.3 15 12 24C11.7 15 9 12.3 0 12C9 11.7 12.3 9 12 0Z"
                    fill="#ffffff"
                    transform="translate(-12,-12) scale(1)"
                  />
                </g>
              );
            })()}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dial;
