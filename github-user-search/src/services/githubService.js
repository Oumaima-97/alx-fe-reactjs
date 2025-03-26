import axios from 'axios';

const BASE_URL = "https://api.github.com";

// Function to fetch user details
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error("User not found");
    }
};

// Function to fetch users based on advanced search criteria
export const fetchAdvancedUsers = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
        return response.data.items; // API returns items array
    } catch (error) {
        throw new Error("Search failed");
    }
};
