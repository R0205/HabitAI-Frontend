/* import React, { useState } from "react";

const AddHabitModal = ({ isOpen, onClose, onSave }) => {
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [goal, setGoal] = useState("");
  const [reminder, setReminder] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (habitName.trim() && frequency.trim() && goal.trim()) {
      const newHabit = { habitName, frequency, goal, reminder };
      onSave(newHabit);
      setHabitName("");
      setFrequency("");
      setGoal("");
      setReminder("");
      setError("");
      onClose();
    } else {
      setError("All fields are required.");
    }
  };

  // Render the modal only when isOpen is true
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Add a New Habit
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <input
            type="text"
            name="habitName"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            placeholder="Enter habit name"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            placeholder="Frequency (e.g., Daily)"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Goal (e.g., 3 times per week)"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="time"
            name="reminder"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitModal;
 */

import React, { useState } from "react";
import { motion } from "framer-motion";

const AddHabitModal = ({ isOpen, onClose, onSave }) => {
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [goal, setGoal] = useState("");
  const [reminder, setReminder] = useState("");
  const [errors, setErrors] = useState({});

  // Function to validate the fields
  const validateFields = () => {
    const newErrors = {};
    if (!habitName.trim()) newErrors.habitName = "Habit name is required";
    if (!frequency.trim()) newErrors.frequency = "Frequency is required";
    if (!goal.trim()) newErrors.goal = "Goal is required";
    return newErrors;
  };

  // Handle save logic, including field validation
  const handleSave = (e) => {
    e.preventDefault(); // Prevent form submission to trigger validation
    const fieldErrors = validateFields();
    
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors); // Set errors if validation fails
      return;
    }

    // Pass valid habit data to the parent component
    onSave(habitName, frequency, goal, reminder);

    // Reset form and close modal after successful save
    setHabitName("");
    setFrequency("");
    setGoal("");
    setReminder("");
    setErrors({});
    onClose();
  };

  // Render the modal only when isOpen is true
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Add a New Habit</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <input
              type="text"
              value={habitName}
              onChange={(e) => {
                setHabitName(e.target.value);
                if (errors.habitName) setErrors({ ...errors, habitName: "" }); // Clear error when user interacts
              }}
              placeholder="Enter habit name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.habitName && (
              <p className="text-red-500 text-sm mt-1">{errors.habitName}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={frequency}
              onChange={(e) => {
                setFrequency(e.target.value);
                if (errors.frequency) setErrors({ ...errors, frequency: "" }); // Clear error when user interacts
              }}
              placeholder="Frequency (e.g., Daily)"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.frequency && (
              <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                if (errors.goal) setErrors({ ...errors, goal: "" }); // Clear error when user interacts
              }}
              placeholder="Goal (e.g., 10 minutes)"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.goal && (
              <p className="text-red-500 text-sm mt-1">{errors.goal}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              placeholder="Reminder (e.g., 9 AM)"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={!(habitName && frequency && goal)} // Ensures the button is only enabled when required fields are filled
            >
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddHabitModal;
