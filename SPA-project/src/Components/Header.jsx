
import Navbar from "./Navbar";
import logo from "../assets/Foodify_firstLogo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Foodify Logo" className="logo" /> {/* Logo image */}
      <Navbar /> {/* Include the Navbar component */}
    </header>
  );
}
