// src/UserDetails.jsx
import React from 'react';
import { useUser } from '../UserContext.js';

function UserDetails() {
  const userData = useUser();  // Get user data from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
