import React, { useEffect, useState } from "react";
import "./hero.css";
import HeroTablet from './HeroTablet';
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsTabletView(window.innerWidth <= 1250);
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  return (
    <div className="hero_container">
      {isTabletView ? (
        <HeroTablet />
      ) : (
        <>
          <Navbar />
          <div className="text_container">
            <h4>desarrolladora frontend</h4>
            <img src="./images/nametitle.png" alt="Lisa Bauer Neon" />
            <h3>bienvenido a mi portafolio</h3>
          </div>
          <div className="bg_img_container">      
            <img
              className="purple_bg"
              src="./images/bg-picture.png"
              alt="purple background"
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Hero;
