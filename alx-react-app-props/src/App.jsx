// src/App.jsx
import { useState } from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./UserContext";  // Import the context

function App() {
  const [userData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  });

  return (
    <UserContext.Provider value={userData}>  {/* Wrap components in context provider */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
