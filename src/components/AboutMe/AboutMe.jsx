import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="about__container bg-cover bg-center min-h-screen flex justify-center items-center overflow-hidden p-5 flex-col">
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px]">
        <h1 className="custom-h1">About me</h1>
        <div className="w-4/5 max-w-2xl text-center border-2 border-[#fffc00] text-white p-8 rounded-[7%]">
          <div className="bg-[rgba(0,0,0,0.511)] rounded-[6%] p-4">
            <p className="text-[1.3em] font-[400] font-kanit">
              I started my studies as a <span className="text-[#fffc00]">Frontend Developer</span> two
              years ago. I have a background in veterinary studies and worked in
              that field for six years. Currently, I am pursuing a career in{" "}
              <span className="text-[#fffc00]">Web Design and Programming at Escuela Da Vinci</span>.
            </p>
            <p className="text-[1.3em] font-[400] font-kanit">
              I completed various programming courses in 2022 and also have an
              inclination towards digital design. My hobbies include playing
              video games, creating digital drawings, studying new technologies
              in a self-taught manner, spending time with my cats, and hanging
              out with my friends.
            </p>
          </div>
        </div>
      </div>

      <a
        data-aos="flip-left"
        className="a-neon"
        href=""
        style={{ "--clr": "#ff22bb", "--i": 0 }}
      >
        <a style={{ textDecoration: "none" }}>
          <span>DOWNLOAD MY CV</span>
        </a>
      </a>
    </div>
  );
};

export default AboutMe;
