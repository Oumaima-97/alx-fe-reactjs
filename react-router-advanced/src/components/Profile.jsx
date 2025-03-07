import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  // Access the dynamic 'id' from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile: {id}</h1> {/* Show the dynamic user ID */}

      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* Nested routes */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
