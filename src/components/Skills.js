import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiSmartphone, 
  FiGlobe, 
  FiTool,
  FiGitBranch,
  FiCloud
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      color: '#3b82f6',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      color: '#10b981',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Microservices', level: 70 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: FiDatabase,
      color: '#f59e0b',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'AWS S3', level: 75 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: FiCloud,
      color: '#8b5cf6',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Nginx', level: 70 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: FiSmartphone,
      color: '#ef4444',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 85 },
        { name: 'Expo', level: 75 },
        { name: 'Mobile UI/UX', level: 80 },
        { name: 'App Store Deploy', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: FiTool,
      color: '#06b6d4',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Postman', level: 90 },
        { name: 'Jest Testing', level: 75 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">What I know</span>
          <h2>Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="skills-description">
            I'm passionate about learning new technologies and constantly improving my skills. 
            Here's a comprehensive overview of my technical expertise across different domains.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4 
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-footer"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="learning-mindset">
            <h3>🚀 Always Learning</h3>
            <p>
              Technology evolves rapidly, and I believe in continuous learning. I'm currently exploring 
              <strong> AI/ML integration</strong>, <strong>Web3 technologies</strong>, and 
              <strong> advanced cloud architectures</strong> to stay ahead of the curve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
