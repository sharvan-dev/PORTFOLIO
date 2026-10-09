import React from 'react';
import { FiCode, FiServer, FiDatabase, FiBox } from 'react-icons/fi';
import './Skills.css';

const skillGroups = [
  { title: 'Frontend', icon: FiCode, skills: ['JavaScript', 'React', 'HTML', 'CSS'] },
  { title: 'Backend', icon: FiServer, skills: ['Node.js', 'Express', 'REST APIs'] },
  { title: 'Data & services', icon: FiDatabase, skills: ['MongoDB', 'Cloudinary'] },
  { title: 'Smart contracts', icon: FiBox, skills: ['Move', 'Aptos'] },
];

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">02 / Skills</p>
        <h2>Tools I work with</h2>
        <p className="section-intro">A practical toolkit shaped by the projects I’ve built.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article className="skill-group" key={title}>
            <div className="skill-group-heading">
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
            </div>
            <ul className="skill-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
