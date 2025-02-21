// src/components/UserInfo.jsx
import { useContext } from "react";
import UserContext from "../UserContext";  // Import the context

function UserInfo() {
  const userData = useContext(UserContext);  // Get the userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserInfo;
