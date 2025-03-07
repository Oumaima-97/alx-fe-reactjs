// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

// Simulate checking for an authentication token in localStorage (or use your actual method)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., checking a token in localStorage)
    const token = localStorage.getItem('authToken'); // replace with your authentication logic
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth;