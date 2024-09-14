import React from 'react';
import { getMonth, getYear } from 'date-fns';

const CalendarHeader = ({ currentMonth, setCurrentMonth, addMonths, subMonths }) => {
  const currentYear = getYear(new Date());
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleMonthChange = (e) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), parseInt(e.target.value)));
  };

  const handleYearChange = (e) => {
    setCurrentMonth(new Date(parseInt(e.target.value), currentMonth.getMonth()));
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-t-lg">
      <button className="text-lg font-bold px-2 py-1 rounded-lg hover:bg-blue-600" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        {"<"}
      </button>
      <div className="flex items-center">
        <select
          value={getMonth(currentMonth)}
          onChange={handleMonthChange}
          className="mr-2 bg-blue-600 text-white font-semibold p-1 rounded"
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={getYear(currentMonth)}
          onChange={handleYearChange}
          className="bg-blue-600 text-white font-semibold p-1 rounded"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button className="text-lg font-bold px-2 py-1 rounded-lg hover:bg-blue-600" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        {">"}
      </button>
    </div>
  );
};

export default CalendarHeader;
