import React from 'react';
import './About.css';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I’m Samaksh Arora, a Computer Science student at Wayne State University with a passion for problem-solving, technology, and innovation. My academic journey has introduced me to programming languages like C++, Python, and JavaScript, and I’m actively expanding my skills into Software Engineering, Machine Learning, and Cyber Security.
            </p>
            <p>
              Beyond the classroom, I’ve worked on projects ranging from CAD modeling in Siemens NX to building web applications with React and Node.js. 
              I enjoy bridging technical depth with real-world impact, 
              whether it’s developing smarter systems or exploring how AI can transform industries.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Courses Completed</p>
              </div>
              <div className="stat">
                <h3>2</h3>
                <p>Internships</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Programming Languages
                </p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={"/samakshpic.jpeg"} alt="About me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
