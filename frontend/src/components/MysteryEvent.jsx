import React, { useState, useEffect } from 'react';
import './MysteryEvent.css';

const MysteryEvent = ({ onMysteryClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // Schedule mystery events every 30-60 seconds
    const scheduleNextEvent = () => {
      const delay = Math.random() * 30000 + 30000; // 30-60 seconds
      setTimeout(() => {
        showMysteryBox();
      }, delay);
    };

    const showMysteryBox = () => {
      // Random position (avoiding edges)
      const x = Math.random() * (window.innerWidth - 150) + 75;
      const y = Math.random() * (window.innerHeight - 150) + 75;
      
      setPosition({ x, y });
      setIsVisible(true);
      setTimeLeft(10);
      
      // Auto-hide after 10 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        scheduleNextEvent();
      }, 10000);

      // Countdown timer
      const countdownInterval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearTimeout(hideTimer);
        clearInterval(countdownInterval);
      };
    };

    // Start the first event
    scheduleNextEvent();
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    onMysteryClick();
    
    // Schedule next event
    const delay = Math.random() * 30000 + 30000;
    setTimeout(() => {
      const x = Math.random() * (window.innerWidth - 150) + 75;
      const y = Math.random() * (window.innerHeight - 150) + 75;
      setPosition({ x, y });
      setIsVisible(true);
      setTimeLeft(10);
    }, delay);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="mystery-box"
      style={{ 
        left: position.x, 
        top: position.y,
        position: 'fixed',
        zIndex: 1000
      }}
      onClick={handleClick}
    >
      <div className="mystery-box-inner">
        <div className="mystery-icon">❓</div>
        <div className="mystery-glow"></div>
        <div className="mystery-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`mystery-particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="mystery-timer">
        {timeLeft}s
      </div>
      
      <div className="mystery-hint">
        Click me!
      </div>
    </div>
  );
};

export default MysteryEvent;