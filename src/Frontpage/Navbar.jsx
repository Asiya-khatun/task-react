import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  const [crossVisible, setCrossVisible] = useState(true);
  const [menudropdown, setOpen] = useState(false);

  const handleLinkClick = () => {
  if (window.innerWidth < 768) {
    setOpen(false); 
  }
};

  return (
    <div className="navbar">
      {crossVisible && (
        <div className="info-box">
          <p>This is global announcement!</p>
          <span onClick={() => setCrossVisible(false)}>&times;</span>
        </div>
      )}

      <div className="nav-list">
        <div className="logo">
          <Link to="/mainpage">LOGO</Link>
          <div className="hamburger" onClick={() => setOpen(!menudropdown)}>
            &#9776;
          </div>
        </div>


        <div className={`nav-items ${menudropdown ? 'open' : ''}`}>
          <ul>
            <li><Link to="/mealtime" onClick={handleLinkClick}>Mealtime</Link></li>
            <li>Playtime</li>
            <li>Bathtime</li>
            <li><Link to="/playboxes">The Play Boxes</Link></li>
            <li>Gifts</li>
            <li>Best Sellers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
