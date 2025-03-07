// src/hooks/useAuth.js
import { useState } from "react";

// Simulate user authentication state
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle authentication state (just for demo purposes)
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout
  };
};

export default useAuth;
