'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowDown } from 'lucide-react';

const WaveFlowVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
    <svg className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px]" viewBox="0 0 1000 300" fill="none">
      <path d="M0 150 Q125 90 250 150 Q375 210 500 150 Q625 90 750 150 Q875 210 1000 150" className="stroke-teal-400" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M0 170 Q150 110 300 170 Q450 230 600 170 Q750 110 900 170 Q950 200 1000 170" className="stroke-cyan-300" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M0 130 Q100 180 200 130 Q300 80 400 130 Q500 180 600 130 Q700 80 800 130 Q900 180 1000 130" className="stroke-blue-300" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="250" cy="150" r="5" className="fill-teal-500" opacity="0.6" />
      <circle cx="500" cy="150" r="6" className="fill-teal-600" opacity="0.7" />
      <circle cx="750" cy="150" r="5" className="fill-teal-500" opacity="0.6" />
    </svg>
  </div>
);

export const CareersHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-24 bg-gradient-to-br from-white via-slate-50 to-teal-50/40">
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-blue-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="relative text-center">
          <WaveFlowVisual />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-teal-200/60 shadow-sm mb-7"
            >
              <Briefcase className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">
                Careers — Hiring Now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-6 leading-tight"
            >
              Build Markets-Grade{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Trading Systems
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-9"
            >
              We&apos;re expanding the team for live trading systems, backtesting engines, and broker
              integrations. If you write production-grade code and care about microseconds and edge cases,
              read on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-3"
            >
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
              >
                See Open Roles
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-700 bg-white border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all"
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default CareersHero;
