"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (Value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium text-sm sm:text-base">{title}</div>
        <div className="font-light text-gray-600 text-xs sm:text-sm">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-4">
        <div
          onClick={onReduce}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlineMinus size={16} className="sm:w-5 sm:h-5" />
        </div>
        <div className="font-light text-lg sm:text-xl text-neutral-600 w-8 text-center">
            {value}
        </div>
        <div
          onClick={onAdd}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlinePlus size={16} className="sm:w-5 sm:h-5" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
