type QuestionTooltipProps = {
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * 아이콘 호버 시 뜨는 질문 말풍선.
 * 표시 여부는 Home의 CSS(.icon-N:hover ~ .tooltip-N)가 결정하므로
 * 반드시 짝이 되는 아이콘 바로 뒤 형제로 렌더링해야 함.
 */
const QuestionTooltip = ({ className, style, children }: QuestionTooltipProps) => (
  <div
    className={`tooltip absolute z-20 whitespace-nowrap px-3 py-1.5 rounded-xl ${className}
      bg-rose-700/80 text-white text-sm font-sans font-semibold`}
    style={style}
  >
    {children}
  </div>
);

export default QuestionTooltip;
