import React from "react";

const CalendarView = ({ completedDates }) => {
  // Assuming completedDates is an array of strings like ['2024-12-01', '2024-12-05']

  // Generate a simple calendar for the current month (example with 31 days)
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the last day of the month
  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(currentYear, currentMonth, i);
    const formattedDate = day.toISOString().split("T")[0]; // Format the date as yyyy-mm-dd

    days.push(formattedDate);
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((date, index) => (
        <div
          key={index}
          className={`p-4 text-center border rounded-md ${
            completedDates.includes(date) ? "bg-green-500 text-white" : "bg-gray-100"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
