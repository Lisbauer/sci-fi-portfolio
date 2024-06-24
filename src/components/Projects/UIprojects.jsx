import React from 'react';
import './uiprojects.css';
import { Button } from "@material-tailwind/react";

const projects = [
  {
    id: 1,
    title: "Tromsø web",
    imageUrl: "./images/ui-1.png",
    link: "https://www.behance.net/gallery/200459269/Diseno-web-para-un-TP-de-la-facultad"
  },
  {
    id: 2,
    title: "Tromsø web",
    imageUrl: "./images/ui-2.png",
    link: "https://www.behance.net/gallery/201058453/Seccion-Actividades-en-Tromsoe-Noruega"
  },
  {
    id: 3,
    title: "Razer Quartz Edition",
    imageUrl: "./images/ui-3.png",
    link: "https://www.behance.net/gallery/200459707/Diseno-web-publicitario-para-linea-Razer-Quartz-Edition"
  },
  {
    id: 4,
    title: "Tromsø web MockUps",
    imageUrl: "./images/ui-4.png",
    link: "https://www.behance.net/gallery/201056479/MockUp-Home-page-Tromsoe"
  },
];



const UIprojects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank"); // Abrir en una nueva pestaña
  };

  return (
    <div className='ui__container'>
      <h2 className='text-[10px] text-center py-7 first-line:custom-h1 '>UX/UI Design</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full max-w-[1200px] pb-16 px-12 xl:px-0'>
        {projects.map((project) => (
          <div key={project.id} className='project-cards'>
            <div className='project-cards-bg'>
              <img className='project-img' src={project.imageUrl} alt={project.title} />
              <Button onClick={() => handleClick(project.link)} className="w-52 md:w-36 font-audiowide text-[#fffc00] text-[0.7em] sm:text-[0.7em] lg:text-[1em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600 mt-3" >   <span className="relative z-10">Explore</span>
              <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIprojects;