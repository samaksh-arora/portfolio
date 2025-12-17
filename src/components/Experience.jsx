import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Career Prep Fellow',
      company: 'Uber',
      location: 'San Francisco, California (Remote)',
      duration: 'Present',
      type: 'Fellow',
      responsibilities: [
        'Participate in 1:1 mentorship sessions with Uber engineers and recruiters, receiving personalized feedback on technical interviews, resume optimization, and career strategy',
        'Develop and refine problem-solving, communication, and system-thinking skills aligned with software engineering hiring standards at top tech companies',
        'Attend 5+ structured workshops led by industry professionals, covering data structures & algorithms, technical interview strategies, behavioral interviews, and career navigation in tech'
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
      title: 'Software Development Intern',
      company: 'Kid Ink (Newlab Detroit)',
      location: 'Detroit, Michigan',
      duration: 'Fall 2025',
      type: 'Intern',
      responsibilities: [
        'Developed and deployed 2 event-driven web platforms that centralized schedules, speaker details, and registration links, supporting 200+ users and increasing event discoverability and attendance readiness',
        'Optimized site performance and UX, achieving sub-2 second load times and improving user navigation efficiency through clear information architecture and responsive design',
        'Iterated rapidly based on stakeholder feedback, shipping updates within 24–48 hours, aligning with the fast-paced needs of an early-stage startup'
      ],
      technologies: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Component Based Architecture', 'State Management'],
      achievements: [
        'Launched 2 live event websites used by 100+ users',
        'Delivered production-ready sites under tight deadlines',
        'Produced scalable, reusable components for future events'
      ]
    },
    {
      id: 3,
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
