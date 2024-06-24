import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Robot from "./components/RobotToTop/Robot.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="toTop">
          <Robot />
        </div>
        <div id="home">
          <Hero />
        </div>
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certificates">
          <Certificates />
        </div>
      </div>
    </Router>
  );
}

export default App;
