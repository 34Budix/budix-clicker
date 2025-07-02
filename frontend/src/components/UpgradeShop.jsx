import React from 'react';
import './UpgradeShop.css';

const UpgradeShop = ({ upgrades, currentEnergy, onPurchase }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const canAfford = (cost) => currentEnergy >= cost;

  return (
    <div className="upgrade-shop">
      <h2 className="shop-title">🛒 Energy Upgrades</h2>
      
      <div className="upgrades-list">
        {upgrades.map(upgrade => (
          <div 
            key={upgrade.id}
            className={`upgrade-card ${canAfford(upgrade.cost) ? 'affordable' : 'expensive'}`}
          >
            <div className="upgrade-icon">{upgrade.icon}</div>
            
            <div className="upgrade-info">
              <div className="upgrade-name">{upgrade.name}</div>
              <div className="upgrade-description">{upgrade.description}</div>
              <div className="upgrade-level">Level: {upgrade.level}</div>
            </div>
            
            <div className="upgrade-purchase">
              <div className="upgrade-cost">
                ⚡ {formatNumber(upgrade.cost)}
              </div>
              <button
                className={`upgrade-button ${canAfford(upgrade.cost) ? 'buyable' : 'disabled'}`}
                onClick={() => onPurchase(upgrade.id)}
                disabled={!canAfford(upgrade.cost)}
              >
                {canAfford(upgrade.cost) ? 'BUY' : 'NEED MORE'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradeShop;