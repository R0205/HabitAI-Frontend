import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold tracking-wide">
              Habit<span className="text-blue-400">AI</span>
            </h1>
            <p className="text-sm text-gray-300 mt-2">
              Your personal productivity assistant.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-6" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HabitAI. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Built with ❤️ by the HabitAI team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
