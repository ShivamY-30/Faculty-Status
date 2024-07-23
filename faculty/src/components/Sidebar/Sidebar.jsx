import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="add" className="sidebar-option">
          <IoMdAdd />
          <p>Add/Update Details</p>
        </NavLink>
        <NavLink to="status" className="sidebar-option">
          <GrStatusGood/>
          <p>Change Status</p>
        </NavLink>
        <NavLink to="list" className="sidebar-option">
          <CiBoxList/>
          <p>Faculty List</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
