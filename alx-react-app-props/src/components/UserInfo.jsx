// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';
import { useUser } from '../UserContext';

function UserInfo() {
  const userData = useUser();  // Get user data from context

  return <UserDetails userData={userData} />;
}

export default UserInfo;
