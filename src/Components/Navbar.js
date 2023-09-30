import React from 'react';
import './Navbar.css'; 
import { Link, } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>
          <span className='logo-text'>🔍 Path Finder</span>
        </div>
        <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
