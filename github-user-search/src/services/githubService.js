import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

// Function to fetch user data by username (basic search)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error("User not found");
  }
};

// Function for advanced user search (search users with additional filters like location and minimum repos)
export const fetchAdvancedUserSearch = async (query, location, minRepos) => {
  try {
    // Start building the search query
    let searchQuery = `q=${query}`;

    // Add optional filters (location and minimum repositories)
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    // Make API request using the GitHub Search API
    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
    return response.data.items; // Return list of users that match search
  } catch (error) {
    throw new Error("Error fetching search results");
  }
};
