import React from 'react';
import './GameStats.css';

const GameStats = ({ 
  energy, 
  energyPerClick, 
  energyPerSecond, 
  totalClicks, 
  achievements 
}) => {
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="game-stats">
      <div className="stat-card main-energy">
        <div className="stat-icon">⚡</div>
        <div className="stat-content">
          <div className="stat-value">{formatNumber(Math.floor(energy))}</div>
          <div className="stat-label">Cosmic Energy</div>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👆</div>
          <div className="stat-content">
            <div className="stat-value">{energyPerClick}</div>
            <div className="stat-label">Per Click</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-content">
            <div className="stat-value">{energyPerSecond}</div>
            <div className="stat-label">Per Second</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">{formatNumber(totalClicks)}</div>
            <div className="stat-label">Total Clicks</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <div className="stat-value">{achievements}</div>
            <div className="stat-label">Achievements</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;