import { useUser } from "../UserContext.jsx";

function ProfilePage() {
  const user = useUser();

  if (!user) return <p>Loading user data...</p>;

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfilePage;
