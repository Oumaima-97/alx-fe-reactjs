// github-user-search/src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (username, location, minRepos, page = 1) => {
  let query = username;
  if (location) {
    query += ` location:${location}`;
  }
  if (minRepos) {
    query += ` repos:>${minRepos}`;
  }

  const apiUrl = `${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}`; //Construct the url for readability.

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};