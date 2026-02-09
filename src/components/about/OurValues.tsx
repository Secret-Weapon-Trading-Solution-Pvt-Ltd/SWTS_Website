'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Shield,
  Users,
  Zap,
  Heart,
  Target,
} from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible in trading automation.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    size: 'large',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Every system we build is tested rigorously. Your trades execute exactly as intended.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500',
    lightBg: 'bg-teal-50',
    borderColor: 'border-teal-200',
    size: 'normal',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside you, not just for you. Your success is our success.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    size: 'normal',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Every line of code, every strategy, every solution meets our high standards.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    size: 'normal',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest communication, transparent processes, and ethical practices guide us.',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500',
    lightBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    size: 'normal',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our solutions are built to deliver measurable improvements to your trading.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    size: 'large',
  },
];

export const OurValues: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl" />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Our Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              What We{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              These principles guide every decision we make and every solution we build.
              They&apos;re not just words — they&apos;re commitments we live by every day.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group ${value.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div
                className={`relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border ${value.borderColor} hover:shadow-xl transition-all duration-300 h-full overflow-hidden`}
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 ${value.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${value.lightBg} rounded-bl-[100px] opacity-50`} />

                <div className="relative">
                  {/* Icon with animated background */}
                  <div className="relative mb-5">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${value.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    {/* Pulse effect on hover */}
                    <div className={`absolute inset-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${value.bgColor} opacity-0 group-hover:opacity-30 animate-ping`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
            <div className="flex -space-x-2">
              {['bg-teal-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500'].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                  {['S', 'W', 'T', 'S'][i]}
                </div>
              ))}
            </div>
            <p className="text-slate-600">
              <span className="font-semibold text-slate-900">1000+ projects</span> delivered with these values
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
