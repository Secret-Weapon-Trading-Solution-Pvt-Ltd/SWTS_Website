'use client';

import { motion } from 'framer-motion';

export default function StrategyAutomationHero() {
  return (
    <div className="relative w-full aspect-[4/3] overflow-visible">
      {/* Main SVG Illustration - transparent background to blend with parent */}
      <svg
        viewBox="0 0 600 450"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="chartBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03"/>
          </linearGradient>

          {/* Filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* ===== BACKGROUND CHART PANEL ===== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Chart background with glass effect */}
          <rect x="100" y="60" width="420" height="300" rx="20" fill="url(#chartBgGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

          {/* Chart grid lines */}
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.5">
            <line x1="120" y1="100" x2="500" y2="100"/>
            <line x1="120" y1="140" x2="500" y2="140"/>
            <line x1="120" y1="180" x2="500" y2="180"/>
            <line x1="120" y1="220" x2="500" y2="220"/>
            <line x1="120" y1="260" x2="500" y2="260"/>
            <line x1="120" y1="300" x2="500" y2="300"/>
          </g>
        </motion.g>

        {/* ===== CANDLESTICK CHART ===== */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Candlesticks showing uptrend */}
          <g>
            {/* Candle 1 - red */}
            <line x1="140" y1="250" x2="140" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="134" y="260" width="12" height="30" rx="2" fill="#ef4444" filter="url(#glow)"/>

            {/* Candle 2 - red */}
            <line x1="175" y1="235" x2="175" y2="285" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="169" y="245" width="12" height="30" rx="2" fill="#ef4444" filter="url(#glow)"/>

            {/* Candle 3 - green */}
            <line x1="210" y1="210" x2="210" y2="270" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="204" y="220" width="12" height="40" rx="2" fill="#10b981" filter="url(#glow)"/>

            {/* Candle 4 - green */}
            <line x1="245" y1="180" x2="245" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="239" y="190" width="12" height="50" rx="2" fill="#10b981" filter="url(#glow)"/>

            {/* Candle 5 - small red pullback */}
            <line x1="280" y1="175" x2="280" y2="220" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="274" y="180" width="12" height="30" rx="2" fill="#ef4444" filter="url(#glow)"/>

            {/* Candle 6 - teal breakout */}
            <line x1="315" y1="140" x2="315" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="309" y="145" width="12" height="45" rx="2" fill="url(#tealGrad)" filter="url(#glow)"/>

            {/* Candle 7 - teal continuation */}
            <line x1="350" y1="115" x2="350" y2="170" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="344" y="120" width="12" height="40" rx="2" fill="url(#tealGrad)" filter="url(#glow)"/>

            {/* Candle 8 - strong green momentum */}
            <line x1="385" y1="85" x2="385" y2="145" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <rect x="379" y="90" width="12" height="45" rx="2" fill="url(#greenGrad)" filter="url(#glow)"/>
          </g>

          {/* Trend line */}
          <path
            d="M 135 280 Q 210 240, 280 190 T 390 100"
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
            filter="url(#glow)"
          />
        </motion.g>

        {/* ===== LARGE UPWARD TREND ARROW ===== */}
        <motion.g
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <path
            d="M 420 320 L 510 140"
            fill="none"
            stroke="url(#greenGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#strongGlow)"
          />
          <polygon
            points="510,115 535,160 485,160"
            fill="url(#greenGrad)"
            filter="url(#strongGlow)"
          />
        </motion.g>

        {/* ===== PROFESSIONAL TRADER FIGURE ===== */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Body/Suit */}
          <path
            d="M 55 420
               Q 55 370, 70 340
               L 70 310
               Q 60 300, 65 285
               L 65 275
               Q 72 268, 85 268
               Q 98 268, 105 275
               L 105 285
               Q 110 300, 100 310
               L 100 340
               Q 115 370, 115 420
               Z"
            fill="url(#suitGrad)"
            filter="url(#softShadow)"
          />

          {/* Shirt collar */}
          <path d="M 75 310 L 85 330 L 95 310" fill="#e0f2fe" opacity="0.9"/>

          {/* Tie */}
          <path d="M 82 310 L 85 365 L 88 310 Z" fill="url(#tealGrad)"/>

          {/* Head */}
          <ellipse cx="85" cy="250" rx="24" ry="28" fill="#fcd9bd"/>

          {/* Hair */}
          <path
            d="M 61 240 Q 61 215, 85 210 Q 109 215, 109 240 Q 109 230, 85 228 Q 61 230, 61 240 Z"
            fill="#1e293b"
          />

          {/* Face features */}
          <ellipse cx="76" cy="248" rx="2.5" ry="3" fill="#1e293b"/>
          <ellipse cx="94" cy="248" rx="2.5" ry="3" fill="#1e293b"/>
          <path d="M 80 263 Q 85 268, 90 263" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>

          {/* Left arm raised pointing */}
          <path
            d="M 55 340 Q 30 310, 25 270"
            fill="none"
            stroke="url(#suitGrad)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Hand pointing */}
          <circle cx="25" cy="265" r="9" fill="#fcd9bd"/>
          <path d="M 20 255 L 30 245" stroke="#fcd9bd" strokeWidth="5" strokeLinecap="round"/>

          {/* Right arm */}
          <path
            d="M 115 345 Q 135 360, 140 380"
            fill="none"
            stroke="url(#suitGrad)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <circle cx="142" cy="385" r="9" fill="#fcd9bd"/>
        </motion.g>

        {/* ===== FLOATING GOLD COINS ===== */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Large coin - top */}
          <motion.g
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="520" cy="80" r="35" fill="url(#goldGrad)" filter="url(#strongGlow)"/>
            <circle cx="520" cy="80" r="28" fill="none" stroke="#fef3c7" strokeWidth="3"/>
            <text x="520" y="92" textAnchor="middle" fill="#78350f" fontSize="32" fontWeight="bold" fontFamily="system-ui">$</text>
          </motion.g>

          {/* Medium coin */}
          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <circle cx="565" cy="160" r="25" fill="url(#goldGrad)" filter="url(#glow)"/>
            <circle cx="565" cy="160" r="19" fill="none" stroke="#fef3c7" strokeWidth="2"/>
            <text x="565" y="170" textAnchor="middle" fill="#78350f" fontSize="22" fontWeight="bold" fontFamily="system-ui">$</text>
          </motion.g>

          {/* Small coin */}
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <circle cx="475" cy="55" r="18" fill="url(#goldGrad)" filter="url(#glow)"/>
            <text x="475" y="62" textAnchor="middle" fill="#78350f" fontSize="16" fontWeight="bold" fontFamily="system-ui">$</text>
          </motion.g>

          {/* Extra floating coin near arrow */}
          <motion.g
            animate={{ y: [0, -7, 0], x: [0, 3, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <circle cx="545" cy="240" r="20" fill="url(#goldGrad)" filter="url(#glow)"/>
            <circle cx="545" cy="240" r="15" fill="none" stroke="#fef3c7" strokeWidth="2"/>
            <text x="545" y="248" textAnchor="middle" fill="#78350f" fontSize="18" fontWeight="bold" fontFamily="system-ui">$</text>
          </motion.g>
        </motion.g>

        {/* ===== ROTATING GEAR (Automation symbol) ===== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "550px 350px" }}
          >
            <circle cx="550" cy="350" r="32" fill="rgba(20,184,166,0.15)"/>
            <circle cx="550" cy="350" r="25" fill="transparent" stroke="url(#tealGrad)" strokeWidth="4"/>
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="545"
                y="312"
                width="10"
                height="14"
                rx="2"
                fill="url(#tealGrad)"
                transform={`rotate(${angle} 550 350)`}
              />
            ))}
            <circle cx="550" cy="350" r="12" fill="url(#tealGrad)"/>
            <circle cx="550" cy="350" r="5" fill="#1a1a3e"/>
          </motion.g>
        </motion.g>

        {/* ===== SECONDARY GEAR ===== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "580px 400px" }}
          >
            <circle cx="580" cy="400" r="18" fill="rgba(139,92,246,0.15)"/>
            <circle cx="580" cy="400" r="14" fill="transparent" stroke="url(#purpleGrad)" strokeWidth="2.5"/>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <rect
                key={i}
                x="577"
                y="380"
                width="6"
                height="8"
                rx="1"
                fill="url(#purpleGrad)"
                transform={`rotate(${angle} 580 400)`}
              />
            ))}
            <circle cx="580" cy="400" r="6" fill="url(#purpleGrad)"/>
          </motion.g>
        </motion.g>

        {/* ===== SUCCESS CHECKMARK BADGE ===== */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        >
          <circle cx="440" cy="120" r="28" fill="url(#greenGrad)" filter="url(#strongGlow)"/>
          <path d="M425 120 L436 131 L455 109" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.g>

        {/* ===== FLOATING DATA NODES ===== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <circle cx="160" cy="90" r="10" fill="rgba(255,255,255,0.1)" stroke="url(#cyanGrad)" strokeWidth="2"/>
            <circle cx="160" cy="90" r="4" fill="url(#cyanGrad)"/>
          </motion.g>

          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}>
            <circle cx="480" cy="280" r="8" fill="rgba(255,255,255,0.1)" stroke="url(#purpleGrad)" strokeWidth="2"/>
            <circle cx="480" cy="280" r="3" fill="url(#purpleGrad)"/>
          </motion.g>

          {/* Connecting dotted lines */}
          <line x1="160" y1="90" x2="135" y2="260" stroke="url(#cyanGrad)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
          <line x1="440" y1="120" x2="390" y2="100" stroke="url(#greenGrad)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
        </motion.g>

        {/* ===== PULSE EFFECTS ===== */}
        <motion.circle
          cx="390"
          cy="100"
          r="15"
          fill="none"
          stroke="url(#tealGrad)"
          strokeWidth="2"
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.circle
          cx="520"
          cy="80"
          r="20"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        {/* ===== DECORATIVE ELEMENTS ===== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Plus signs */}
          <g stroke="#22d3ee" strokeWidth="2" strokeLinecap="round">
            <line x1="50" y1="150" x2="50" y2="168"/>
            <line x1="41" y1="159" x2="59" y2="159"/>
          </g>
          <g stroke="#a855f7" strokeWidth="2" strokeLinecap="round">
            <line x1="490" y1="380" x2="490" y2="395"/>
            <line x1="482.5" y1="387.5" x2="497.5" y2="387.5"/>
          </g>

          {/* Scattered dots */}
          <circle cx="580" cy="300" r="3" fill="#22d3ee" opacity="0.6"/>
          <circle cx="40" cy="320" r="4" fill="#a855f7" opacity="0.5"/>
          <circle cx="180" cy="380" r="3" fill="#10b981" opacity="0.6"/>
          <circle cx="430" cy="380" r="2.5" fill="#fbbf24" opacity="0.6"/>
        </motion.g>
      </svg>
    </div>
  );
}
