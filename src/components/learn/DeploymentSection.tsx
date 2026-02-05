'use client';

import React, { useState } from 'react';
import {
  Laptop2,
  Server,
  CheckCircle2,
  XCircle,
  Power,
  RefreshCw,
  Wifi,
  Clock,
  Calendar,
  IndianRupee,
  AlertTriangle,
  Cloud,
  Zap,
  Shield,
  Globe,
  ArrowDown,
  ArrowRight,
  Settings,
  HardDrive,
} from 'lucide-react';

const serverProviders = [
  {
    id: 'aws',
    name: 'AWS EC2',
    desc: 'Amazon Web Services - most popular cloud, reliable, scalable. Good for production systems with auto-scaling needs.',
    color: 'amber',
    features: ['Auto-scaling', 'Global regions', 'Pay as you go', 'High availability'],
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    desc: 'Simple, developer-friendly cloud. Fixed monthly pricing, easy to understand. Great for individual traders.',
    color: 'blue',
    features: ['Fixed pricing', 'Simple UI', 'Quick setup', 'Good docs'],
  },
  {
    id: 'vultr',
    name: 'Vultr / Linode',
    desc: 'Budget-friendly VPS options with good performance. Perfect for cost-conscious algo trading setups.',
    color: 'violet',
    features: ['Low cost', 'SSD storage', 'Multiple locations', 'API access'],
  },
];

const DeploymentSection: React.FC = () => {
  const [useServer, setUseServer] = useState(true);
  const [activeProvider, setActiveProvider] = useState(serverProviders[0]);

  return (
    <section id="deployment" className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-xl">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Infrastructure</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Where Will It Run?</h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-200 to-transparent ml-6" />
        </div>

        {/* Part 1: Introduction - Left Content, Right Visual */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6">
              <Globe className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Critical Infrastructure</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Building is Not Enough - <span className="text-amber-600">Running 24/7</span> is the Real Challenge
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              You&apos;ve built the strategy, tested it, and it works. But where will it run? Signal comes at 10:15 AM,
              but your PC went to sleep mode - trade missed! This section solves that problem.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              The choice between local PC and cloud server depends on your reliability needs, technical comfort,
              and budget. Both have their place in algo trading infrastructure.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <Laptop2 className="w-6 h-6 text-amber-600 mb-2" />
                <p className="font-semibold text-slate-800">Local PC</p>
                <p className="text-sm text-slate-500">Free, but risky</p>
              </div>
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
                <Cloud className="w-6 h-6 text-teal-600 mb-2" />
                <p className="font-semibold text-slate-800">Cloud Server</p>
                <p className="text-sm text-slate-500">Paid, but reliable</p>
              </div>
            </div>
          </div>

          {/* Right - Light Visual Card */}
          <div className="relative">
            <div className="bg-white border-2 border-amber-100 rounded-3xl p-8 lg:p-10 shadow-lg">
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <HardDrive className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-amber-600 text-sm font-medium">Deployment Choice</p>
                    <h3 className="text-xl font-bold text-slate-800">Infrastructure Options</h3>
                  </div>
                </div>

                {/* Visual Options */}
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                        <Laptop2 className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-semibold">Your Local PC</p>
                        <p className="text-slate-500 text-sm">Desktop or laptop computer</p>
                      </div>
                      <div className="px-3 py-1 bg-amber-100 rounded-full">
                        <span className="text-amber-700 text-xs font-medium">Free</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="px-4 py-1 bg-slate-100 rounded-full">
                      <span className="text-slate-500 text-sm">OR</span>
                    </div>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-semibold">Cloud Server / VPS</p>
                        <p className="text-slate-500 text-sm">Always-on remote machine</p>
                      </div>
                      <div className="px-3 py-1 bg-teal-100 rounded-full">
                        <span className="text-teal-700 text-xs font-medium">Reliable</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insight */}
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                  <p className="text-slate-600 text-sm">
                    <span className="text-amber-700 font-semibold">Pro tip:</span> Start with PC for testing,
                    move to server when your strategy is production-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Decision Flowchart */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-teal-50 rounded-3xl p-8 lg:p-10 border border-amber-100 mb-20">
          <h3 className="text-center text-sm font-semibold text-amber-500 uppercase tracking-widest mb-2">
            Deployment Decision
          </h3>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Click to explore what each deployment option means for your algo trading
          </p>

          {/* Interactive Choice Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            {/* PC */}
            <button
              onClick={() => setUseServer(false)}
              className={`relative w-full md:w-80 p-8 rounded-3xl border-2 transition-all duration-300 group ${
                !useServer
                  ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl shadow-amber-200/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all ${
                !useServer ? 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <Laptop2 className={`w-10 h-10 transition-colors ${!useServer ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Local PC</h3>
              <p className="text-sm text-slate-500 text-center mb-5">Your desktop or laptop</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Free</span>
                <span className="text-xs px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium">Medium reliability</span>
              </div>
              {!useServer && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              )}
            </button>

            {/* VS Connector */}
            <div className="flex flex-col items-center gap-2">
              <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-amber-300 to-teal-300" />
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">VS</span>
              </div>
              <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-teal-300 to-amber-300" />
              <ArrowDown className="w-5 h-5 text-teal-400 md:hidden" />
            </div>

            {/* Server */}
            <button
              onClick={() => setUseServer(true)}
              className={`relative w-full md:w-80 p-8 rounded-3xl border-2 transition-all duration-300 group ${
                useServer
                  ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-xl shadow-teal-200/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all ${
                useServer ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <Cloud className={`w-10 h-10 transition-colors ${useServer ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Server / VPS</h3>
              <p className="text-sm text-slate-500 text-center mb-5">Cloud-based infrastructure</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">Monthly cost</span>
                <span className="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">High reliability</span>
              </div>
              {useServer && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              )}
            </button>
          </div>

          {/* Arrow to Details */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className={`w-6 h-6 ${useServer ? 'text-teal-500' : 'text-amber-500'}`} />
              <span className="text-sm text-slate-500">Explore details below</span>
            </div>
          </div>
        </div>

        {/* Part 3A: Detailed Comparison - Two Light Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* PC Card */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
            !useServer ? 'ring-2 ring-amber-400 ring-offset-2' : 'opacity-70 hover:opacity-100'
          }`}>
            <div className="bg-amber-50 border-2 border-amber-200 p-8 lg:p-10 h-full">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Laptop2 className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Local PC</h3>
                    <p className="text-amber-600">Desktop / Laptop</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider">Advantages</p>
                    {['No hosting cost', 'Full control', 'Easy debugging', 'Good for testing'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase mb-3 tracking-wider">Limitations</p>
                    {['Sleep mode risk', 'Restart issues', 'Internet/power cuts', 'Not 24/7'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-amber-100 rounded-xl border border-amber-200">
                  <p className="text-center">
                    <span className="text-amber-700">Best for: </span>
                    <span className="text-slate-800 font-semibold">Testing, development, manual monitoring</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Server Card */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
            useServer ? 'ring-2 ring-teal-400 ring-offset-2' : 'opacity-70 hover:opacity-100'
          }`}>
            <div className="bg-teal-50 border-2 border-teal-200 p-8 lg:p-10 h-full">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <Cloud className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Server / VPS</h3>
                    <p className="text-teal-600">Cloud Infrastructure</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider">Advantages</p>
                    {['Runs 24/7 reliably', 'No PC dependency', 'Remote access', 'Professional'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase mb-3 tracking-wider">Limitations</p>
                    {['Monthly cost', 'Setup required', 'Tech knowledge'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-teal-100 rounded-xl border border-teal-200">
                  <p className="text-center">
                    <span className="text-teal-700">Best for: </span>
                    <span className="text-slate-800 font-semibold">Production, client systems, reliability</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3B: PC Risks - Warning Section */}
        {!useServer && (
          <div className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 border-2 border-amber-200 rounded-3xl p-8 lg:p-10 mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">PC Deployment Risks</h3>
                <p className="text-slate-600">Why PC alone is risky for production trading</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Power, label: 'Power Cut', desc: 'System shuts down unexpectedly', color: 'rose' },
                { icon: RefreshCw, label: 'Restart', desc: 'Bot stops after updates', color: 'amber' },
                { icon: Wifi, label: 'Internet', desc: 'Connection lost mid-trade', color: 'orange' },
                { icon: Clock, label: 'Sleep Mode', desc: 'PC goes idle automatically', color: 'red' },
              ].map((risk, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 text-center border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center ${
                    risk.color === 'rose' ? 'bg-rose-100' :
                    risk.color === 'amber' ? 'bg-amber-100' :
                    risk.color === 'orange' ? 'bg-orange-100' :
                    'bg-red-100'
                  }`}>
                    <risk.icon className={`w-7 h-7 ${
                      risk.color === 'rose' ? 'text-rose-600' :
                      risk.color === 'amber' ? 'text-amber-600' :
                      risk.color === 'orange' ? 'text-orange-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <p className="font-bold text-slate-800 mb-1">{risk.label}</p>
                  <p className="text-sm text-slate-500">{risk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Part 3C: Server Providers - Interactive (only shows when Server selected) */}
        {useServer && (
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Popular Server Providers</h3>
              <p className="text-slate-500">Choose based on your budget and technical needs</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left - Selection Panel */}
              <div className="lg:col-span-2 space-y-4">
                {serverProviders.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => setActiveProvider(provider)}
                    className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                      activeProvider.id === provider.id
                        ? provider.color === 'amber'
                          ? 'border-amber-400 bg-amber-50 shadow-lg'
                          : provider.color === 'blue'
                            ? 'border-blue-400 bg-blue-50 shadow-lg'
                            : 'border-violet-400 bg-violet-50 shadow-lg'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                        activeProvider.id === provider.id
                          ? provider.color === 'amber' ? 'bg-amber-500' : provider.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                          : 'bg-slate-100'
                      }`}>
                        <Cloud className={`w-7 h-7 ${activeProvider.id === provider.id ? 'text-white' : 'text-slate-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{provider.name}</h4>
                        <p className="text-sm text-slate-500 line-clamp-1">{provider.desc.split('.')[0]}</p>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${activeProvider.id === provider.id ? 'text-slate-600' : 'text-slate-300'}`} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Right - Detail Panel with Light Colors */}
              <div className="lg:col-span-3">
                <div className={`h-full rounded-3xl p-8 lg:p-10 transition-all duration-300 border-2 ${
                  activeProvider.color === 'amber'
                    ? 'bg-amber-50 border-amber-200'
                    : activeProvider.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-violet-50 border-violet-200'
                }`}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      activeProvider.color === 'amber' ? 'bg-amber-100' :
                      activeProvider.color === 'blue' ? 'bg-blue-100' : 'bg-violet-100'
                    }`}>
                      <Cloud className={`w-8 h-8 ${
                        activeProvider.color === 'amber' ? 'text-amber-600' :
                        activeProvider.color === 'blue' ? 'text-blue-600' : 'text-violet-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{activeProvider.name}</h3>
                      <p className="text-slate-500">Cloud Provider</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {activeProvider.desc}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeProvider.features.map((feature, i) => (
                      <div key={i} className={`flex items-center gap-2 px-4 py-3 bg-white rounded-xl border ${
                        activeProvider.color === 'amber' ? 'border-amber-200' :
                        activeProvider.color === 'blue' ? 'border-blue-200' : 'border-violet-200'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                          activeProvider.color === 'amber' ? 'text-amber-500' :
                          activeProvider.color === 'blue' ? 'text-blue-500' : 'text-violet-500'
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

        {/* Part 4: Cost Optimization Tip */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="w-28 h-28 rounded-3xl bg-emerald-100 flex items-center justify-center mx-auto lg:mx-0">
                <IndianRupee className="w-14 h-14 text-emerald-600" />
              </div>

              {/* Floating badges */}
              <div className="hidden lg:flex absolute top-0 right-20 items-center gap-2 px-3 py-2 bg-white rounded-lg border border-emerald-200 shadow-sm">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 text-sm">Mon - Fri</span>
              </div>
              <div className="hidden lg:flex absolute bottom-0 right-10 items-center gap-2 px-3 py-2 bg-white rounded-lg border border-emerald-200 shadow-sm">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 text-sm">9:00 - 3:30</span>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                Cost Optimization Tip
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Server doesn&apos;t need to run 24/7. In Indian market context, schedule it for market hours only:
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-emerald-200">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                  <span className="text-slate-700 font-semibold">Monday - Friday</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-emerald-200">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <span className="text-slate-700 font-semibold">9:00 AM - 3:30 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-emerald-100 rounded-xl border-l-4 border-emerald-500">
                <Zap className="w-6 h-6 text-emerald-600" />
                <span className="text-emerald-700 font-semibold text-lg">Reduces cost by 60-70% & avoids wastage!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Summary */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">Quick Decision Guide</h4>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl">
                <Laptop2 className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-medium">Testing & Dev → PC OK</span>
              </div>
              <span className="text-slate-400 font-bold">vs</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-xl">
                <Cloud className="w-5 h-5 text-teal-600" />
                <span className="text-teal-800 font-medium">Production → Server Better</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
