import React, { useState } from "react";
import "./navbar.css";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div className="navigator">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            {" "}
            Home
          </Link>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            {" "}
            About Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            {" "}
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            {" "}
            Skills
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            {" "}
            Certificates
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            {" "}
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
