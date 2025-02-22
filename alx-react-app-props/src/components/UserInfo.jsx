/*// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;  // No need to pass userData as a prop
}

export default UserInfo;*/

import React from 'react';
import UserDetails from './UserDetails';
import { useUser } from '../UserContext';

function UserInfo() {
  const userData = useUser();

  return <UserDetails userData={userData} />;
}

export default UserInfo;

