import axios from "axios";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return user data if successful
  } catch (error) {
    throw new Error("User not found or error fetching data");
  }
};

export default { fetchUserData };
