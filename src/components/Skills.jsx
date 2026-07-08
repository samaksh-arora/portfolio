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

  // Duplicated so the track can loop seamlessly from -50%.
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
      </div>

      <div className="skills-marquee">
        <div className="skills-marquee-track">
          {marqueeSkills.map((skill, index) => (
            <div key={index} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
