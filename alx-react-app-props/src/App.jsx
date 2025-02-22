//import React from 'react';
import ProfilePage from "./components/ProfilePage";
import { UserProvider } from "./UserContext"; // Import the UserProvider

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;

