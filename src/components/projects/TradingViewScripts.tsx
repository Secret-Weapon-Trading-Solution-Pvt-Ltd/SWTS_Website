'use client';

import React from 'react';
import {
  ExternalLink,
  TrendingUp,
  LineChart,
  Lock,
  Star,
  BarChart2,
} from 'lucide-react';

// TradingView scripts data
const tradingViewScripts = [
  {
    id: 1,
    name: 'SuperTrend Screener',
    subtitle: 'Monitor 40 symbols at a glance',
    description: 'A multi-symbol trend analysis tool that displays SuperTrend indicators across up to 40 different securities simultaneously using a color-coded table — green for uptrends and red for downtrends — so you never need to switch between individual charts again.',
    likes: 'New',
    url: 'https://in.tradingview.com/script/Em5N0UOg-SuperTrend-Screener/',
    icon: 'trending',
    category: 'Trend Analysis',
    tags: ['SuperTrend', 'Screener', 'ATR'],
  },
  {
    id: 2,
    name: 'All In One Indicator',
    subtitle: '14 indicators in a single script',
    description: 'A consolidated technical analysis tool that merges 14 of the most popular indicators — including Moving Averages (SMA, EMA, HMA, VWMA and more), Bollinger Bands, SuperTrend, and RSI — into a single interface with a real-time color-coded dashboard, so you can analyse any market without cluttering your chart.',
    likes: '1',
    url: 'https://in.tradingview.com/script/oAtGYiaT-All-In-One-Indicator/',
    icon: 'chart',
    category: 'Multi-Indicator',
    tags: ['Moving Averages', 'RSI', 'Bollinger Bands'],
  },
];

const iconMap: Record<string, React.ElementType> = {
  trending: TrendingUp,
  chart: LineChart,
  bar: BarChart2,
};

export const TradingViewScripts: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-slate-50">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 0.5px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">

        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #CBD5E1)' }}
          />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200/80 rounded-full shadow-sm">
            <img
              src="https://www.tradingview.com/static/images/favicon.ico"
              alt="TradingView"
              className="w-4 h-4"
            />
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-600">
              TradingView Scripts
            </span>
          </div>
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, #CBD5E1, transparent)' }}
          />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Open-Source Trading Scripts
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Free, protected Pine Script indicators published on TradingView — built for precision and performance.
          </p>
        </div>

        {/* Scripts Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tradingViewScripts.map((script) => {
            const Icon = iconMap[script.icon] || LineChart;
            return (
              <a
                key={script.id}
                href={script.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden
                           border border-slate-200/80 hover:border-teal-300/70
                           shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
                           hover:-translate-y-1.5
                           transition-all duration-300 ease-out"
              >
                {/* Top gradient bar */}
                <div
                  className="h-[3px] w-full"
                  style={{
                    background: 'linear-gradient(90deg, #0D9488, #14B8A6, #5EEAD4)',
                  }}
                />

                <div className="flex flex-col flex-1 p-7">

                  {/* Top row: badges + likes */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        background: 'rgba(20,184,166,0.08)',
                        color: '#0D9488',
                        border: '1px solid rgba(20,184,166,0.2)',
                      }}
                    >
                      {script.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200/70 rounded-full">
                        <Lock className="w-3 h-3 text-amber-500" />
                        <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">Protected</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-300" />
                        <span className="text-xs font-semibold text-slate-500">{script.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon + Script name + Subtitle */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{
                        background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
                        border: '1px solid rgba(20,184,166,0.2)',
                      }}
                    >
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors duration-200">
                        {script.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mt-0.5">
                        {script.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description — full sentence, no clamp */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {script.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                    {script.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://www.tradingview.com/static/images/favicon.ico"
                        alt="TradingView"
                        className="w-4 h-4 opacity-60"
                      />
                      <span className="text-xs text-slate-400 font-medium">TradingView</span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold
                                 text-teal-700 bg-teal-50 border border-teal-200/60
                                 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600
                                 transition-all duration-200"
                    >
                      View Script
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TradingViewScripts;
