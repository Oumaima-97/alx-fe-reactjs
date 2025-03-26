import React, { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [repoCount, setRepoCount] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAdvancedSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUsers([]);

        try {
            let query = `user:${searchTerm}`;
            if (location) query += ` location:${location}`;
            if (repoCount) query += ` repos:>${repoCount}`;

            const results = await fetchAdvancedUsers(query);
            setUsers(results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <form onSubmit={handleAdvancedSearch} className="mb-4 grid gap-2">
                <input
                    type="text"
                    placeholder="GitHub username..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <input
                    type="text"
                    placeholder="Location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum Repos..."
                    value={repoCount}
                    onChange={(e) => setRepoCount(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Advanced Search
                </button>
            </form>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {users.length > 0 && (
                <ul className="list-none p-0">
                    {users.map((user) => (
                        <li key={user.id} className="border p-3 my-2 rounded">
                            <div className="flex items-center">
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="ml-3">
                                    <h2 className="text-lg font-bold">{user.login}</h2>
                                    <a
                                        href={user.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
