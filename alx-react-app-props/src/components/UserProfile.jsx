import React from 'react';

const UserProfile = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
