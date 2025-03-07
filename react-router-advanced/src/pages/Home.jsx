import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login by setting isAuthenticated to true
    navigate("/profile/1"); // Redirect to a profile after "logging in"
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogin}>Login as User 1</button>
    </div>
  );
};

export default Home;
