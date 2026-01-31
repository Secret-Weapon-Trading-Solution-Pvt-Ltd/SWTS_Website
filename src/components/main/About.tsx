'use client';

import React from 'react';
import { Target, Users, Award, Lightbulb, Code2, BarChart3, Cpu, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every line of code is written with accuracy in mind.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work closely with you throughout the process.',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'Rigorous testing and clean code architecture.',
    gradient: 'from-sky-500 to-blue-500',
    glow: 'shadow-sky-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'We stay current with latest technologies.',
    gradient: 'from-rose-500 to-pink-500',
    glow: 'shadow-rose-500/20',
  },
];

const platforms = [
  { name: 'TradingView', desc: 'Pine Script v5', icon: Code2 },
  { name: 'AmiBroker', desc: 'AFL Development', icon: BarChart3 },
  { name: 'Python', desc: 'Algo Trading', icon: Cpu },
  { name: 'MetaTrader', desc: 'MT4/MT5 EA', icon: Shield },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#060610]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Secret Weapon Trading Solution is a specialized algorithmic trading development
            firm bridging the gap between profitable ideas and systematic execution.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Founded by traders who understood the challenges of manual execution,
                SWTS was born from a simple realization: great strategies often fail
                not because of flawed logic, but because of inconsistent execution.
              </p>
              <p>
                We&apos;ve spent years mastering multiple trading platforms and coding
                languages to offer truly platform-agnostic solutions. Whether you trade
                Indian equities, forex, or crypto, we speak your language.
              </p>
              <p>
                Today, we help traders and firms transform their manual strategies into
                robust automated systems that execute with precision, day and night.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20">
                <div className="text-3xl font-bold text-amber-400">50+</div>
                <div className="text-sm text-gray-200 mt-1">Projects</div>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-400">4+</div>
                <div className="text-sm text-gray-200 mt-1">Years</div>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-2xl border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400">100%</div>
                <div className="text-sm text-gray-200 mt-1">Custom</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-3 shadow-lg ${value.glow}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-200">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Platform Expertise */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">Platform Expertise</h3>
              <p className="text-gray-200">
                We work across all major trading platforms and languages
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.08] transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h4 className="font-bold text-white mb-1">{platform.name}</h4>
                    <p className="text-sm text-gray-200">{platform.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
