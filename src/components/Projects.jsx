import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Prizeversity',
      description: 'A web-based platform designed to engage students through contests, challenges, and rewards programs. Built with React.js, Node.js, and MongoDB, it allows students to participate in skill-based competitions, track their progress, and earn rewards. ',
      image: '/prizeversity.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/nasserhadim/prizeversity',
      demo: 'https://prizeversity.com'
    },
    {
      id: 2,
      title: 'Drink Up!',
      description: 'Drink Up is an engaging water-tracking app that gamifies daily hydration. Built with Next.js, Flask, and SQLite, it allows users to log water intake, monitor progress, and earn 27 uniquely designed badges for reaching milestones. ',
      image: '/drinkup.png',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/samaksh-arora/winhacks2025',
      demo: 'https://www.youtube.com/watch?v=lVFicxcUrvY'
    },
    {
      id: 3,
      title: 'Personal Portffolio',
      description: 'A responsive weather dashboard that displays current weather and forecasts using external APIs with beautiful data visualizations.',
      image: '/portfolio.png',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
