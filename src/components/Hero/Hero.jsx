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
    <div className="bg-cover bg-center h-[120vh] 2xl:h-screen flex overflow-hidden  py-28 md:py-40 lg:py-0">
      {isTabletView ? (
        <HeroTablet />
      ) : (
        <>
          <Navbar />
          <div className="text_container flex flex-col absolute top-[30%] left-[40%] z-[3] justify-center items-center text-center mt-[12em]">
            <h4 className="font-bebas font-thin text-[#fffc00] text-[3em] tracking-tittle">frontend developer</h4>
            <img src="./images/nametitle.png" alt="Lisa Bauer Neon" />
            <h3 className="font-bebas font-thin text-[#fffc00] text-[1.2em] tracking-subtittle">welcome to my portfolio</h3>
          </div>
          <div className="bg_img_container relative flex justify-end items-start h-full w-full">      
            <img
              className="absolute right-[0] h-full z-[1]"
              src="./images/jinx.png"
              alt="purple background"
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Hero;
