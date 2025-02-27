// src/UserProfile.jsx
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';  // Import the context

function UserProfile() {
  const { userData, setUserData } = useContext(UserContext);  // Access userData and setUserData

  const updateEmail = () => {
    setUserData(prevData => ({ ...prevData, email: 'new.email@example.com' }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <button onClick={updateEmail}>Update Email</button>
    </div>
  );
}

export default UserProfile;
