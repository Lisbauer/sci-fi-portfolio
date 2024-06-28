import React from 'react';
import { Button } from "@material-tailwind/react";

const projects = [
  {
    id: 1,
    title: "Tromsø web",
    imageUrl: "../dist/images/ui-1.png",
    link: "https://www.behance.net/gallery/200459269/Diseno-web-para-un-TP-de-la-facultad"
  },
  {
    id: 2,
    title: "Tromsø web",
    imageUrl: "../dist/images/ui-2.png",
    link: "https://www.behance.net/gallery/201058453/Seccion-Actividades-en-Tromsoe-Noruega"
  },
  {
    id: 3,
    title: "Razer Quartz Edition",
    imageUrl: "../dist/images/ui-3.png",
    link: "https://www.behance.net/gallery/200459707/Diseno-web-publicitario-para-linea-Razer-Quartz-Edition"
  },
  {
    id: 4,
    title: "Tromsø web MockUps",
    imageUrl: "../dist/images/ui-4.png",
    link: "https://www.behance.net/gallery/201056479/MockUp-Home-page-Tromsoe"
  },
];

const UIprojects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className='ui__container'>
      <h2 className='md:text-[3em] text-center py-7 custom-h1 '>UX/UI Design</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full max-w-[1200px] pb-16 px-12 xl:px-0'>
        {projects.map((project) => (
          <div key={project.id} className='project-cards'>
            <div className='project-cards-bg' data-aos="fade-down">
              <img className='project-img' src={project.imageUrl} alt={project.title} />
              <div className='text-center'>
              <Button onClick={() => handleClick(project.link)} className="px-9 sm:px-16  font-audiowide text-[#fffc00] text-[0.7em] lg:text-[1em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600 mt-3 flex items-center text-center" >   <span className="relative z-10">Explore</span>
              <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span></Button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIprojects;