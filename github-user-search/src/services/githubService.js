import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export const fetchAdvancedUserSearch = async (query, location, minRepos) => {
  try {
    let searchQuery = `q=${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching search results");
  }
};
