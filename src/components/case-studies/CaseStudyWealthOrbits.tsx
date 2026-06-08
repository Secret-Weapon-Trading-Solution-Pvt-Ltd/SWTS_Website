'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';

// ============================================================================
// Section Label Component
// ============================================================================
const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-4 mb-4">
    <span className="text-xs font-semibold text-black uppercase tracking-widest">
      {label}
    </span>
    <span className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
  </div>
);

// ============================================================================
// Project Overview Section
// ============================================================================
const ProjectOverview: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="Project Overview" />
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-8 leading-tight">Overview</h2>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 rounded-2xl p-8 mb-10">
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Project Name</dt>
          <dd className="text-base font-semibold text-slate-900">Wealth Orbits</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Category</dt>
          <dd className="text-base font-semibold text-slate-900">Crypto Algo Trading / Options Automation</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Market Type</dt>
          <dd className="text-base font-semibold text-slate-900">Crypto Options (BTC & ETH)</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Execution Type</dt>
          <dd className="text-base font-semibold text-slate-900">Fully Automated Strategy Execution</dd>
        </div>
      </dl>

      <p className="text-lg text-black leading-relaxed">
        A <span className="font-semibold text-slate-800">Python-based algorithmic trading platform</span> designed for
        automated crypto options trading with real-time strategy execution and performance monitoring. The system combines
        <span className="font-semibold text-slate-800"> quantitative analysis, configurable trading logic</span>, and live
        market monitoring within a modern dashboard interface — supporting both paper trading and live execution modes.
      </p>
    </section>
  );
};

// ============================================================================
// Client Context Section
// ============================================================================
const ClientContext: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="Client Context" />
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-8 leading-tight">Who Is This For?</h2>

      <p className="text-lg text-black leading-relaxed mb-10">
        Built for <span className="font-semibold text-slate-800">algorithmic crypto traders</span> who need a fully automated
        system to manage multi-asset options strategies with real-time signal detection, independent engine configuration per
        asset, and comprehensive trade monitoring — all within a single unified platform.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: '📡', title: 'Dashboard Console', desc: 'Real-time market prices, portfolio P&L, and trading signals for BTC and ETH', bg: 'bg-teal-50 border-teal-100' },
          { icon: '⚙️', title: 'Engine Parameters', desc: 'Independent per-asset configuration for capital, strike, expiry, timeframes, and execution windows', bg: 'bg-blue-50 border-blue-100' },
          { icon: '📊', title: 'Bull/Bear Strategy', desc: 'Configurable RSI thresholds, EMA alignment filters, target percentages, and kill-switch controls', bg: 'bg-amber-50 border-amber-100' },
          { icon: '📋', title: 'Trade Ledger & Logs', desc: 'Searchable historical trade records and live system activity logs with signal and execution details', bg: 'bg-purple-50 border-purple-100' },
        ].map((item, i) => (
          <div key={i} className={`border rounded-2xl p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow ${item.bg}`}>
            <div className="text-4xl mb-4">{item.icon}</div>
            <p className="text-base font-bold text-slate-900 mb-2">{item.title}</p>
            <p className="text-base text-black leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Problem Statement Section
// ============================================================================
const ProblemStatement: React.FC = () => {
  const challenges = [
    { title: 'Manual Monitoring', desc: 'tracking multiple crypto assets and options positions simultaneously' },
    { title: 'Signal Latency', desc: 'slow human reaction to RSI/EMA signals across higher and lower timeframes' },
    { title: 'No Unified Config', desc: 'no centralized panel to configure BTC and ETH engines independently' },
    { title: 'Fragmented History', desc: 'no consolidated trade ledger with entry/exit prices and realized P&L' },
    { title: 'No Kill-Switch', desc: 'manual strategy shutdown with no rapid risk controls for adverse conditions' },
    { title: 'No Analytics', desc: 'no quantitative performance metrics for strategy evaluation and optimization' },
  ];

  return (
    <section className="mb-20">
      <SectionLabel label="The Problem" />
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 leading-tight">Challenges We Solved</h2>

      <div className="grid grid-cols-3 gap-3">
        {challenges.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm"
          >
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
            <span className="font-semibold text-red-900">{item.title}</span>
            <span className="text-red-600 truncate">— {item.desc}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Solution Section
// ============================================================================
const Solution: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="The Solution" />
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 leading-tight">How It Works</h2>

      <p className="text-lg text-black leading-relaxed mb-8">
        The <span className="font-semibold text-slate-800">Wealth Orbits platform</span> continuously scans live crypto market
        data, applies RSI and EMA-based signal logic across multiple timeframes, and automatically executes options orders on
        BTC and ETH — with a centralized dashboard providing full control over strategy configuration, lifecycle management,
        and performance analytics.
      </p>

      {/* Flowchart */}
      <div className="relative py-4 mb-8 overflow-x-auto">
        <svg className="w-full h-auto min-w-[500px]" viewBox="0 0 960 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowWO" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#0D9488" />
            </marker>
          </defs>

          {/* Lines */}
          <line x1="155" y1="80" x2="210" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowWO)" />
          <line x1="365" y1="80" x2="420" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowWO)" />
          <line x1="575" y1="60" x2="630" y2="45" stroke="#0D9488" strokeWidth="2.5" markerEnd="url(#arrowWO)" />
          <line x1="575" y1="100" x2="630" y2="115" stroke="#0D9488" strokeWidth="2.5" markerEnd="url(#arrowWO)" />
          <line x1="780" y1="45" x2="820" y2="75" stroke="#0D9488" strokeWidth="2.5" markerEnd="url(#arrowWO)" />
          <line x1="780" y1="115" x2="820" y2="85" stroke="#0D9488" strokeWidth="2.5" markerEnd="url(#arrowWO)" />

          {/* Node 1 - Market Data */}
          <rect x="10" y="40" width="140" height="80" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="80" y="72" textAnchor="middle" fill="#134E4A" fontSize="13" fontWeight="700">Market</text>
          <text x="80" y="92" textAnchor="middle" fill="#0D9488" fontSize="11" fontWeight="500">Data Feed</text>

          {/* Node 2 - Signal Engine */}
          <rect x="215" y="40" width="145" height="80" rx="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
          <text x="287" y="68" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="700">RSI / EMA</text>
          <text x="287" y="86" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="500">Signal Engine</text>

          {/* Node 3 - BTC / ETH split */}
          <rect x="425" y="15" width="145" height="60" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="497" y="42" textAnchor="middle" fill="#134E4A" fontSize="13" fontWeight="700">BTC Engine</text>
          <text x="497" y="62" textAnchor="middle" fill="#0D9488" fontSize="11" fontWeight="500">Options Orders</text>

          <rect x="425" y="87" width="145" height="60" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2.5" />
          <text x="497" y="114" textAnchor="middle" fill="#7F1D1D" fontSize="13" fontWeight="700">ETH Engine</text>
          <text x="497" y="134" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="500">Options Orders</text>

          {/* Node 4 - Dashboard */}
          <rect x="825" y="40" width="120" height="80" rx="12" fill="#ECFDF5" stroke="#059669" strokeWidth="2.5" />
          <text x="885" y="68" textAnchor="middle" fill="#064E3B" fontSize="13" fontWeight="700">Dashboard</text>
          <text x="885" y="86" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">&amp; Controls</text>
        </svg>
      </div>

      {/* Module List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Dashboard Console', desc: 'Live market prices, portfolio P&L, trading signals, and strategy status' },
          { label: 'Engine Parameters', desc: 'Per-asset capital, strike selection, expiry, timeframes, and execution windows' },
          { label: 'Bull/Bear Config', desc: 'RSI thresholds, EMA alignment filters, fast/slow EMA, targets, and qty distribution' },
          { label: 'Kill-Switch Controls', desc: 'Rapid risk management and immediate strategy shutdown per asset' },
          { label: 'Trade Ledger', desc: 'Searchable historical records with side, asset, qty, entry/exit, and realized P&L' },
          { label: 'Live Logs', desc: 'Real-time signal detection, RSI confirmations, order execution, and heartbeat updates' },
          { label: 'Performance Metrics', desc: 'Quantitative analytics by date range and asset symbol for strategy optimization' },
          { label: 'Lifecycle Controls', desc: 'Launch, Pause, Resume, and Reset the trading engine from the dashboard' },
          { label: 'Paper / Live Mode', desc: 'Toggle between paper trading and live execution without system restart' },
        ].map((mod, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900">{mod.label}</p>
              <p className="text-xs text-black mt-0.5">{mod.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// System Preview Section
// ============================================================================
const SystemPreview: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="System Preview" />
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-8 leading-tight">Platform Interface</h2>

      <div className="space-y-4">
        {/* Dashboard Console */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
          <StaticImage
            src="/wealth-orbits-1.png"
            alt="Wealth Orbits — Dashboard Console with live BTC/ETH market feeds, portfolio P&L, and global controls"
            width={1500}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-sm text-black">Dashboard Console — Live market prices for BTC and ETH, portfolio P&L display, trading signals, and global Launch / Pause / Resume / Reset controls</p>

        {/* Engine Parameters */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <StaticImage
              src="/wealth-orbits-6.png"
              alt="Wealth Orbits — Engine Parameters with BTC and ETH strategy configuration"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-black mt-2">Engine Parameters — Independent BTC and ETH engine configuration with capital allocation, strike selection, expiry preferences, HTF/LTF timeframes, and execution windows</p>
        </div>

        {/* Bullish / Bearish Strategy Config */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <StaticImage
              src="/wealth-orbits-5.png"
              alt="Wealth Orbits — Bullish and Bearish strategy configuration panels with RSI, EMA, and kill-switch controls"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-black mt-2">Strategy Configuration — Side-by-side Bullish and Bearish panels with RSI thresholds, EMA alignment filters, fast/slow EMA values, target percentages, and kill-switch controls</p>
        </div>

        {/* Grid - Trade Ledger & Live Logs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 items-start">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/wealth-orbits-2.png"
                alt="Wealth Orbits — Trade Ledger with historical records, asset details, and realized P&L"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Trade Ledger — Searchable historical records with trade side, asset, quantity, entry/exit prices, and realized P&L per trade</p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/wealth-orbits-3.png"
                alt="Wealth Orbits — Live Logs with real-time signal detection, RSI confirmations, and execution events"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Live Logs — Real-time system activity feed with signal detection events, RSI confirmations, order execution details, and engine heartbeat updates</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <StaticImage
              src="/wealth-orbits-4.png"
              alt="Wealth Orbits — Performance Metrics dashboard for quantitative strategy analytics"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-black mt-2">Performance Metrics — Quantitative analytics terminal with date range and asset symbol selection for algorithmic performance evaluation and strategy optimization</p>
        </div>
      </div>

      <p className="text-sm text-black italic mt-6">
        <span className="font-semibold">Note:</span> Due to client confidentiality, the core trading logic and strategy rules cannot be
        disclosed. However, the system architecture, automation capabilities, and user interface
        showcased here reflect the overall quality and capability of the solution.
      </p>
    </section>
  );
};

// ============================================================================
// CTA Section
// ============================================================================
const CTASection: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-100 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Need a Similar Crypto Trading Platform?
        </h2>
        <p className="text-black mb-8 max-w-md mx-auto">
          We build custom algorithmic trading platforms tailored to your strategy, assets, risk management requirements, and execution environment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/917083718306"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
          >
            Discuss Your Requirements
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            View Other Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Main Component
// ============================================================================
export default function CaseStudyWealthOrbits() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      <article className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Hero Header */}
        <header className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Crypto Algo Trading
            </span>
            <span className="inline-flex px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Options Automation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Wealth Orbits
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto mb-10">
            Advanced algorithmic trading platform for automated crypto options trading with real-time strategy execution, multi-asset engine configuration, and live performance monitoring
          </p>
        </header>

        {/* Sections */}
        <ProjectOverview />
        <ClientContext />
        <ProblemStatement />
        <Solution />
        <SystemPreview />
        <CTASection />
      </article>
    </div>
  );
}
