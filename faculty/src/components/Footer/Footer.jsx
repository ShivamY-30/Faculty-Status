import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <div className='main-footer'>
    <div className="icons">
      <li><FaLinkedin size={25} color="#0e76a8"/></li>
      <li><FaSquareGithub size={25} color="#0e76a8"  /></li>
    </div>
    <p>SHIVAM YADAV</p>
    </div>
  )
}

export default Footer
