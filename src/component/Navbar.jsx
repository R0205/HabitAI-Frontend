import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-800 py-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">
          <Link to="/" className="text-white text-xl font-bold">
            HabitAI
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle icons */}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`absolute top-14 left-0 right-0 mx-4 bg-blue-800 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          } md:static md:transform-none md:opacity-100 md:scale-100 md:bg-transparent md:flex md:space-x-6`}
        >
          <Link
            to="dashboard"
            className="block px-4 py-2 text-white hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-white hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-white hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
