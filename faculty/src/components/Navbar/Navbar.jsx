import React from 'react'
import './Navbar.css'
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = ()=>{
    localStorage.removeItem('token');
    navigate('/');
  }

  return (

    <div className='navbar'>
        <img className='logo' src='logo.png'alt="" />

        <div className="containerr">

        <a href="" onClick={handleClick}><CiLogout/></a> 

        <img className='profile' src='profile_image.png' alt="" />
        </div>
    </div>
  )
}

export default Navbar