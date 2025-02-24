import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img src="C:\Users\Admin\SPA-project\src\assets\Foodify_firstLogo.png" alt="Foodify Logo" className="logo" />
                    <span className="brand-name">Foodify</span>
                </Link>

                {/* Mobile Menu Button */}
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/" className="nav-link">
                            <span className="material-icons">home</span> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipes" className="nav-link">
                            <span className="material-icons">restaurant_menu</span> Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">
                            <span className="material-icons">info</span> About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



