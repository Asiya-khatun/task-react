import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [crossVisible, setCrossVisible] = useState(true);

  return (
    <div className="navbar">
      {crossVisible && (
        <div className="info-box" style={{ position: 'relative' }}>
          <p>This is global announcement!</p>
          <span
            onClick={() => setCrossVisible(false)}
            style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '20px'
            }}
          >
            &times;
          </span>
        </div>
      )}

      <div className="nav-list">
        <div className="logo">
          <span>
            <Link to="/mainpage">Logo</Link>
          </span>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/mealtime">Mealtime</Link></li>
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
