import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="about__container">
      <div className="text__about__container">
        <h1>About me</h1>
        <div className="p__container">
          <div className="p__transparency">
            <p>
              I started my studies as a <span>Frontend Developer</span> two
              years ago. I have a background in veterinary studies and worked in
              that field for six years. Currently, I am pursuing a career in{" "}
              <span>Web Design and Programming at Escuela Da Vinci</span>.
            </p>
            <p>
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
