'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { TrendingUp, Users, Award, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '2014', label: 'Started Trading' },
  { icon: TrendingUp, value: '2019', label: 'Algo Development' },
  { icon: Award, value: '2021', label: 'Company Founded' },
  { icon: Users, value: '1000+', label: 'Projects Delivered' },
];

export const OurStory: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Our Journey
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Story Behind{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Secret Weapon
              </span>
            </h2>

            {/* Story Content */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed">
                Our journey began in 2014 as passionate traders, spending countless hours studying charts,
                testing strategies, and learning the markets firsthand. Through years of hands-on experience,
                we understood what traders truly need — discipline, precision, and consistency.
              </p>
              <p className="text-lg text-slate-900 leading-relaxed">
                By 2019, we transitioned into algorithmic trading, mastering AmiBroker AFL and TradingView
                Pine Script development. In 2021, we founded Secret Weapon Trading Solution Pvt. Ltd. to
                help traders automate their edge with professional-grade solutions.
              </p>
              <p className="text-lg text-slate-900 leading-relaxed">
                Today, with 1000+ projects delivered, we continue helping traders worldwide transform
                their strategies into automated systems that execute with precision.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {[
                'Decade of hands-on trading experience',
                'Expert in AmiBroker AFL & TradingView Pine Script',
                'Custom automation solutions for serious traders',
                'Focus on precision, discipline & consistency',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex-shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-800">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[80%] aspect-square rounded-2xl overflow-hidden">
              <Image
                src={getAssetPath('/about-us-story.jpg')}
                alt="Trading Analytics & Data Visualization"
                fill
                className="object-contain"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
