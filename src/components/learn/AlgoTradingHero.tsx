'use client';

import React from 'react';
import { Bot } from 'lucide-react';

// Wave-like flowing lines visual
const WaveFlowVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px]" viewBox="0 0 1000 300" fill="none">
      {/* Primary flowing wave */}
      <path
        d="M0 150 Q125 90 250 150 Q375 210 500 150 Q625 90 750 150 Q875 210 1000 150"
        className="stroke-teal-400"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      {/* Secondary wave */}
      <path
        d="M0 170 Q150 110 300 170 Q450 230 600 170 Q750 110 900 170 Q950 200 1000 170"
        className="stroke-cyan-300"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      {/* Tertiary subtle wave */}
      <path
        d="M0 130 Q100 180 200 130 Q300 80 400 130 Q500 180 600 130 Q700 80 800 130 Q900 180 1000 130"
        className="stroke-blue-300"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      {/* Data points on waves */}
      <circle cx="250" cy="150" r="5" className="fill-teal-500" opacity="0.6" />
      <circle cx="500" cy="150" r="6" className="fill-teal-600" opacity="0.7" />
      <circle cx="750" cy="150" r="5" className="fill-teal-500" opacity="0.6" />
    </svg>
  </div>
);

const AlgoTradingHero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-28 lg:pt-32 pb-16">
      {/* Simple soft background accents */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-teal-50/60 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-blue-50/50 to-transparent rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header with wave visual */}
        <div className="relative text-center mb-12 lg:mb-14">
          <WaveFlowVisual />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
              <Bot className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">
                Complete Guide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              The Complete Guide to{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Algo Trading
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Algo trading is not about a robot giving 100% profit. It&apos;s about your rules being followed
              100% with discipline, because <span className="font-semibold text-teal-700">systems don&apos;t have emotions</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgoTradingHero;
