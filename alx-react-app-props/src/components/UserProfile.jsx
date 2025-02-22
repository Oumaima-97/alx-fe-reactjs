// src/components/UserProfile.jsx
/*const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;*/

  import React, { useContext } from 'react';
import { UserContext } from '../UserContext.jsx'; // Correct path to UserContext

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;

  