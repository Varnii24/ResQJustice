import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CaseForm from "./components/CaseForm";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import "./styles/global.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* Show Navbar only when logged in */}
        {isAuthenticated && <Navbar />}

        <Routes>
          {/* ✅ Home is always accessible */}
          <Route path="/" element={<Home />} />

          {/* ✅ Login Page */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* ✅ Protected Routes - Accessible only when logged in */}
          {isAuthenticated ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/report" element={<CaseForm />} />
              <Route path="/contact" element={<h1>Contact Page</h1>} />
            </>
          ) : (
            // 🚀 Redirect unauthorized users to login page
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
