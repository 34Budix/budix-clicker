export const mockData = {
  upgrades: [
    {
      id: 'enhanced_focus',
      name: 'Enhanced Focus',
      description: 'Increase your clicking power through mental concentration',
      icon: '🧠',
      type: 'click_power',
      effect: 1,
      cost: 15,
      costMultiplier: 1.15,
      level: 0
    },
    {
      id: 'energy_amplifier',
      name: 'Energy Amplifier',
      description: 'Boost your click power with cosmic amplification',
      icon: '⚡',
      type: 'click_power',
      effect: 3,
      cost: 100,
      costMultiplier: 1.2,
      level: 0
    },
    {
      id: 'quantum_gloves',
      name: 'Quantum Gloves',
      description: 'Advanced gloves that multiply your clicking efficiency',
      icon: '🧤',
      type: 'click_power',
      effect: 8,
      cost: 1000,
      costMultiplier: 1.25,
      level: 0
    },
    {
      id: 'micro_generator',
      name: 'Micro Generator',
      description: 'A tiny device that generates energy automatically',
      icon: '🔋',
      type: 'auto_clicker',
      effect: 1,
      cost: 50,
      costMultiplier: 1.15,
      level: 0
    },
    {
      id: 'energy_harvester',
      name: 'Energy Harvester',
      description: 'Harvests ambient cosmic energy from the environment',
      icon: '🌌',
      type: 'auto_clicker',
      effect: 5,
      cost: 500,
      costMultiplier: 1.2,
      level: 0
    },
    {
      id: 'fusion_reactor',
      name: 'Fusion Reactor',
      description: 'A powerful reactor that generates massive energy',
      icon: '☢️',
      type: 'auto_clicker',
      effect: 25,
      cost: 5000,
      costMultiplier: 1.25,
      level: 0
    },
    {
      id: 'cosmic_nexus',
      name: 'Cosmic Nexus',
      description: 'Tap into the power of distant stars and galaxies',
      icon: '🌟',
      type: 'auto_clicker',
      effect: 100,
      cost: 50000,
      costMultiplier: 1.3,
      level: 0
    },
    {
      id: 'dimensional_portal',
      name: 'Dimensional Portal',
      description: 'Opens a portal to unlimited energy dimensions',
      icon: '🌀',
      type: 'auto_clicker',
      effect: 500,
      cost: 500000,
      costMultiplier: 1.35,
      level: 0
    }
  ],
  
  achievements: [
    {
      id: 'first_click',
      name: 'First Click',
      description: 'Click the energy orb for the first time',
      icon: '👆',
      condition: { type: 'total_clicks', value: 1 }
    },
    {
      id: 'click_master',
      name: 'Click Master',
      description: 'Click the energy orb 100 times',
      icon: '🎯',
      condition: { type: 'total_clicks', value: 100 }
    },
    {
      id: 'energy_hoarder',
      name: 'Energy Hoarder',
      description: 'Accumulate 1,000 cosmic energy',
      icon: '💎',
      condition: { type: 'total_energy', value: 1000 }
    },
    {
      id: 'automation_beginner',
      name: 'Automation Beginner',
      description: 'Generate 10 energy per second',
      icon: '🤖',
      condition: { type: 'energy_per_second', value: 10 }
    },
    {
      id: 'click_legend',
      name: 'Click Legend',
      description: 'Click the energy orb 1,000 times',
      icon: '🏆',
      condition: { type: 'total_clicks', value: 1000 }
    },
    {
      id: 'energy_mogul',
      name: 'Energy Mogul',
      description: 'Accumulate 100,000 cosmic energy',
      icon: '👑',
      condition: { type: 'total_energy', value: 100000 }
    }
  ],

  quests: [
    {
      id: 'first_clicks',
      name: 'Getting Started',
      description: 'Click the energy orb 25 times to get familiar with the game',
      icon: '👆',
      type: 'clicks',
      targetValue: 25,
      currentProgress: 0,
      claimed: false,
      reward: {
        type: 'energy',
        value: 100,
        description: '+100 Energy'
      }
    },
    {
      id: 'energy_collector',
      name: 'Energy Collector',
      description: 'Accumulate 1,000 cosmic energy to prove your dedication',
      icon: '⚡',
      type: 'energy',
      targetValue: 1000,
      currentProgress: 0,
      claimed: false,
      reward: {
        type: 'clickPower',
        value: 2,
        description: '+2 Click Power'
      }
    },
    {
      id: 'upgrade_enthusiast',
      name: 'Upgrade Enthusiast',
      description: 'Purchase your first 5 upgrades to boost your power',
      icon: '🛒',
      type: 'upgrades',
      targetValue: 5,
      currentProgress: 0,
      claimed: false,
      reward: {
        type: 'autoClicker',
        value: 2,
        description: '+2 Energy per Second'
      }
    },
    {
      id: 'click_master',
      name: 'Click Master',
      description: 'Achieve 500 total clicks to become a clicking legend',
      icon: '🎯',
      type: 'clicks',
      targetValue: 500,
      currentProgress: 0,
      claimed: false,
      reward: {
        type: 'energy',
        value: 2500,
        description: '+2,500 Energy Bonus'
      }
    },
    {
      id: 'evolution_seeker',
      name: 'Evolution Seeker',
      description: 'Evolve your orb to Stage 5 to unlock cosmic powers',
      icon: '🌟',
      type: 'evolution',
      targetValue: 5,
      currentProgress: 0,
      claimed: false,
      reward: {
        type: 'clickPower',
        value: 5,
        description: '+5 Click Power'
      }
    },
    {
      id: 'energy_mogul',
      name: 'Energy Mogul',
      description: 'Reach 25,000 cosmic energy to dominate the cosmos',
      icon: '👑',
      type: 'energy',
      targetValue: 25000,
      currentProgress: 0,
      claimed: false,
      reward: {
        type: 'autoClicker',
        value: 10,
        description: '+10 Energy per Second'
      }
    }
  ]
};