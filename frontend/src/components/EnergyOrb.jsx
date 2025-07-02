import React from 'react';
import './EnergyOrb.css';

const EnergyOrb = ({ onClick, energyLevel, evolutionStage, clickAnimations }) => {
  const orbClass = `energy-orb energy-level-${energyLevel} evolution-stage-${evolutionStage}`;
  
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
        
        {/* Evolution-specific effects */}
        {evolutionStage >= 3 && (
          <div className="flame-effects">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`flame flame-${i + 1}`}></div>
            ))}
          </div>
        )}
        
        {evolutionStage >= 5 && (
          <div className="electric-effects">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`lightning lightning-${i + 1}`}></div>
            ))}
          </div>
        )}
        
        {evolutionStage >= 7 && (
          <div className="solar-flares">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`flare flare-${i + 1}`}></div>
            ))}
          </div>
        )}
        
        {evolutionStage >= 9 && (
          <div className="black-hole-effects">
            <div className="event-horizon"></div>
            <div className="accretion-disk"></div>
            <div className="gravitational-lensing"></div>
          </div>
        )}
        
        {evolutionStage >= 10 && (
          <div className="galaxy-effects">
            <div className="spiral-arm spiral-arm-1"></div>
            <div className="spiral-arm spiral-arm-2"></div>
            <div className="spiral-arm spiral-arm-3"></div>
            <div className="spiral-arm spiral-arm-4"></div>
            <div className="galactic-center"></div>
          </div>
        )}
        
        <div className="orb-particles">
          {[...Array(evolutionStage >= 8 ? 16 : 8)].map((_, i) => (
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