import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGit } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'Node.js', icon: <FaNode />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
