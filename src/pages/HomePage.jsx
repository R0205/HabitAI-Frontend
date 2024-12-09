import React from "react";

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s text-shadow-lg">
            Welcome to HabitAI
          </h1>
          <p className="text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s text-shadow-lg">
            Track your habits and boost your productivity with cutting-edge AI insights!
          </p>
          <a
            href="/signup"
            className="bg-blue-600 px-10 py-4 text-2xl rounded-full text-white hover:bg-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
