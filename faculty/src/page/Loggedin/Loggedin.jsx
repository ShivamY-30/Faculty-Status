// src/page/Loggedin/Loggedin.jsx
import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './LoggedIn.css';
import { Outlet } from 'react-router-dom';

const Loggedin = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};

export default Loggedin;
