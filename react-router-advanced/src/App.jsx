// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component

function App() {
  // Simulating user authentication (this can be based on real login status)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Use ProtectedRoute to protect the profile page */}
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute
              element={<Profile />}
              isAuthenticated={isAuthenticated}
            />
          }
        />

        {/* Add route for dynamic blog post */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for blog post */}
      </Routes>
    </Router>
  );
}

export default App;
