import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Rent-A-Car "#OnEveryCorner" FIFA World Cup 2026 Sweepstakes',
      description: 'Engineered a real-time data pipeline pulling live match statistics from the Stats Perform API, powering a 60-second user engagement window triggered on each scoring event. Built deployment scripts in TypeScript for AWS and CloudFront, and developed front-end features for the sweepstakes microsite. Currently in production serving 15M+ hits.',
      image: null,
      technologies: ['Python', 'TypeScript', 'React', 'AWS', 'CloudFront'],
      github: null,
      demo: 'https://www.enterprise.com'
    },
    {
      id: 2,
      title: 'Sudsly',
      description: '2nd Place at Ilitch Technology Pitch Competition (out of 20 teams). Co-founded and built a full-stack laundry pickup/delivery Progressive Web App using React, Tailwind CSS, and Supabase. Designed PWA features for an installable, app-like experience and planned AWS-based infrastructure with React Native expansion.',
      image: null,
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'PWA', 'AWS', 'React Native'],
      github: null,
      demo: null
    },
    {
      id: 3,
      title: 'GSCMA Internal Management System',
      description: 'Full-stack web application for the General Society of Computer Majors & Associates (GSCMA) allowing the board to manage member data and organizational operations. Architected RESTful APIs for member onboarding and RSVP tracking, and implemented role-based access control (RBAC) with three permission levels: Public, Member, and Officer.',
      image: null,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
      github: 'https://github.com/samaksh-arora/GSCMA',
      demo: null
    },
    {
      id: 4,
      title: 'Prizeversity',
      description: 'A web-based platform designed to engage students through contests, challenges, and rewards programs. Built with React.js, Node.js, and MongoDB, it allows students to participate in skill-based competitions, track their progress, and earn rewards.',
      image: '/Prizeversity.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/nasserhadim/prizeversity',
      demo: 'https://prizeversity.com'
    },
    {
      id: 5,
      title: 'Drink Up!',
      description: 'Drink Up is an engaging water-tracking app that gamifies daily hydration. Built with Next.js, Flask, and SQLite, it allows users to log water intake, monitor progress, and earn 27 uniquely designed badges for reaching milestones.',
      image: '/drinkup.png',
      technologies: ['Next.js', 'Python', 'SQLite'],
      github: 'https://github.com/samaksh-arora/winhacks2025',
      demo: 'https://www.youtube.com/watch?v=lVFicxcUrvY'
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      description: 'The site serves as a hub for potential employers, collaborators, and peers to explore my work, technical expertise, and achievements.',
      image: '/portfolio.png',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS3'],
      github: 'https://github.com/samaksh-arora/portfolio.git',
      demo: 'https://samaksharora.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
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
