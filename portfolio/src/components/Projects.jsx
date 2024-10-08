import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

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
          <label>3+ Finished Projects</label>
        </div>
        <div className="project-box">
         <i><UilUsersAlt /></i> 
          <h3>Clients</h3>
          <label>1 Happy Client</label>
        </div>
        <div className="project-box">
          <i><UilAward /></i>
          <h3>Experience</h3>
          <label>1 Year in the field</label>
        </div>
      </div>
    </section>
  );
}

export default Projects;
