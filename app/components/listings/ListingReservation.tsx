"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";


interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates?: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="bg-white rounded-xl border-neutral-200 overflow-hidden border-[1px]">
        <div className="flex flex-row items-center gap-1 p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-semibold">
                ₹ {price}
            </div>
            <div className="font-light text-neutral-600 text-sm sm:text-base">
                night
            </div>
        </div>
        <hr />
        <Calendar
            value={dateRange}
            disabledDates={disabledDates}
            onChange={(value) => onChangeDate(value.selection)}
        />
        <hr />
        <div className="p-3 sm:p-4">
          <Button 
            disabled={disabled}
            label="Reserve"
            onClick={onSubmit}
          />
        </div>
        <div className="p-3 sm:p-4 flex flex-row items-center justify-between font-semibold text-base sm:text-lg">
          <div>Total</div>
          <div>₹ {totalPrice}</div>
        </div>
    </div>
  );
};

export default ListingReservation;
