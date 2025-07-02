import React from 'react';
import './EnergyOrb.css';

const EnergyOrb = ({ onClick, energyLevel, clickAnimations }) => {
  const orbClass = `energy-orb energy-level-${energyLevel}`;
  
  return (
    <div className="orb-wrapper">
      <div 
        className={orbClass}
        onClick={onClick}
      >
        <div className="orb-core">
          <div className="orb-inner"></div>
          <div className="energy-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>
        
        <div className="orb-glow"></div>
        <div className="orb-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      {/* Click animations */}
      {clickAnimations.map(({ id, x, y, value }) => (
        <div
          key={id}
          className="click-animation"
          style={{ left: x, top: y }}
        >
          +{value}
        </div>
      ))}
    </div>
  );
};

export default EnergyOrb;