import React from 'react';
// Import Unicons icons
import { UilInstagram, UilLinkedinAlt, UilDribbble, UilGithubAlt } from '@iconscout/react-unicons';

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <p>Kwihangana Enock.</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon"><UilInstagram /></div>
        <div className="icon"><UilLinkedinAlt /></div>
        <div className="icon"><UilDribbble /></div>
        <div className="icon"><UilGithubAlt /></div>
      </div>
      <div className="bottom-footer">
        <p>Copyright &copy; <a href="#home" style={{ color: 'rgb(0, 201, 255)', textDecoration: 'none' }}>Enock</a> - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
