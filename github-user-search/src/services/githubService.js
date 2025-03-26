// github-user-search/src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};