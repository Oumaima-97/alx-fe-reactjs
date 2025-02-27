// src/components/UserDetails.jsx
import React from 'react';
import { useUserContext } from '../UserContext.jsx'; // Import the useUserContext hook

function UserDetails() {
  const userData = useUserContext(); // Access userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
