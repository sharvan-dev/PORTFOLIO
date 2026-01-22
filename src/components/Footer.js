import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/sharvan',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/sharvan',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:irealsharvan@gmail.com',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-logo">
                <span className="brand-text">Sharvan</span>
                <span className="brand-dot">.</span>
              </div>
              <p className="brand-tagline">
                Passionate Developer & Creator
              </p>
              <p className="brand-description">
                Building robust digital solutions with creativity and technical expertise. 
                Let's turn your ideas into impactful products.
              </p>
              <div className="footer-contact-info">
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
                  <span>Ballia, Uttar Pradesh</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              className="footer-services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Services</h3>
              <ul>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Full Stack Solutions</li>
                <li>API Development</li>
                <li>UI/UX Design</li>
                <li>Technical Consulting</li>
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div 
              className="footer-connect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect</h3>
              <p>
                Ready to start your next project? Let's discuss how we can work together 
                to bring your ideas to life.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="mailto:irealsharvan@gmail.com?subject=Project Inquiry"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <motion.p 
              className="copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Sharvan. All rights reserved.
            </motion.p>
            <motion.p 
              className="made-with-love"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Made with <FiHeart className="heart-icon" /> in India
            </motion.p>
            <motion.div 
              className="footer-tech"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Built with React & Node.js</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
