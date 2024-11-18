import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from "../images/final_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Sahayk Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/" className='roboto-slab-font class-1'>Home</Link></li>
        <li><Link to="/create" className='roboto-slab-font class-2'>Create Post</Link></li>
        <li><Link to="/posts" className='roboto-slab-font class-3'>Public Posts</Link></li>
        <li><Link to="/blogs" className='roboto-slab-font class-4'>Blogs</Link></li>
        <li><Link to="/help" className='roboto-slab-font class-3'>Helplines</Link></li>
        <li><Link to="/about" className='roboto-slab-font class-2'>About Us</Link></li>
        <li><Link to="/contact" className='roboto-slab-font class-1'>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
