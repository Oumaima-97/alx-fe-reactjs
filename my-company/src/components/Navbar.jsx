import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
