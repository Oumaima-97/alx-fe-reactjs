import React, { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import ErrorMessage from "./components/ErrorMessage";
import githubService from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);    // To store user data
  const [error, setError] = useState("");    // To store error message
  const [loading, setLoading] = useState(false); // To indicate loading state

  const handleSearch = async (username) => {
    setLoading(true);       // Set loading to true before making API call
    setError("");           // Clear previous error messages
    setUser(null);          // Clear previous user data

    try {
      const data = await githubService.fetchUserData(username);  // Call API
      setUser(data);         // Set the fetched user data
    } catch (err) {
      setError("Looks like we can't find the user");  // Handle error
    } finally {
      setLoading(false);  // Set loading to false after API call
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
