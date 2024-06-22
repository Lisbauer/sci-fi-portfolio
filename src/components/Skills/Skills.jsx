import React from 'react';
import './skills.css';

const skills = [
  { name: 'HTML', imageUrl: './images/htmlicon.png' },
  { name: 'CSS', imageUrl: './images/cssicon.png' },
  { name: 'JavaScript', imageUrl: './images/jsicon.png' },
  { name: 'TypeScript', imageUrl: './images/tsicon.png' },
  { name: 'ViteJS', imageUrl: './images/viteicon.png' },   
  { name: 'Next.JS', imageUrl: './images/nexticon.png' }, 
  { name: 'React.JS', imageUrl: './images/reacticon.png' },
  { name: 'SASS', imageUrl: './images/sassicon.png' },
  { name: 'Node.JS', imageUrl: './images/nodeicon.png' },
  { name: 'Photoshop', imageUrl: './images/psicon.png' },
  { name: 'GitHub', imageUrl: './images/githubicon.png' },
  { name: 'Git', imageUrl: './images/giticon.png' },
  { name: 'Bootstrap', imageUrl: './images/bootstrapicon.png' },
  { name: 'TailwindCSS', imageUrl: './images/tailwindicon.png' },
  { name: 'MaterialUI', imageUrl: './images/muiicon.png' }
];

const Skills = () => {
  return (
    <div className='bg-cover bg-center min-h-screen flex flex-col items-center p-5'>
        <h1 className='custom-h1'>SKILLS</h1>
        <div className='icons__container'>
      {skills.map(skill => (
        <div key={skill.name} className='icon__container'>
          <span>{skill.name}</span>
          <img src={skill.imageUrl} alt={`${skill.name} icon`} />
        </div>
      ))}</div>
    </div>
  );
}

export default Skills;