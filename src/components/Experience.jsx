import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Technical Consultant',
      company: 'Warrior Consulting Group',
      location: 'Detroit, Michigan',
      duration: 'Fall 2025',
      type: 'Intern',
      responsibilities: [
        'Lead 5 analysts evaluating IoT-enabled battery safety systems, boosting sensor data accuracy by 25% through cloud-based analytics',
        'Assess containment and suppression tech, improving thermal event detection speed by 30% via standardized performance metrics',
        'Benchmark ESSPI’s cloud training and compliance tools, enhancing regulatory coverage by 20% and reducing response latency'
      ],
      technologies: ['IoT', 'Arduino Cloud', 'Supression Tech', 'Hardware'],
      achievements: [
        'Co-ordinated Team Workflows',
        'Generated 10+ reports',
        'Successfully translated technical analysis into actionable recommendations'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'Wayne State University',
      location: 'Detroit, Michigan',
      duration: 'Summer 2025',
      type: 'Intern',
     responsibilities: [
       'Designed and developed Prizeversity platform using React.js, Node.js, and MongoDB',
        'Implemented user-friendly interfaces for student participation in contests and rewards tracking',
        'Integrated secure authentication and real-time notifications to enhance user engagement',
      'Managed backend APIs and database schemas to ensure scalable and efficient data handling',
        'Contributed in testing and debugging efforts, improving platform stability and reducing errors by 40%'
],
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'GCP', 'Git', 'MongoDB'],
      achievements: [
        'Increased application performance by 40%',
        'Led team of 6 developers on major product launch',
        'Reduced bug reports by 35% through improved testing'
      ]
    },
    {
      id: 3,
      title: 'Software Engineering Intern',
      company: 'POS Notebook',
      location: 'Toronto, Ontario',
      duration: 'Winter 2025',
      type: 'Intern',
      responsibilities: [
        'Contributed to the development of core features of a Java-based POS application used by over 300 retailers',
        'Reduced checkout errors by 40%, lowering failed transactions from 50+ per week to under 30, by implementing exception handling, real-time input validation, and transaction verification logic, leading to a 15% increase in successful payment rate',
        'Collaborated on deployments using Git version control workflows, branch-based development, and code reviews',
        'Participated in agile development processes and daily standups'
      ],
      technologies: ['Java', 'React.js', 'MySQL', 'Git', 'Hardware'],
      achievements: [
        'Successfully launched 3 major product features',
        'Improved user engagement by 25% through UI/UX improvements',
        'Maintained 99.9% application uptime'
      ]
    }
    
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-icon">
                      <FaBriefcase />
                    </div>
                    <div className="experience-basic">
                      <h3 className="job-title">{exp.title}</h3>
                      <h4 className="company">{exp.company}</h4>
                      <div className="experience-meta">
                        <span className="duration">
                          <FaCalendarAlt /> {exp.duration}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                        <span className="type">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="responsibilities">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h5>
                      <FaCode /> Technologies Used:
                    </h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="timeline-marker">
                <div className="marker-content">
                  <FaBriefcase />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
