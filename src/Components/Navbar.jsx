
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../app/userSlice";
import { logout } from "../Firebase"; // Import logout function

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    console.log("User changed:", user); // Check if user state updates
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout(); // Log out from Firebase
      dispatch(logoutUser()); // Clear user from Redux store
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
          <button
            className="nav-link"
            onClick={() => {
              if (user) {
                handleLogout(); // Calls Firebase logout function
              } else {
                setShowModal(true); // Open login modal if no user
              }
              setIsMobileOpen(false);
            }}
          >
            <span className="material-icons">person</span> {user ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </nav>
  );
}








