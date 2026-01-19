'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-24 bg-white border-b border-slate-100">
      {/* Minimal background - subtle gradient only */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4"
          >
            Trading Automation Services
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Turn Proven Strategies
            <br />
            <span className="text-slate-700">Into Live Execution</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-xl text-slate-600 leading-relaxed">
              You bring the trading logic.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              We engineer the automation, execution, and reliability required for real capital.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            <a
              href="/strategy-assessment"
              className="inline-flex items-center px-7 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              Discuss Your Strategy
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors duration-200 group"
            >
              See How Execution Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-slate-500"
          >
            Client strategies remain fully owned and confidential.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
