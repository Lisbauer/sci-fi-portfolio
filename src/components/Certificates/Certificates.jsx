import React from 'react'
import './certificates.css'


const Certificates = () => {
  return (
    <div className='cert__container'>
        <div className='text__img'>
            <h1>CERTIFICATIONS</h1>
            <div className='cert__img__container'>
                <div className='first__pair'>
                <img src="./images/cert-1.png" alt="Web development certification" />
                <img src="./images/cert-2.png" alt="Javascript certification" />
                </div>
                <div className='second__pair'>
                <img src="./images/cert-3.png" alt="React certification" />
                <img src="./images/cert-en-4.png" alt="Frontend React Career certification" />
                </div>
            </div>
        </div>
   
        
    </div>
  )
}

export default Certificates