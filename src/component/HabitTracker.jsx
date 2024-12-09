import React, { useState } from "react";
import AddHabitModal from "./AddHabitModal";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveHabit = (habit) => {
    setHabits((prevHabits) => [...prevHabits, habit]);
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handlCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Habit Tracker</h1>
      <button
        onClick={handleOpenModal}
        className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add New Habit
      </button>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Your Habits</h2>
        <ul>
          {habits.map((habit, index) => (
            <li key={index} className="mt-2">
              <p className="font-semibold">{habit.habitName}</p>
              <p>Frequency:{habit.frequency}</p>
              <p>Goal: {habit.goal}</p>
              {habit.reminder && <p>Reminder:{habit.reminder}</p>}
            </li>
          ))}
        </ul>
      </div>
      <AddHabitModal
        isOpen={isModalOpen}
        onClose={handlCloseModal}
        onSave={handleSaveHabit}
      />
    </div>
  );
};

export default HabitTracker;
