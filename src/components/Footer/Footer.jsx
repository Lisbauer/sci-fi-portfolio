import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex gap-14 bg-black-60 w-full h-60 justify-center items-center'>
        <a href="https://github.com/Lisbauer" target='blank'><img className='md:w-[100px] md:h-[100px] w-[70px] h-[70px]' src="./images/github.png" alt="github png"/></a>
        <a href="https://www.linkedin.com/in/lisbauer/" target='blank'><img className='md:w-[100px] md:h-[100px] w-[70px] h-[70px]' src="./images/linkedin.png" alt="linkedin png"/></a>
       <a href="https://www.behance.net/lisbauer" target='blank'><img className='md:w-[100px] md:h-[100px] w-[70px] h-[70px]' src="./images/behance.png" alt="behance png"/></a>
    </div>
  )
}
export default Footer