import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated }) => {
  // If the user is authenticated, render the element (e.g., Profile component)
  // Otherwise, redirect to the login or home page
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
