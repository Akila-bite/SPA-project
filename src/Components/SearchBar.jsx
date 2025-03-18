

import {useState} from "react";
import { useDispatch} from "react-redux";
import { filterRecipes} from "../app/recipesSlice"; // Import your filterRecipes action

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Updates the query as the user is typing, triggering the search instantly
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSearch = (e) => {
     e.preventDefault();
    // Dispatch the action to filter recipes when the search is triggered
    dispatch(filterRecipes(query)); 
  };

  

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          value={query}
          onChange={handleInputChange}
        />
      </form>
      <p className="bottom-search-text">search by meal or category (breakfast, lunch, etc)</p>
    </div>
  );
}


