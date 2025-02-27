import React, { useContext } from 'react';
import UserProfile from './UserProfile';
import { UserContext } from '../UserContext.js';

const ProfilePage = () => {
  const user = useContext(UserContext); // Access user data from context

  return (
    <div>
      <h1>Profile Page</h1>
      <UserProfile name={user.name} email={user.email} />
    </div>
  );
};

export default ProfilePage;
