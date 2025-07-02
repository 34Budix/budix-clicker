import React, { useState, useEffect, useCallback } from 'react';
import { mockData } from '../data/mockData';
import EnergyOrb from './EnergyOrb';
import GameStats from './GameStats';
import UpgradeShop from './UpgradeShop';
import QuestPanel from './QuestPanel';
import MysteryEvent from './MysteryEvent';
import './BudixGame.css';

const BudixGame = () => {
  const [energy, setEnergy] = useState(0);
  const [energyPerClick, setEnergyPerClick] = useState(1);
  const [energyPerSecond, setEnergyPerSecond] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [upgrades, setUpgrades] = useState(mockData.upgrades);
  const [achievements, setAchievements] = useState([]);
  const [clickAnimations, setClickAnimations] = useState([]);
  const [quests, setQuests] = useState(mockData.quests);
  const [mysteryEvents, setMysteryEvents] = useState([]);
  const [tempEffects, setTempEffects] = useState({});

  // Calculate evolution stage based on total clicks and energy
  const getEvolutionStage = () => {
    const totalUpgrades = upgrades.reduce((sum, upgrade) => sum + upgrade.level, 0);
    
    if (totalClicks >= 10000 || energy >= 1000000 || totalUpgrades >= 50) return 10; // Galaxy Core
    if (totalClicks >= 5000 || energy >= 500000 || totalUpgrades >= 30) return 9;   // Black Hole
    if (totalClicks >= 2500 || energy >= 100000 || totalUpgrades >= 20) return 8;   // Neutron Star
    if (totalClicks >= 1000 || energy >= 50000 || totalUpgrades >= 15) return 7;    // Solar Flare Star
    if (totalClicks >= 500 || energy >= 10000 || totalUpgrades >= 10) return 6;     // Plasma Star
    if (totalClicks >= 250 || energy >= 5000 || totalUpgrades >= 8) return 5;       // Electric Orb
    if (totalClicks >= 100 || energy >= 1000 || totalUpgrades >= 5) return 4;       // Fire Orb
    if (totalClicks >= 50 || energy >= 500 || totalUpgrades >= 3) return 3;         // Flame Orb
    if (totalClicks >= 25 || energy >= 100 || totalUpgrades >= 2) return 2;         // Hot Orb
    if (totalClicks >= 10 || energy >= 50 || totalUpgrades >= 1) return 1;          // Warm Orb
    return 0; // Basic Orb
  };
  // Get evolution stage name based on stage number
  const getEvolutionStageName = (stage) => {
    switch (stage) {
      case 10: return "Galaxy Core";
      case 9: return "Black Hole";
      case 8: return "Neutron Star";
      case 7: return "Solar Flare Star";
      case 6: return "Plasma Star";
      case 5: return "Electric Orb";
      case 4: return "Fire Orb";
      case 3: return "Flame Orb";
      case 2: return "Hot Orb";
      case 1: return "Warm Orb";
      default: return "Basic Orb";
    }
  };

  const evolutionStage = getEvolutionStage();

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
              evolutionStage={evolutionStage}
              clickAnimations={clickAnimations}
            />
            
            {/* Evolution stage indicator */}
            <div className="evolution-indicator">
              <div className="evolution-name">
                {getEvolutionStageName(evolutionStage)}
              </div>
              <div className="evolution-progress">
                Stage {evolutionStage + 1} / 11
              </div>
            </div>
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