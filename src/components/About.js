import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: FiCode, number: '50+', label: 'Projects Completed' },
    { icon: FiUsers, number: '25+', label: 'Happy Clients' },
    { icon: FiTrendingUp, number: '3+', label: 'Years Experience' },
    { icon: FiAward, number: '15+', label: 'Technologies' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="about-text">
            <motion.div variants={itemVariants} className="section-header">
              <span className="section-tag">Get to know me</span>
              <h2>About Sharvan</h2>
              <div className="section-divider"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-description">
              <p>
                I'm a passionate developer and creator with a deep love for building robust digital solutions. 
                My journey in technology began with curiosity and has evolved into a dedication to crafting 
                exceptional user experiences and scalable applications.
              </p>
              
              <p>
                Based in <strong>Kathaura, Sikanderpur, Ballia, Uttar Pradesh</strong>, I specialize in 
                full-stack development with expertise in modern technologies like React, Node.js, and cloud platforms. 
                I believe in writing clean, maintainable code and following best practices to deliver high-quality solutions.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited about new challenges and 
                opportunities to learn and grow.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-highlights">
              <div className="highlight-item">
                <h4>🎯 Mission</h4>
                <p>To create innovative digital solutions that make a meaningful impact on users' lives.</p>
              </div>
              
              <div className="highlight-item">
                <h4>💡 Vision</h4>
                <p>To be a leading developer who bridges the gap between complex technology and user-friendly experiences.</p>
              </div>
              
              <div className="highlight-item">
                <h4>⚡ Values</h4>
                <p>Quality, Innovation, Continuous Learning, and Collaborative Problem-Solving.</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
