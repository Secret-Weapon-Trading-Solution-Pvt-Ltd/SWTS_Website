'use client';

import React, { useState } from 'react';
import {
  Zap,
  BarChart3,
  Bot,
  Bell,
  MessageSquare,
  Mail,
  Smartphone,
  CheckCircle2,
  XCircle,
  Shield,
  Send,
  Target,
  ArrowRight,
  ArrowDown,
  FileText,
  AlertCircle,
  Play,
  Activity,
  TrendingUp,
  Settings,
} from 'lucide-react';

const executionModes = [
  {
    id: 'screener',
    title: 'Dashboard Screener',
    subtitle: 'Analytics Only',
    icon: BarChart3,
    description:
      'System does not place trades. Python processes data, runs indicators/strategy, and shows analytics on dashboard. You see signals, analyze them, and decide to trade manually.',
    pros: ['Signal list & alerts', 'Win-rate & PnL reports', 'Trade logs', 'Market snapshots'],
    cons: ['Manual trade execution', 'Delay in execution', 'Human error possible'],
    outcome: 'Decision Support Tool - You see, analyze, then decide to trade',
    color: 'blue',
    features: ['Real-time signals', 'PnL analytics', 'Trade history', 'Market overview'],
  },
  {
    id: 'full-auto',
    title: 'Full Auto Execution',
    subtitle: 'Automated Trading',
    icon: Bot,
    description:
      'Python places orders via broker API as soon as signal comes. Confirms fills, handles rejections, sets SL/TP automatically. Complete hands-off trading with full position management.',
    pros: ['Auto order placement', 'Fill confirmation', 'Auto SL/TP setup', 'Position management'],
    cons: ['Needs robust error handling', 'Higher complexity', 'Requires monitoring'],
    outcome: 'System executes fully - not just signals but actual trades',
    color: 'teal',
    features: ['Instant execution', 'Auto SL/TP', 'Risk management', 'Fill tracking'],
  },
];

const notificationChannels = [
  { icon: MessageSquare, label: 'Telegram', color: 'blue', desc: 'Instant bot messages' },
  { icon: Mail, label: 'Email', color: 'rose', desc: 'Detailed reports' },
  { icon: Smartphone, label: 'SMS', color: 'emerald', desc: 'Critical alerts' },
  { icon: Bell, label: 'WhatsApp', color: 'green', desc: 'Quick updates' },
  { icon: FileText, label: 'Dashboard', color: 'violet', desc: 'Visual logs' },
];

const ExecutionSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState(executionModes[1]);

  return (
    <section id="execution" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-100/50 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Step 03</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Order Execution</h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-6" />
        </div>

        {/* Part 1: Introduction - Left Visual, Right Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left - Light Visual Card */}
          <div className="relative">
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 lg:p-10 shadow-lg">
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-emerald-600 text-sm font-medium">Final Step</p>
                    <h3 className="text-xl font-bold text-slate-800">Execution Engine</h3>
                  </div>
                </div>

                {/* Execution Flow Visual */}
                <div className="space-y-3">
                  {[
                    { icon: Bell, label: 'Signal Received', color: 'teal' },
                    { icon: Shield, label: 'Validation Check', color: 'blue' },
                    { icon: Send, label: 'Order Placed', color: 'violet' },
                    { icon: CheckCircle2, label: 'Fill Confirmed', color: 'emerald' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        step.color === 'teal' ? 'bg-teal-100' :
                        step.color === 'blue' ? 'bg-blue-100' :
                        step.color === 'violet' ? 'bg-violet-100' :
                        'bg-emerald-100'
                      }`}>
                        <step.icon className={`w-5 h-5 ${
                          step.color === 'teal' ? 'text-teal-600' :
                          step.color === 'blue' ? 'text-blue-600' :
                          step.color === 'violet' ? 'text-violet-600' :
                          'text-emerald-600'
                        }`} />
                      </div>
                      <div className="flex-1 h-0.5 bg-slate-200 rounded" />
                      <span className="text-slate-600 text-sm font-medium">{step.label}</span>
                    </div>
                  ))}
                </div>

                {/* Insight */}
                <div className="mt-6 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                  <p className="text-slate-600 text-sm">
                    <span className="text-emerald-700 font-semibold">Goal:</span> Not just &quot;order sent&quot;,
                    but &quot;order filled + protection set&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
              <Play className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Signal to Trade</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Signal Generated. <span className="text-emerald-600">Now What?</span>
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Order execution in Python is not just pressing buy/sell. It&apos;s a complete engine that receives signal,
              validates it, places order via broker API, confirms the fill, and sets up protection (SL/TP).
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              You have two choices: either show the signal on dashboard for manual trading, or let the system
              execute trades automatically. Both approaches have their place depending on your needs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <BarChart3 className="w-6 h-6 text-blue-600 mb-2" />
                <p className="font-semibold text-slate-800">Screener Mode</p>
                <p className="text-sm text-slate-500">Show signals, manual trade</p>
              </div>
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
                <Bot className="w-6 h-6 text-teal-600 mb-2" />
                <p className="font-semibold text-slate-800">Auto Mode</p>
                <p className="text-sm text-slate-500">System trades for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Execution Engine Flow */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-3">
            What is an Execution Engine?
          </h3>
          <p className="text-slate-500 text-center max-w-3xl mx-auto mb-10">
            A complete pipeline that handles everything from signal to confirmed trade with protection
          </p>

          {/* Flow Steps - Visual Flowchart */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-10">
            {[
              { icon: Bell, label: 'Signal Received', desc: 'From strategy', color: 'teal' },
              { icon: Shield, label: 'Validation', desc: 'Risk checks', color: 'blue' },
              { icon: Send, label: 'Order Sent', desc: 'Via broker API', color: 'violet' },
              { icon: CheckCircle2, label: 'Fill Confirmed', desc: 'Execution done', color: 'emerald' },
              { icon: Target, label: 'SL/TP Set', desc: 'Protection active', color: 'amber' },
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center">
                  <div className={`w-18 h-18 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shadow-sm border ${
                    step.color === 'teal' ? 'bg-teal-100 border-teal-200' :
                    step.color === 'blue' ? 'bg-blue-100 border-blue-200' :
                    step.color === 'violet' ? 'bg-violet-100 border-violet-200' :
                    step.color === 'emerald' ? 'bg-emerald-100 border-emerald-200' :
                    'bg-amber-100 border-amber-200'
                  }`}>
                    <step.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      step.color === 'teal' ? 'text-teal-600' :
                      step.color === 'blue' ? 'text-blue-600' :
                      step.color === 'violet' ? 'text-violet-600' :
                      step.color === 'emerald' ? 'text-emerald-600' :
                      'text-amber-600'
                    }`} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-700 text-center">{step.label}</p>
                  <p className="text-xs text-slate-500 text-center">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <>
                    <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                    <ArrowDown className="w-6 h-6 text-slate-400 md:hidden" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Key Point */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-center text-lg">
              <span className="text-slate-600">Execution goal: Not just </span>
              <span className="text-amber-600 font-semibold">&quot;order sent&quot;</span>
              <span className="text-slate-600">, but </span>
              <span className="text-emerald-600 font-semibold">&quot;order filled + protection set&quot;</span>
            </p>
          </div>
        </div>

        {/* Part 3: Decision Flowchart */}
        <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 rounded-3xl p-8 lg:p-10 border border-emerald-100 mb-20">
          <h3 className="text-center text-sm font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Execution Modes
          </h3>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Choose based on your needs: just analytics, or fully automated trading
          </p>

          {/* Interactive Choice Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            {/* Screener */}
            <button
              onClick={() => setActiveMode(executionModes[0])}
              className={`relative w-full md:w-80 p-8 rounded-3xl border-2 transition-all duration-300 group ${
                activeMode.id === 'screener'
                  ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl shadow-blue-200/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all ${
                activeMode.id === 'screener' ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <BarChart3 className={`w-10 h-10 transition-colors ${activeMode.id === 'screener' ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Screener</h3>
              <p className="text-sm text-slate-500 text-center mb-5">Analytics & decision support</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">Analytics</span>
                <span className="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Manual trade</span>
              </div>
              {activeMode.id === 'screener' && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              )}
            </button>

            {/* VS Connector */}
            <div className="flex flex-col items-center gap-2">
              <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-blue-300 to-teal-300" />
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">VS</span>
              </div>
              <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-teal-300 to-blue-300" />
              <ArrowDown className="w-5 h-5 text-teal-400 md:hidden" />
            </div>

            {/* Full Auto */}
            <button
              onClick={() => setActiveMode(executionModes[1])}
              className={`relative w-full md:w-80 p-8 rounded-3xl border-2 transition-all duration-300 group ${
                activeMode.id === 'full-auto'
                  ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-xl shadow-teal-200/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all ${
                activeMode.id === 'full-auto' ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <Bot className={`w-10 h-10 transition-colors ${activeMode.id === 'full-auto' ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Full Auto</h3>
              <p className="text-sm text-slate-500 text-center mb-5">System trades automatically</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full font-medium">Automated</span>
                <span className="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Auto SL/TP</span>
              </div>
              {activeMode.id === 'full-auto' && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              )}
            </button>
          </div>

          {/* Arrow to Details */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className={`w-6 h-6 ${activeMode.id === 'full-auto' ? 'text-teal-500' : 'text-blue-500'}`} />
              <span className="text-sm text-slate-500">Explore details below</span>
            </div>
          </div>
        </div>

        {/* Part 4: Detailed Comparison - Two Light Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Screener Card */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
            activeMode.id === 'screener' ? 'ring-2 ring-blue-400 ring-offset-2' : 'opacity-70 hover:opacity-100'
          }`}>
            <div className="bg-blue-50 border-2 border-blue-200 p-8 lg:p-10 h-full">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Dashboard Screener</h3>
                    <p className="text-blue-600">Analytics & decision support</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">{executionModes[0].description}</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider">Features</p>
                    {executionModes[0].pros.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase mb-3 tracking-wider">Limitations</p>
                    {executionModes[0].cons.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-100 rounded-xl border border-blue-200">
                  <p className="text-center text-slate-700 font-medium">{executionModes[0].outcome}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Auto Card */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
            activeMode.id === 'full-auto' ? 'ring-2 ring-teal-400 ring-offset-2' : 'opacity-70 hover:opacity-100'
          }`}>
            <div className="bg-teal-50 border-2 border-teal-200 p-8 lg:p-10 h-full">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <Bot className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Full Auto Execution</h3>
                    <p className="text-teal-600">Automated trading system</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">{executionModes[1].description}</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider">Features</p>
                    {executionModes[1].pros.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase mb-3 tracking-wider">Limitations</p>
                    {executionModes[1].cons.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-teal-100 rounded-xl border border-teal-200">
                  <p className="text-center text-slate-700 font-medium">{executionModes[1].outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 5: Notifications Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Notifications</h3>
            <p className="text-slate-500">Stay informed at every step of the execution process</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Notification Channels */}
            <div className="bg-gradient-to-br from-pink-50 via-violet-50 to-purple-50 border border-pink-200 rounded-3xl p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Notification Channels</h4>
                  <p className="text-slate-500 text-sm">Multiple ways to stay updated</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {notificationChannels.map((channel, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 text-center border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                      channel.color === 'blue' ? 'bg-blue-100' :
                      channel.color === 'rose' ? 'bg-rose-100' :
                      channel.color === 'emerald' ? 'bg-emerald-100' :
                      channel.color === 'green' ? 'bg-green-100' :
                      'bg-violet-100'
                    }`}>
                      <channel.icon className={`w-6 h-6 ${
                        channel.color === 'blue' ? 'text-blue-500' :
                        channel.color === 'rose' ? 'text-rose-500' :
                        channel.color === 'emerald' ? 'text-emerald-500' :
                        channel.color === 'green' ? 'text-green-500' :
                        'text-violet-500'
                      }`} />
                    </div>
                    <p className="font-semibold text-slate-800 text-sm">{channel.label}</p>
                    <p className="text-xs text-slate-500">{channel.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Events Flow */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 lg:p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-2">Events You Get Notified About</h4>
              <p className="text-slate-500 text-sm mb-6">Python sends updates for every important step</p>

              <div className="space-y-3">
                {[
                  { event: 'Signal received', icon: Bell, color: 'teal' },
                  { event: 'Order sent', icon: Send, color: 'blue' },
                  { event: 'Filled at price', icon: CheckCircle2, color: 'emerald' },
                  { event: 'SL/TP placed', icon: Target, color: 'amber' },
                  { event: 'Rejected', icon: XCircle, color: 'rose' },
                  { event: 'Position closed', icon: Activity, color: 'violet' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-200">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.color === 'teal' ? 'bg-teal-100' :
                      item.color === 'blue' ? 'bg-blue-100' :
                      item.color === 'emerald' ? 'bg-emerald-100' :
                      item.color === 'amber' ? 'bg-amber-100' :
                      item.color === 'rose' ? 'bg-rose-100' :
                      'bg-violet-100'
                    }`}>
                      <item.icon className={`w-5 h-5 ${
                        item.color === 'teal' ? 'text-teal-600' :
                        item.color === 'blue' ? 'text-blue-600' :
                        item.color === 'emerald' ? 'text-emerald-600' :
                        item.color === 'amber' ? 'text-amber-600' :
                        item.color === 'rose' ? 'text-rose-600' :
                        'text-violet-600'
                      }`} />
                    </div>
                    <span className="text-slate-700 font-medium">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decision Summary */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">Quick Decision Guide</h4>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Screener → Manual Trading</span>
              </div>
              <span className="text-slate-400 font-bold">vs</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-xl">
                <Bot className="w-5 h-5 text-teal-600" />
                <span className="text-teal-800 font-medium">Full Auto → Automated Trading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
