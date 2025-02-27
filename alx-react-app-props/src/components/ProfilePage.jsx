import { useContext } from "react";
import { UserContext } from "../UserContext";

const ProfilePage = () => {
  const { userData, setUserData } = useContext(UserContext);

  const updateUser = () => {
    setUserData({
      name: "John Smith",
      email: "john.smith@example.com",
    });
  };

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <button onClick={updateUser}>Update Profile</button>
    </div>
  );
};

export default ProfilePage;
