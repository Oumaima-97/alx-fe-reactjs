import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext'; // Import context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Pass data through context */}
      <ProfilePage />  {/* The component consuming the context */}
    </UserContext.Provider>
  );
}

export default App;
