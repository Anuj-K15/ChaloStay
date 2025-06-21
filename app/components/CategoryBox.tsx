'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  // description: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  // description,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());

      const updateQuery: Record<string, unknown> = {
        ...currentQuery,
        category: label,
      };

      if (params?.get("category") === label) {
        delete updateQuery.category;
      } 

      const url = qs.stringifyUrl(
        {
          url: '/',
          query: updateQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    }
  }, [label, params, router]);
  return (
    <div
    onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
