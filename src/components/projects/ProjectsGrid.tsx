'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  LineChart,
  TrendingUp,
  Target,
  Shield,
  Activity,
  BarChart2,
  RefreshCw,
  Monitor,
  Zap,
} from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  Icon: React.ElementType;
}

interface ProjectCardData {
  id: string;
  href: string;
  label: string;
  category: string;
  iconSrc?: string;
  Icon: React.ElementType;
  title: string;
  description: string;
  metrics: Metric[];
}

const projects: ProjectCardData[] = [
  {
    id: 'trade-distributor-system',
    href: '/projects/trade-distributor-system',
    label: 'Python Project',
    category: 'Trade Automation',
    iconSrc: '/tds-favicon.png',
    Icon: LineChart,
    title: 'Trade Distributor System',
    description:
      'Built for prop trading firms and fund managers who manage multiple brokerage accounts — synchronized, automated order execution with centralized latency monitoring and zero manual intervention.',
    metrics: [
      { label: 'Sync Latency', value: '<100ms', Icon: LineChart },
      { label: 'Broker Support', value: 'Multi', Icon: TrendingUp },
      { label: 'Uptime', value: '99.9%', Icon: Target },
    ],
  },
  {
    id: 'delta-screener',
    href: '/projects/ema-crossover-screener',
    label: 'Python Project',
    category: 'Crypto Screener',
    Icon: TrendingUp,
    title: 'Delta Exchange Crypto Screener',
    description:
      'Built for active crypto traders who rely on EMA crossovers — real-time multi-timeframe signal detection across multiple pairs with instant Telegram alerts and live WebSocket updates.',
    metrics: [
      { label: 'Timeframes', value: '5', Icon: BarChart2 },
      { label: 'Signal Latency', value: '<5s', Icon: Activity },
      { label: 'Alert Delivery', value: 'Instant', Icon: Zap },
    ],
  },
  {
    id: 'dual-account-hedging',
    href: '/projects/dual-account-hedging',
    label: 'Python Project',
    category: 'Trade Automation',
    Icon: Activity,
    title: 'Dual Account Hedging',
    description:
      'Built for traders who manage risk through simultaneous long-short hedging across two separate brokerage accounts — synchronized automated execution with real-time visibility into both legs.',
    metrics: [
      { label: 'Accounts', value: '2', Icon: Activity },
      { label: 'Execution', value: 'Sync', Icon: RefreshCw },
      { label: 'Mode', value: 'Live/Paper', Icon: Monitor },
    ],
  },
  {
    id: 'options-trading-dashboard',
    href: '/projects/options-trading-dashboard',
    label: 'Python Project',
    category: 'Trade Automation',
    Icon: TrendingUp,
    title: 'Automated Options Trading Dashboard',
    description:
      'Built for options traders who need a fully automated system to manage and execute strategies — real-time portfolio insights, one-click execution controls, and complete trade transparency.',
    metrics: [
      { label: 'Execution', value: 'Auto', Icon: LineChart },
      { label: 'Controls', value: '5+', Icon: Target },
      { label: 'Monitoring', value: 'Real-time', Icon: Monitor },
    ],
  },
  {
    id: 'wealth-orbits',
    href: '/projects/wealth-orbits',
    label: 'Python Project',
    category: 'Crypto Algo Trading',
    Icon: TrendingUp,
    title: 'Wealth Orbits',
    description:
      'An advanced algorithmic trading platform for automated crypto options trading — combining real-time strategy execution, quantitative signal analysis, and live portfolio monitoring in one modern dashboard.',
    metrics: [
      { label: 'Assets', value: 'BTC+ETH', Icon: TrendingUp },
      { label: 'Strategies', value: 'Bull/Bear', Icon: BarChart2 },
      { label: 'Mode', value: 'Live/Paper', Icon: Monitor },
    ],
  },
];

const ProjectCard: React.FC<{ project: ProjectCardData }> = ({ project }) => (
  <div className="relative group h-full">
    {/* Glow */}
    <div
      className="absolute -inset-1 rounded-[1.5rem] opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-300"
      style={{
        background:
          'linear-gradient(135deg, rgba(20,184,166,0.12) 0%, transparent 50%, rgba(20,184,166,0.06) 100%)',
      }}
    />

    <div
      className="relative flex flex-col h-full bg-white rounded-[1.25rem] p-7 overflow-hidden"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        border: '1px solid rgba(226,232,240,0.8)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #14B8A6 20%, #0D9488 50%, #14B8A6 80%, transparent 100%)',
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 0.5px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Header: icon + category + title */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
            border: '1px solid rgba(20,184,166,0.2)',
          }}
        >
          {project.iconSrc ? (
            <img src={project.iconSrc} alt={project.title} className="w-7 h-7 rounded-lg" />
          ) : (
            <project.Icon className="w-6 h-6 text-teal-600" />
          )}
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-teal-600 uppercase tracking-wider mb-1">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-slate-900 leading-snug">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-black leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="relative overflow-hidden rounded-xl p-3 text-center
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
              border: '1px solid rgba(20,184,166,0.25)',
            }}
          >
            {/* subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-xl" />
            <div
              className="relative w-7 h-7 rounded-lg flex items-center justify-center mx-auto mb-2"
              style={{ background: 'rgba(20,184,166,0.15)' }}
            >
              <metric.Icon className="w-3.5 h-3.5 text-teal-600" />
            </div>
            <p className="relative text-base font-bold text-slate-900 tracking-tight leading-none mb-0.5">
              {metric.value}
            </p>
            <p className="relative text-[9px] font-semibold text-teal-700 uppercase tracking-wider leading-tight">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link
          href={project.href}
          className="group/btn inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white
                     rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5
                     transition-all duration-200"
        >
          View Full Case Study
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  </div>
);

export const ProjectsGrid: React.FC = () => (
  <section className="relative py-12 lg:py-16 bg-white">
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
      }}
    />

    <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={
              i === projects.length - 1 && projects.length % 2 !== 0
                ? 'md:col-span-2 md:max-w-[calc(50%-16px)] md:mx-auto w-full'
                : ''
            }
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsGrid;
