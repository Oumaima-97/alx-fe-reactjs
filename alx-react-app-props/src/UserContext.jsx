// src/UserContext.js
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
