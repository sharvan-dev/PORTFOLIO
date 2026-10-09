import React from 'react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Student identity verification',
    type: 'Move smart contract',
    problem: 'A student identity record needs a clear way to be stored and checked by its account.',
    features: [
      'Stores a student ID and name on-chain against a signer.',
      'Checks whether a student record exists for an account.',
    ],
    technologies: ['Move', 'Aptos'],
    repository: 'https://github.com/sharvan-dev/Blockchain_project',
    screenshot: null,
    screenshotAlt: '',
  },
  {
    number: '02',
    title: 'E-commerce application',
    type: 'Full-stack application',
    problem: 'A commerce experience needs a customer-facing storefront supported by separate admin and backend applications.',
    features: [
      'Organized as frontend, backend, and admin applications.',
      'Repository setup documents MongoDB, Cloudinary, and JWT configuration.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    repository: 'https://github.com/sharvan-dev/ecommerce-app',
    screenshot: null,
    screenshotAlt: '',
  },
];

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <div className="section-heading projects-heading">
        <p className="eyebrow">03 / Selected work</p>
        <h2>Projects, not promises.</h2>
        <p className="section-intro">
          A closer look at work that can be explored in the public repositories.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project-case${project.screenshot ? ' has-screenshot' : ''}`} key={project.number}>
            {project.screenshot && (
              <figure className="project-media">
                <img src={project.screenshot} alt={project.screenshotAlt} loading="lazy" decoding="async" />
              </figure>
            )}
            <div className="project-details">
              <p className="project-number">{project.number} <span>{project.type}</span></p>
              <h3>{project.title}</h3>
              <div className="case-study-copy">
                <div>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4>What it does</h4>
                  <ul>
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              </div>
              <div className="project-tech" aria-label="Technology stack">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a className="text-link project-link" href={project.repository} target="_blank" rel="noopener noreferrer">
                <FiGithub aria-hidden="true" /> View source <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="project-note">Project screenshots can be added when original image files are available.</p>
    </div>
  </section>
);

export default Projects;
