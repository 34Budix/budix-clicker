import React, { useState, useEffect, useCallback } from 'react';
import { mockData } from '../data/mockData';
import EnergyOrb from './EnergyOrb';
import GameStats from './GameStats';
import UpgradeShop from './UpgradeShop';
import './BudixGame.css';

const BudixGame = () => {
  const [energy, setEnergy] = useState(0);
  const [energyPerClick, setEnergyPerClick] = useState(1);
  const [energyPerSecond, setEnergyPerSecond] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [upgrades, setUpgrades] = useState(mockData.upgrades);
  const [achievements, setAchievements] = useState([]);
  const [clickAnimations, setClickAnimations] = useState([]);

  // Auto energy generation
  useEffect(() => {
    if (energyPerSecond > 0) {
      const interval = setInterval(() => {
        setEnergy(prev => prev + energyPerSecond);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [energyPerSecond]);

  // Handle orb click
  const handleOrbClick = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setEnergy(prev => prev + energyPerClick);
    setTotalClicks(prev => prev + 1);
    
    // Add click animation
    const id = Date.now() + Math.random();
    setClickAnimations(prev => [...prev, { 
      id, 
      x, 
      y, 
      value: energyPerClick 
    }]);
    
    // Remove animation after 1 second
    setTimeout(() => {
      setClickAnimations(prev => prev.filter(anim => anim.id !== id));
    }, 1000);
  }, [energyPerClick]);

  // Purchase upgrade
  const purchaseUpgrade = useCallback((upgradeId) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (!upgrade || energy < upgrade.cost) return;

    setEnergy(prev => prev - upgrade.cost);
    
    // Apply upgrade effect
    switch (upgrade.type) {
      case 'click_power':
        setEnergyPerClick(prev => prev + upgrade.effect);
        break;
      case 'auto_clicker':
        setEnergyPerSecond(prev => prev + upgrade.effect);
        break;
      default:
        break;
    }

    // Update upgrade (increase cost and level)
    setUpgrades(prev => prev.map(u => 
      u.id === upgradeId 
        ? { 
            ...u, 
            level: u.level + 1,
            cost: Math.floor(u.cost * u.costMultiplier)
          }
        : u
    ));
  }, [energy, upgrades]);

  // Check achievements
  useEffect(() => {
    mockData.achievements.forEach(achievement => {
      if (achievements.includes(achievement.id)) return;
      
      let unlocked = false;
      switch (achievement.condition.type) {
        case 'total_clicks':
          unlocked = totalClicks >= achievement.condition.value;
          break;
        case 'total_energy':
          unlocked = energy >= achievement.condition.value;
          break;
        case 'energy_per_second':
          unlocked = energyPerSecond >= achievement.condition.value;
          break;
        default:
          break;
      }
      
      if (unlocked) {
        setAchievements(prev => [...prev, achievement.id]);
      }
    });
  }, [totalClicks, energy, energyPerSecond, achievements]);

  return (
    <div className="budix-game">
      <header className="game-header">
        <h1 className="game-title">BUDIX</h1>
        <p className="game-subtitle">Harness the Power of Cosmic Energy!</p>
      </header>
      
      <div className="game-container">
        <div className="game-main">
          <GameStats 
            energy={energy}
            energyPerClick={energyPerClick}
            energyPerSecond={energyPerSecond}
            totalClicks={totalClicks}
            achievements={achievements.length}
          />
          
          <div className="orb-container">
            <EnergyOrb 
              onClick={handleOrbClick}
              energyLevel={Math.min(Math.floor(energy / 100), 10)}
              clickAnimations={clickAnimations}
            />
          </div>
        </div>
        
        <div className="game-sidebar">
          <UpgradeShop 
            upgrades={upgrades}
            currentEnergy={energy}
            onPurchase={purchaseUpgrade}
          />
        </div>
      </div>
      
      {achievements.length > 0 && (
        <div className="achievements-notification">
          🏆 Achievements Unlocked: {achievements.length}
        </div>
      )}
    </div>
  );
};

export default BudixGame;