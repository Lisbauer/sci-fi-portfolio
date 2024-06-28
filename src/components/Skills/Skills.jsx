import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { name: 'HTML', imageUrl: '../dist/images/htmlicon.png', aosEffect: 'fade-up' },
    { name: 'CSS', imageUrl: '../dist/images/cssicon.png', aosEffect: 'fade-down' },
    { name: 'JavaScript', imageUrl: '../dist/images/jsicon.png', aosEffect: 'flip-left' },
    { name: 'TypeScript', imageUrl: '../dist/images/tsicon.png', aosEffect: 'flip-right' },
    { name: 'ViteJS', imageUrl: '../dist/images/viteicon.png', aosEffect: 'zoom-in' },
    { name: 'Next.JS', imageUrl: '../dist/images/nexticon.png', aosEffect: 'zoom-out' },
    { name: 'React.JS', imageUrl: '../dist/images/reacticon.png', aosEffect: 'fade-left' },
    { name: 'SASS', imageUrl: '../dist/images/sassicon.png', aosEffect: 'fade-right' },
    { name: 'Node.JS', imageUrl: '../dist/images/nodeicon.png', aosEffect: 'slide-up' },
    { name: 'Photoshop', imageUrl: '../dist/images/psicon.png', aosEffect: 'slide-down' },
    { name: 'GitHub', imageUrl: '../dist/images/githubicon.png', aosEffect: 'flip-up' },
    { name: 'Git', imageUrl: '../dist/images/giticon.png', aosEffect: 'flip-down' },
    { name: 'Bootstrap', imageUrl: '../dist/images/bootstrapicon.png', aosEffect: 'zoom-in-up' },
    { name: 'TailwindCSS', imageUrl: '../dist/images/tailwindicon.png', aosEffect: 'zoom-in-down' },
    { name: 'MaterialUI', imageUrl: '../dist/images/muiicon.png', aosEffect: 'zoom-out-up' }
  ];

  return (
    <div className='bg-cover bg-center min-h-screen flex flex-col items-center p-5'>
      <h1 className='custom-h1'>SKILLS</h1>
      <div className='grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 text-center bg-gradient-glow rounded-lg p-6'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='icon__container'
            data-aos={skill.aosEffect}
          >
            <span className="icon__span icon__span__tablet">{skill.name}</span>
            <img src={skill.imageUrl} alt={`${skill.name} icon`} className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
