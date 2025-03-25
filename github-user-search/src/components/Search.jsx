import React, { useState } from "react";

const Search = ({ onSearch, loading, error, user }) => {
  const [query, setQuery] = useState("");  // State to hold the input value

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch(query);    // Pass the query to the parent component
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}  // Update query state as user types
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}  {/* Show loading text while fetching data */}

      {error && <p>{error}</p>}  {/* Display error message if there's an issue */}

      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <h2>{user.login}</h2>
          <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
