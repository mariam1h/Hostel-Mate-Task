# Positivus Landing Page

A modern, responsive landing page for Positivus digital marketing agency built with React and Vite.

## 🚀 Features

- **Responsive Design**: Optimized for all screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Component-Based Architecture**: Modular React components for maintainability
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: ARIA labels and semantic HTML
- **SEO Friendly**: Proper meta tags and structured content

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)

## 🛠 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd positivus-landing
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Main navigation header
│   ├── HeroSection.jsx # Hero banner with CTA
│   ├── Services.jsx    # Services section label
│   ├── ServicesGrid.jsx # Services cards grid
│   ├── ThingsSection.jsx # Call-to-action section
│   └── Footer.jsx      # Footer with contact info
├── assets/             # Static assets
│   ├── images/         # Images and illustrations
│   └── icons/          # SVG icons and logos
├── constants/          # Application constants
│   └── index.js        # Centralized data and config
├── App.jsx             # Root application component
├── App.css             # Global application styles
├── index.css           # Global CSS reset and base styles
└── main.jsx            # Application entry point
```

## 🧩 Components

### Core Components

- **Header**: Navigation bar with logo and menu items
- **HeroSection**: Hero banner with main headline and brand logos
- **Services**: Services section introduction
- **ServicesGrid**: Grid of service cards with hover effects
- **ThingsSection**: Call-to-action section
- **Footer**: Footer with contact information and social links

### Component Guidelines

- Each component has its own CSS file
- Components use constants for reusable data
- Consistent naming conventions (PascalCase for components)
- JSDoc comments for better documentation

## 🎨 Styling

### CSS Architecture

- **Component-scoped CSS**: Each component has its own stylesheet
- **Mobile-first approach**: Responsive design with media queries
- **CSS Custom Properties**: Used for consistent theming
- **BEM-like naming**: Clear, descriptive class names

### Design System

- **Primary Color**: `#C6FF6B` (Brand green)
- **Dark Background**: `#18191F`
- **Typography**: Space Grotesk font family
- **Border Radius**: Consistent rounded corners (8px, 16px, 24px)
- **Shadows**: Subtle shadows for depth and elevation

## 📋 Development Guidelines

### Code Quality

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use constants for static data
- Follow consistent naming conventions

### Best Practices

- **Accessibility**: Include ARIA labels and semantic HTML
- **Performance**: Optimize images and minimize bundle size
- **SEO**: Use proper heading hierarchy and meta tags
- **Maintainability**: Keep components modular and well-documented

### Git Workflow

- Use meaningful commit messages
- Create feature branches for new development
- Test thoroughly before merging
- Keep commits focused and atomic

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Manual Build

```bash
npm run build
```

The `dist` folder contains the production-ready files.

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**: Ensure all dependencies are installed
2. **Styling issues**: Check CSS import paths
3. **Image loading**: Verify asset paths in components

## 📞 Contact

For questions or support, please contact me.

---

**Built with ❤️ using React + Vite**

**Design:** [Figma Link](https://www.figma.com/design/TPrSUhqXMUv05fhtXDYjld/Positivus-Landing-Page-Design--Community---Copy-?node-id=25-145&t=EzRhWyBP3zUgJyJq-1) 