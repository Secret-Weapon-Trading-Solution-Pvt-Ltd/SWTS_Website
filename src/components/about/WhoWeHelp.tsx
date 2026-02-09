'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const personas = [
  {
    icon: Briefcase,
    title: 'Professional Traders',
    subtitle: 'Experienced market participants',
    description:
      'Algo trading helps professional traders reduce emotional biases in decision-making and execute trades more efficiently based on data-driven strategies.',
    benefits: [
      'Eliminate emotional biases',
      'Data-driven execution',
      'Consistent discipline',
      'Scale operations efficiently',
    ],
    accentColor: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    lightBg: 'bg-teal-50/50',
    textAccent: 'text-teal-600',
  },
  {
    icon: Clock,
    title: 'Working Professionals',
    subtitle: 'Time-constrained traders',
    description:
      'Algo trading enables working professionals to automate their strategies, allowing them to trade even while busy with day jobs.',
    benefits: [
      'Trade while you work',
      'No screen watching needed',
      'Maximize your time',
      'Automated management',
    ],
    accentColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50/50',
    textAccent: 'text-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'Novice Traders',
    subtitle: 'New to the markets',
    description:
      'Algo trading provides opportunities for individuals without extensive experience to leverage technology for systematic investing.',
    benefits: [
      'Learn from automation',
      'Reduce learning curve',
      'Systematic approach',
      'Build trading discipline',
    ],
    accentColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50/50',
    textAccent: 'text-violet-600',
  },
];

export const WhoWeHelp: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Algo Trading Can Help{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-lg text-slate-800 leading-relaxed max-w-3xl mx-auto">
            A disciplined and systematic approach to trading, leading to more consistent
            and profitable outcomes regardless of your experience level.
          </p>
        </motion.div>

        {/* Persona Cards with corner cut */}
        <div className="grid lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card with corner cut */}
              <div
                className="relative h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
              >
                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 ${persona.accentColor}`}
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />

                {/* Light background on hover */}
                <div className={`absolute inset-0 ${persona.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${persona.accentColor} flex items-center justify-center shadow-lg mb-6`}>
                    <persona.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {persona.title}
                  </h3>
                  <p className={`text-sm font-medium ${persona.textAccent} mb-4`}>
                    {persona.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-800 leading-relaxed mb-6">
                    {persona.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    {persona.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${persona.textAccent} flex-shrink-0`} />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/strategy-assessment"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${persona.textAccent} hover:gap-3 transition-all`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${persona.accentColor}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
