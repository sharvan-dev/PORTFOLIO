const nodemailer = require('nodemailer');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return typeof value === 'string' && emailPattern.test(value.trim());
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed. Submit the contact form with POST.' });
  }

  const { name, email, subject, message } = req.body || {};
  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Please enter your name.' });
  }
  if (name.trim().length > 120) {
    return res.status(400).json({ error: 'Name must be 120 characters or fewer.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (email.trim().length > 254) {
    return res.status(400).json({ error: 'Email address must be 254 characters or fewer.' });
  }
  if (typeof subject !== 'string' || !subject.trim()) {
    return res.status(400).json({ error: 'Please enter a subject.' });
  }
  if (subject.trim().length > 200) {
    return res.status(400).json({ error: 'Subject must be 200 characters or fewer.' });
  }
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Please enter a message.' });
  }
  if (message.trim().length > 10000) {
    return res.status(400).json({ error: 'Message must be 10,000 characters or fewer.' });
  }

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS;
  const recipient = process.env.CONTACT_EMAIL?.trim() || user;
  const port = Number(process.env.SMTP_PORT || 465);
  const secureSetting = process.env.SMTP_SECURE?.toLowerCase();
  const secure = secureSetting
    ? secureSetting === 'true'
    : port === 465;

  if (!host || !user || !pass) {
    return res.status(503).json({
      error: 'Email delivery is not configured. Set SMTP_HOST, EMAIL_USER, and EMAIL_PASS in the server environment.',
    });
  }

  if (
    !Number.isInteger(port) || port < 1 || port > 65535 ||
    !['true', 'false', undefined].includes(secureSetting) ||
    !isValidEmail(user) || !isValidEmail(recipient)
  ) {
    return res.status(503).json({
      error: 'Email delivery settings are invalid. Check SMTP_PORT, EMAIL_USER, and CONTACT_EMAIL on the server.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    return res.json({ success: true, message: 'Message sent successfully. Thanks for reaching out!' });
  } catch (error) {
    console.error('Contact email delivery failed:', error.message);
    return res.status(502).json({
      error: 'Your message could not be delivered right now. Please try again or use the direct email link.',
    });
  }
}

module.exports = handler;
