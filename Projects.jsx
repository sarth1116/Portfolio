// components/Projects.js
import React, { useEffect, useState } from 'react';
import projectsData from './Pro.json'; // Adjust the path based on your folder structure
import { FaLink } from "react-icons/fa";
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container text-center text-light">
        <h2 className="text-warning">Projects</h2>
        <div className="row mt-4 justify-content-evenly">
          {projects.map((project, index) => (
            <div key={index} className="col-md-3 project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="img-fluid" 
                style={{ borderRadius: '8px', marginBottom: '10px' }} 
              />
              <h3 style={{ color: '#ff8c00' }}>
                {project.title} 
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaLink style={{color:'skyblue', marginLeft:'5px'}} />
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
