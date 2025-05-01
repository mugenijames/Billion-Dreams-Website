import React, { useState } from "react";
import "./Projects.css";

import completedProject1 from "../../assets/completed-project1.jpg";
import completedProject2 from "../../assets/completed-project2.jpg";
import completedProject3 from "../../assets/completed-project3.jpg";
import completedProject4 from "../../assets/completed-project4.jpg";
import completedProject5 from "../../assets/completed-project5.jpg";
import inProgressProject1 from "../../assets/in-progress-project1.jpeg";
import inProgressProject2 from "../../assets/in-progress-project2.jpeg";
import inProgressProject3 from "../../assets/in-progress-project3.jpeg";
import inProgressProject4 from "../../assets/in-progress-project4.jpg";
import inProgressProject5 from "../../assets/in-progress-project5.jpg";

const Projects = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showInProgress, setShowInProgress] = useState(false);

  const completedProjects = [
    { title: "Apartments", image: completedProject1 },
    { title: "Office Complex", image: completedProject2 },
    { title: "Catholic Church", image: completedProject3 },
    { title: "Shopping Mall", image: completedProject4 },
    { title: "Luxury Villas", image: completedProject5 },
  ];

  const inProgressProjects = [
    { title: "NTCOGK-Kawangware Church", image: inProgressProject1 },
    { title: "Underground Water Tank", image: inProgressProject2 },
    { title: "Community Center", image: inProgressProject3 },
    { title: "Road Construction", image: inProgressProject4 },
    { title: "Sports Complex", image: inProgressProject5 },
  ];

  return (
    <div className="projects" id="projects">
      {/* Completed Projects Section */}
      <section className="projects-section">
        <h2>Completed Projects</h2>
        <div className="projects-images">
          {completedProjects
            .slice(0, showCompleted ? completedProjects.length : 3)
            .map((project, index) => (
              <div className="image-container" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="caption">{project.title}</div>
              </div>
            ))}
        </div>
        <button
          className="see-more-button"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? "See Less" : "See More"}
        </button>
      </section>

      {/* Projects In Progress Section */}
      <section className="projects-section">
        <h2>Projects in Progress</h2>
        <div className="projects-images">
          {inProgressProjects
            .slice(0, showInProgress ? inProgressProjects.length : 3)
            .map((project, index) => (
              <div className="image-container" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="caption">{project.title}</div>
              </div>
            ))}
        </div>
        <button
          className="see-more-button"
          onClick={() => setShowInProgress(!showInProgress)}
        >
          {showInProgress ? "See Less" : "See More"}
        </button>
      </section>
    </div>
  );
};

export default Projects;
