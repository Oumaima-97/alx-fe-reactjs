/*import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;*/

import React from 'react';
import { useUser } from '../UserContext';

function UserDetails() {
  const userData = useUser();

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;

