import React, { useState, useEffect } from "react";
import "./navbartablet.css";

const NavbarTablet = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const tabletView = window.innerWidth <= 550;
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

      <div className={`container_2 ${isTabletView && isMenuOpen ? "open" : ""}`}>
        <div className="navigator_2">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#conocimientos">Conocimientos</a>
          <a href="#certificados">Certificados</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      {!isTabletView && (
        <div className="navigator_3">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#conocimientos">Conocimientos</a>
          <a href="#certificados">Certificados</a>
          <a href="#contacto">Contacto</a>
        </div>
      )}
    </div>
  );
};

export default NavbarTablet;
