import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="section about">
    <div className="container about-layout">
      <div className="section-heading">
        <p className="eyebrow">01 / About</p>
        <h2>A little about me</h2>
      </div>
      <div className="about-copy">
        <p className="about-lead">
          I’m Sharvan, a developer interested in how useful products are designed
          and built—from the first interface to the services behind it.
        </p>
        <p>
          My work includes React and Node.js applications, as well as experiments
          with Move smart contracts. I enjoy learning by building, keeping the
          details clear, and making software approachable to use.
        </p>
        <a className="text-link" href="https://github.com/sharvan-dev" target="_blank" rel="noopener noreferrer">
          Explore my work on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
);

export default About;
