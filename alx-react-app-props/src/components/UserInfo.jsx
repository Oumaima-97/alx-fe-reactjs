/*// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;  // No need to pass userData as a prop
}

export default UserInfo;*/

import React from 'react';
import { useUser } from "../UserContext.jsx"; // Adjust the path if needed
import UserDetails from "./UserDetails.jsx";

function UserInfo() {
  const userData = useUser();
  return <UserDetails userData={userData} />;
}

export default UserInfo;



