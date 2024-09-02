import React, { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import avatar from '../assets/images/male.jpg';

import {
  UilInstagram,
  UilLinkedinAlt,
  UilDribbble,
  UilGithubAlt,
  UilFileAlt,
  UilMouseAlt,
} from '@iconscout/react-unicons';

function FeaturedBox() {
  useEffect(() => {
    const typed = new Typed('.typedText', {
      strings: ['Developer', 'Designer'],
      loop: true,
      typeSpeed: 70,
      backSpeed: 80,
      backDelay: 2000,
    });

    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    // Hide the menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        const menuBtn = document.getElementById('myNavMenu');
        if (menuBtn) {
          menuBtn.className = 'nav-menu'; // Reset to non-responsive class
        }
      });
    });

    return () => {
      typed.destroy();
      // Clean up event listeners when component unmounts
      navLinks.forEach(link => {
        link.removeEventListener('click', function() {
          const menuBtn = document.getElementById('myNavMenu');
          if (menuBtn) {
            menuBtn.className = 'nav-menu';
          }
        });
      });
    };
  }, []);
// Going to gmail when clicking on hire me button
const handleEmailClick = () => {
  const recipient = 'kwihanganaenock99@gmail.com';
  const subject = 'Hiring Inquiry';
  const body = 'Hello Enock,\n\nI would like to discuss a potential opportunity with you.\n\nBest regards,';

  const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
};
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Kwihangana Enock</span>
        </div>
        <div className="featured-name">
          <p>I'm <span className="typedText"></span></p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn" onClick={handleEmailClick}>Hire Me</button>
          <button className="btn">
          View Resume<i><UilFileAlt /></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon"><UilInstagram /></div>
          <div className="icon"><UilLinkedinAlt /></div>
          <div className="icon"><UilDribbble /></div>
          <div className="icon"><UilGithubAlt /></div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <UilMouseAlt />
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default FeaturedBox;
