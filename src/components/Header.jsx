import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import StaggeredMenu from './StaggeredMenu';
import './Header.css';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#hero' },
  { label: 'About', ariaLabel: 'Go to about section', link: '#about' },
  { label: 'Education', ariaLabel: 'Go to education section', link: '#education' },
  { label: 'Experience', ariaLabel: 'Go to experience section', link: '#experience' },
  { label: 'Projects', ariaLabel: 'Go to projects section', link: '#projects' },
  { label: 'Leadership', ariaLabel: 'Go to leadership section', link: '#leadership' },
  { label: 'Skills', ariaLabel: 'Go to skills section', link: '#skills' },
  { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/samaksh-arora' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/arorasamaksh' },
  { label: 'Email', link: 'mailto:samaksharora.09@gmail.com' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <h2>Samaksh Arora</h2>
          </div>

          <nav className="nav">
            <Link to="hero" smooth={true} duration={500} activeClass="active" spy={true}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} activeClass="active" spy={true}>
              About
            </Link>
            <Link to="education" smooth={true} duration={500} activeClass="active" spy={true}>
              Education
            </Link>
            <Link to="experience" smooth={true} duration={500} activeClass="active" spy={true}>
              Experience
            </Link>
            <Link to="projects" smooth={true} duration={500} activeClass="active" spy={true}>
              Projects
            </Link>
            <Link to="leadership" smooth={true} duration={500} activeClass="active" spy={true}>
              Leadership
            </Link>
            <Link to="skills" smooth={true} duration={500} activeClass="active" spy={true}>
              Skills
            </Link>
            <Link to="contact" smooth={true} duration={500} activeClass="active" spy={true}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="staggered-menu-mobile-only">
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoText="Samaksh Arora"
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#1a1a1a', '#000000']}
          accentColor="#000000"
        />
      </div>
    </>
  );
};

export default Header;
