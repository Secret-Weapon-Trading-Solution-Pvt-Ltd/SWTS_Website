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
          <dd className="text-base font-semibold text-slate-900">Automated Options Trading Dashboard</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Category</dt>
          <dd className="text-base font-semibold text-slate-900">Trade Automation / Options Execution</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Market Type</dt>
          <dd className="text-base font-semibold text-slate-900">NSE Index Options (Nifty 50)</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Execution Type</dt>
          <dd className="text-base font-semibold text-slate-900">Fully Automated Strategy Execution</dd>
        </div>
      </dl>

      <p className="text-lg text-black leading-relaxed">
        A <span className="font-semibold text-slate-800">Python-based automated options trading system</span> (Quantum Engine) designed to
        manage and execute strategies with minimal manual intervention — providing a clean, modern dashboard for
        <span className="font-semibold text-slate-800"> real-time portfolio monitoring</span>,
        <span className="font-semibold text-slate-800"> one-click execution controls</span>, and
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
        Built for <span className="font-semibold text-slate-800">options traders</span> who need a fully automated system to
        manage and execute strategies with minimal manual intervention — providing real-time portfolio insights,
        one-click execution controls, and complete trade transparency.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: '📊', title: 'Portfolio Intelligence', desc: 'Overall PnL, Realized PnL, Strategy Target, and Leg Target at a glance', bg: 'bg-teal-50 border-teal-100' },
          { icon: '🎮', title: 'Execution Controls', desc: 'One-click Launch, Stop, Square Off, Continue, and Reset buttons', bg: 'bg-blue-50 border-blue-100' },
          { icon: '📋', title: 'Orders History', desc: 'Complete trade log with instrument, quantity, price, status, and context', bg: 'bg-amber-50 border-amber-100' },
          { icon: '🔍', title: 'Engine Logs', desc: 'Real-time backend activity tracking with API calls and system messages', bg: 'bg-purple-50 border-purple-100' },
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
    { title: 'Manual Monitoring', desc: 'tracking multiple options legs and targets' },
    { title: 'No Central Dashboard', desc: 'portfolio intelligence scattered across tools' },
    { title: 'Slow Execution', desc: 'no one-click controls for trade management' },
    { title: 'Scattered Orders', desc: 'no unified view of trades and status' },
    { title: 'No Engine Visibility', desc: 'blind to backend execution behavior' },
    { title: 'Manual Adjustments', desc: 'leg-level changes require constant attention' },
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
// Solution Section - Flowchart Style
// ============================================================================
const Solution: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="The Solution" />
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 leading-tight">How It Works</h2>

      <p className="text-lg text-black leading-relaxed mb-8">
        The <span className="font-semibold text-slate-800">Quantum Engine</span> continuously monitors market conditions and
        executes trades based on predefined rules — with a modern dashboard providing full control over execution,
        real-time portfolio insights, and complete transparency into every order and system action.
      </p>

      {/* Flowchart */}
      <div className="relative py-4 mb-8 overflow-x-auto">
        <svg className="w-full h-auto min-w-[500px]" viewBox="0 0 860 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowOTD" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#0D9488" />
            </marker>
          </defs>

          {/* Lines */}
          <line x1="155" y1="80" x2="210" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowOTD)" />
          <line x1="350" y1="80" x2="405" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowOTD)" />
          <line x1="560" y1="80" x2="615" y2="80" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowOTD)" />

          {/* Node 1 - Market Data */}
          <rect x="10" y="40" width="140" height="80" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="80" y="72" textAnchor="middle" fill="#134E4A" fontSize="13" fontWeight="700">Market</text>
          <text x="80" y="92" textAnchor="middle" fill="#0D9488" fontSize="11" fontWeight="500">Data Feed</text>

          {/* Node 2 - Quantum Engine */}
          <rect x="215" y="40" width="135" height="80" rx="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
          <text x="282" y="72" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="700">Quantum</text>
          <text x="282" y="92" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="500">Engine</text>

          {/* Node 3 - Broker API */}
          <rect x="410" y="40" width="145" height="80" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="482" y="72" textAnchor="middle" fill="#134E4A" fontSize="13" fontWeight="700">Broker</text>
          <text x="482" y="92" textAnchor="middle" fill="#0D9488" fontSize="11" fontWeight="500">API</text>

          {/* Node 4 - Dashboard */}
          <rect x="620" y="40" width="230" height="80" rx="12" fill="#ECFDF5" stroke="#059669" strokeWidth="2.5" />
          <text x="735" y="68" textAnchor="middle" fill="#064E3B" fontSize="13" fontWeight="700">Dashboard &</text>
          <text x="735" y="86" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">Controls Panel</text>
        </svg>
      </div>

      {/* Module List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Dashboard', desc: 'Portfolio intelligence, PnL & strategy targets' },
          { label: 'Execution Controls', desc: 'Launch, Stop, Square Off, Continue, Reset' },
          { label: 'Live Trades', desc: 'Active positions with entry, LTP, SL & P&L' },
          { label: 'Orders History', desc: 'Complete trade log with status & context' },
          { label: 'Engine Logs', desc: 'Real-time API calls & system event tracking' },
          { label: 'Configuration', desc: 'Strategy parameters & system settings' },
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
            src="/quantengine-dashboard.png"
            alt="Quantum Engine Dashboard — Portfolio Intelligence & Execution Controls"
            width={1500}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-sm text-black">Dashboard — Portfolio Intelligence, Strategy Targets & Execution Controls</p>

        {/* Secondary Screenshots - Execution & Live Trades */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <StaticImage
              src="/quantengine-trades.png"
              alt="Quantum Engine — Execution Buttons & Live Trades"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-black mt-2">Execution Buttons & Live Trades — One-click controls with active positions view</p>
        </div>

        {/* Grid - Orders & Configuration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 items-start">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/quantengine-orders.png"
                alt="Quantum Engine — Orders History"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Orders History — Complete trade log with status & context</p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/quantengine-config.png"
                alt="Quantum Engine — Engine Configuration"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Configuration — Strategy parameters & adjustment settings</p>
          </div>
        </div>

        {/* Engine Logs - Full width */}
        <div className="mt-4">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <StaticImage
              src="/quantengine-logs.png"
              alt="Quantum Engine — Real-Time Engine Logs"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-black mt-2">Engine Logs — Real-time API calls, sync events & system messages</p>
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
          Need a Similar Automated Trading Dashboard?
        </h2>
        <p className="text-black mb-8 max-w-md mx-auto">
          We build custom automated trading systems with modern dashboards tailored to your strategy, broker, and execution requirements.
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
export default function CaseStudyOptionsTradingDashboard() {
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
              Options Execution
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Automated Options Trading Dashboard
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto mb-10">
            Fully automated options execution with real-time portfolio monitoring, one-click controls, and complete trade transparency
          </p>
          <a
            href="https://pebble.secretweapon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Live Demo
          </a>
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
