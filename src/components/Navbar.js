import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">POWERUP</div>
      <div className="nav-links">
        <Link to="/">Homepage</Link>
        <Link to="/report">Report a Case</Link>
        <Link to="/dashboard">Your Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
