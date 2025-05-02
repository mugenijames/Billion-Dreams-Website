import React from "react";
import "./Hero.css";

const Hero = () => {
  // Scroll to Projects Section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Welcome to Okida Building and Construction Limited</h1>
        <p>Build Your Dreams Into Reality at a friendly price with us</p>
        <button className="btn" onClick={scrollToProjects}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
