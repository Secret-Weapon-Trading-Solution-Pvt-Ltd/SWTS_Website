// Services data for SWTS - Secret Weapon Trading Solution
// Used for both listing page (abstract icons) and detail pages (brand logos)

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  features: string[];
}

export interface FlowchartStep {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface UseCase {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
}

export interface ServiceBrandLogo {
  name: string;
  src: string;
  alt: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  // Short powerful one-liner for listing page (max 8 words)
  oneLiner: string;
  tagline: string;
  description: string;
  // Abstract icon for listing page (Lucide icon name)
  abstractIcon: string;
  // Secondary abstract pattern type for visual interest
  patternType: 'dots' | 'lines' | 'grid' | 'waves' | 'circles' | 'diagonal' | 'mesh';
  // Gradient colors for cards
  gradientFrom: string;
  gradientTo: string;
  // Accent color for hover glow (hex)
  accentColor: string;
  // Brand logos for detail page only
  brandLogos: ServiceBrandLogo[];
  // Detail page content
  problems: ServiceProblem[];
  capabilities: ServiceCapability[];
  flowchart: FlowchartStep[];
  howItWorks: HowItWorksStep[];
  useCases: UseCase[];
  // Stats for credibility
  stats: {
    label: string;
    value: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "algo-strategy-development",
    title: "Strategy Automation",
    shortTitle: "Strategy Automation",
    oneLiner: "Your strategy, engineered for automation.",
    tagline: "We translate your trading rules into production-ready automated systems. You own the logic. We build the execution framework.",
    description: "We translate your trading rules into production-ready automated systems. You own the logic. We build the execution framework.",
    abstractIcon: "Cpu",
    patternType: "mesh",
    gradientFrom: "from-violet-600",
    gradientTo: "to-purple-700",
    accentColor: "#7C3AED",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" },
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" }
    ],
    problems: [
      {
        title: "You have a working strategy but can't code it",
        description: "Your rules are clear in your head—buy when X happens, sell when Y happens. But translating that into actual code? That's a different skill set entirely."
      },
      {
        title: "Manual execution is costing you money",
        description: "You follow your rules, but manual entry means missed entries, fat-finger errors, and the emotional override that happens under pressure."
      },
      {
        title: "You can't watch the markets 24/7",
        description: "Your strategy works on crypto, forex, or global markets. But you need to sleep, work, and live. Opportunities don't wait for you to be at your screen."
      },
      {
        title: "You've never properly validated your approach",
        description: "You believe your strategy works based on experience, but you've never backtested it properly against years of historical data with realistic assumptions."
      }
    ],
    capabilities: [
      {
        title: "Rule Translation & Validation",
        description: "We decode your trading logic into precise technical specifications",
        features: [
          "Entry/exit rule documentation",
          "Position sizing formalization",
          "Edge case identification"
        ]
      },
      {
        title: "Automated Entries, Exits & Sizing",
        description: "Building automated systems that execute your rules exactly",
        features: [
          "Clean, documented code",
          "Real-time data handling",
          "Error recovery systems"
        ]
      },
      {
        title: "Platform-Agnostic Implementation",
        description: "Deploy across any platform or broker",
        features: [
          "Multi-platform support",
          "Broker API integration",
          "Monitoring & alerts"
        ]
      },
      {
        title: "Deployment & Monitoring",
        description: "Getting your strategy live with confidence",
        features: [
          "Paper trading setup",
          "Live deployment",
          "Real-time monitoring"
        ]
      }
    ],
    flowchart: [
      { id: "document", title: "Document Your Rules", description: "We extract and formalize your trading logic", icon: "FileText" },
      { id: "specify", title: "Technical Spec", description: "Translate rules into precise specifications", icon: "Boxes" },
      { id: "build", title: "Build System", description: "Code your strategy with clean architecture", icon: "Code" },
      { id: "validate", title: "Backtest", description: "Validate against historical data", icon: "FlaskConical" },
      { id: "paper", title: "Paper Trade", description: "Test in live markets without risk", icon: "PlayCircle" },
      { id: "deploy", title: "Go Live", description: "Deploy with monitoring & alerts", icon: "Rocket" }
    ],
    howItWorks: [
      { step: 1, title: "Strategy Documentation", description: "We conduct detailed sessions to understand YOUR trading rules—entry conditions, exit conditions, position sizing, filters. We document everything precisely.", duration: "2-3 sessions" },
      { step: 2, title: "Technical Specification", description: "Your rules are translated into a detailed technical document. You review and approve before we write any code—no surprises.", duration: "1 week" },
      { step: 3, title: "System Development", description: "We build your automated system with clean, documented code. Regular demos keep you informed of progress.", duration: "2-4 weeks" },
      { step: 4, title: "Backtesting", description: "Your strategy is tested against historical data with realistic assumptions. Detailed performance reports show exactly how it would have performed.", duration: "1-2 weeks" },
      { step: 5, title: "Paper Trading", description: "Live market testing without capital risk. Validate that the system executes exactly as intended in real-time conditions.", duration: "2-4 weeks" },
      { step: 6, title: "Production Deployment", description: "Go live with full monitoring, alerts, and support. Your strategy, running automatically, exactly as you designed it.", duration: "Ongoing" }
    ],
    useCases: [
      {
        title: "Breakout System Automation",
        description: "A trader had a profitable manual breakout strategy. We automated the scanning, alerting, and execution across 50+ symbols.",
        outcome: "From watching 5 charts to monitoring 50+ symbols automatically",
        tags: ["Breakout", "Automation", "Scaling"]
      },
      {
        title: "Mean Reversion Implementation",
        description: "Client had clear mean reversion rules. We coded, backtested, and deployed with proper position sizing and risk controls.",
        outcome: "Strategy validated with 5+ years of backtest data before going live",
        tags: ["Mean Reversion", "Backtested", "Risk Management"]
      },
      {
        title: "Options Strategy Execution",
        description: "Trader had manual options entry rules. We automated the signal detection and execution with proper Greeks monitoring.",
        outcome: "Reduced execution time from 5 minutes to under 10 seconds",
        tags: ["Options", "Execution", "Speed"]
      }
    ],
    stats: [
      { label: "Client strategies automated", value: "150+" },
      { label: "Client retention", value: "94%" }
    ]
  },
  {
    slug: "python-algo-development",
    title: "Python Execution Systems",
    shortTitle: "Python Systems",
    oneLiner: "Production-grade automation for serious capital.",
    tagline: "We build robust Python-based execution systems around YOUR strategy, designed for reliability, scalability, and live trading.",
    description: "We build robust Python-based execution systems around YOUR strategy, designed for reliability, scalability, and live trading.",
    abstractIcon: "Cpu",
    patternType: "grid",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    accentColor: "#3B82F6",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python Programming Language" },
      { name: "Pandas", src: "/logos/pandas.svg", alt: "Pandas Data Analysis" },
      { name: "NumPy", src: "/logos/numpy.svg", alt: "NumPy Scientific Computing" }
    ],
    problems: [
      {
        title: "Your strategy is too complex for retail platforms",
        description: "Your trading logic needs custom data processing, multi-exchange execution, or ML integration that TradingView and AmiBroker simply can't handle."
      },
      {
        title: "You can't properly backtest your approach",
        description: "Excel and basic tools ignore slippage, look-ahead bias, and transaction costs. You need proper validation before risking real capital."
      },
      {
        title: "Manual execution is killing your edge",
        description: "By the time you manually enter orders, price has moved. You're losing money to latency and making errors under pressure."
      },
      {
        title: "Your trading data is scattered everywhere",
        description: "Positions in one place, P&L in another, signals in a third. No unified view of your operation. No way to see total exposure in real-time."
      }
    ],
    capabilities: [
      {
        title: "Modular Execution Architecture",
        description: "Clean, maintainable systems built around your strategy",
        features: [
          "Signal generation from your rules",
          "Event-driven architecture",
          "Modular component design"
        ]
      },
      {
        title: "Real-Time Data Handling",
        description: "Process market data at the speed your strategy requires",
        features: [
          "Multi-source data ingestion",
          "Low-latency processing",
          "Historical data management"
        ]
      },
      {
        title: "Fail-Safe & Recovery Mechanisms",
        description: "Systems designed for real capital",
        features: [
          "Automatic reconnection",
          "State recovery",
          "Kill-switch controls"
        ]
      },
      {
        title: "Execution & Monitoring",
        description: "24/7 automated execution with full visibility",
        features: [
          "Multi-broker connectivity",
          "Real-time P&L tracking",
          "Execution logging"
        ]
      }
    ],
    flowchart: [
      { id: "strategy", title: "Strategy Logic", description: "Your trading rules encoded into Python", icon: "Brain" },
      { id: "backtest", title: "Backtesting", description: "Validate against historical data", icon: "History" },
      { id: "risk", title: "Risk Management", description: "Position sizing & drawdown control", icon: "Shield" },
      { id: "execution", title: "Execution Engine", description: "Order management & smart routing", icon: "Cpu" },
      { id: "broker", title: "Broker API", description: "Connect to any broker/exchange", icon: "Plug" },
      { id: "live", title: "Live Trading", description: "24/7 autonomous execution", icon: "Zap" }
    ],
    howItWorks: [
      { step: 1, title: "Strategy Documentation", description: "We document YOUR trading rules in detail—entry logic, exit logic, position sizing, risk limits. Every condition you trade by.", duration: "2-3 sessions" },
      { step: 2, title: "Architecture Design", description: "We design a Python system architecture to implement YOUR strategy—optimized for your specific data, timeframes, and execution needs.", duration: "1 week" },
      { step: 3, title: "System Development", description: "We build your system with clean, documented code. Regular demos ensure the implementation matches your intent exactly.", duration: "3-6 weeks" },
      { step: 4, title: "Backtesting", description: "Your strategy tested against historical data with realistic assumptions. Detailed reports show how YOUR rules would have performed.", duration: "1-2 weeks" },
      { step: 5, title: "Paper Trading", description: "Run YOUR strategy in live markets without capital risk. Validate that execution matches your expectations.", duration: "2-4 weeks" },
      { step: 6, title: "Production Launch", description: "Go live with monitoring, alerts, and support. Your strategy, automated, running exactly as you designed.", duration: "Ongoing" }
    ],
    useCases: [
      {
        title: "Crypto Strategy Automation",
        description: "Trader had a working crypto strategy but couldn't execute it 24/7. We built a Python system to automate execution across 3 exchanges.",
        outcome: "From manual 8-hour coverage to 24/7 automated execution",
        tags: ["Crypto", "Automation", "Multi-Exchange"]
      },
      {
        title: "Equity Strategy Implementation",
        description: "Client had factor-based rules they traded manually. We implemented their logic in Python with proper backtesting and automated rebalancing.",
        outcome: "Strategy validated and automated across 200+ stocks",
        tags: ["Equities", "Factor", "Automation"]
      },
      {
        title: "Options Strategy System",
        description: "Trader had profitable options rules but couldn't execute fast enough. We built automated execution with Greeks monitoring.",
        outcome: "Execution time reduced from minutes to seconds",
        tags: ["Options", "Speed", "Automation"]
      },
      {
        title: "Forex System Implementation",
        description: "Client had clear forex rules tested manually over 2 years. We coded, backtested, and deployed their exact logic in Python.",
        outcome: "Strategy running autonomously across 8 pairs, 24/5",
        tags: ["Forex", "Validated", "Live"]
      }
    ],
    stats: [
      { label: "Systems deployed", value: "80+" },
      { label: "Average uptime", value: "99.7%" }
    ]
  },
  {
    slug: "pine-script-development",
    title: "TradingView Automation",
    shortTitle: "TradingView",
    oneLiner: "Your TradingView logic, automated.",
    tagline: "We convert your TradingView rules into Pine Script indicators, strategies, and alert-driven automation.",
    description: "We convert your TradingView rules into Pine Script indicators, strategies, and alert-driven automation.",
    abstractIcon: "LineChart",
    patternType: "waves",
    gradientFrom: "from-teal-500",
    gradientTo: "to-emerald-500",
    accentColor: "#14B8A6",
    brandLogos: [
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView Platform" },
      { name: "PineScript", src: "/logos/pinescript.svg", alt: "Pine Script Language" }
    ],
    problems: [
      {
        title: "You know your rules but can't code them",
        description: "You have clear trading rules—you know exactly what setup you're looking for. But Pine Script is a programming language, and that's not your skill set."
      },
      {
        title: "You're missing setups while away from screen",
        description: "Your strategy works but you can't watch charts 24/7. Setups trigger while you sleep, work, or live your life. You need alerts that fire automatically."
      },
      {
        title: "You can't prove your rules actually work",
        description: "You believe your strategy is profitable, but you've never properly backtested it. Without historical validation, you're trading on memory, not data."
      },
      {
        title: "Generic indicators don't match your approach",
        description: "Standard RSI, MACD, and moving averages don't capture YOUR specific edge. You need custom indicators that show exactly what YOU look for."
      },
      {
        title: "Alert to execution takes too long",
        description: "You get an alert, check the chart, confirm the setup, enter the order. By then, price has moved. You need webhook automation that executes instantly."
      }
    ],
    capabilities: [
      {
        title: "Custom Indicators",
        description: "YOUR technical analysis logic coded into Pine Script",
        features: [
          "Multi-timeframe signals per YOUR rules",
          "Custom oscillators YOU specify",
          "Support/resistance per YOUR method",
          "Volume analysis YOUR way",
          "Divergence detection YOU use",
          "Visual overlays YOU need"
        ]
      },
      {
        title: "Strategy Coding",
        description: "YOUR entry/exit rules as a backtestable strategy()",
        features: [
          "Entry & exit per YOUR conditions",
          "Position sizing per YOUR rules",
          "Stop-loss & take-profit YOUR way",
          "Trailing stops if YOU use them",
          "Scaling rules YOU specify",
          "Time/session filters YOU need"
        ]
      },
      {
        title: "Backtesting YOUR Strategy",
        description: "Historical validation of YOUR rules with real metrics",
        features: [
          "Multi-year backtest of YOUR logic",
          "Performance statistics",
          "Drawdown analysis",
          "Win rate & profit factor",
          "Trade-by-trade export",
          "Parameter testing"
        ]
      },
      {
        title: "Alerts & Webhook Automation",
        description: "Automated notifications when YOUR conditions trigger",
        features: [
          "Alerts per YOUR setup conditions",
          "Webhook to YOUR broker",
          "Custom JSON formatting",
          "Alert-to-order automation",
          "Position sync",
          "Multi-broker support"
        ]
      },
      {
        title: "Screeners & Scanners",
        description: "Scan markets for YOUR specific setup conditions",
        features: [
          "Multi-symbol screening",
          "Ranking by YOUR criteria",
          "Sector filtering",
          "Relative strength YOUR way",
          "Custom watchlists",
          "Table visualizations"
        ]
      }
    ],
    flowchart: [
      { id: "rules", title: "Your Rules", description: "We document your trading logic", icon: "FileText" },
      { id: "pinescript", title: "Pine Script", description: "Code YOUR logic in TradingView", icon: "Code" },
      { id: "indicator", title: "Indicator / Strategy", description: "Visual signals & backtest", icon: "LineChart" },
      { id: "backtest", title: "Validation", description: "Test YOUR rules on history", icon: "History" },
      { id: "alerts", title: "Alerts", description: "Triggers when YOUR setup appears", icon: "Bell" },
      { id: "webhook", title: "Webhook", description: "Auto-execution if needed", icon: "Zap" }
    ],
    howItWorks: [
      { step: 1, title: "Document Your Rules", description: "We have a detailed session to understand YOUR trading rules—what conditions trigger entry, what triggers exit, position sizing, filters. We document everything.", duration: "60-90 min call" },
      { step: 2, title: "Technical Specification", description: "Your rules are translated into a precise technical document. You review and approve before we write any code—this ensures we build exactly what you need.", duration: "2-3 days" },
      { step: 3, title: "Pine Script Development", description: "We code YOUR rules in clean, well-commented Pine Script v5. Regular updates with screen recordings so you see exactly what we're building.", duration: "5-10 days" },
      { step: 4, title: "Backtesting", description: "YOUR strategy tested against historical data. Detailed performance reports show how YOUR rules would have performed. You see the real numbers.", duration: "3-5 days" },
      { step: 5, title: "Alert & Webhook Setup", description: "Configure alerts that fire when YOUR conditions trigger. Webhook integration if you want automated execution. End-to-end testing.", duration: "2-3 days" },
      { step: 6, title: "Delivery & Training", description: "Deploy to your TradingView account with documentation. Live walkthrough so you know how to use YOUR new tools. 30-day support included.", duration: "1 day + 30-day support" }
    ],
    useCases: [
      {
        title: "Forex Strategy Automation",
        description: "Trader had clear breakout rules for EUR/USD. We coded the exact logic with alerts and webhook execution to their broker.",
        outcome: "From manual watching to 24/7 automated alerts and execution",
        tags: ["Forex", "Automation", "Webhook"]
      },
      {
        title: "Crypto Scanner Implementation",
        description: "Client had specific multi-timeframe criteria they checked manually across 50 pairs. We built a scanner that does it instantly.",
        outcome: "3-hour daily routine reduced to a 30-second glance",
        tags: ["Crypto", "Scanner", "Time-Saving"]
      },
      {
        title: "Custom Indicator Coding",
        description: "Trader had a unique indicator concept combining volume and price action. We coded their exact logic with proper visualization.",
        outcome: "Their edge now visible on every chart automatically",
        tags: ["Indicator", "Custom", "Volume"]
      },
      {
        title: "Mean Reversion Strategy Backtest",
        description: "Client believed their mean reversion rules worked but never validated. We coded and backtested their exact approach.",
        outcome: "Strategy validated with 5 years of data, now trading with confidence",
        tags: ["Backtested", "Validation", "Confidence"]
      },
      {
        title: "Supply/Demand Zone Tool",
        description: "Trader had specific rules for identifying zones. We coded their exact criteria with automatic detection and alerts.",
        outcome: "Zones detected automatically per their rules, alerts on tests",
        tags: ["Zones", "Detection", "Alerts"]
      }
    ],
    stats: [
      { label: "Scripts Delivered", value: "350+" },
      { label: "Avg Backtest Sharpe", value: "1.4" },
      { label: "Webhook Integrations", value: "150+" },
      { label: "Client Satisfaction", value: "96%" }
    ]
  },
  {
    slug: "execution-broker-integration",
    title: "Execution & Broker Integration",
    shortTitle: "Execution",
    oneLiner: "From signal to fill. Milliseconds matter.",
    tagline: "Low-latency broker connectivity with institutional-grade order management",
    description: "We build robust execution infrastructure that connects your trading systems to any broker or exchange. Multi-broker APIs, smart order routing, fail-safe systems, and sub-100ms latency—the plumbing that turns signals into fills.",
    abstractIcon: "Zap",
    patternType: "lines",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-400",
    accentColor: "#0891B2",
    brandLogos: [
      { name: "Zerodha", src: "/logos/zerodha.png", alt: "Zerodha Kite API" },
      { name: "IBKR", src: "/logos/ibkr.png", alt: "Interactive Brokers" },
      { name: "Alpaca", src: "/logos/alpaca.svg", alt: "Alpaca Markets" }
    ],
    problems: [
      {
        title: "Manual execution is bleeding your alpha",
        description: "By the time you see the signal, check the chart, and type the order, price has moved against you. Every second of delay costs basis points. At scale, that's real money left on the table."
      },
      {
        title: "Broker APIs are undocumented nightmares",
        description: "Authentication tokens that expire randomly. Rate limits that aren't documented. WebSocket connections that drop during market volatility. Edge cases that only surface when real money is on the line."
      },
      {
        title: "Orders fail silently and positions drift",
        description: "An order rejects but your system thinks it went through. A partial fill happens but your position sizing is now wrong. You find out hours later when you manually reconcile—if you're lucky."
      },
      {
        title: "No unified view across brokers",
        description: "Different APIs, different data formats, different order types. Managing execution across Zerodha, IBKR, and Alpaca means three separate codebases, three sets of bugs, and no single source of truth."
      },
      {
        title: "When things break, they break catastrophically",
        description: "No circuit breakers. No automatic position flattening. No graceful degradation. A network glitch at the wrong moment can turn a small loss into a disaster."
      }
    ],
    capabilities: [
      {
        title: "Multi-Broker API Integration",
        description: "Connect to any broker with a unified, normalized interface",
        features: [
          "Zerodha Kite, IBKR, Alpaca, Binance, and 20+ more",
          "Unified order format across all brokers",
          "Automatic API version handling",
          "OAuth & token refresh management",
          "Sandbox/paper trading support",
          "Rate limit management & queuing"
        ]
      },
      {
        title: "Order Management System (OMS)",
        description: "Institutional-grade order lifecycle management",
        features: [
          "All order types: market, limit, stop, bracket, OCO",
          "Order state machine with full audit trail",
          "Partial fill handling & averaging",
          "Order modification & cancellation",
          "Synthetic order types (TWAP, VWAP, iceberg)",
          "Parent-child order relationships"
        ]
      },
      {
        title: "Low-Latency Execution",
        description: "Optimized for speed from signal to fill",
        features: [
          "Sub-100ms order placement (broker-dependent)",
          "Persistent WebSocket connections",
          "Connection pooling & keep-alive",
          "Async/non-blocking architecture",
          "Co-located server options",
          "Latency monitoring & alerting"
        ]
      },
      {
        title: "Fail-Safe Systems",
        description: "Production-grade reliability for 24/7 operation",
        features: [
          "Automatic reconnection with exponential backoff",
          "Circuit breakers for runaway losses",
          "Position limit enforcement",
          "Kill switch for emergency flattening",
          "Heartbeat monitoring & dead-man switches",
          "Comprehensive error recovery procedures"
        ]
      },
      {
        title: "Real-Time Data & Monitoring",
        description: "Live market data and execution analytics",
        features: [
          "Quote streaming & order book data",
          "Position & P&L real-time updates",
          "Execution quality analytics (slippage, fill rates)",
          "Latency dashboards",
          "Alert system for anomalies",
          "Full order & trade audit logs"
        ]
      }
    ],
    flowchart: [
      { id: "strategy", title: "Strategy Signal", description: "Your algo generates a trade signal", icon: "Lightbulb" },
      { id: "risk", title: "Risk Check", description: "Pre-trade risk validation", icon: "Shield" },
      { id: "oms", title: "Order Management", description: "OMS processes & routes order", icon: "Layers" },
      { id: "broker", title: "Broker API", description: "Order sent via broker connection", icon: "Plug" },
      { id: "exchange", title: "Exchange", description: "Order hits the exchange", icon: "Building" },
      { id: "confirm", title: "Confirmation", description: "Fill confirmed & position updated", icon: "CheckCircle" }
    ],
    howItWorks: [
      { step: 1, title: "Broker & Requirements Analysis", description: "We assess your broker's API capabilities, document limitations, and understand your latency and reliability requirements. Not all brokers are equal—we'll tell you what's actually possible.", duration: "2-3 days" },
      { step: 2, title: "Architecture Design", description: "Design document covering authentication flows, order lifecycle, error handling, and fail-safe mechanisms. You'll know exactly how the system will behave in every scenario.", duration: "1 week" },
      { step: 3, title: "Core Integration Build", description: "We build the broker connection, order management system, and monitoring infrastructure. Clean, well-documented code with comprehensive logging.", duration: "2-3 weeks" },
      { step: 4, title: "Fail-Safe Implementation", description: "Circuit breakers, kill switches, position limits, and automatic error recovery. The safety systems that keep you trading tomorrow.", duration: "1 week" },
      { step: 5, title: "Paper Trading & Stress Testing", description: "Extensive testing in simulation mode. We intentionally break things—network failures, API timeouts, malformed responses—to ensure graceful handling.", duration: "1-2 weeks" },
      { step: 6, title: "Production Deployment & Monitoring", description: "Go live with full monitoring dashboards, alerting, and operational runbooks. We stay with you through the critical first weeks of live trading.", duration: "Ongoing" }
    ],
    useCases: [
      {
        title: "Zerodha Kite Integration for NSE Algo Trading",
        description: "Complete Kite Connect integration for a Python-based algorithmic trading system executing momentum strategies on NSE equities. Included order management, position tracking, and real-time P&L.",
        outcome: "Sub-80ms average order latency, 99.9% uptime over 18 months, zero missed signals",
        tags: ["Zerodha", "Kite API", "NSE", "Python", "Low-Latency"]
      },
      {
        title: "Multi-Broker Execution Layer",
        description: "Unified execution layer spanning Zerodha (India), IBKR (US), and Binance (crypto). Single order format, automatic routing based on instrument, consolidated position view.",
        outcome: "75% reduction in operational complexity, single dashboard for all positions",
        tags: ["Multi-Broker", "Global", "Unified API", "Crypto"]
      },
      {
        title: "Smart Order Router with Execution Analytics",
        description: "Intelligent routing between IBKR and Alpaca for US equities, optimizing for execution cost, fill probability, and latency. Full execution quality analytics.",
        outcome: "31% reduction in effective spread, detailed slippage reporting",
        tags: ["Smart Routing", "Execution Analytics", "Cost Optimization"]
      },
      {
        title: "High-Frequency Crypto Execution",
        description: "Low-latency execution infrastructure for a crypto market-making operation across 5 exchanges. Co-located servers, persistent connections, sub-10ms order placement.",
        outcome: "Maintained sub-15ms round-trip latency, processed 50,000+ orders/day",
        tags: ["Crypto", "HFT", "Market Making", "Multi-Exchange"]
      },
      {
        title: "Options Execution with Greeks-Aware Routing",
        description: "Options execution system for IBKR with delta-hedging automation, Greeks calculation, and intelligent strike selection based on IV surface.",
        outcome: "Automated delta-neutral hedging within 30 seconds of position change",
        tags: ["Options", "IBKR", "Greeks", "Hedging", "Automation"]
      }
    ],
    stats: [
      { label: "Brokers Integrated", value: "25+" },
      { label: "Orders Processed", value: "2M+" },
      { label: "Avg Latency", value: "<100ms" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    slug: "strategy-optimization",
    title: "Strategy Validation & Backtesting",
    shortTitle: "Validation",
    oneLiner: "Validate YOUR strategy. Know before you trade.",
    tagline: "Rigorous backtesting to validate YOUR trading rules before you risk real capital",
    description: "You have a trading strategy you believe works. We backtest YOUR rules against historical data with realistic assumptions—slippage, costs, and proper validation—so you know if your approach holds up before risking real money.",
    abstractIcon: "Target",
    patternType: "circles",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-500",
    accentColor: "#10B981",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" },
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" }
    ],
    problems: [
      {
        title: "You've never properly validated your strategy",
        description: "You believe your rules work based on memory and experience. But you've never seen the actual numbers across years of data."
      },
      {
        title: "Your backtest doesn't match real trading",
        description: "You ran a backtest somewhere and it looked great. But live trading is different. Was slippage modeled? Transaction costs? Look-ahead bias avoided?"
      },
      {
        title: "You don't know your real risk",
        description: "What's the maximum drawdown your strategy has historically experienced? What's the longest losing streak? You need these numbers before sizing positions."
      },
      {
        title: "You want statistical confidence",
        description: "Before putting real money at risk, you want to see hard evidence that your approach has historically worked. Not hope—data."
      }
    ],
    capabilities: [
      {
        title: "Proper Backtesting",
        description: "Test YOUR rules with realistic assumptions",
        features: [
          "Multi-year historical testing",
          "Realistic slippage modeling",
          "Transaction cost inclusion",
          "No look-ahead bias",
          "Proper data adjustments"
        ]
      },
      {
        title: "Walk-Forward Validation",
        description: "Ensure YOUR parameters aren't overfitted",
        features: [
          "Out-of-sample testing",
          "Parameter stability checks",
          "Rolling window validation",
          "Overfitting detection",
          "Robustness verification"
        ]
      },
      {
        title: "Risk Analysis",
        description: "Understand the risks of YOUR strategy",
        features: [
          "Maximum drawdown analysis",
          "Losing streak statistics",
          "Drawdown duration",
          "Recovery analysis",
          "Worst-case scenarios"
        ]
      },
      {
        title: "Performance Reporting",
        description: "Clear metrics on YOUR strategy's performance",
        features: [
          "Win rate & profit factor",
          "Risk-adjusted returns",
          "Monthly/yearly breakdown",
          "Trade distribution",
          "Equity curve analysis"
        ]
      }
    ],
    flowchart: [
      { id: "document", title: "Document Rules", description: "Formalize YOUR trading logic", icon: "FileText" },
      { id: "data", title: "Prepare Data", description: "Source clean historical data", icon: "Database" },
      { id: "baseline", title: "Backtest", description: "Test YOUR rules on history", icon: "Play" },
      { id: "walkforward", title: "Validate", description: "Out-of-sample verification", icon: "CheckCircle" },
      { id: "risk", title: "Risk Analysis", description: "Understand the drawdowns", icon: "Shield" },
      { id: "report", title: "Report", description: "Full performance report", icon: "FileBarChart" }
    ],
    howItWorks: [
      { step: 1, title: "Document Your Rules", description: "We document YOUR exact trading rules—entry conditions, exit conditions, position sizing, filters. Everything you trade by.", duration: "1-2 sessions" },
      { step: 2, title: "Data Preparation", description: "We source clean historical data for YOUR instruments with proper adjustments (splits, dividends, etc.).", duration: "1-3 days" },
      { step: 3, title: "Backtesting", description: "YOUR rules tested against historical data with realistic slippage and costs. No curve-fitting, no optimizations—just YOUR rules as documented.", duration: "2-3 days" },
      { step: 4, title: "Validation", description: "Walk-forward testing to verify results aren't data-specific. Out-of-sample verification to ensure robustness.", duration: "2-3 days" },
      { step: 5, title: "Risk Analysis", description: "Deep dive into drawdowns, losing streaks, and risk metrics. You'll know the worst historical periods for YOUR strategy.", duration: "1-2 days" },
      { step: 6, title: "Final Report", description: "Comprehensive report with all metrics, equity curves, and analysis. You'll have the data to decide if YOUR strategy is worth trading.", duration: "2-3 days" }
    ],
    useCases: [
      {
        title: "Momentum Rules Validation",
        description: "Trader had momentum rules they'd traded manually for a year. We backtested their exact logic across 10 years of data.",
        outcome: "Strategy confirmed profitable with clear understanding of drawdown risk",
        tags: ["Momentum", "Validation", "Historical"]
      },
      {
        title: "Mean Reversion Verification",
        description: "Client believed their mean reversion approach worked. We tested their exact rules—no modifications—across multiple market conditions.",
        outcome: "Rules validated, maximum drawdown quantified, position sizing adjusted accordingly",
        tags: ["Mean Reversion", "Risk", "Sizing"]
      },
      {
        title: "Options Strategy Analysis",
        description: "Trader had options entry rules but no historical validation. We backtested their exact criteria with proper modeling.",
        outcome: "Strategy confirmed with realistic expectations set based on data",
        tags: ["Options", "Backtested", "Expectations"]
      }
    ],
    stats: [
      { label: "Strategies Validated", value: "300+" },
      { label: "Years of Data Tested", value: "10K+" },
      { label: "Client Satisfaction", value: "96%" }
    ]
  },
  {
    slug: "risk-management-systems",
    title: "Risk Management Systems",
    shortTitle: "Risk Management",
    oneLiner: "YOUR risk rules. Systematically enforced.",
    tagline: "We implement YOUR risk rules as automated systems—position limits, drawdown controls, exposure monitoring",
    description: "You know how you want to manage risk. We build systems that enforce YOUR rules automatically—position limits, drawdown circuit breakers, exposure monitoring. Your risk parameters, systematically enforced without exception.",
    abstractIcon: "Shield",
    patternType: "diagonal",
    gradientFrom: "from-rose-500",
    gradientTo: "to-red-500",
    accentColor: "#F43F5E",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" }
    ],
    problems: [
      {
        title: "One bad trade can wipe out months of gains",
        description: "No systematic position limits. No circuit breakers. One fat finger or flash crash away from disaster."
      },
      {
        title: "You don't know your true exposure",
        description: "Positions across multiple accounts, strategies, and asset classes. No unified view of total risk."
      },
      {
        title: "Drawdowns spiral out of control",
        description: "No systematic response to losing streaks. Emotions take over. Dig the hole deeper."
      },
      {
        title: "Risk rules exist but aren't enforced",
        description: "You have risk rules on paper but override them under pressure. Need systematic enforcement."
      }
    ],
    capabilities: [
      {
        title: "Position Sizing",
        description: "Systematic position sizing based on volatility and risk",
        features: [
          "Volatility-adjusted sizing",
          "Kelly criterion optimization",
          "Correlation-aware allocation",
          "Max position limits",
          "Portfolio heat monitoring"
        ]
      },
      {
        title: "Drawdown Control",
        description: "Systematic responses to losing periods",
        features: [
          "Drawdown circuit breakers",
          "Position reduction rules",
          "Recovery protocols",
          "Daily loss limits",
          "Equity curve monitoring"
        ]
      },
      {
        title: "Exposure Monitoring",
        description: "Real-time visibility into total risk exposure",
        features: [
          "Cross-strategy exposure",
          "Sector concentration",
          "Correlation monitoring",
          "Greeks aggregation",
          "VaR calculations"
        ]
      },
      {
        title: "Alert Systems",
        description: "Proactive notifications before limits are breached",
        features: [
          "Threshold alerts",
          "Anomaly detection",
          "P&L notifications",
          "Limit warnings",
          "Daily risk reports"
        ]
      }
    ],
    flowchart: [
      { id: "assess", title: "Risk Assessment", description: "Evaluate current risk exposure", icon: "Search" },
      { id: "design", title: "Framework Design", description: "Design risk management rules", icon: "FileText" },
      { id: "build", title: "System Build", description: "Build monitoring infrastructure", icon: "Wrench" },
      { id: "integrate", title: "Integration", description: "Connect to trading systems", icon: "Plug" },
      { id: "calibrate", title: "Calibration", description: "Set appropriate limits", icon: "SlidersHorizontal" },
      { id: "monitor", title: "Monitoring", description: "Ongoing risk surveillance", icon: "Eye" }
    ],
    howItWorks: [
      { step: 1, title: "Risk Assessment", description: "Comprehensive review of your current risk exposure, limits, and potential vulnerabilities.", duration: "1-2 sessions" },
      { step: 2, title: "Framework Design", description: "Design risk rules, position limits, and response protocols tailored to your strategies.", duration: "1 week" },
      { step: 3, title: "System Development", description: "Build monitoring dashboards, alert systems, and enforcement mechanisms.", duration: "2-3 weeks" },
      { step: 4, title: "Integration", description: "Connect to your trading systems for real-time monitoring and automated responses.", duration: "1 week" },
      { step: 5, title: "Calibration", description: "Fine-tune limits and thresholds based on your risk tolerance and strategy characteristics.", duration: "1-2 weeks" },
      { step: 6, title: "Ongoing Monitoring", description: "Continuous surveillance with regular reviews and adjustments.", duration: "Ongoing" }
    ],
    useCases: [
      {
        title: "Multi-Strategy Risk Aggregator",
        description: "Unified risk view across 5 independent trading strategies.",
        outcome: "Identified hidden correlation risk, prevented potential 30% drawdown",
        tags: ["Aggregation", "Correlation", "Multi-Strategy"]
      },
      {
        title: "Drawdown Circuit Breaker",
        description: "Automated position reduction during losing streaks.",
        outcome: "Reduced max drawdown from 25% to 12% while maintaining returns",
        tags: ["Drawdown", "Automation", "Protection"]
      },
      {
        title: "Real-Time Risk Dashboard",
        description: "Live monitoring of exposure, Greeks, and limit utilization.",
        outcome: "Risk visibility improved from EOD to real-time, faster response",
        tags: ["Dashboard", "Real-Time", "Visibility"]
      }
    ],
    stats: [
      { label: "Systems Built", value: "50+" },
      { label: "Capital Protected", value: "$100M+" },
      { label: "Avg DD Reduction", value: "40%" }
    ]
  },
  {
    slug: "custom-trading-platforms",
    title: "Custom Trading Platforms",
    shortTitle: "Custom Platforms",
    oneLiner: "YOUR workflow. Built into a platform.",
    tagline: "We build custom platforms and dashboards that match YOUR exact workflow requirements",
    description: "You have a specific way you work—analysis, monitoring, execution, reporting. We build custom platforms that match YOUR workflow exactly. Not adapting to generic software—software that adapts to you.",
    abstractIcon: "LayoutDashboard",
    patternType: "dots",
    gradientFrom: "from-slate-600",
    gradientTo: "to-slate-800",
    accentColor: "#475569",
    brandLogos: [
      { name: "React", src: "/logos/react.svg", alt: "React" },
      { name: "Python", src: "/logos/python.svg", alt: "Python" }
    ],
    problems: [
      {
        title: "You're juggling 10 different tools",
        description: "Broker platform, charting software, spreadsheets, notebooks, messaging apps. Context switching is killing your efficiency."
      },
      {
        title: "Off-the-shelf platforms don't fit your workflow",
        description: "Every platform forces you to adapt to their way of doing things. Your unique process deserves a unique tool."
      },
      {
        title: "Critical data is siloed across systems",
        description: "P&L in one place, positions in another, signals in a third. No unified view of your trading operation."
      },
      {
        title: "You need features that don't exist",
        description: "Your trading approach is unique. Generic platforms can't support your specific analysis or execution needs."
      }
    ],
    capabilities: [
      {
        title: "Trading Dashboards",
        description: "Real-time operational dashboards for active trading",
        features: [
          "Live P&L tracking",
          "Position management",
          "Order entry/management",
          "Signal monitoring",
          "Alert management"
        ]
      },
      {
        title: "Research Platforms",
        description: "Tools for strategy research and development",
        features: [
          "Data exploration",
          "Backtesting interface",
          "Strategy comparison",
          "Performance analytics",
          "Signal analysis"
        ]
      },
      {
        title: "Reporting Systems",
        description: "Automated reporting and analytics",
        features: [
          "Daily P&L reports",
          "Performance attribution",
          "Risk reports",
          "Trade journals",
          "Investor reporting"
        ]
      },
      {
        title: "Workflow Automation",
        description: "Streamline repetitive operational tasks",
        features: [
          "Pre-market routines",
          "EOD reconciliation",
          "Data aggregation",
          "Alert routing",
          "Report generation"
        ]
      }
    ],
    flowchart: [
      { id: "discovery", title: "Discovery", description: "Map your workflow and needs", icon: "Search" },
      { id: "design", title: "UX Design", description: "Design the interface", icon: "Palette" },
      { id: "architecture", title: "Architecture", description: "Plan technical foundation", icon: "Boxes" },
      { id: "build", title: "Development", description: "Build the platform", icon: "Code" },
      { id: "integrate", title: "Integration", description: "Connect data sources", icon: "Plug" },
      { id: "deploy", title: "Deployment", description: "Launch and iterate", icon: "Rocket" }
    ],
    howItWorks: [
      { step: 1, title: "Workflow Discovery", description: "Deep dive into your daily workflow, pain points, and ideal state.", duration: "2-3 sessions" },
      { step: 2, title: "UX Design", description: "Wireframes and prototypes of the interface, iterated with your feedback.", duration: "1-2 weeks" },
      { step: 3, title: "Technical Architecture", description: "Design the system architecture, data flows, and integration points.", duration: "1 week" },
      { step: 4, title: "Development", description: "Build the platform in iterative sprints with regular demos.", duration: "4-8 weeks" },
      { step: 5, title: "Integration & Testing", description: "Connect to your data sources and trading systems, thorough testing.", duration: "1-2 weeks" },
      { step: 6, title: "Launch & Iteration", description: "Deploy and continuously improve based on your feedback.", duration: "Ongoing" }
    ],
    useCases: [
      {
        title: "Prop Trading Dashboard",
        description: "Unified platform for a 10-trader prop desk with real-time P&L and risk.",
        outcome: "50% reduction in operational overhead, faster decision-making",
        tags: ["Prop Trading", "Dashboard", "Team"]
      },
      {
        title: "Quant Research Platform",
        description: "Custom research environment integrating backtesting, data, and notebooks.",
        outcome: "Research cycle reduced from 2 weeks to 3 days",
        tags: ["Research", "Quant", "Integration"]
      },
      {
        title: "Family Office Portal",
        description: "Investor-facing portal with performance, risk, and allocation reporting.",
        outcome: "Eliminated monthly manual reporting, improved investor communication",
        tags: ["Family Office", "Reporting", "Portal"]
      }
    ],
    stats: [
      { label: "Platforms Built", value: "30+" },
      { label: "Users Served", value: "500+" },
      { label: "Avg Efficiency Gain", value: "45%" }
    ]
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
