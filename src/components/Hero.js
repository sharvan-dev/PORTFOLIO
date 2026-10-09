import React from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />Developer · India</p>
        <h1>Hi, I’m <span>Sharvan.</span></h1>
        <p className="hero-title">I build thoughtful web products.</p>
        <p className="hero-description">
          I work across frontend interfaces, backend services, and smart-contract
          experiments—turning ideas into useful, working software.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects <FiArrowDownRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-social" aria-label="Social profiles">
          <a href="https://github.com/sharvan-dev" target="_blank" rel="noopener noreferrer">
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/in/sharvan-verma-362652293" target="_blank" rel="noopener noreferrer">
            LinkedIn <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="hero-photo">
        <img
          src="/profile.jpg"
          alt="Portrait of Sharvan"
          width="768"
          height="955"
          fetchpriority="high"
          decoding="async"
        />
        <figcaption>Sharvan · Developer</figcaption>
      </figure>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to About">
      <span>Scroll to explore</span><FiArrowDownRight aria-hidden="true" />
    </a>
  </section>
);

export default Hero;
