'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, LineChart, TrendingUp, Target, Shield, Sparkles } from 'lucide-react';

const metrics = [
  { label: 'Execution', value: 'Auto' },
  { label: 'Controls', value: '5+' },
  { label: 'Monitoring', value: 'Real-time' },
];

export const OptionsTradingDashboardCard: React.FC = () => {
  const icons = [LineChart, TrendingUp, Target, Shield];

  return (
    <section className="relative py-6 lg:py-10 bg-white">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)'
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #CBD5E1)' }}
          />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200/80 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span className="text-xs font-semibold tracking-wide uppercase text-black">
              Python Project
            </span>
          </div>
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, #CBD5E1, transparent)' }}
          />
        </div>

        {/* Card */}
        <div className="relative">
          <div
            className="absolute -inset-1 rounded-[2rem] opacity-50 blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, transparent 50%, rgba(20, 184, 166, 0.04) 100%)'
            }}
          />

          <div
            className="relative bg-white rounded-[1.75rem] p-8 lg:p-10 overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #14B8A6 20%, #0D9488 50%, #14B8A6 80%, transparent 100%)'
              }}
            />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 0.5px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="lg:col-span-3">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
                      border: '1px solid rgba(20, 184, 166, 0.2)'
                    }}
                  >
                    <TrendingUp className="w-7 h-7 text-teal-600" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1.5">
                      Trade Automation
                    </p>
                    <h3 className="text-2xl lg:text-[1.75rem] font-bold text-slate-900 leading-tight">
                      Automated Options Trading Dashboard
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-black mb-5 leading-relaxed">
                  Built for options traders who need a fully automated system to manage and execute strategies with minimal manual intervention — providing real-time portfolio insights, one-click execution controls, and complete trade transparency.
                </p>

                <p className="text-lg text-black mb-6 leading-relaxed">
                  <span className="font-semibold text-slate-700">The Challenge: </span>
                  Manual options trading requires constant monitoring of multiple positions, strategy targets, and leg-level adjustments. Traders struggle with execution speed and limited visibility...
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/projects/options-trading-dashboard"
                    className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 text-white rounded-xl
                             text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-200"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

              {/* Right: Metrics Grid - 2 on top, 1 centred below */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  {metrics.slice(0, 2).map((metric, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                      <div
                        key={metric.label}
                        className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 text-center
                                 hover:bg-white hover:border-slate-200 hover:shadow-sm
                                 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4 text-teal-500 mx-auto mb-2.5" />
                        <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-0.5 tracking-tight">
                          {metric.value}
                        </p>
                        <p className="text-[10px] font-semibold text-black uppercase tracking-wider">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center">
                  {metrics.slice(2).map((metric, i) => {
                    const Icon = icons[(i + 2) % icons.length];
                    return (
                      <div
                        key={metric.label}
                        className="w-1/2 bg-slate-50/80 border border-slate-100 rounded-2xl p-4 text-center
                                 hover:bg-white hover:border-slate-200 hover:shadow-sm
                                 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4 text-teal-500 mx-auto mb-2.5" />
                        <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-0.5 tracking-tight">
                          {metric.value}
                        </p>
                        <p className="text-[10px] font-semibold text-black uppercase tracking-wider">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsTradingDashboardCard;
