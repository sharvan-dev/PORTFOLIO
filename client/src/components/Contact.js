import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'irealsharvan@gmail.com',
      link: 'mailto:irealsharvan@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8528145486',
      link: 'tel:+918528145486'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Kathaura, Sikanderpur, Ballia, UP',
      link: 'https://maps.google.com/?q=Kathaura,Sikanderpur,Ballia,UP'
    }
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
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-header"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">Get in touch</span>
          <h2>Let's Work Together</h2>
          <div className="section-divider"></div>
          <p className="contact-description">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you! 
            Let's create something exceptional together.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <p>
              Ready to start your next project? Reach out through any of these channels, 
              and I'll get back to you within 24 hours.
            </p>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-method"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="method-icon">
                    <item.icon />
                  </div>
                  <div className="method-content">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="availability">
              <h4>🕒 Availability</h4>
              <p>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (IST)<br />
                <strong>Response Time:</strong> Within 24 hours<br />
                <strong>Time Zone:</strong> India Standard Time (UTC+5:30)
              </p>
            </div>
          </motion.div>

          <motion.div className="contact-form-container" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser className="label-icon" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail className="label-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FiMessageSquare className="label-icon" />
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageSquare className="label-icon" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  className="form-textarea"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-footer"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="cta-section">
            <h3>Ready to Start Your Project?</h3>
            <p>
              Whether you need a complete web application, mobile app, or just want to discuss 
              your ideas, I'm here to help bring your vision to life.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="mailto:irealsharvan@gmail.com?subject=Project Inquiry"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                Start a Project
              </motion.a>
              <motion.a
                href="tel:+918528145486"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone />
                Schedule a Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
