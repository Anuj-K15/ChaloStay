"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
  <div
  onClick={() => onClick(label)}
  className={`
        rounded-xl border-2 p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 hover:border-black transition cursor-pointer ${selected ? "border-black" : "border-neutral-200"}
    `}
  >
    <Icon size={24} className="sm:w-[30px] sm:h-[30px]" />
    <div className="font-semibold text-sm sm:text-base text-center">
        {label}
    </div>
  </div>
);
};

export default CategoryInput;
