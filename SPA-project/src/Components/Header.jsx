
import Navbar from "./Navbar";
import SearchBar from "./SearchBar"; 
import logo from "../assets/Foodify_firstLogo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Foodify Logo" className="logo" /> {/* Logo image */}
      <Navbar /> {/* Include the Navbar component */}

      {/* Adding the Searchbar under the nav */}
      <SearchBar onSearch={(query) => console.log("Searching for:", query)} />

    </header>
  );
}
