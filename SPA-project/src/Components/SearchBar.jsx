import {useState} from "react";

export default function SearchBar ({ onSearch }) {
  const [query, setQuery] = useState("");

  // Updates the query as the user is typing, triggering the search instantly
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query); // Trigger search only on form submission
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
    </div>
  );
};  

