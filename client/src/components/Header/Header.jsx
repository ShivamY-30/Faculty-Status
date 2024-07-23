import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
    <br />
    <br />
    <div className='header'>
      <img src="Hero.png" alt="Hero" />
      <div className='text'>
        <h2>GEC MODASA</h2>
        <span>What are We?</span>
        <p>
          We as a Student-Faculty portal provide information to students regarding faculties. It includes -<br/> Their Live Availability in Campus,<br/> Their Roles,<br/> Their Contact Details.
        </p>
      </div>
    </div>
    <br />
    <br />
   </>
  );
};

export default Header;
