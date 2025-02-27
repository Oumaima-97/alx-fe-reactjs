// src/App.jsx
import React from 'react';
import { UserProvider } from './UserContext';  // Import the UserProvider
import UserProfile from './components/UserProfile';  // Import the component that will consume the context

function App() {
  return (
    <UserProvider>  {/* Wrap the components inside UserProvider */}
      <UserProfile />
    </UserProvider>
  );
}

export default App;
