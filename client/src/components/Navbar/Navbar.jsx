import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbarr'>
     <img className='logo' src="logo.png" alt="" />
      <div className="menu">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar
