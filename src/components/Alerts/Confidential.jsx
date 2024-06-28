import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './messageReceived.css';

const Glitch = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className='glitchBody' style={{backgroundImage: `url('./images/confidential.jpg')`}}>
      <div className='glitchContainer'>
        <div className='glitch' data-text="I SAID IT'S CONFIDENTIAL">I SAID IT'S CONFIDENTIAL</div>
        <div className='glow'>I SAID IT'S CONFIDENTIAL</div>
        <h1 className='subtitle'>let's just get back in {countdown}</h1>
      </div>
      <div className='scanlines'></div>
    </div>
  );
}

export default Glitch;
