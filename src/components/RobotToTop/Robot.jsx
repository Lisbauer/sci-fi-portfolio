import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Robot = () => {
  const [robotActive, setRobotActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); 

  const handleClick = () => {
    setRobotActive(true);
    setTimeout(() => {
      setRobotActive(false);
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsAnimatingOut(false);
        setIsVisible(false); 
      }, 500);
    }, 3000);
  };

  const checkScrollPosition = () => {
    const heroElement = document.getElementById('home');
    const heroHeight = heroElement ? heroElement.offsetHeight : 0;
    const scrollPosition = window.scrollY;
    
    console.log(`Hero Height: ${heroHeight}, Scroll Position: ${scrollPosition}`);
    
    if (scrollPosition > heroHeight && !robotActive) {
      setIsVisible(true);
    } else if (scrollPosition <= heroHeight && !robotActive) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [robotActive]);

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <div className={`robot-box ${isVisible ? "show" : "hide"} ${isAnimatingOut ? "animating-out" : ""}`} >
      <Link to="home" smooth={true} duration={1500} spy={true} exact="true">
        <div
          className={`robot-container ${robotActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="robot" >
            <img src="./images/robot.png" alt="robot to top"/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Robot;
