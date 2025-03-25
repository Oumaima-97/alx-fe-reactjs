import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");  // State to hold the input value

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch(query);    // Pass the query to the parent component
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}  // Update query state as user types
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
