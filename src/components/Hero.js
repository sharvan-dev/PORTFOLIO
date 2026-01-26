import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate Developer & Creator";

  useEffect(() => {
    if (inView) {
      let index = 0;
      const timer = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [inView, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="home" className="hero" ref={ref}>
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="hero-text">
            <motion.div variants={itemVariants} className="hero-greeting">
              <span className="greeting-text">Hi, I'm</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-name">
              <span className="name-text">Sharvan</span>
              <span className="name-accent">.</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="hero-title">
              <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="hero-description">
              Welcome to my portfolio! At <strong>sharvan.dev</strong>, you'll find a showcase of my skills, 
              projects, and creative journey. My dedication to building robust digital solutions is matched 
              only by my enthusiasm for learning and innovation.
            </motion.p>
            
            <motion.p variants={itemVariants} className="hero-tagline">
              Explore my work to see how I turn ideas into impactful products, blending technical 
              expertise with curiosity and creativity. <strong>Let's build something exceptional together!</strong>
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-contact-info">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>irealsharvan@gmail.com</span>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+91 8528145486</span>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Kathaura, Sikanderpur, Ballia, UP</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-actions">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <FiMail />
                Get In Touch
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download CV
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-social">
              <motion.a
                href="https://github.com/sharvan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sharvan-verma-362652293"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="hero-image"
          >
            <div className="image-container">
              <div className="image-background"></div>
              <div className="profile-image">
                <img src="/profile.jpg" alt="Profile" />
              </div>
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
