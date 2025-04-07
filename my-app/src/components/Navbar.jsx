import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">TransformoDocs</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Documents</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li className="mobile-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="profile-pic"
          />
        </li>
      </ul>

      <div className="navbar-profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="profile-pic"
        />
      </div>
    </nav>
  );
};

export default Navbar;