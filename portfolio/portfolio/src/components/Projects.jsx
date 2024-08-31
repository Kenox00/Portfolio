import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
// Import Unicons icons
import { UilBriefcaseAlt, UilUsersAlt, UilAward } from '@iconscout/react-unicons';

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.project-box', { interval: 200 });
  }, []);

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
         <i><UilBriefcaseAlt /></i> 
          <h3>Completed</h3>
          <label>15+ Finished Projects</label>
        </div>
        <div className="project-box">
         <i><UilUsersAlt /></i> 
          <h3>Clients</h3>
          <label>25+ Happy Clients</label>
        </div>
        <div className="project-box">
          <i><UilAward /></i>
          <h3>Experience</h3>
          <label>7+ Years in the field</label>
        </div>
      </div>
    </section>
  );
}

export default Projects;
