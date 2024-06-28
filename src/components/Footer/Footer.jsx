import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-[0] w-full flex gap-8 bg-black-60 h-60 justify-center items-center'>
        <a href="https://github.com/Lisbauer" target='blank'><img className='md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="./images/github.png" alt="github logo"/></a>
        <a href="https://www.linkedin.com/in/lisbauer/" target='blank'><img className='md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="./images/linkedin.png" alt="linkedin logo"/></a>
       <a href="https://www.behance.net/lisbauer" target='blank'><img className='md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="./images/behance.png" alt="behance logo"/></a>
       <a href="https://www.instagram.com/lis.script" target='blank'><img className='md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="./images/instagram.png" alt="instagram logo"/></a>
    </div>
  )
}
export default Footer