import Dial from "./Dial";

type CategoryFilterProps = {
  items: string[];
  active: string;
  onSelect: (item: string) => void;
};

/** 다이얼 + 텍스트 버튼으로 이루어진 분류 필터 */
const CategoryFilter = ({ items, active, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex-1 2xl:flex-none flex items-center gap-3">
      <Dial size={420} items={items} active={active} onSelect={onSelect} />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            aria-pressed={active === item}
            className={`text-left transition-colors cursor-pointer w-18 hover:text-rose-800 ${
              active === item ? "text-rose-700 font-bold" : "text-stone-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
