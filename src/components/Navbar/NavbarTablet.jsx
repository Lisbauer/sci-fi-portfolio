import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";

const NavbarTablet = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const tabletView = window.innerWidth <= 720;
      setIsTabletView(tabletView);

      if (!tabletView) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {isTabletView && (
        <div className="block absolute top-[0.5rem] right-[1rem] z-[1100] md:hidden">
          <img
            id="menu-icon"
            src="../images/burger.png"
            alt="menu"
            onClick={handleMenuClick}
            className="w-[70px] h-[70px] md:hidden"
            style={{ display: isMenuOpen ? "none" : "block" }}
          />
          <img
            id="close-icon"
            src="../images/x.png"
            alt="close"
            onClick={handleCloseClick}
            className="w-[70px] h-[70px] md:hidden"
            style={{ display: isMenuOpen ? "block" : "none" }}
          />
        </div>
      )}

<div className={`top-0 left-0 w-full h-0 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] overflow-hidden transition-[height] duration-300 ease z-[1000] ${isTabletView && isMenuOpen ? "h-96" : ""} md:hidden`}>
        <div className="flex flex-col gap-4 w-[17rem] md:w-[21rem] bg-transparent pt-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
            className="custom-menu-mobile"
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
            className="custom-menu-mobile"
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
            className="custom-menu-mobile"
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
            className="custom-menu-mobile"
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
            className="custom-menu-mobile"
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
            className="custom-menu-mobile"
          >
            {" "}
            Contact
          </Link>
        </div>
      </div>

      {!isTabletView && (
        <div className="flex flex-col gap-4 w-[21em] bg-transparent pb-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd'}}
            className="custom-menu"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd'}}
            className="custom-menu">
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd'}}
            className="custom-menu"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd'}}
            className="custom-menu"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd'}}
            className="custom-menu"
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
            style={{borderBottomWidth: '2px', borderBottomColor: '#7dfffd'}}
            className="custom-menu"
          >
            {" "}
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarTablet;
