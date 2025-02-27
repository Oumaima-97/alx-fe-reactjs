import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px',
      backgroundColor: '#333',  // Set background color here
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
      <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
