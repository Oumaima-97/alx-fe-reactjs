// src/App.jsx
import React from 'react';
import { UserProvider } from './UserContext.jsx'; // Import the UserProvider
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}> {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
