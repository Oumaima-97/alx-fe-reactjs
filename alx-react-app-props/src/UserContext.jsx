import { createContext, useContext } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
