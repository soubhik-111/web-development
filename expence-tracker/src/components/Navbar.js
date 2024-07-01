import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo">IND Purse</div>
        <ul id='nav-link'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/view-list">Expenses List</Link></li>
          <li><Link to="/add-list">Add Expense</Link></li>
        </ul>
        <span className="hamburger-menu" onClick={() => { setShowMobNav(!showMobNav) }}>{showMobNav ? "X" : "☰"}</span>
      </div>
      {showMobNav && 
        <ul id='nav-mob-links'>
          <li><Link onClick={()=>(setShowMobNav(false))} to="/">Home</Link></li>
          <li><Link onClick={()=>(setShowMobNav(false))} to="/view-list">Expenses List</Link></li>
          <li><Link onClick={()=>(setShowMobNav(false))} to="/add-list">Add Expense</Link></li>
        </ul>
      }
    </nav>
  );
}

export default Navbar;
