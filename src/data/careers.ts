export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  mustHaves: string[];
  niceToHaves: string[];
  responsibilities: string[];
  applyEmail: string;
  applyPhone: string;
  emailSubject: string;
}

export interface HiringTask {
  title: string;
  duration: string;
  deadline: string;
  summary: string;
  objectives: string[];
  deliverables: string[];
  evaluationCriteria: string[];
  notes: string[];
  fingerprint: {
    intro: string;
    items: string[];
  };
  disclaimer: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'fullstack-algo-trading',
    title: 'Full-Stack Developer (Algo Trading)',
    type: 'Full-Time · Remote',
    location: 'Remote (IST overlap preferred)',
    experience: '2+ years',
    summary:
      'Secret Weapon Trading Solution Pvt. Ltd. is expanding our team for live trading systems, backtesting engines, and broker integrations.',
    mustHaves: [
      'Comfortable with Python (pandas / NumPy) — or strong C / C++ if you prefer',
      'Can build clean, professional UIs (React / Next.js or similar)',
      'Working knowledge of stock markets: OHLCV, order types, basic options, the idea of slippage and risk',
      'Backend basics: a web framework like FastAPI / Flask / Express, Git, Linux, Docker (or willingness to pick it up)',
      'Have used a SQL database in production (PostgreSQL preferred); curious about time-series stores',
      'Care about correctness — you write code that handles failures, not just the happy path',
    ],
    niceToHaves: [
      'Backtesting libraries (vectorbt / backtrader / Zipline) or custom backtests, TA-Lib / ta',
      'Cloud experience (AWS preferred) — EC2, S3, basic deployments',
      'Broker / exchange APIs: Zerodha, Upstox, Dhan, Angel One, IBKR, Delta Exchange, Binance, or similar',
      'Time-series / cache stores: TimescaleDB, InfluxDB, Redis',
      'Reliability patterns: idempotent order flows, reconciliation, retries, rate limits',
      'Message queues (RabbitMQ / Kafka / Celery), Prometheus / Grafana, Telegram / Slack bots',
      'Awareness of SEBI algo trading rules and NDA / IP-safe workflows',
    ],
    responsibilities: [
      'Build & maintain live trading modules (entries / exits, OMS, risk)',
      'Create robust backtests & walk-forward validations',
      'Integrate multiple brokers & market data vendors',
      'Write production-grade, tested code with clear logs & docs',
    ],
    applyEmail: 'support@secretweapon.in',
    applyPhone: '+91-7083718306',
    emailSubject: 'Full-Time Python – Algo Trading',
  },
];

export const hiringTask: HiringTask = {
  title: 'Delta Exchange Live Visualisation (Socket.IO)',
  duration: '4 – 5 hours',
  deadline: '30 April 2026',
  summary:
    'Build a small full-stack app that streams live market data from Delta Exchange and visualises it in the browser in real time. The goal is to evaluate how you reason about market data, real-time transports, and pragmatic UI choices — not to build a polished product.',
  objectives: [
    'Connect to Delta Exchange (REST + WebSocket) and subscribe to one or more instruments (e.g. BTCUSD perpetual, ETHUSD perpetual).',
    'Run a backend service (Python / FastAPI or Node) that fans out the feed to clients via Socket.IO.',
    'Render a real-time visualisation in a Next.js (or React) frontend: candlestick or line chart of last-traded price, plus a live order book ladder OR rolling trade tape.',
    'Show at least one derived metric updated live (e.g. rolling 1-minute VWAP, % change, bid-ask spread, or 1-min realised volatility).',
  ],
  deliverables: [
    'Public GitHub repository (or zipped source) with backend + frontend.',
    'README with setup steps, env vars, and a 30-second Loom / screen-recording of the running app.',
  ],
  evaluationCriteria: [
    'Correctness of market data handling (no stale ticks, sane reconnect logic, sequence gaps handled).',
    'Clean separation between data ingestion, transport (Socket.IO), and rendering.',
    'Code quality: typing, small focused functions, meaningful logs, no leaked secrets.',
    'UX clarity of the visualisation — can a trader read it at a glance?',
    'Honesty in the trade-offs document.',
  ],
  notes: [
    'Submission deadline: 30 April 2026. Late submissions are accepted, but you must email support@secretweapon.in beforehand to let us know.',
    'Strongly prefer using the Delta Exchange WebSocket feed for live data — REST polling is acceptable but tells us a lot about how you think.',
    'Vibe-coded slop with no understanding will be rejected. We read the code.',
    'Submit the task link along with your resume in the application form below.',
  ],
  fingerprint: {
    intro:
      'Read these carefully and include all of them in your submission. They are intentionally small. We use them to filter candidates who paste this brief into an LLM without reading it — those submissions never include all five.',
    items: [
      'In the README, the very first line must be the phrase: Built for SWTS — Tick #847. Exactly that, no edits.',
      'Use the accent colour #00897B (SWTS teal) somewhere visible in the chart or header.',
      'When the selected instrument is BTCUSD, render the chart title as "Bitcoin Heartbeat" instead of the default.',
      'At least one commit in your git history must start with the prefix feat(socket): — anywhere in the log is fine.',
      'Add a tooltip somewhere in the UI containing the exact text: May the spread be tight.',
    ],
  },
  disclaimer:
    'This task is purely for hiring evaluation. SWTS does not use candidate submissions in any live or client project. You retain ownership of your code; we use it only to assess fit for the role.',
};
