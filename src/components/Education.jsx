import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'Wayne State University',
      location: 'Detroit, MI',
      duration: '2024 - 2028',
      gpa: '3.95/4.0',
      achievements: [
        'Dean\'s List for 2 semesters',
        'Alpha Kappa Psi - Recruitment Chair',
        'Outstanding Student in Software Engineering'
      ],
      description: 'Comprehensive study of computer science fundamentals including software engineering, data structures, algorithms, and web development with hands-on project experience.'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={edu.id} className="timeline-item-single">
              <div className="timeline-content-single">
                <div className="education-card">
                  <div className="education-header">
                    <div className="education-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="education-basic">
                      <h3 className="degree">{edu.degree}</h3>
                      <h4 className="institution">{edu.institution}</h4>
                      <div className="education-meta">
                        <span className="duration">
                          <FaCalendarAlt /> {edu.duration}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {edu.location}
                        </span>
                        <span className="gpa">
                          <FaTrophy /> GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="education-description">{edu.description}</p>
                  
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
