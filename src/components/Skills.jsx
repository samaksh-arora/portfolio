import React from 'react';
import { FaReact, FaJs, FaHtml5, FaNode, FaGit, FaPython} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 80 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'Git', icon: <FaGit />, level: 95 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 85 },
    { name: 'Node.js', icon: <FaNode />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
    { name: 'Python', icon: <FaPython />, level: 95 },
    { name: 'C++', icon: <SiCplusplus />, level: 95 },
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
