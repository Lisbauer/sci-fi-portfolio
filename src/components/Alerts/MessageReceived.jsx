import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './messageReceived.css';

const Glitch = () => {
  const [countdown, setCountdown] = useState(10);
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
    <div className='glitchBody'>
      <div className='glitchContainer'>
        <div className='glitch' data-text="MESSAGE RECEIVED">MESSAGE RECEIVED</div>
        <div className='glow'>MESSAGE RECEIVED</div>
        <h1 className='subtitle'>let's go back in {countdown}</h1>
      </div>
      <div className='scanlines'></div>
    </div>
  );
}

export default Glitch;
