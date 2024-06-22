import React, { useState } from "react";
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
      <div className="absolute top-10 left-1 z-20 bg-transparent">
        <div className="navigator flex flex-col gap-[15px] w-[21em] bg-transparent pt-[1rem]">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd',}}
            className="relative block w-full bg-transparent tracking-[1.7px] border-b-2 border-solid border-menu box-shadow-custom cursor-pointer"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd',}}
            className="relative block w-full bg-transparent tracking-[1.7px] border-b-2 border-solid border-menu box-shadow-custom cursor-pointer"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd',}}
            className="relative block w-full bg-transparent tracking-[1.7px] border-b-2 border-solid border-menu box-shadow-custom cursor-pointer"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd',}}
            className="relative block w-full bg-transparent tracking-[1.7px] border-b-2 border-solid border-menu box-shadow-custom cursor-pointer"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd',}}
            className="relative block w-full bg-transparent tracking-[1.7px] border-b-2 border-solid border-menu box-shadow-custom cursor-pointer"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd',}}
            className="relative block w-full bg-transparent tracking-[1.7px] border-b-2 border-solid border-menu box-shadow-custom cursor-pointer"
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
