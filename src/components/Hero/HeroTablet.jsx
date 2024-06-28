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
          src="../dist/images/personal-img.png"
          alt="personal image"
        />
        <h4 className="font-bebas font-thin text-[#fffc00] text-[2.2em] tracking-tittle">frontend developer</h4>
        <a className=" w-[80%]" href="https://www.instagram.com/lis.script" target="blank"><img
          src="../dist/images/nametitle.png"
          alt="Lisa Bauer Neon"
        /></a>
        <h3 className="font-bebas font-thin text-[#fffc00] text-[1.2em] md:text-[1.7em] tracking-subtittle">Yes, this is a portfolio</h3>
      </div>
    </div>
  );
};

export default Hero;
