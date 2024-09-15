import React from "react";
import { format } from "date-fns";
import { Tooltip } from "react-tooltip";

const CalendarCell = ({ day, dayStatusClass, setSelectedDate }) => {
  const holiday = dayStatusClass(day).includes('tooltip') ? "Holiday" : "";

  return (
    <div
      className={`p-3 flex justify-center items-center rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${dayStatusClass(day)}`}
      onClick={() => setSelectedDate(day)}
      data-tip={holiday ? holiday : ""}
    >
      <span>{format(day, "d")}</span>
      {holiday && <Tooltip place="top" type="dark" effect="solid" />}
    </div>
  );
};

export default CalendarCell;
