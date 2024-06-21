import React from "react";
import "./herotablet.css";
import NavbarTablet from "../Navbar/NavbarTablet.jsx";

const Hero = () => {
  return (
    <div className="hero_container_2 flex items-center justify-center w-full">
      <div className="text_container_2 flex flex-col z-[3] justify-center text-center items-center">         
        <NavbarTablet />   
        <img
          className="personal__image md:mt-16"
          src="./images/personal-img.png"
          alt="personal image"
        />
        <h4 className="font-bebas font-thin text-[#fffc00] text-[2.2em] tracking-tittle">frontend developer</h4>
        <img
          className="Neon_name w-[80%]"
          src="./images/nametitle.png"
          alt="Lisa Bauer Neon"
        />
        <h3 className="font-bebas font-thin text-[#fffc00] text-[1.7em] tracking-subtittle">welcome to my portfolio</h3>
      </div>
    </div>
  );
};

export default Hero;
