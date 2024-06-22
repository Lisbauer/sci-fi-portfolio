import React from "react";
import "./projects.css";
import UIprojects from "./UIprojects.jsx";
import Skills from "../Skills/Skills.jsx";
import { Button } from "@material-tailwind/react";

const projects = [
  {
    id: 1,
    title: "Aiko Web",
    imageUrl: "./images/project-1.png",
    link: "https://www.aikodev.com/",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "./images/project-2.png",
    link: "https://lisabauer-portfolio.vercel.app/",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: "./images/project-3.png",
    link: "https://awg-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Project 4",
    imageUrl: "./images/project-4.png",
    link: "https://magnadimenseon.vercel.app/",
  },
  {
    id: 5,
    title: "Project 5",
    imageUrl: "./images/project-5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Project 6",
    imageUrl: "./images/project-6.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects__container">
      <h1 className="custom-h1">My Projects</h1>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="card__projects">
            <div className="card__bg">
              <img src={project.imageUrl} alt={project.title} />
              <div className="mt-14 lg:mt-4">
                <Button
                  href={project.link}
                  target="_blank"
                  className="w-64 font-audiowide text-[#fffc00] text-[0.9em] sm:text-[1.2em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600"
                >
                  <span className="relative z-10">Explore</span>
                  <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <UIprojects />
      <div id="skills">
        <Skills />
      </div>
    </div>
  );
};

export default Projects;
