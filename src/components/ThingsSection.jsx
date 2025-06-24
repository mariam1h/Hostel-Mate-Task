import React from "react";
import things from "../assets/things.png";
import "./ThingsSection.css";

export default function ThingsSection() {
  return (
    <section className="things-section">
      <div className="things-content">
        <div className="things-left">
          <h2 className="things-title">Let's make things happen</h2>
          <p className="things-desc">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="things-btn">Get your free proposal</button>
        </div>
        <div className="things-right">
          <img src={things} alt="Let's make things happen illustration" className="things-img" />
        </div>
      </div>
    </section>
  );
} 