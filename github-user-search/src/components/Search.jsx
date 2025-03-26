import React, { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUserData(null);

        try {
            const data = await fetchUserData(searchTerm);
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                <input
                    type="text"
                    placeholder="Search GitHub username..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {userData && (
                <div className="border p-4 rounded-lg text-center">
                    <img
                        src={userData.avatar_url}
                        alt={userData.login}
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-bold">{userData.name}</h2>
                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
