
import Navbar from "./Navbar";
import SearchBar from "./SearchBar"; 


export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Foodify</h1>
      <Navbar /> {/* Include the Navbar component */}

      {/* Adding the Searchbar under the nav */}
      <SearchBar onSearch={(query) => console.log("Searching for:", query)} />

    </header>
  );
}
