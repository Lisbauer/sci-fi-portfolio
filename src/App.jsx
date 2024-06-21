import './App.css'
import Hero from './components/Hero/Hero.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Projects from './components/Projects/Projects.jsx'
import Certificates from './components/Certificates/Certificates.jsx'

function App() {

  return (
    <div>
      <Hero />
      <div id="aboutme">
      <AboutMe />
      </div>
      <div id='projects'>
      <Projects />
      </div>
      <div id='certificates'>
      <Certificates />
      </div>
    </div>
  )
}
export default App
