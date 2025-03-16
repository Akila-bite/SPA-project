
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isMobileOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={() => setIsMobileOpen(false)}>
            <span className="material-icons">home</span> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/recipes" onClick={() => setIsMobileOpen(false)}>
            <span className="material-icons">restaurant_menu</span> Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites" onClick={() => setIsMobileOpen(false)}>
            <span className="material-icons">favorite</span> Favorites
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={() => setIsMobileOpen(false)}>
            <span className="material-icons">dinner_dining</span> About
          </Link>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => { setShowModal(true); setIsMobileOpen(false); }}>
            <span className="material-icons">person</span> Login
          </button>
        </li>
      </ul>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </nav>
  );
}









