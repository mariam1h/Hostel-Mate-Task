import React from "react";
import "./ServicesGrid.css";
import search from "../assets/Search.png";
import ppc from "../assets/ppc.png";
import social from "../assets/social.png";
import email from "../assets/email.png";
import content from "../assets/content.png";
import analytics from "../assets/analytics.png";

const services = [
  {
    title: "Search engine optimization",
    img: search,
    bg: "light"
  },
  {
    title: "Pay-per-click advertising",
    img: ppc,
    bg: "green"
  },
  {
    title: "Social Media Marketing",
    img: social,
    bg: "dark"
  },
  {
    title: "Email Marketing",
    img: email,
    bg: "light"
  },
  {
    title: "Content Creation",
    img: content,
    bg: "green"
  },
  {
    title: "Analytics and Tracking",
    img: analytics,
    bg: "dark"
  }
];

function ServicesGrid() {
  const renderServiceTitle = (title) => {
    return Array.isArray(title)
      ? title.map((line, idx) => (
          <span className="highlight" key={idx}>
            {line}
            {idx !== title.length - 1 && <br />}
          </span>
        ))
      : title;
  };

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div className={`service-card ${service.bg}`} key={index}>
          <div className="service-card-inner">
            <div className="service-card-left">
              <div className="service-card-header">
                <h3 className="service-card-title">
                  {renderServiceTitle(service.title)}
                </h3>
              </div>
              <a href="#" className="service-card-link">
                <span className="service-card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#18191F"/>
                    <path d="M8 12H16M16 12L13 9M16 12L13 15" stroke="#C6FF6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Learn more</span>
              </a>
            </div>
            <div className="service-card-right">
              <img src={service.img} alt={service.title} className="service-card-img" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesGrid;