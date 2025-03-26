import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="border p-4 rounded">
          <img src={userData.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full" />
          <h2 className="text-xl">{userData.name}</h2>
          <a href={userData.html_url} className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
