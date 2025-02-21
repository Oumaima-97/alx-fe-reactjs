// src/components/UserDetails.jsx
import { useContext } from "react";
import UserContext from "../UserContext";  // Import the context

function UserDetails() {
  const userData = useContext(UserContext);  // Get userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
