# Sharvan's Professional Portfolio

A premium, modern portfolio website built with React and Node.js, showcasing skills, projects, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Features

- **Modern Design**: Premium UI with smooth animations and responsive design
- **Interactive Components**: Framer Motion animations and scroll-triggered effects
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Dynamic project gallery with filtering capabilities
- **Skills Display**: Animated skill bars and technology categorization
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Mobile First**: Fully responsive design for all devices
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library
- **React Hot Toast** - Elegant notifications
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection

### Styling
- **CSS3** - Modern CSS with custom properties
- **CSS Grid & Flexbox** - Advanced layout systems
- **Custom Design System** - Consistent spacing, colors, and typography
- **Responsive Design** - Mobile-first approach

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/sharvan/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
# Install server dependencies
npm install

# Install client dependencies
npm run install-client
```

### 3. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your credentials
# Required for contact form functionality
```

### 4. Configure Email (Optional)
For the contact form to work, add your email credentials to `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

**Note**: For Gmail, use App Password instead of your regular password.

### 5. Add Your Profile Photo
Replace the placeholder in the Hero component:
1. Add your professional photo to `client/src/assets/profile.jpg`
2. Update the Hero component to use your actual image

### 6. Start Development
```bash
# Start both client and server
npm run dev

# Or start them separately:
npm run server  # Backend on port 5000
npm run client  # Frontend on port 3000
```

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── assets/        # Images and media
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Client dependencies
├── server/                # Node.js backend
│   └── index.js          # Express server
├── .env.example          # Environment template
├── package.json          # Server dependencies
└── README.md            # This file
```

## 🎨 Customization

### Personal Information
Update your details in:
- `client/src/components/Hero.js` - Name, title, description
- `client/src/components/About.js` - About section content
- `client/src/components/Contact.js` - Contact information
- `client/src/components/Footer.js` - Footer details

### Projects
Add your projects in:
- `client/src/components/Projects.js` - Update the `projects` array

### Skills
Modify your skills in:
- `client/src/components/Skills.js` - Update the `skillCategories` array

### Styling
Customize the design in:
- `client/src/index.css` - Global styles and CSS variables
- Individual component CSS files for specific styling

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
# Build the client
cd client
npm run build

# Deploy the build folder to your hosting service
```

### Backend (Heroku/Railway)
```bash
# The server is ready for deployment
# Make sure to set environment variables on your hosting platform
```

### Full Stack (Railway/Render)
```bash
# Both frontend and backend can be deployed together
# Configure build commands in your hosting platform
```

## 📧 Contact Form Setup

The contact form requires email configuration:

1. **Gmail Setup**:
   - Enable 2-Factor Authentication
   - Generate an App Password
   - Use the App Password in `EMAIL_PASS`

2. **Other Email Services**:
   - Update the transporter configuration in `server/index.js`
   - Refer to Nodemailer documentation for your email provider

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start both client and server
- `npm run server` - Start backend server
- `npm run client` - Start frontend development server
- `npm run build` - Build client for production
- `npm run install-all` - Install all dependencies

### Client Directory
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🌟 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (mobile), 1024px (tablet), 1400px (desktop)
- Flexible grid systems and adaptive typography

### Animations
- Scroll-triggered animations using Intersection Observer
- Smooth page transitions with Framer Motion
- Hover effects and micro-interactions

### Performance
- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size with code splitting

### SEO
- Semantic HTML structure
- Meta tags for social sharing
- Structured data for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sharvan**
- Email: irealsharvan@gmail.com
- Phone: +91 8528145486
- Location: Kathaura, Sikanderpur, Ballia, Uttar Pradesh

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons library
- Animations powered by Framer Motion
- Built with Create React App

---

**Ready to showcase your work?** 🚀

This portfolio is designed to make a lasting impression. Customize it with your projects, skills, and personal brand to stand out in the competitive tech landscape.

For support or questions, feel free to reach out!
