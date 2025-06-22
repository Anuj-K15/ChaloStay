'use client'

import { DateRange, Range, RangeKeyDict } from "react-date-range"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

interface CalendarProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[]

}

const Calendar: React.FC<CalendarProps> = ({
    value,
    onChange,
    disabledDates
}) => {
  return (
    <div className="w-full max-w-full px-2 sm:px-0">
      <DateRange 
          rangeColors={["#262626"]}
          ranges={[value]}
          onChange={onChange}
          direction="vertical"
          showDateDisplay={false}
          minDate={new Date()}
          disabledDates={disabledDates}
          className="w-full custom-calendar-responsive"
      />
    </div>
  )
}

export default Calendar