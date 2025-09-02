import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="navbar">
      {showAnnouncement && (
        <div className="announcement">
          <p>This is global announcement!</p>
          <span className="close-announcement" onClick={() => setShowAnnouncement(false)}>&times;</span>
        </div>
      )}

      <div className="nav-wrapper">
        <div className="brand">
          <Link to="/mainpage">LOGO</Link>
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            &#9776;
          </div>
        </div>

        <div className="menu desktop" style={{justifyContent:'flex-end'}}>
          <ul>
            <li><Link to="/mealtime" onClick={handleLinkClick}>Mealtime</Link></li>
            <li><Link to="/playtime" onClick={handleLinkClick}>Playtime</Link></li>
            <li>Bathtime</li>
            <li><Link to="/playboxes">The Play Boxes</Link></li>
            <li>Gifts</li>
            <li>Best Sellers</li>
          </ul>
        </div>

        {menuOpen && (
          <div className="menu mobile open">
            <div className="menu-header">
              <span className="menu-logo">LOGO</span>
              <span className="close-menu" onClick={() => setMenuOpen(false)}>&times;</span>
            </div>
            <div className="best-seller">
              <div className="best-title">Best Seller</div>
              <div className="best-items">
                <div className="item"><img src="/abcimage.jpg" alt="Best Seller 1" /></div>
                <div className="item"><img src="/abcimage.jpg" alt="Best Seller 2" /></div>
                <div className="item"><img src="/abcimage.jpg" alt="Best Seller 3" /></div>
                <a href="#" className="shop-all">Shop all</a>
              </div>
            </div>
            <ul>
              <li><Link to="/mealtime" onClick={handleLinkClick}>Mealtime <span className="arrow">&rarr;</span></Link></li>
              <li><Link to="/playtime" onClick={handleLinkClick}>Playtime <span className="arrow">&rarr;</span></Link></li>
              <li>Bathtime <span className="arrow">&rarr;</span></li>
              <li><Link to="/playboxes">The Play Boxes <span className="arrow">&rarr;</span></Link></li>
              <li>Gifts <span className="arrow">&rarr;</span></li>
              <li>Best Sellers <span className="arrow">&rarr;</span></li>
              <li>Shop all <span className="arrow">&rarr;</span></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
