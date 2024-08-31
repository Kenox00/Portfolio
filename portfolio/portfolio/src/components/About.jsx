import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
// Import the specific icon from Unicons
import { UilImport } from '@iconscout/react-unicons';

function About() {
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    srLeft.reveal('.about-info', { delay: 100 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    srRight.reveal('.skills-box', { delay: 100 });
  }, []);

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I'm a versatile software developer with expertise in multiple programming languages and frameworks.
              I hold numerous certificates that demonstrate my commitment to continuous learning and professional growth.
              Throughout my career, I have gained valuable experience by attending internships at various companies, 
              where I have applied my skills in real-world settings. My participation in the Kigali Hackathon further
              showcases my problem-solving abilities and dedication to innovation in the tech industry.
            </p>
            <div className="about-btn">
              <button className="btn">
                Download CV <UilImport />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Node Js</span>
              <span>Python</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>PocketBase</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
