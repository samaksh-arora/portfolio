import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <h2>Samaksh Arora</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            About
          </Link>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Education
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Experience
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
