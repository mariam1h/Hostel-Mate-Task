import React from 'react';
import './HeroSection.css';
import heroIllustration from '../assets/hero-illustration.svg';
import amazonLogo from '../assets/amazon.svg';
import dribbbleLogo from '../assets/dribbble.svg';
import hubspotLogo from '../assets/hubspot.svg';
import notionLogo from '../assets/notion.svg';
import netflixLogo from '../assets/netflix.svg';
import zoomLogo from '../assets/zoom.svg';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Navigating the<br />digital landscape<br />for success</h1>
          <p className="hero-desc">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="hero-cta dark">Book a consultation</button>
        </div>
        <div className="hero-image">
          <img src={heroIllustration} alt="Positivus Illustration" />
        </div>
      </div>
      <div className="hero-logos">
        <img src={amazonLogo} alt="Amazon" className="brand-logo" style={{height: 35}} />
        <img src={dribbbleLogo} alt="Dribbble" className="brand-logo" style={{height: 35}} />
        <img src={hubspotLogo} alt="HubSpot" className="brand-logo" style={{height: 35}} />
        <img src={notionLogo} alt="Notion" className="brand-logo" style={{height: 35}} />
        <img src={netflixLogo} alt="Netflix" className="brand-logo" style={{height: 35}} />
        <img src={zoomLogo} alt="Zoom" className="brand-logo" style={{height: 35}} />
      </div>
    </section>
  );
}

export default HeroSection; 