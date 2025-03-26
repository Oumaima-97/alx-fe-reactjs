import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async (searchTerm, location, minRepos) => {
  try {
    const query = `q=${searchTerm} ${location ? `location:${location}` : ""} ${minRepos ? `repos:>${minRepos}` : ""}`;
    const response = await axios.get(`${BASE_URL}?${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
