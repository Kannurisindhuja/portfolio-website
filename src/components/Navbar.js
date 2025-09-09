import React from "react";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navdiv">
        <div className="logo">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
            style={{ cursor: 'pointer' }}
          >
            Sindhuja Kannuri
          </a>
        </div>

        <ul>
          <li>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
              style={{ cursor: 'pointer' }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); handleScroll('experience'); }}
              style={{ cursor: 'pointer' }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}
              style={{ cursor: 'pointer' }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}
              style={{ cursor: 'pointer' }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => { e.preventDefault(); handleScroll('education'); }}
              style={{ cursor: 'pointer' }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
