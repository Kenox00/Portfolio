import React from 'react';
// Import Unicons icons
import { UilFileAlt, UilBars } from '@iconscout/react-unicons';

function Header() {
  const toggleMenu = () => {
    const menuBtn = document.getElementById('myNavMenu');
    menuBtn.className = menuBtn.className === 'nav-menu' ? 'nav-menu responsive' : 'nav-menu';
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Enock</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">About</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">Projects</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">Contact</a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">Download CV <UilFileAlt /></button>
      </div>
      <div className="nav-menu-btn">
        <UilBars onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Header;
