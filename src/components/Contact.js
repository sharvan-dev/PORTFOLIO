import React, { useState } from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedData = Object.fromEntries(
      Object.entries(formData).map(([field, value]) => [field, value.trim()])
    );

    if (Object.values(trimmedData).some((value) => !value)) {
      setSubmissionStatus({ type: 'error', message: 'Please complete all fields.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) {
      setSubmissionStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus({ type: 'pending', message: 'Sending your message…' });
    try {
      const { data } = await axios.post('/api/contact', trimmedData);
      if (!data.success) throw new Error(data.error || 'Message could not be sent.');
      toast.success(data.message || 'Message sent.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmissionStatus({ type: 'success', message: data.message || 'Your message has been sent.' });
    } catch (error) {
      const message = error.response?.data?.error || 'Message could not be sent. Please try again or email me directly.';
      toast.error(message);
      setSubmissionStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmissionStatus(null);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">04 / Contact</p>
          <h2>Have something in mind?</h2>
          <p className="section-intro">
            For project enquiries, collaboration, or a conversation about my work, get in touch.
          </p>
          <a className="contact-email" href="mailto:irealsharvan@gmail.com">
            <FiMail aria-hidden="true" /> irealsharvan@gmail.com <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a href="https://github.com/sharvan-dev" target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/sharvan-verma-362652293" target="_blank" rel="noopener noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Send a message</h3>
          <div className="form-row">
            <label htmlFor="contact-name">Name
              <input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label htmlFor="contact-email">Email
              <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <label htmlFor="contact-subject">Subject
            <input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
          <label htmlFor="contact-message">Message
            <textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button className="button button-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message'} <FiSend aria-hidden="true" />
          </button>
          <p className="form-note">
            Message delivery needs server-side <code>SMTP_HOST</code>, <code>EMAIL_USER</code>, and <code>EMAIL_PASS</code>.
            Set optional <code>CONTACT_EMAIL</code> to choose a separate inbox. Add these to the
            server environment, never client code. Until configured, use the direct email link.
          </p>
          {submissionStatus && (
            <p className={`form-status form-status-${submissionStatus.type}`} role={submissionStatus.type === 'error' ? 'alert' : 'status'} aria-live={submissionStatus.type === 'error' ? 'assertive' : 'polite'}>
              {submissionStatus.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
