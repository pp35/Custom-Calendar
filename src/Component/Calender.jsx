import React, { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isBefore,
  isSameDay,
} from "date-fns";
import CalendarHeader from "./CalenderHeader";
import CalendarCell from "./CalenderCell";

const holidays = [
  { date: new Date(2024, 0, 1), name: "New Year's Day" },
  { date: new Date(2024, 11, 25), name: "Christmas" },
  { date: new Date(2024, 6, 4), name: "Independence Day" },
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const isHoliday = (day) => holidays.find((holiday) => isSameDay(holiday.date, day));
  const isWeekend = (day) => [0, 6].includes(day.getDay()); // Sunday=0, Saturday=6
  const isCurrentDay = (day) => isSameDay(day, new Date());

  const dayStatusClass = (day) => {
    if (isHoliday(day)) {
      return "bg-red-400 text-white tooltip";
    } else if (isBefore(day, new Date())) {
      return "bg-gray-300 text-gray-500 cursor-not-allowed";
    } else if (isCurrentDay(day)) {
      return "bg-green-400 text-white";
    } else if (isWeekend(day)) {
      return "bg-yellow-100 text-yellow-800";
    } else {
      return "hover:bg-blue-100 hover:text-blue-800";
    }
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);
    return (
      <div className="grid grid-cols-7 text-center font-bold bg-gray-200 p-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="uppercase text-sm">
            {format(addDays(startDate, i), dateFormat)}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const endDate = endOfWeek(endOfMonth(monthStart));
    let day = startOfWeek(monthStart);
    const days = [];

    while (day <= endDate) {
      days.push(
        <CalendarCell
          key={day}
          day={day}
          dayStatusClass={dayStatusClass}
        />
      );
      day = addDays(day, 1);
    }

    return <div className="grid grid-cols-7 gap-2 p-4">{days}</div>;
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg">
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        addMonths={addMonths}
        subMonths={subMonths}
      />
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
