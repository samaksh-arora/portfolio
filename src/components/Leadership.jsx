import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
  const leadership = [
    {
      id: 1,
      title: 'President & Founder',
      organization: 'Wayne State Computer Science Association',
      location: 'Detroit, Michigan',
      duration: 'Jan 2025 - Present',
      responsibilities: [
        'Founded Wayne State Computer Science Association, reaching 150+ active students focused on career prep and academic support',
        'Organize and lead multiple technical and professional workshops, prioritizing resumes, interviews, and core programming skills'
      ]
    },
    {
      id: 2,
      title: 'VP of Tech and Innovation',
      organization: 'Alpha Kappa Psi - Professional Business Fraternity',
      location: 'Detroit, Michigan',
      duration: 'Apr 2025 - Present',
      responsibilities: [
        'Lead technology initiatives and innovation projects for the fraternity',
        'Previously served as Recruitment Chair (Apr 2025 - Dec 2025), managing 7 recruitment events attended by 120+ participants'
      ]
    },
    {
      id: 3,
      title: 'President',
      organization: 'Society of Computer Developers',
      location: 'Detroit, Michigan',
      duration: 'May 2026 - Present',
      responsibilities: [
        'Lead the Society of Computer Developers community',
        'Foster technical development and professional growth for members'
      ]
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <h2 className="section-title">Leadership Experience</h2>

        <div className="leadership-grid">
          {leadership.map((role, index) => (
            <div key={role.id} className="leadership-card">
              <div className="leadership-header">
                <div className="leadership-icon">
                  <FaBriefcase />
                </div>
                <div className="leadership-basic">
                  <h3 className="leadership-title">{role.title}</h3>
                  <h4 className="organization">{role.organization}</h4>
                  <div className="leadership-meta">
                    <span className="duration">
                      <FaCalendarAlt /> {role.duration}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {role.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="leadership-responsibilities">
                <ul>
                  {role.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
