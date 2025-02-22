/*import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Path should be correct

function ProfilePage() {
  const userData = useContext(UserContext);  // Use the context to get userData

  if (!userData) {
    return <p>Loading...</p>;  // Fallback if userData is not found
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default ProfilePage;*/
//import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return <UserInfo />;
}

export default ProfilePage;

