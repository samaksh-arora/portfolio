import React from 'react';
import { FaReact, FaJs, FaHtml5, FaNode, FaGit, FaPython} from 'react-icons/fa';
import { SiMongodb, SiCplusplus } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
