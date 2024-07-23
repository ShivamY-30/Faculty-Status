import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <div className='main-footer'>
    <div className="icons">
      <li> <a href="https://www.linkedin.com/in/shivam-yadav-3774a522b/"> <FaLinkedin size={25} color="#0e76a8"/></a></li>
      <li> <a href=""><FaSquareGithub size={25} color="#0e76a8"  /></a></li>
    </div>
    <p>DEVELOPER - SHIVAM YADAV</p>
    </div>
  )
}

export default Footer
