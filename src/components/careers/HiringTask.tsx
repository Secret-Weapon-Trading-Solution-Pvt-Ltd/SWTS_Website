'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Package, Gauge, Info, Shield, CalendarClock, Fingerprint } from 'lucide-react';
import { hiringTask } from '@/data/careers';

export const HiringTask: React.FC = () => {
  return (
    <section id="hiring-task" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-teal-100/20 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Hiring Task</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              {hiringTask.title}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                Estimated time: {hiringTask.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 font-medium">
                <CalendarClock className="w-3.5 h-3.5" />
                Deadline: {hiringTask.deadline}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-soft p-8 lg:p-10"
          >
            <p className="text-base text-slate-700 leading-relaxed mb-10">{hiringTask.summary}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Objectives
                </h3>
                <ul className="space-y-2.5">
                  {hiringTask.objectives.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-teal-600" />
                  Deliverables
                </h3>
                <ul className="space-y-2.5 mb-8">
                  {hiringTask.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-amber-600" />
                  Evaluation Criteria
                </h3>
                <ul className="space-y-2.5">
                  {hiringTask.evaluationCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 p-6 mb-6">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Notes & Ground Rules
              </h3>
              <ul className="space-y-2.5">
                {hiringTask.notes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <Code2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-6 mb-6">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-amber-700" />
                Submission Fingerprint
              </h3>
              <p className="text-sm text-amber-900/80 leading-relaxed mb-4">{hiringTask.fingerprint.intro}</p>
              <ul className="space-y-2.5">
                {hiringTask.fingerprint.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-800 leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-emerald-50/60 border border-emerald-100 p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-emerald-900 mb-1.5">Code Ownership & Use</h3>
                  <p className="text-sm text-emerald-900/80 leading-relaxed">{hiringTask.disclaimer}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HiringTask;
