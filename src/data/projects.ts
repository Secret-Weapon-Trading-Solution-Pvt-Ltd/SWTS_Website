import type { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    id: '10',
    slug: 'trade-distributor-system',
    title: 'Trade Distributor System',
    outcome: 'Real-time trade replication across multiple accounts with centralized monitoring and latency analysis',
    category: 'automation',
    status: 'completed',
    techStack: ['Python', 'WebSocket', 'FastAPI', 'Broker API'],
    icon: 'activity',
    featured: false,
    metrics: [
      { label: 'Sync Latency', value: '<100ms' },
      { label: 'Broker Support', value: 'Multi' },
      { label: 'Uptime', value: '99.9%' },
    ],
    details: {
      clientContext: 'Built for prop trading firms, fund managers, and algo traders who manage multiple brokerage accounts and need synchronized, automated order execution without manual intervention.',
      challenge: {
        description: 'Managing and replicating trades across multiple accounts manually introduces execution delays, synchronization gaps, and no centralized visibility into performance or latency bottlenecks.',
        painPoints: [
          'Manual trade copying account by account causing delays',
          'No centralized view across all broker portals',
          'Undetected order mismatches and reconciliation gaps',
          'No visibility into execution latency breakdown',
          'Fragmented P&L tracking across distributed accounts',
        ],
      },
      solution: {
        description: 'A centralized trade distribution engine that captures every order from the parent account and instantly replicates it across all child accounts — with full monitoring, error detection, and latency profiling.',
        highlights: [
          'Real-time parent-to-child order replication',
          'Live dashboard with sync rate, latency, and order feed',
          'Latency analysis across detection, processing, and broker stages',
          'Automated mismatch detection and reconciliation',
          'Positions and Holdings monitoring with live P&L',
        ],
      },
      architecture: {
        description: 'Python-based system with WebSocket for real-time data streaming, broker API integrations, and a structured dashboard for centralized control.',
        techStack: [
          { name: 'Python', category: 'language' },
          { name: 'WebSocket', category: 'infrastructure' },
          { name: 'FastAPI', category: 'framework' },
          { name: 'Broker API', category: 'tool' },
        ],
      },
      execution: {
        description: 'Delivered in three focused phases ensuring reliable core distribution before adding monitoring and analytics.',
        phases: [
          { name: 'Core Engine', description: 'Parent-child account mapping, trade replication logic and order routing' },
          { name: 'Dashboard & Monitoring', description: 'Real-time health metrics, live order feed and error tracking system' },
          { name: 'Analytics Module', description: 'Latency analysis, reconciliation features and positions/holdings view' },
        ],
      },
      results: {
        description: 'The system eliminated manual trade copying entirely, providing real-time synchronization with full visibility into execution performance.',
        before: [
          'Manual trade replication account by account',
          'Execution delays with no latency visibility',
          'Scattered account monitoring across portals',
          'No automated reconciliation',
        ],
        after: [
          'Automated real-time order distribution',
          'Sub-second sync with latency breakdown analysis',
          'Centralized dashboard for all accounts',
          'Automated mismatch detection and error tracking',
        ],
      },
    },
  },
  {
    id: '0',
    slug: 'ema-crossover-screener',
    title: 'Delta Exchange Crypto Screener',
    outcome: 'Real-time multi-timeframe signal detection with instant Telegram alerts',
    category: 'algorithmic-trading',
    status: 'completed',
    techStack: ['Python', 'FastAPI', 'WebSocket', 'Telegram API', 'Docker'],
    icon: 'activity',
    featured: true,
    metrics: [
      { label: 'Timeframes', value: '5' },
      { label: 'Signal Latency', value: '<5s' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Alert Delivery', value: 'Instant' },
    ],
    details: {
      clientContext: 'Built for active cryptocurrency traders who rely on exponential moving average crossovers as a core component of their technical analysis workflow.',
      challenge: {
        description: 'Manual EMA crossover monitoring across multiple assets and timeframes presents significant challenges for active traders, leading to missed opportunities and inconsistent execution.',
        painPoints: [
          'Crossover signals occur at unpredictable times, leading to missed setups',
          'Monitoring five timeframes across multiple symbols creates cognitive fatigue',
          'Without systematic alerts, traders apply inconsistent criteria',
          'No easy way to assess signal freshness without manual candle counting',
          'Existing platforms lack customizable crossover alerts',
        ],
      },
      solution: {
        description: 'A self-hosted signal detection platform that runs continuous background analysis on user-selected cryptocurrency pairs, detecting crossover events in real-time.',
        highlights: [
          'Multi-timeframe screening across 1m, 15m, 1h, 4h, and 1d',
          'Real-time WebSocket updates to all connected clients',
          'Telegram alert integration with PIN-based account linking',
          'Signal freshness indicator showing bars since crossover',
        ],
      },
      architecture: {
        description: 'Full-stack solution with vanilla JavaScript frontend, Python/FastAPI backend, and Docker containerization for consistent deployment.',
        techStack: [
          { name: 'Python 3.11', category: 'language' },
          { name: 'FastAPI', category: 'framework' },
          { name: 'WebSocket', category: 'infrastructure' },
          { name: 'Telegram Bot API', category: 'tool' },
          { name: 'Docker', category: 'infrastructure' },
          { name: 'Nginx', category: 'infrastructure' },
        ],
      },
      execution: {
        description: 'Delivered as a complete self-hosted solution with CI/CD pipeline and SSL automation.',
        phases: [
          { name: 'Core Development', description: 'Signal detection engine with EMA calculation and crossover logic' },
          { name: 'Real-Time Layer', description: 'WebSocket integration and Telegram bot implementation' },
          { name: 'Deployment', description: 'Docker containerization, Nginx setup, and GitHub Actions CI/CD' },
        ],
      },
      results: {
        description: 'The system enables traders to receive crossover alerts within seconds of signal confirmation, eliminating manual monitoring.',
        before: [
          'Manual chart monitoring across multiple timeframes',
          'Missed signals during off-screen hours',
          'Inconsistent signal detection criteria',
          'No mobile alert capability',
        ],
        after: [
          'Automated multi-timeframe scanning',
          '24/7 monitoring with instant Telegram alerts',
          'Systematic EMA calculation with fixed parameters',
          'Mobile-accessible notifications anywhere',
        ],
      },
    },
  },
  {
    id: '11',
    slug: 'options-trading-dashboard',
    title: 'Automated Options Trading Dashboard',
    outcome: 'Fully automated options execution with real-time portfolio monitoring, one-click controls, and complete trade transparency',
    category: 'automation',
    status: 'completed',
    techStack: ['Python', 'FastAPI', 'Broker API', 'WebSocket'],
    icon: 'activity',
    featured: false,
    metrics: [
      { label: 'Execution', value: 'Auto' },
      { label: 'Controls', value: '5+' },
      { label: 'Monitoring', value: 'Real-time' },
    ],
    details: {
      clientContext: 'Built for options traders who need a fully automated system to manage and execute strategies with minimal manual intervention — providing real-time portfolio insights, one-click execution controls, and complete trade transparency.',
      challenge: {
        description: 'Manual options trading requires constant monitoring of multiple positions, strategy targets, and leg-level adjustments. Traders struggle with execution speed, lack of centralized control, and limited visibility into real-time P&L and order history.',
        painPoints: [
          'Manual monitoring of multiple options legs and strategy targets',
          'No centralized dashboard for portfolio intelligence and P&L tracking',
          'Slow execution with no one-click launch, stop, or square-off controls',
          'Scattered order history with no unified view of trades, status, and context',
          'No real-time engine logs for debugging or understanding system behavior',
        ],
      },
      solution: {
        description: 'A Python-based automated options trading dashboard (Quantum Engine) that provides a clean, modern interface for monitoring performance, controlling execution, and managing trading activities in real time.',
        highlights: [
          'Portfolio Intelligence panel with Overall PnL, Realized PnL, Strategy Target, and Leg Target',
          'One-click execution controls: Launch, Stop, Square Off, Continue, and Reset',
          'Live Trades view with instrument details, entry/LTP prices, stop-loss, and P&L',
          'Complete Orders History with instrument, quantity, avg price, timestamps, status, and context',
          'Real-time Engine Logs with API calls, execution steps, sync events, and system messages',
        ],
      },
      architecture: {
        description: 'Python-powered backend handling data processing, strategy execution, and broker API integration with a modern web dashboard for centralized monitoring and control.',
        techStack: [
          { name: 'Python', category: 'language' },
          { name: 'FastAPI', category: 'framework' },
          { name: 'Broker API', category: 'tool' },
          { name: 'WebSocket', category: 'infrastructure' },
        ],
      },
      execution: {
        description: 'Delivered in three focused phases — core automation engine, dashboard interface, and monitoring/logging capabilities.',
        phases: [
          { name: 'Core Engine', description: 'Strategy execution logic, broker API integration, and automated order management' },
          { name: 'Dashboard & Controls', description: 'Portfolio intelligence panel, execution buttons, and live trades view' },
          { name: 'Orders & Logging', description: 'Orders history tracking, real-time engine logs, and configuration management' },
        ],
      },
      results: {
        description: 'The system eliminated manual trade management entirely, providing fully automated execution with complete transparency into every order, position, and system action.',
        before: [
          'Manual options execution and position monitoring',
          'No centralized P&L or strategy target visibility',
          'Scattered order tracking across broker portals',
          'No insight into backend execution behavior',
        ],
        after: [
          'Fully automated strategy execution with one-click controls',
          'Real-time Portfolio Intelligence with PnL and target tracking',
          'Unified Orders History with full trade details and context',
          'Live Engine Logs for complete system transparency',
        ],
      },
    },
  },
  {
    id: '1',
    slug: 'multi-timeframe-breakout-system',
    title: 'Multi-Timeframe Breakout System',
    outcome: 'Achieved 89% signal accuracy with 2.3 Sharpe ratio over 18 months',
    category: 'algorithmic-trading',
    status: 'completed',
    techStack: ['Pine Script', 'TradingView', 'Python'],
    icon: 'trending-up',
    featured: false,
    metrics: [
      { label: 'Sharpe Ratio', value: '2.3' },
      { label: 'Signal Accuracy', value: '89%' },
      { label: 'Max Drawdown', value: '8.4%' },
      { label: 'Backtest Period', value: '18mo' },
    ],
    details: {
      clientContext: 'Institutional trading desk seeking automated breakout detection across multiple timeframes.',
      challenge: {
        description: 'The client\'s manual trading process required monitoring multiple charts simultaneously, leading to missed opportunities and inconsistent execution during volatile market conditions.',
        painPoints: [
          'Manual monitoring of 6+ timeframes simultaneously',
          'Inconsistent entry timing during high-volatility periods',
          'Difficulty maintaining discipline during drawdowns',
          'No systematic approach to position sizing',
        ],
      },
      solution: {
        description: 'We developed a sophisticated multi-timeframe analysis system that automatically detects high-probability breakout patterns and generates precise entry/exit signals with dynamic position sizing.',
        highlights: [
          'Proprietary breakout detection algorithm analyzing 4 timeframes',
          'Adaptive volatility-based position sizing',
          'Real-time alert system with institutional-grade latency',
          'Comprehensive risk management module',
        ],
      },
      architecture: {
        description: 'The system operates as a hybrid solution, combining TradingView for visualization and signal generation with a Python backend for advanced analytics and risk management.',
        techStack: [
          { name: 'Pine Script', category: 'language' },
          { name: 'Python', category: 'language' },
          { name: 'TradingView', category: 'framework' },
          { name: 'PostgreSQL', category: 'database' },
          { name: 'AWS Lambda', category: 'infrastructure' },
        ],
      },
      execution: {
        description: 'The project was delivered in three distinct phases, ensuring thorough testing and validation at each stage.',
        phases: [
          { name: 'Discovery & Design', description: 'Strategy analysis, requirements gathering, and system architecture design' },
          { name: 'Core Development', description: 'Algorithm implementation, backtesting framework, and signal generation' },
          { name: 'Integration & Testing', description: 'Risk management integration, forward testing, and performance optimization' },
        ],
      },
      results: {
        description: 'The system has been live for 18 months, consistently outperforming manual trading with significantly reduced emotional decision-making.',
        before: [
          'Manual chart monitoring (4+ hrs/day)',
          'Inconsistent execution timing',
          'Emotional overrides during drawdowns',
          '1.1 Sharpe ratio average',
        ],
        after: [
          'Automated signal generation (15 min/day)',
          'Sub-second execution precision',
          'Rule-based risk management',
          '2.3 Sharpe ratio achieved',
        ],
      },
    },
  },
  {
    id: '2',
    slug: 'options-scalping-bot',
    title: 'Options Scalping Bot',
    outcome: 'Reduced execution latency by 85%, capturing $2.4M in annual alpha',
    category: 'algorithmic-trading',
    status: 'completed',
    techStack: ['Python', 'Broker API', 'Redis', 'Docker'],
    icon: 'zap',
    metrics: [
      { label: 'Latency Reduction', value: '85%' },
      { label: 'Annual Alpha', value: '$2.4M' },
      { label: 'Avg Fill Rate', value: '94%' },
      { label: 'Uptime', value: '99.97%' },
    ],
    details: {
      challenge: {
        description: 'High-frequency options trading required sub-100ms execution that human traders couldn\'t achieve consistently.',
        painPoints: [
          'Manual execution too slow for scalping opportunities',
          'Order slippage eating into profits',
          'Inconsistent position management',
          'No real-time P&L tracking',
        ],
      },
      solution: {
        description: 'Built a low-latency execution engine with direct broker API integration, capable of identifying and executing scalping opportunities within 15ms.',
        highlights: [
          'Custom order routing for optimal fills',
          'Real-time Greeks calculation and monitoring',
          'Automated position hedging',
          'Live P&L dashboard with risk metrics',
        ],
      },
      architecture: {
        description: 'Microservices architecture with Redis for state management and Docker for deployment consistency across environments.',
        techStack: [
          { name: 'Python', category: 'language' },
          { name: 'Redis', category: 'database' },
          { name: 'Docker', category: 'infrastructure' },
          { name: 'AWS', category: 'infrastructure' },
        ],
      },
      execution: {
        description: 'Phased rollout with paper trading validation before live deployment.',
        phases: [
          { name: 'Infrastructure Setup', description: 'Low-latency server provisioning and broker API integration' },
          { name: 'Strategy Implementation', description: 'Core scalping logic and risk management rules' },
          { name: 'Production Deployment', description: 'Staged rollout with real-time monitoring' },
        ],
      },
      results: {
        description: 'The bot now handles 200+ trades daily with consistent profitability and minimal human intervention.',
        before: [
          'Average execution time: 800ms',
          'Order fill rate: 71%',
          'Manual trade entry',
          'No automated hedging',
        ],
        after: [
          'Average execution time: 15ms',
          'Order fill rate: 94%',
          'Fully automated execution',
          'Real-time delta hedging',
        ],
      },
    },
  },
  {
    id: '3',
    slug: 'sector-rotation-scanner',
    title: 'Sector Rotation Scanner',
    outcome: 'Identified 23 sector rotations with 78% accuracy in first year',
    category: 'analytics',
    status: 'completed',
    techStack: ['AmiBroker', 'AFL', 'Python'],
    icon: 'bar-chart',
    metrics: [
      { label: 'Rotation Accuracy', value: '78%' },
      { label: 'Signals Identified', value: '23' },
      { label: 'Sectors Tracked', value: '11' },
      { label: 'Backtest Years', value: '15' },
    ],
  },
  {
    id: '4',
    slug: 'forex-grid-trading-ea',
    title: 'Forex Grid Trading EA',
    outcome: 'Consistent 12.4% annual returns with 6.2% max drawdown',
    category: 'algorithmic-trading',
    status: 'completed',
    techStack: ['MQL5', 'MetaTrader 5', 'C++'],
    icon: 'activity',
    metrics: [
      { label: 'Annual Return', value: '12.4%' },
      { label: 'Max Drawdown', value: '6.2%' },
      { label: 'Win Rate', value: '67%' },
      { label: 'Live Trading', value: '2+ yrs' },
    ],
  },
  {
    id: '5',
    slug: 'ml-pattern-recognition',
    title: 'ML-Based Pattern Recognition',
    outcome: 'Deep learning model detecting chart patterns with 82% precision',
    category: 'analytics',
    status: 'in-progress',
    techStack: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
    icon: 'cpu',
    metrics: [
      { label: 'Pattern Precision', value: '82%' },
      { label: 'Patterns Detected', value: '12' },
      { label: 'Training Data', value: '5M+' },
      { label: 'Inference Time', value: '<50ms' },
    ],
  },
  {
    id: '6',
    slug: 'crypto-arbitrage-system',
    title: 'Crypto Arbitrage System',
    outcome: 'Cross-exchange arbitrage capturing 0.3-0.8% spreads consistently',
    category: 'infrastructure',
    status: 'in-progress',
    techStack: ['Python', 'WebSocket', 'Redis', 'Kubernetes'],
    icon: 'server',
    metrics: [
      { label: 'Avg Spread', value: '0.5%' },
      { label: 'Exchanges', value: '5' },
      { label: 'Latency', value: '<100ms' },
      { label: 'Daily Volume', value: '$500K+' },
    ],
  },
  {
    id: '7',
    slug: 'portfolio-rebalancing-engine',
    title: 'Portfolio Rebalancing Engine',
    outcome: 'Automated tax-efficient rebalancing reducing drift by 94%',
    category: 'automation',
    status: 'completed',
    techStack: ['Python', 'React', 'PostgreSQL', 'AWS'],
    icon: 'settings',
    metrics: [
      { label: 'Drift Reduction', value: '94%' },
      { label: 'Tax Savings', value: '18%' },
      { label: 'Portfolios', value: '340+' },
      { label: 'AUM', value: '$50M+' },
    ],
  },
  {
    id: '8',
    slug: 'risk-management-dashboard',
    title: 'Risk Management Dashboard',
    outcome: 'Real-time VaR and stress testing for multi-asset portfolios',
    category: 'analytics',
    status: 'completed',
    techStack: ['Python', 'React', 'TimescaleDB', 'Docker'],
    icon: 'shield',
    metrics: [
      { label: 'Calculation Speed', value: '<2s' },
      { label: 'Asset Classes', value: '5' },
      { label: 'Stress Scenarios', value: '50+' },
      { label: 'Daily Users', value: '120+' },
    ],
  },
  {
    id: '9',
    slug: 'market-data-aggregator',
    title: 'Market Data Aggregator',
    outcome: 'Unified feed aggregating 15 data sources with 99.99% uptime',
    category: 'infrastructure',
    status: 'completed',
    techStack: ['Go', 'Kafka', 'ClickHouse', 'Kubernetes'],
    icon: 'database',
    metrics: [
      { label: 'Data Sources', value: '15' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Throughput', value: '1M msg/s' },
      { label: 'Latency', value: '<5ms' },
    ],
  },
];

export const getFeaturedProject = (): Project | undefined => {
  return projects.find(p => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};
