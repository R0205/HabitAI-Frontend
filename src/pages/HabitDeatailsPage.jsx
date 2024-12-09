import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const HabitDetailsPage = ({ habitName, progressData, onBack }) => {
  return (
    <div className="p-6">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Dashboard
      </button>
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">
        {habitName} Details
      </h2>
      <LineChart
        width={600}
        height={300}
        data={progressData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Line type="monotone" dataKey="Progress" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default HabitDetailsPage;
