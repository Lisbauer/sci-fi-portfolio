import React from 'react';
import './uiprojects.css';

const projects = [
  {
    id: 1,
    title: "Aiko Web",
    imageUrl: "./images/ui-1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "./images/ui-2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: "./images/ui-3.png",
    link: "#"
  },
  {
    id: 4,
    title: "Project 4",
    imageUrl: "./images/ui-4.png",
    link: "#"
  },
];

const Projects = () => {
  return (
    <div className='ui__container'>
      <h2>UX/UI Design</h2>
      <div className='ui__grid'>
        {projects.map((project) => (
          <div key={project.id} className='uicard__projects'>
            <div className='uicard__bg'>
              <img src={project.imageUrl} alt={project.title} />
              <a href={project.link}>Explore</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
