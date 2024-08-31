import React, { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import avatar from '../assets/images/male.jpg';

// Import Unicons icons
import { UilInstagram, UilLinkedinAlt, UilDribbble, UilGithubAlt, UilFileAlt, UilMouseAlt } from '@iconscout/react-unicons';

function FeaturedBox() {
  useEffect(() => {
    // Initialize Typed.js
    new Typed('.typedText', {
      strings: ['Developer', 'Designer'],
      loop: true,
      typeSpeed: 70,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Initialize ScrollReveal
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

  }, []); // Empty dependency array ensures this runs once when the component mounts

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
          <p>Experienced frontend developer with a passion for creating visually stunning
            and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire Me</button>
          <button className="btn">Download CV <i><UilFileAlt /></i></button>
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
