// github-user-search/src/components/Search.jsx
import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';
import './Search.css'; // Import Tailwind styles

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSearchResults([]);
    setPage(1);
    setHasMore(true);

    try {
      const query = `${username} location:${location} repos:>${minRepos}`;
      const data = await searchUsers(query, 1);
      setSearchResults(data.items);
      setHasMore(data.items.length === 30); // Assuming 30 results per page
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    const nextPage = page + 1;

    try {
      const query = `${username} location:${location} repos:>${minRepos}`;
      const data = await searchUsers(query, nextPage);
      setSearchResults([...searchResults, ...data.items]);
      setHasMore(data.items.length === 30);
      setPage(nextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Min Repositories:</label>
          <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-center text-red-500">Looks like we cant find the user.</p>}

      {searchResults.length > 0 && (
        <div>
          {searchResults.map((user) => (
            <div key={user.id} className="border rounded p-4 mb-4">
              <img src={user.avatar_url} alt="User Avatar" className="w-20 h-20 rounded-full mb-2" />
              <p>Login: {user.login}</p>
              <p>Name: {user.name || 'Not available'}</p>
              <p>Location: {user.location || 'Not available'}</p>
              <p>Repositories: {user.public_repos}</p>
              <p>
                Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.html_url}
                </a>
              </p>
            </div>
          ))}
          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;