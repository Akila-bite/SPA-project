import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // Ensure the path to your logo is correct

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Foodify Logo" className="logo" />
                    <span className="brand-name">Foodify</span>
                </Link>

                {/* Mobile Menu Button */}
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/recipes" className="nav-link">Recipes</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}



