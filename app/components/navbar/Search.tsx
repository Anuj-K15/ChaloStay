"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-[55%] sm:w-[65%] md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-[10px] sm:text-xs md:text-sm font-semibold px-1.5 sm:px-4 md:px-6 truncate">{locationLabel}</div>
        <div className="hidden sm:block text-xs md:text-sm font-semibold px-3 md:px-6 border-x-[1px] flex-1 text-center">
          {durationLabel}
        </div>
        <div className="text-[10px] sm:text-xs md:text-sm pl-1 sm:pl-4 md:pl-6 pr-1 sm:pr-2 text-gray-600 flex flex-row items-center gap-1 sm:gap-3">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="p-1 sm:p-1.5 md:p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
