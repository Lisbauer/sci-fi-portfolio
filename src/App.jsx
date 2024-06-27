import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Robot from "./components/RobotToTop/Robot.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MessageReceived from "./components/MessageReceived/MessageReceived.jsx";

function App() {
  return (
    <Router>
      <div className="App" translate="no">
        <div id="message">
          <Routes>
            <Route path="/messagesent" element={<MessageReceived />} />
          </Routes>
        </div>
        <div>
          <div className="toTop">
            <Robot />
          </div>
          <div id="home">
            <Routes>
              <Route path="/" element={<Hero />} />
            </Routes>
          </div>

          <div id="aboutme">
            <Routes>
              <Route path="/" element={<AboutMe />} />
            </Routes>
          </div>

          <div id="projects">
            <Routes>
              <Route path="/" element={<Projects />} />
            </Routes>
          </div>
          <div id="certificates">
            <Routes>
              <Route path="/" element={<Certificates />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
