import { createContext, useContext } from "react";

// Create the context
const UserContext = createContext();

// Custom hook for consuming the context
export const useUser = () => useContext(UserContext);

// Export the provider component
export const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
