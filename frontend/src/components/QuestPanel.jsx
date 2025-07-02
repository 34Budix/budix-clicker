import React from 'react';
import './QuestPanel.css';

const QuestPanel = ({ quests, onClaimReward }) => {
  const getProgressPercentage = (quest) => {
    return Math.min((quest.currentProgress / quest.targetValue) * 100, 100);
  };

  const isQuestComplete = (quest) => {
    return quest.currentProgress >= quest.targetValue && !quest.claimed;
  };

  return (
    <div className="quest-panel">
      <h3 className="quest-title">🎯 Active Quests</h3>
      
      <div className="quest-list">
        {quests.map(quest => (
          <div 
            key={quest.id}
            className={`quest-item ${quest.claimed ? 'completed' : ''} ${isQuestComplete(quest) ? 'ready-to-claim' : ''}`}
          >
            <div className="quest-icon">{quest.icon}</div>
            
            <div className="quest-content">
              <div className="quest-name">{quest.name}</div>
              <div className="quest-description">{quest.description}</div>
              
              <div className="quest-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${getProgressPercentage(quest)}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  {Math.min(quest.currentProgress, quest.targetValue)} / {quest.targetValue}
                </div>
              </div>
              
              <div className="quest-reward">
                Reward: {quest.reward.description}
              </div>
            </div>
            
            <div className="quest-action">
              {quest.claimed ? (
                <div className="quest-status completed">✅ Completed</div>
              ) : isQuestComplete(quest) ? (
                <button 
                  className="claim-button"
                  onClick={() => onClaimReward(quest.id)}
                >
                  Claim!
                </button>
              ) : (
                <div className="quest-status in-progress">In Progress</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestPanel;