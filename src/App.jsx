import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
// In index.js or App.jsx
import "./index.css"; // Make sure the path is correct
import DashboardPage from "./pages/DashBoardPage.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays at the top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* Other Routes */}
          </Routes>
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
