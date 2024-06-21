import React, { useState, useEffect } from "react";
import "./navbartablet.css";
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
      const tabletView = window.innerWidth <= 750;
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
        <div className="navbar_icons">
          <img
            id="menu-icon"
            src="../images/burger.png"
            alt="menu"
            onClick={handleMenuClick}
            style={{ display: isMenuOpen ? "none" : "block" }}
          />
          <img
            id="close-icon"
            src="../images/x.png"
            alt="close"
            onClick={handleCloseClick}
            style={{ display: isMenuOpen ? "block" : "none" }}
          />
        </div>
      )}

      <div
        className={`container_2 ${isTabletView && isMenuOpen ? "open" : ""}`}
      >
        <div className="navigator_2">
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
            className="custom-menu-tablet"
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
            className="custom-menu-tablet">
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
            className="custom-menu-tablet"
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
            className="custom-menu-tablet"
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
            className="custom-menu-tablet"
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
            className="custom-menu-tablet"
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
