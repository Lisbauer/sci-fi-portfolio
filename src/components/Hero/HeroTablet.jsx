import React from "react";
import "./herotablet.css";
import NavbarTablet from "../Navbar/NavbarTablet.jsx";

const Hero = () => {
  return (
    <div className="hero_container_2">

      <div className="text_container_2">         
        <NavbarTablet />   
        <img
          className="personal_image_2"
          src="./images/personal-img.png"
          alt="personal image"
        />
        <h4>desarrolladora frontend</h4>
        <img
          className="Neon_name"
          src="./images/nametitle.png"
          alt="Lisa Bauer Neon"
        />
        <h3>bienvenido a mi portafolio</h3>

      </div>
    </div>
  );
};

export default Hero;
