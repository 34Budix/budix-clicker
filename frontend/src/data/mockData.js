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
  ]
};