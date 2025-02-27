// src/UserContext.js
import React, { createContext, useContext } from 'react';

// Create a context for user data
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);  // Custom hook to use the context
};

export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
