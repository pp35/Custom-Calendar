import React from "react";
import { startOfWeek, format, addDays } from "date-fns";

const CalendarDays = ({ currentMonth }) => {
  const dateFormat = "EEE";
  let startDate = startOfWeek(currentMonth);

  return (
    <div className="grid grid-cols-7 text-center font-semibold text-gray-700 bg-gray-200 py-3">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="uppercase">{format(addDays(startDate, i), dateFormat)}</div>
      ))}
    </div>
  );
};

export default CalendarDays;
