import React from 'react';
import './projects.css';
import UIprojects from './UIprojects.jsx'

const projects = [
  {
    id: 1,
    title: "Aiko Web",
    imageUrl: "./images/project-1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "./images/project-2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: "./images/project-3.png",
    link: "#"
  },
  {
    id: 4,
    title: "Project 4",
    imageUrl: "./images/project-4.png",
    link: "#"
  },
  {
    id: 5,
    title: "Project 5",
    imageUrl: "./images/project-5.png",
    link: "#"
  },
  {
    id: 6,
    title: "Project 6",
    imageUrl: "./images/project-6.png",
    link: "#"
  },

];

const Projects = () => {
  return (
    <div className='projects__container'>
      <h1>My Projects</h1>
      <div className='projects__grid'>
        {projects.map((project) => (
          <div key={project.id} className='card__projects'>
            <div className='card__bg'>
              <img src={project.imageUrl} alt={project.title} />
              <a href={project.link}>Explore</a>
            </div>
          </div>
        ))}
      </div>
      <UIprojects/>
    </div>
  );
};

export default Projects;
