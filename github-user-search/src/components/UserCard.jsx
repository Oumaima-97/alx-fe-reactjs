import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt={user.name} width={100} />
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
