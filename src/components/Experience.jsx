import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Career Prep Fellow',
      company: 'Uber',
      location: 'San Francisco, California (Remote)',
      duration: 'Dec 2025 - Present',
      type: 'Fellow',
      responsibilities: [
        'Participate in 1:1 mentorship sessions with Uber engineers and recruiters, receiving personalized feedback on technical interviews, resume optimization, and career strategy',
        'Develop and refine problem-solving, communication, and system-thinking skills aligned with software engineering hiring standards at top tech companies',
        'Attend 5+ structured workshops led by industry professionals, covering data structures & algorithms, technical interview strategies, behavioral interviews, and career navigation in tech'
      ],
      technologies: [],
      achievements: [
        'Co-ordinated Team Workflows',
        'Generated 10+ reports',
        'Successfully translated technical analysis into actionable recommendations'
      ]
    },
    {
      id: 2,
      title: 'Application Engineer Co-op',
      company: 'Integrity Tool & Mold',
      location: 'Detroit, Michigan',
      duration: 'Fall 2025',
      type: 'Co-op',
      responsibilities: [
        'Built and maintained applications on Palantir Foundry, a platform used by 1,000+ employees company-wide, developing tools adopted in production by multiple departments',
        'Automated a department workflow previously coordinated via email chains by building a Foundry application, replacing manual back-and-forth with a centralized, trackable process',
        'Developed custom React/TypeScript widgets within Foundry to extend standard platform components, enabling tailored data interactions not supported by out-of-the-box functionality'
      ],
      technologies: ['Palantir Foundry', 'React', 'TypeScript', 'Python'],
      achievements: [
        'Deployed production-ready applications for 1,000+ users',
        'Automated manual workflows improving efficiency',
        'Extended platform functionality with custom widgets'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Developer Intern',
      company: 'Wayne State University',
      location: 'Detroit, Michigan',
      duration: 'Apr 2025 - Aug 2025',
      type: 'Intern',
      responsibilities: [
        'Worked on Prizeversity.com under Professor Hadi Nasser, on full-stack development of a platform for extra-credit challenges',
        'Implemented routes and MongoDB schemas for the site\'s feedback system, enabling efficient storage and retrieval of student input',
        'Developed real-time automated user notifications using Socket.IO to enhance engagement and platform interactivity'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      achievements: [
        'Increased application performance by 40%',
        'Deployed real-time notification system',
        'Managed full-stack development from frontend to backend'
      ]
    },
    {
      id: 4,
      title: 'Software/Hardware Intern',
      company: 'POS Notebook',
      location: 'Toronto, ON',
      duration: 'Aug 2024 - Dec 2024',
      type: 'Intern',
      responsibilities: [
        'Contributed to the development of core features of a Java-based POS application used by over 300 retailers in the GTA Area',
        'Installed and configured hardware at client locations, including POS terminals, EMV/NFC Card Readers, and barcode scanners',
        'Collaborated on deployments using Git version control workflows, branch-based development, and weekly code reviews'
      ],
      technologies: ['Java', 'Git', 'Hardware Configuration'],
      achievements: [
        'Supported 300+ retail locations',
        'Deployed core POS features',
        'Managed hardware installations and configurations'
      ]
    },
    {
      id: 5,
      title: 'Software Engineering Intern',
      company: 'DTE Energy',
      location: 'Detroit, Michigan',
      duration: 'Incoming (Year-Round)',
      type: 'Intern',
      responsibilities: [
        'Incoming DTE Software Engineering Intern, year-round opportunity'
      ],
      technologies: [],
      achievements: []
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

                  {exp.id !== 1 && (
                    <div className="technologies">
                      <h5>
                      Technologies Used:
                      </h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.id !== 1 && (
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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

        <p className="previous-experience-text">
          <strong>Previous Experience:</strong> Technical Consultant @ Warrior Consulting Group, Software Engineering Intern @ POS Notebook
        </p>
      </div>
    </section>
  );
};

export default Experience;
