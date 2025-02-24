import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="material-icons">menu</span> {/* Google Material Icon */}
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#"><span className="material-icons">home</span> Home</a>
        </li>
        <li>
          <a href="#"><span className="material-icons">restaurant_menu</span> Recipes</a>
        </li>
        <li>
          <a href="#"><span className="material-icons">favorite</span> Favorites</a>
        </li>
      </ul>
    </nav>
  );
}









