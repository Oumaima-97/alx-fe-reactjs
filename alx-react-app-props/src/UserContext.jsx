import React, { createContext, useState, useContext } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    bio: 'This is a short bio.',
  });

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access context
export function useUser() {
  return useContext(UserContext);
}
