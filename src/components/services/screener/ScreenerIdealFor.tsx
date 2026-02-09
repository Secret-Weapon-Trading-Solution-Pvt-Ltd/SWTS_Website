'use client';

import { motion } from 'framer-motion';
import { Eye, BarChart2, Clock, Filter, Zap, CheckCircle2 } from 'lucide-react';
import ContactCTA from '@/components/ui/ContactCTA';

const profiles = [
  { icon: Eye, title: "Active Traders", description: "You trade regularly but waste hours scanning charts for setups manually" },
  { icon: BarChart2, title: "Multi-Symbol Traders", description: "You want to trade opportunities across 50+ stocks, crypto, or forex pairs" },
  { icon: Clock, title: "Part-Time Traders", description: "You have a job but want to catch setups during market hours without constant monitoring" },
  { icon: Filter, title: "Technical Traders", description: "You have specific technical criteria that generic screeners can't handle" },
  { icon: Zap, title: "Speed-Sensitive Traders", description: "Your edge depends on catching setups early before the crowd notices" }
];

export default function ScreenerIdealFor() {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-700 text-sm font-semibold mb-5 border border-violet-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></span>
              Ideal For
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold text-black">
              Who Should Use a Custom Screener?
            </h3>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mt-4">
              If you&apos;re tired of manually scanning charts and missing setups, a custom screener is your unfair advantage
            </p>
          </div>

          {/* Profiles Grid: 2 Left, 2 Right */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6">
            {profiles.slice(0, 4).map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br ${
                  index === 0 ? 'from-cyan-500 to-blue-600 shadow-cyan-500/25' :
                  index === 1 ? 'from-emerald-500 to-teal-600 shadow-emerald-500/25' :
                  index === 2 ? 'from-violet-500 to-purple-600 shadow-violet-500/25' :
                  'from-amber-500 to-orange-600 shadow-amber-500/25'
                }`}>
                  <profile.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-blue-900 transition-colors">{profile.title}</h4>
                  <p className="text-black leading-relaxed">{profile.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Profile (5th) */}
          <div className="flex justify-center">
            {(() => {
              const FifthIcon = profiles[4].icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-default max-w-xl w-full"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/25">
                    <FifthIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-blue-900 transition-colors">{profiles[4].title}</h4>
                    <p className="text-black leading-relaxed">{profiles[4].description}</p>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </motion.div>

        {/* Result indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-2 text-center">
              Screener Live & Scanning
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Your custom screener monitors markets 24/7 and alerts you the moment opportunities appear
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <ContactCTA buttonText="Get Your Custom Screener" />
        </motion.div>
      </div>
    </section>
  );
}
