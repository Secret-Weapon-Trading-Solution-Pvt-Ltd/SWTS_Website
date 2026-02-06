'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';
import {
  Target,
  LogOut,
  Brain,
  CheckCircle2,
  Clock,
  Zap,
  Activity,
  TrendingUp,
  TrendingDown,
  MinusCircle,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

const signalOptions = [
  {
    id: 'candle',
    title: 'Candle Close',
    icon: Clock,
    speed: 'Moderate',
    accuracy: 'High',
    desc: 'Wait for candle to close before confirming signal. More reliable, fewer false signals.',
    color: 'teal',
  },
  {
    id: 'live',
    title: 'Live / Intrabar',
    icon: Zap,
    speed: 'Fast',
    accuracy: 'Medium',
    desc: 'Signal triggers as soon as price touches level. Quick entry but may repaint.',
    color: 'blue',
  },
  {
    id: 'tick',
    title: 'Tick-based',
    icon: Activity,
    speed: 'Ultra Fast',
    accuracy: 'Variable',
    desc: 'Tick-by-tick price movement triggers. HFT style, needs robust infrastructure.',
    color: 'violet',
  },
];

const StrategySignalSection: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState(signalOptions[0]);

  return (
    <section id="strategy-signal" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              2
            </div>
            <div>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">Step 02</p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Strategy</span> & Signal
              </h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-300 to-transparent ml-6" />
        </motion.div>

        {/* PART 1: Introduction - Left Right Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
              Your Trading Rules in Code
            </div>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Clear <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Rules</span> = Clean Signals
            </h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              A strategy defines exactly when to buy, when to sell, and when to stay out.
              No random trades - only rule-based, disciplined execution. Your emotions stay out.
            </p>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Your strategy is the brain of your algo system. It analyzes incoming data, applies your trading logic,
              and generates clear signals when conditions match. No guessing, no hesitation - just systematic execution.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: 'Define entry conditions', desc: 'Precise buy triggers', icon: Target, gradient: 'from-emerald-500 to-teal-500', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200' },
                { text: 'Set exit & protection', desc: 'SL, targets, limits', icon: LogOut, gradient: 'from-rose-500 to-pink-500', bg: 'from-rose-50 to-pink-50', border: 'border-rose-200' },
                { text: 'Auto signal generation', desc: 'Real-time triggers', icon: Zap, gradient: 'from-blue-500 to-indigo-500', bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
                { text: 'Emotion-free trading', desc: 'Disciplined execution', icon: Brain, gradient: 'from-violet-500 to-purple-500', bg: 'from-violet-50 to-purple-50', border: 'border-violet-200' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-3 p-4 bg-gradient-to-br ${item.bg} rounded-xl border ${item.border} shadow-sm hover:shadow-md transition-all`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.text}</h4>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={getAssetPath('/strategy-signal.jpg')}
              alt="Strategy and Signal Generation"
              width={600}
              height={600}
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* PART 2: Signal Flow */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Signal Generation Flow</h3>
            <p className="text-slate-500">How your strategy processes data and generates signals</p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {[
                { icon: Activity, title: 'Data Arrives', sub: 'New candle/tick', bgColor: 'bg-teal-100', textColor: 'text-teal-600' },
                { icon: Brain, title: 'Strategy Checks', sub: 'Apply your rules', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
                { icon: Target, title: 'Condition Match?', sub: 'Yes / No', bgColor: 'bg-violet-100', textColor: 'text-violet-600' },
                { icon: Zap, title: 'Signal Output', sub: 'BUY / SELL / WAIT', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600' },
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center group">
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <step.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${step.textColor}`} />
                    </div>
                    <h4 className="mt-4 font-bold text-slate-800">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.sub}</p>
                  </div>
                  {idx < arr.length - 1 && (
                    <>
                      <ArrowRight className="w-8 h-8 text-slate-300 hidden lg:block" />
                      <ArrowDown className="w-8 h-8 text-slate-300 lg:hidden" />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PART 3A: Entry & Exit Rules - Left Right */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Entry Rule */}
          <div className="group">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">ENTRY</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Entry Rule</h4>
              <p className="text-slate-600 mb-6">When to BUY? Define exact conditions that must be met before entering a trade.</p>
              <div className="space-y-3">
                {['Buy condition logic', 'Indicator crossovers', 'Price action patterns', 'Volume confirmation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-emerald-200 rounded-lg px-4 py-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exit Rule */}
          <div className="group">
            <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center">
                  <LogOut className="w-8 h-8 text-rose-600" />
                </div>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">EXIT</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Exit Rule</h4>
              <p className="text-slate-600 mb-6">When to EXIT? Define stop loss, target, and limits to protect your capital.</p>
              <div className="space-y-3">
                {['Stop Loss (SL)', 'Target / Take Profit', 'Max trades per day', 'Daily loss limit'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-rose-200 rounded-lg px-4 py-2">
                    <TrendingDown className="w-5 h-5 text-rose-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* PART 3B: Signal Types */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Signal Types</h3>
            <p className="text-slate-500">Three possible outcomes from your strategy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Entry Signal */}
            <div className="bg-emerald-50 rounded-3xl border-2 border-emerald-200 p-8 text-center hover:shadow-xl hover:border-emerald-400 transition-all">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-emerald-700 mb-2">ENTRY</h4>
              <p className="text-slate-500">All conditions met, time to enter the trade</p>
            </div>

            {/* Exit Signal */}
            <div className="bg-rose-50 rounded-3xl border-2 border-rose-200 p-8 text-center hover:shadow-xl hover:border-rose-400 transition-all">
              <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10 text-rose-600" />
              </div>
              <h4 className="text-xl font-bold text-rose-700 mb-2">EXIT</h4>
              <p className="text-slate-500">Close position - target hit or stop triggered</p>
            </div>

            {/* No Trade */}
            <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 p-8 text-center hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                <MinusCircle className="w-10 h-10 text-slate-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-600 mb-2">NO TRADE</h4>
              <p className="text-slate-500">Conditions not met, wait for next setup</p>
            </div>
          </div>
        </motion.div>

        {/* PART 3C: Signal Timing - Interactive */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Signal Timing</h3>
            <p className="text-slate-500">When should the signal generate? Choose your approach.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Timing Options - Left */}
            <div className="lg:col-span-2 space-y-4">
              {signalOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveSignal(option)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                    activeSignal.id === option.id
                      ? option.color === 'teal'
                        ? 'border-teal-400 bg-teal-50 shadow-lg'
                        : option.color === 'blue'
                          ? 'border-blue-400 bg-blue-50 shadow-lg'
                          : 'border-violet-400 bg-violet-50 shadow-lg'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    activeSignal.id === option.id
                      ? option.color === 'teal' ? 'bg-teal-500' : option.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                      : 'bg-slate-100'
                  }`}>
                    <option.icon className={`w-7 h-7 ${activeSignal.id === option.id ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{option.title}</h4>
                    <div className="flex gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        option.speed === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                        option.speed === 'Fast' ? 'bg-blue-100 text-blue-700' :
                        'bg-violet-100 text-violet-700'
                      }`}>{option.speed}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        option.accuracy === 'High' ? 'bg-emerald-100 text-emerald-700' :
                        option.accuracy === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>{option.accuracy} Accuracy</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Details - Right */}
            <div className="lg:col-span-3">
              <div className={`rounded-3xl p-8 h-full border-2 ${
                activeSignal.color === 'teal' ? 'bg-teal-50 border-teal-200' :
                activeSignal.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                'bg-violet-50 border-violet-200'
              } shadow-sm`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    activeSignal.color === 'teal' ? 'bg-teal-100' :
                    activeSignal.color === 'blue' ? 'bg-blue-100' : 'bg-violet-100'
                  }`}>
                    <activeSignal.icon className={`w-8 h-8 ${
                      activeSignal.color === 'teal' ? 'text-teal-600' :
                      activeSignal.color === 'blue' ? 'text-blue-600' : 'text-violet-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800">{activeSignal.title}</h4>
                    <div className="flex gap-2 mt-2">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        activeSignal.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                        activeSignal.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
                      }`}>{activeSignal.speed}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        activeSignal.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                        activeSignal.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
                      }`}>{activeSignal.accuracy} Accuracy</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6">{activeSignal.desc}</p>

                {/* Trade-off visual */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <Clock className="w-6 h-6 mx-auto mb-1 text-slate-500" />
                      <p className="text-sm text-slate-500">More Confirmed</p>
                    </div>
                    <div className="flex-1 mx-4 relative">
                      <div className="h-2 bg-slate-200 rounded-full" />
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-all ${
                          activeSignal.color === 'teal' ? 'bg-teal-500' :
                          activeSignal.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                        }`}
                        style={{
                          left: activeSignal.id === 'candle' ? '10%' : activeSignal.id === 'live' ? '50%' : '90%'
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <Zap className="w-6 h-6 mx-auto mb-1 text-slate-500" />
                      <p className="text-sm text-slate-500">Faster Entry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-50 border-2 border-blue-200 text-blue-700 rounded-full shadow-lg">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-lg">Clearer strategy = Cleaner signals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySignalSection;
