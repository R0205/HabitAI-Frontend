import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import AddHabitModal from "../component/AddHabitModal";

const DashboardPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [habits, setHabits] = useState([]);
  const [habitProgress, setHabitProgress] = useState({});
  const [habitAnalytics, setHabitAnalytics] = useState({});

  const addHabit = (habitName) => {
    if (!habits.includes(habitName) && habitName.trim() !== "") {
      setHabits([...habits, habitName]);
      setHabitProgress({
        ...habitProgress,
        [habitName]: 0,
      });
      setHabitAnalytics({
        ...habitAnalytics,
        [habitName]: [{ name: "Day 1", Progress: 0 }],
      });
    }
  };

  const updateProgress = (habitName, progress) => {
    const newProgress = Math.min(progress, 100); // Cap progress at 100%
    setHabitProgress({
      ...habitProgress,
      [habitName]: newProgress,
    });

    const updatedAnalytics = habitAnalytics[habitName] || [];
    const day = `Day ${updatedAnalytics.length + 1}`;
    setHabitAnalytics({
      ...habitAnalytics,
      [habitName]: [
        ...updatedAnalytics,
        { name: day, Progress: newProgress },
      ],
    });
  };

  const calculateTodayProgress = () => {
    const totalHabits = habits.length;
    if (totalHabits === 0) return 0;
    const totalProgress = habits.reduce((sum, habit) => sum + (habitProgress[habit] || 0), 0);
    return Math.round(totalProgress / totalHabits);
  };

  return (
    <div className="pt-20 p-6 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 text-blue-900 tracking-wider">
        Your Habit Dashboard
      </h1>

      {/* Add Habit Button */}
      <div className="text-right mb-6">
        <button
          onClick={() => setModalOpen(true)}
          className="py-3 px-6 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          + Add Habit
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddHabitModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={addHabit}
        />
      )}

      {/* Today's Progress */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Today's Progress</h2>
        <p className="text-lg text-gray-700">
          You've completed{" "}
          <span className="font-bold text-green-600">{calculateTodayProgress()}%</span> of your habits today!
        </p>
        <div className="mt-4">
          <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${calculateTodayProgress()}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">
            {calculateTodayProgress()}% done
          </p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">
          Habit Progress Over Time
        </h2>
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700">{habit}</h3>
              <LineChart
                width={500}
                height={300}
                data={habitAnalytics[habit]}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <Line type="monotone" dataKey="Progress" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center text-lg">
            No habits added yet. Click "Add Habit" to get started!
          </p>
        )}
      </div>

      {/* Habits List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Your Habits</h2>
        <ul className="space-y-6">
          {habits.length > 0 ? (
            habits.map((habit, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-6 py-4 rounded-lg hover:shadow-md transition"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-medium">{habit}</span>
                  <div className="mt-4">
                    <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{
                          width: `${habitProgress[habit] || 0}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {habitProgress[habit] || 0}% completed
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    updateProgress(habit, (habitProgress[habit] || 0) + 10)
                  }
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                >
                  Mark as Done
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center text-lg">
              No habits added yet. Click "Add Habit" to get started!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
