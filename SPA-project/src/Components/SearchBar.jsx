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
    <div className="w-full flex justify-center mt-4 px-4">
      <form 
        onSubmit={handleSearch} 
        className="flex w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-sm px-3 py-2 items-center"
      >
        <input
          type="text"
          placeholder="Search recipes..."
          className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};


