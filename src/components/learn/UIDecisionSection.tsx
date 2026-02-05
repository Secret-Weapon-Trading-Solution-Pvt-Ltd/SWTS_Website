'use client';

import React, { useState } from 'react';
import {
  Monitor,
  Terminal,
  Globe,
  Laptop,
  CheckCircle2,
  XCircle,
  Code,
  Layout,
  Palette,
  Users,
  Settings,
  Server,
  ArrowRight,
  ArrowDown,
  Eye,
  MousePointer,
  Cpu,
  Gauge,
} from 'lucide-react';

const dashboardTypes = [
  {
    id: 'streamlit',
    title: 'Streamlit',
    subtitle: 'Basic Dashboard',
    icon: Layout,
    desc: 'Quick prototype for internal use. Perfect for personal trading systems where simplicity matters. Built entirely in Python with minimal frontend knowledge needed.',
    tech: ['Python', 'Streamlit'],
    complexity: 'Low',
    color: 'emerald',
    features: ['Rapid development', 'Python-only stack', 'Built-in widgets', 'Auto refresh'],
  },
  {
    id: 'professional',
    title: 'Node.js + FastAPI',
    subtitle: 'Professional',
    icon: Globe,
    desc: 'Client-level multi-user dashboard with authentication, real-time updates, and professional UI. Ideal for commercial algo trading products.',
    tech: ['Node.js', 'React', 'FastAPI'],
    complexity: 'High',
    color: 'blue',
    features: ['Multi-user support', 'Real-time WebSocket', 'Auth & permissions', 'Scalable'],
  },
  {
    id: 'desktop',
    title: 'Python GUI',
    subtitle: 'Desktop App',
    icon: Laptop,
    desc: 'Standalone desktop application that works offline. Install once and run - no browser needed. Good for traders who prefer native apps.',
    tech: ['Python', 'PyQt/Tkinter'],
    complexity: 'Medium',
    color: 'violet',
    features: ['Offline capable', 'Native performance', 'System tray', 'Local data'],
  },
];

const UIDecisionSection: React.FC = () => {
  const [withUI, setWithUI] = useState(true);
  const [activeDashboard, setActiveDashboard] = useState(dashboardTypes[0]);

  return (
    <section id="ui-decision" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl opacity-60 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/2" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center text-white font-bold text-xl">
              ?
            </div>
            <div>
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Decision Point</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">UI or No UI?</h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent ml-6" />
        </div>

        {/* Part 1: Introduction - Left Visual, Right Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left - Light Visual Card */}
          <div className="relative">
            <div className="bg-white border-2 border-violet-100 rounded-3xl p-8 lg:p-10 shadow-lg">
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-violet-600 text-sm font-medium">Critical Decision</p>
                    <h3 className="text-xl font-bold text-slate-800">Interface Choice</h3>
                  </div>
                </div>

                {/* Visual Comparison */}
                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-semibold">Code Only</p>
                        <p className="text-slate-500 text-sm">Background bot, config files</p>
                      </div>
                      <div className="px-3 py-1 bg-emerald-100 rounded-full">
                        <span className="text-emerald-700 text-xs font-medium">Simple</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="px-4 py-1 bg-slate-100 rounded-full">
                      <span className="text-slate-500 text-sm">VS</span>
                    </div>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-semibold">Dashboard UI</p>
                        <p className="text-slate-500 text-sm">Visual control panel</p>
                      </div>
                      <div className="px-3 py-1 bg-teal-100 rounded-full">
                        <span className="text-teal-700 text-xs font-medium">Visual</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insight */}
                <div className="mt-6 p-4 bg-violet-50 rounded-xl border-l-4 border-violet-500">
                  <p className="text-slate-600 text-sm">
                    <span className="text-violet-700 font-semibold">Key insight:</span> UI is not mandatory -
                    many successful algo traders use code-only systems. Choose based on your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
              <Eye className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">After Strategy Signal</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Visual Dashboard or <span className="text-violet-600">Command Line</span>?
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              When your strategy signal is ready, you face a design decision: Do you need just Python code
              running in background, or a visual dashboard to control, monitor, and interact with your trading system?
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              This choice affects development complexity, cost, and who can use your system. A code-only
              approach is faster to build but requires technical knowledge. A dashboard makes it user-friendly
              but needs more development effort.
            </p>

            {/* Quick Comparison Pills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <Terminal className="w-6 h-6 text-slate-600 mb-2" />
                <p className="font-semibold text-slate-800">Without UI</p>
                <p className="text-sm text-slate-500">Personal use, fast setup</p>
              </div>
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
                <Monitor className="w-6 h-6 text-teal-600 mb-2" />
                <p className="font-semibold text-slate-800">With UI</p>
                <p className="text-sm text-slate-500">Teams, clients, visual</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Decision Flowchart */}
        <div className="bg-gradient-to-br from-violet-50 via-white to-teal-50 rounded-3xl p-8 lg:p-10 border border-violet-100 mb-20">
          <h3 className="text-center text-sm font-semibold text-violet-500 uppercase tracking-widest mb-2">
            Decision Flow
          </h3>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Click to explore what each choice means for your algo trading project
          </p>

          {/* Interactive Choice Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
            {/* Without UI */}
            <button
              onClick={() => setWithUI(false)}
              className={`relative w-full md:w-80 p-8 rounded-3xl border-2 transition-all duration-300 group ${
                !withUI
                  ? 'border-slate-600 bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl shadow-slate-200/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all ${
                !withUI ? 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <Terminal className={`w-10 h-10 transition-colors ${!withUI ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Without UI</h3>
              <p className="text-sm text-slate-500 text-center mb-5">Code only, background bot</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Fast setup</span>
                <span className="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Low cost</span>
                <span className="text-xs px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium">Tech only</span>
              </div>
              {!withUI && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              )}
            </button>

            {/* VS Connector */}
            <div className="flex flex-col items-center gap-2">
              <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-slate-300 to-teal-300" />
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">VS</span>
              </div>
              <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-teal-300 to-slate-300" />
              <ArrowDown className="w-5 h-5 text-teal-400 md:hidden" />
            </div>

            {/* With UI */}
            <button
              onClick={() => setWithUI(true)}
              className={`relative w-full md:w-80 p-8 rounded-3xl border-2 transition-all duration-300 group ${
                withUI
                  ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-xl shadow-teal-200/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all ${
                withUI ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <Monitor className={`w-10 h-10 transition-colors ${withUI ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">With UI</h3>
              <p className="text-sm text-slate-500 text-center mb-5">Dashboard control panel</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full font-medium">Easy control</span>
                <span className="text-xs px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full font-medium">Visual</span>
                <span className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">User-friendly</span>
              </div>
              {withUI && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              )}
            </button>
          </div>

          {/* Arrow to Details */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className={`w-6 h-6 ${withUI ? 'text-teal-500' : 'text-slate-500'}`} />
              <span className="text-sm text-slate-500">Explore details below</span>
            </div>
          </div>
        </div>

        {/* Part 3A: Detailed Comparison - Two Light Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Without UI Card */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
            !withUI ? 'ring-2 ring-slate-400 ring-offset-2' : 'opacity-70 hover:opacity-100'
          }`}>
            <div className="bg-slate-50 border-2 border-slate-200 p-8 lg:p-10 h-full">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center">
                    <Terminal className="w-7 h-7 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Without UI</h3>
                    <p className="text-slate-500">Config files & commands</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider">Pros</p>
                    {['Fast setup', 'No hosting cost', 'Lightweight', 'Personal use'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase mb-3 tracking-wider">Cons</p>
                    {['Technical only', 'Hard settings', 'No visual'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
                  <p className="text-center">
                    <span className="text-slate-500">Best for: </span>
                    <span className="text-slate-800 font-semibold">Personal use, simple strategies, quick testing</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* With UI Card */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
            withUI ? 'ring-2 ring-teal-400 ring-offset-2' : 'opacity-70 hover:opacity-100'
          }`}>
            <div className="bg-teal-50 border-2 border-teal-200 p-8 lg:p-10 h-full">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <Monitor className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">With UI</h3>
                    <p className="text-teal-600">Visual dashboard</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider">Pros</p>
                    {['Easy control', 'Visual PnL', 'User friendly', 'Safe for all'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase mb-3 tracking-wider">Cons</p>
                    {['More dev time', 'Higher cost', 'Complexity'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-teal-100 rounded-xl border border-teal-200">
                  <p className="text-center">
                    <span className="text-teal-600">Best for: </span>
                    <span className="text-slate-800 font-semibold">Client projects, teams, commercial products</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3B: Dashboard Options - Interactive Left-Right (only shows when With UI selected) */}
        {withUI && (
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Dashboard Types</h3>
              <p className="text-slate-500">Three ways to build your trading UI - choose based on your needs</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left - Selection Panel */}
              <div className="lg:col-span-2 space-y-4">
                {dashboardTypes.map((dash) => (
                  <button
                    key={dash.id}
                    onClick={() => setActiveDashboard(dash)}
                    className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                      activeDashboard.id === dash.id
                        ? dash.color === 'emerald'
                          ? 'border-emerald-400 bg-emerald-50 shadow-lg'
                          : dash.color === 'blue'
                            ? 'border-blue-400 bg-blue-50 shadow-lg'
                            : 'border-violet-400 bg-violet-50 shadow-lg'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                        activeDashboard.id === dash.id
                          ? dash.color === 'emerald' ? 'bg-emerald-500' : dash.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                          : 'bg-slate-100'
                      }`}>
                        <dash.icon className={`w-7 h-7 ${activeDashboard.id === dash.id ? 'text-white' : 'text-slate-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{dash.title}</h4>
                        <p className="text-sm text-slate-500">{dash.subtitle}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        dash.complexity === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                        dash.complexity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-rose-100 text-rose-700'
                      }`}>
                        {dash.complexity}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right - Detail Panel with Light Colors */}
              <div className="lg:col-span-3">
                <div className={`h-full rounded-3xl p-8 lg:p-10 transition-all duration-300 border-2 ${
                  activeDashboard.color === 'emerald'
                    ? 'bg-emerald-50 border-emerald-200'
                    : activeDashboard.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-violet-50 border-violet-200'
                }`}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      activeDashboard.color === 'emerald' ? 'bg-emerald-100' :
                      activeDashboard.color === 'blue' ? 'bg-blue-100' : 'bg-violet-100'
                    }`}>
                      <activeDashboard.icon className={`w-8 h-8 ${
                        activeDashboard.color === 'emerald' ? 'text-emerald-600' :
                        activeDashboard.color === 'blue' ? 'text-blue-600' : 'text-violet-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{activeDashboard.title}</h3>
                      <p className="text-slate-500">{activeDashboard.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {activeDashboard.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {activeDashboard.tech.map((t, i) => (
                        <span key={i} className={`px-4 py-2 rounded-full font-medium ${
                          activeDashboard.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                          activeDashboard.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeDashboard.features.map((feature, i) => (
                      <div key={i} className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${
                        activeDashboard.color === 'emerald' ? 'bg-white border-emerald-200' :
                        activeDashboard.color === 'blue' ? 'bg-white border-blue-200' : 'bg-white border-violet-200'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                          activeDashboard.color === 'emerald' ? 'text-emerald-500' :
                          activeDashboard.color === 'blue' ? 'text-blue-500' : 'text-violet-500'
                        }`} />
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Part 4: Tech Stack Architecture */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-3">Tech Stack Architecture</h3>
          <p className="text-slate-500 text-center mb-10 max-w-2xl mx-auto">
            Whether you choose UI or not, understanding the backend-frontend split helps you build better systems
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Backend */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Server className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Backend</h4>
                  <p className="text-slate-500 text-sm">Python / FastAPI</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Cpu, text: 'Strategy execution' },
                  { icon: Gauge, text: 'Signal generation' },
                  { icon: Settings, text: 'Broker API calls' },
                  { icon: Code, text: 'Data management' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <item.icon className="w-5 h-5 text-blue-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">
                  <Palette className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Frontend</h4>
                  <p className="text-slate-500 text-sm">React / Streamlit / PyQt</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Layout, text: 'Dashboard display' },
                  { icon: MousePointer, text: 'Start/stop controls' },
                  { icon: Users, text: 'PnL & positions' },
                  { icon: Settings, text: 'Settings UI' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <item.icon className="w-5 h-5 text-teal-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-50 to-teal-50 border border-violet-200 rounded-2xl shadow-lg">
            <Monitor className="w-6 h-6 text-violet-600" />
            <span className="font-semibold text-slate-700">UI is not mandatory, but makes control easier for non-technical users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIDecisionSection;
