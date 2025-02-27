// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './UserContext.jsx';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
