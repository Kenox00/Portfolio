import React from 'react';
import FeaturedBox from './FeaturedBox';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
  return (
    <main className="wrapper">
      <FeaturedBox />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
