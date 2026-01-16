import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiEye } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      longDescription: 'This comprehensive e-commerce solution includes advanced features like real-time inventory management, multiple payment gateways, order tracking, and analytics dashboard. Built with scalability in mind using microservices architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Redux'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/sharvan/ecommerce-platform',
      live: 'https://ecommerce-demo.sharvan.dev',
      featured: true,
      stars: 45,
      views: 1200
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'Built with React and Socket.io for real-time collaboration. Features include Kanban boards, time tracking, file attachments, and team chat integration.',
      technologies: ['React', 'Socket.io', 'Material-UI', 'Node.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/sharvan/task-manager',
      live: 'https://tasks.sharvan.dev',
      featured: true,
      stars: 32,
      views: 890
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      longDescription: 'Integrated with multiple weather APIs for accurate forecasting. Features include geolocation, weather maps, historical data, and customizable alerts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet', 'PWA'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/sharvan/weather-dashboard',
      live: 'https://weather.sharvan.dev',
      featured: false,
      stars: 28,
      views: 650
    },
    {
      id: 4,
      title: 'API Gateway Service',
      category: 'backend',
      description: 'A scalable API gateway built with Node.js and Express, featuring rate limiting, authentication, and load balancing.',
      longDescription: 'Enterprise-grade API gateway with advanced features like request/response transformation, caching, monitoring, and analytics.',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Nginx', 'JWT'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/sharvan/api-gateway',
      live: null,
      featured: false,
      stars: 67,
      views: 1450
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      category: 'mobile',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
      longDescription: 'Built with React Native and Firebase. Features include workout tracking, nutrition logging, social challenges, and AI-powered recommendations.',
      technologies: ['React Native', 'Firebase', 'Expo', 'Redux', 'AsyncStorage'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/sharvan/fitness-app',
      live: 'https://apps.apple.com/fitness-tracker',
      featured: true,
      stars: 89,
      views: 2100
    },
    {
      id: 6,
      title: 'DevOps Monitoring Tool',
      category: 'devops',
      description: 'A comprehensive monitoring solution for containerized applications with real-time metrics and alerting.',
      longDescription: 'Built with Docker, Kubernetes, and Grafana. Provides comprehensive monitoring, logging, and alerting for microservices architecture.',
      technologies: ['Docker', 'Kubernetes', 'Grafana', 'Prometheus', 'Node.js'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/sharvan/devops-monitor',
      live: null,
      featured: false,
      stars: 54,
      views: 980
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

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
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">My Work</span>
          <h2>Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="projects-description">
            Here's a selection of projects that showcase my skills and passion for creating 
            innovative digital solutions. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="featured-projects"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="subsection-title">⭐ Featured Work</h3>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card featured"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <FiCode className="placeholder-icon" />
                    <span>Project Screenshot</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-stats">
                      <span><FiStar /> {project.stars}</span>
                      <span><FiEye /> {project.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          className="all-projects"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="projects-filter">
            <h3 className="subsection-title">🚀 All Projects</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <div className="image-placeholder">
                      <FiCode className="placeholder-icon" />
                      <span>Project Screenshot</span>
                    </div>
                    <div className="project-overlay">
                      <div className="project-stats">
                        <span><FiStar /> {project.stars}</span>
                        <span><FiEye /> {project.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
                
                <div className="modal-content">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.longDescription}</p>
                  
                  <div className="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FiGithub /> View Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
