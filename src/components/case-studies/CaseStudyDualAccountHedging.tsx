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
          <dd className="text-base font-semibold text-slate-900">Dual Account Hedging</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Category</dt>
          <dd className="text-base font-semibold text-slate-900">Trade Automation / Hedging Execution</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Market Type</dt>
          <dd className="text-base font-semibold text-slate-900">NSE Index Futures (Bank Nifty)</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Execution Type</dt>
          <dd className="text-base font-semibold text-slate-900">Synchronized Dual-Account Hedging</dd>
        </div>
      </dl>

      <p className="text-lg text-black leading-relaxed">
        A <span className="font-semibold text-slate-800">Python-based dual account hedging system</span> designed for
        automated and synchronized trade management across two separate brokerage accounts — enabling simultaneous
        <span className="font-semibold text-slate-800"> long and short hedging strategies</span> with a real-time dashboard,
        independent per-account configuration, and
        <span className="font-semibold text-slate-800"> complete trade transparency</span>.
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
        Built for <span className="font-semibold text-slate-800">advanced traders</span> who manage risk through simultaneous
        long and short hedging strategies across two separate brokerage accounts — requiring synchronized automated execution
        with complete real-time visibility into both legs.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: '📡', title: 'Live Feed', desc: 'Real-time bid/ask prices and execution state displayed at all times', bg: 'bg-teal-50 border-teal-100' },
          { icon: '📊', title: 'Live Positions', desc: 'Entry price, stop-loss, target, and live P&L for both Long and Short legs', bg: 'bg-blue-50 border-blue-100' },
          { icon: '⚙️', title: 'Dual Config', desc: 'Independent strategy configuration panels for Account 1 (Long) and Account 2 (Short)', bg: 'bg-amber-50 border-amber-100' },
          { icon: '📋', title: 'Order History', desc: 'Complete trade log with Long P&L, Short P&L, and Overall P&L summary', bg: 'bg-purple-50 border-purple-100' },
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
    { title: 'Manual Coordination', desc: 'syncing long/short legs across two separate accounts' },
    { title: 'No Position Visibility', desc: 'no real-time tracking of hedge positions and live P&L' },
    { title: 'Fragmented Config', desc: 'no unified panel to configure both accounts independently' },
    { title: 'No Trailing SL', desc: 'manual stop-loss adjustments with no automation' },
    { title: 'Scattered History', desc: 'no consolidated P&L view across both legs' },
    { title: 'No Lifecycle Control', desc: 'no centralized apply, pause, resume, or reset controls' },
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
        The <span className="font-semibold text-slate-800">Dual Account Hedging System</span> continuously monitors live
        market data and executes synchronized orders on both accounts simultaneously — with a real-time dashboard providing
        full control over configuration, position tracking, and strategy lifecycle management.
      </p>

      {/* Flowchart */}
      <div className="relative py-4 mb-8 overflow-x-auto">
        <svg className="w-full h-auto min-w-[500px]" viewBox="0 0 920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowDAH" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#0D9488" />
            </marker>
          </defs>

          {/* Lines */}
          <line x1="155" y1="80" x2="210" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowDAH)" />
          <line x1="360" y1="80" x2="415" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowDAH)" />
          <line x1="570" y1="60" x2="625" y2="45" stroke="#0D9488" strokeWidth="2.5" markerEnd="url(#arrowDAH)" />
          <line x1="570" y1="100" x2="625" y2="115" stroke="#0D9488" strokeWidth="2.5" markerEnd="url(#arrowDAH)" />

          {/* Node 1 - Market Data */}
          <rect x="10" y="40" width="140" height="80" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="80" y="72" textAnchor="middle" fill="#134E4A" fontSize="13" fontWeight="700">Market</text>
          <text x="80" y="92" textAnchor="middle" fill="#0D9488" fontSize="11" fontWeight="500">Data Feed</text>

          {/* Node 2 - Hedging Engine */}
          <rect x="215" y="40" width="140" height="80" rx="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
          <text x="285" y="72" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="700">Hedging</text>
          <text x="285" y="92" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="500">Engine</text>

          {/* Node 3 - Broker Accounts (split) */}
          <rect x="420" y="15" width="145" height="60" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="492" y="42" textAnchor="middle" fill="#134E4A" fontSize="13" fontWeight="700">Account A1</text>
          <text x="492" y="62" textAnchor="middle" fill="#0D9488" fontSize="11" fontWeight="500">Long Leg</text>

          <rect x="420" y="87" width="145" height="60" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2.5" />
          <text x="492" y="114" textAnchor="middle" fill="#7F1D1D" fontSize="13" fontWeight="700">Account A2</text>
          <text x="492" y="134" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="500">Short Leg</text>

          {/* Node 4 - Dashboard */}
          <rect x="635" y="40" width="270" height="80" rx="12" fill="#ECFDF5" stroke="#059669" strokeWidth="2.5" />
          <text x="770" y="68" textAnchor="middle" fill="#064E3B" fontSize="13" fontWeight="700">Dashboard &</text>
          <text x="770" y="88" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">Controls Panel</text>
        </svg>
      </div>

      {/* Module List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Live Feed', desc: 'Real-time bid/ask prices and current execution state' },
          { label: 'Live Positions', desc: 'Entry time, price, stop-loss, target, and live P&L per leg' },
          { label: 'Dual Config Panels', desc: 'Independent per-account strategy configuration' },
          { label: 'Dynamic Trailing SL', desc: 'Automated trail step, trail move, and cooldown management' },
          { label: 'Execution Controls', desc: 'Apply, Start, Pause, Resume, and Reset lifecycle buttons' },
          { label: 'Order History', desc: 'Long P&L, Short P&L, Overall P&L with full trade log' },
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
        {/* Main Screenshot - Dashboard */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
          <StaticImage
            src="/dah-dashboard.jpeg"
            alt="Dual Account Hedging — Live Feed, Live Positions & Execution Controls"
            width={1500}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-sm text-black">Dashboard — Live Feed with Bid/Ask prices, Live Position tracking for Long & Short legs, and Execution Controls</p>

        {/* Strategy Configuration */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <StaticImage
              src="/dah-config.png"
              alt="Dual Account Hedging — Strategy Configuration for Long A1 and Short A2"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-black mt-2">Strategy Configuration — Independent LONG (A1) and SHORT (A2) panels with stop-loss, target, trailing SL, and cooldown settings</p>
        </div>

        {/* Grid - Full View & Order History */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 items-start">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/dah-order-history.jpeg"
                alt="Dual Account Hedging — Order History with Long P&L, Short P&L, and Overall P&L"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Order History — Re-entry quotas, execution controls, and consolidated P&L summary</p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/dah-full-view.png"
                alt="Dual Account Hedging — Full Platform View"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Full Platform View — Complete dashboard from live feed through configuration to order history</p>
          </div>
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
          Need a Similar Hedging System?
        </h2>
        <p className="text-black mb-8 max-w-md mx-auto">
          We build custom dual-account hedging platforms tailored to your strategy, broker, and risk management requirements.
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
export default function CaseStudyDualAccountHedging() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      <article className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Hero Header */}
        <header className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Trade Automation
            </span>
            <span className="inline-flex px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Hedging Execution
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Dual Account Hedging
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto mb-10">
            Automated synchronized hedging across two accounts with real-time position tracking, independent strategy configuration, and full lifecycle control
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
