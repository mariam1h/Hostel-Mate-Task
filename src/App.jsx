import React from 'react';

// Styles
import './App.css';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ServicesGrid from './components/ServicesGrid';
import ThingsSection from './components/ThingsSection';
import Footer from './components/Footer';

/**
 * Main application component that renders the complete landing page
 * @returns {JSX.Element} The complete Positivus landing page
 */
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <ServicesGrid />
      <ThingsSection />
      <Footer />
    </div>
  );
}

export default App; 