import React, { useState } from 'react';
import { FaTheaterMasks } from 'react-icons/fa';
import { GiTheaterCurtains } from 'react-icons/gi';
import Menu from './Menu';
import './Navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  return (
    <nav className="Navbar">
      <div className="Navbar__links">
        <div className="Navbar__links-logo"></div>
        <div className="Navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="Navbar__menu">
        {toggleMenu ? (
          <FaTheaterMasks
            className="Navbar__icon curtains"
            onClick={() => setToggleMenu(false)}
            
          />
        ) : (
          <GiTheaterCurtains
            className="Navbar__icon masks"
            onClick={() => setToggleMenu(true)}
            
          />
        )}
        {toggleMenu && (
          <div className="Navbar__menu-container">
            <div className="Navbar__menu-container--links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
