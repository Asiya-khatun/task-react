import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Mealtime from './Mealtime';
import Playbox from './Playboxes';
 

function Navbar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // Track which item is hovered: null | 'mealtime' | 'playboxes'
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleLinkClick = () => {
    setMenuOpen(false);
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

        <div className="menu desktop" style={{ justifyContent: 'flex-end' }}>
          <ul>
            <li
              onMouseEnter={() => setHoveredMenu('mealtime')}
              onMouseLeave={() => setHoveredMenu(null)}
              style={{ position: 'relative' }}
            >
              Mealtime
              {hoveredMenu === 'mealtime' && (
                <div
                  className="dropdown"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    background: '#fff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }}
                >
                  <Mealtime />
                </div>
              )}
            </li>

            <li><Link to="/playtime" onClick={handleLinkClick}>Playtime</Link></li>
            <li>Bathtime</li>

            <li
              onMouseEnter={() => setHoveredMenu('playboxes')}
              onMouseLeave={() => setHoveredMenu(null)}
              style={{ position: 'relative' }}
            >
              Playboxes
              {hoveredMenu === 'playboxes' && (
                <div
                  className="dropdown"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    background: '#fff',
                    boxShadow: '0 8px 24px rgba(27, 11, 11, 0.12)',
                  }}
                >
                  <Playbox />
                </div>
              )}
            </li>

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
              <li><Link to="/playboxes" onClick={handleLinkClick}>The Play Boxes <span className="arrow">&rarr;</span></Link></li>
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