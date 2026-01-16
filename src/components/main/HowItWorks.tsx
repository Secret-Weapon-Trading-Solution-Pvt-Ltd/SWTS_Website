'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  User,
  Target,
  GitBranch,
  Settings,
  TrendingUp,
  Check,
  Search,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Workflow
} from 'lucide-react';

// ============================================================================
// Visual Process Flow Data
// ============================================================================
const processSteps = [
  { icon: Search, label: 'Assess', color: 'teal' },
  { icon: Target, label: 'Analyze', color: 'teal' },
  { icon: PenTool, label: 'Design', color: 'teal' },
  { icon: Code, label: 'Build', color: 'teal' },
  { icon: TestTube, label: 'Test', color: 'teal' },
  { icon: Rocket, label: 'Deploy', color: 'teal' },
];

// ============================================================================
// Detailed Steps Data
// ============================================================================
const detailedSteps = [
  {
    number: '01',
    title: 'Understand Your Trading Style',
    description: 'Clarify your natural approach to markets and decisions.',
    icon: User,
  },
  {
    number: '02',
    title: 'Identify Execution Gaps',
    description: 'Pinpoint where discipline tends to break down.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Align Strategy with Behavior',
    description: 'Match your methods to your risk tolerance and habits.',
    icon: GitBranch,
  },
  {
    number: '04',
    title: 'Choose Your Execution Mode',
    description: 'Manual, automated, or hybrid — based on your lifestyle.',
    icon: Settings,
  },
  {
    number: '05',
    title: 'Execute with Structure',
    description: 'Operate consistently using a system built for you.',
    icon: TrendingUp,
  },
];

const benefits = [
  'Focuses on execution, not prediction',
  'Reduces emotional decision-making',
  'Aligns strategy with trader behavior',
  'Designed for consistency and risk control',
];

// ============================================================================
// Visual Process Flow Component (PRIMARY - Top of page)
// ============================================================================
const VisualProcessFlow: React.FC = () => {
  return (
    <div className="mb-12 relative">
      {/* Process Steps */}
      <div className="relative">
        {/* Connector Line - Desktop - CENTERED through cards, BEHIND cards */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[4%] right-[4%] z-0">
          {/* Dotted/segmented line with gradient */}
          <div className="w-full h-[3px] flex items-center">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(20,184,166,0.3) 4px, rgba(20,184,166,0.3) 12px)',
                backgroundImage: 'linear-gradient(90deg, rgba(20,184,166,0.15) 0%, rgba(20,184,166,0.4) 50%, rgba(20,184,166,0.15) 100%)'
              }}
            />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-5 relative">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isFirst = index === 0;
            return (
              <div key={index} className="relative flex flex-col items-center group">
                {/* Step Card - z-10 to be ABOVE connector */}
                <div className="relative z-10 w-full">
                  <div className={`
                    relative bg-white
                    rounded-2xl p-5 lg:p-6 text-center
                    border transition-all duration-300 ease-out
                    cursor-default
                    hover:-translate-y-2 hover:shadow-xl
                    ${isFirst
                      ? 'border-teal-400 shadow-lg shadow-teal-200/50 ring-1 ring-teal-400/30'
                      : 'border-slate-200 shadow-md hover:border-teal-300 hover:shadow-teal-100/50'
                    }
                  `}>
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-teal-50/0 to-teal-50/0 group-hover:from-teal-50 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                    {/* Step number badge */}
                    <div className={`
                      absolute -top-2.5 left-1/2 -translate-x-1/2
                      px-2.5 py-0.5 rounded-full text-[10px] font-bold
                      transition-all duration-300
                      ${isFirst
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-teal-500 group-hover:text-white'
                      }
                    `}>
                      {isFirst ? 'START' : index + 1}
                    </div>

                    {/* Icon Container - consistent tint */}
                    <div className={`
                      relative w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 mt-2
                      rounded-2xl flex items-center justify-center
                      transition-all duration-300
                      group-hover:scale-110
                      ${isFirst
                        ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/40'
                        : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/80 group-hover:from-teal-500 group-hover:to-teal-600 group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-teal-500/40'
                      }
                    `}>
                      <Icon
                        className={`w-6 h-6 lg:w-7 lg:h-7 transition-all duration-300 ${isFirst ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}
                        strokeWidth={1.5}
                      />

                      {/* Pulse animation on first step */}
                      {isFirst && (
                        <div className="absolute inset-0 rounded-2xl bg-teal-400/30 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
                      )}
                    </div>

                    {/* Label - larger text */}
                    <span className={`text-base font-semibold transition-colors duration-300 ${isFirst ? 'text-teal-700' : 'text-slate-800 group-hover:text-teal-700'}`}>
                      {step.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supporting Text - larger */}
      <p className="text-center text-slate-500 text-base mt-10 max-w-xl mx-auto">
        A structured path from understanding your needs to deploying your solution.
      </p>
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================
export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background - subtle gradient bands */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/50" />

      {/* Radial glow behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* ================================================================ */}
        {/* Page Header - Enhanced */}
        {/* ================================================================ */}
        <div className="text-center mb-14">
          {/* Accent icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200/50 mb-5 shadow-sm">
            <Workflow className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
          </div>

          <span className="block text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-4">
            Process
          </span>

          {/* Larger heading with gradient accent */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-slate-900">How It Works.</span>
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Simple and clear.</span>
          </h2>

          {/* Subheading - darker, larger */}
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A structured, execution-focused approach designed to fit how you actually work.
          </p>
        </div>

        {/* ================================================================ */}
        {/* PRIMARY: Visual Process Flow */}
        {/* ================================================================ */}
        <VisualProcessFlow />

        {/* ================================================================ */}
        {/* SECONDARY: Choose Your Starting Point */}
        {/* ================================================================ */}
        <div className="mb-12">
          {/* Section background band */}
          <div className="relative -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12 py-10 bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-transparent rounded-3xl">
            <div className="text-center mb-8">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">
                Getting Started
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                Choose Your Starting Point
              </h3>
              <p className="text-slate-500 text-base">
                Two ways to begin — pick what works for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {/* Path A - Recommended */}
              <div className="relative bg-white rounded-2xl p-7 border border-teal-200 shadow-lg shadow-teal-100/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-md">
                    Recommended
                  </span>
                </div>

                <div className="relative flex items-center gap-4 mb-5 mt-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <ClipboardCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Start with the Assessment
                  </h4>
                </div>

                <ul className="relative space-y-2.5 mb-6">
                  {[
                    'Answer a few questions about your trading',
                    'We analyze your trading profile',
                    'Receive personalized insights',
                    'Get recommended next steps tailored to you',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-teal-600" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="relative text-xs text-slate-400 mb-5">
                  Takes ~2 minutes · No spam · No sales calls
                </p>

                <Link
                  href="/strategy-assessment/questionnaire"
                  className="relative group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl text-sm font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Take Free Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Path B - Optional */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center border border-slate-200">
                    <Compass className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Explore the Platform Directly
                  </h4>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {[
                    'Browse products and services',
                    'Learn how our systems work',
                    'Choose tools on your own terms',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-slate-400" strokeWidth={3} />
                      </div>
                      <span className="text-slate-500 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-5 h-[20px]" />

                <Link
                  href="/#products"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SECONDARY: The Process (Detailed Steps) */}
        {/* ================================================================ */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">
              Step by Step
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              The Process
            </h3>
            <p className="text-slate-500 text-base">
              A structured path from understanding to execution.
            </p>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Horizontal connector - Desktop - CENTERED, BEHIND cards */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[3%] right-[3%] z-0">
              <div
                className="w-full h-[2px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(20,184,166,0.1) 0%, rgba(20,184,166,0.35) 20%, rgba(20,184,166,0.35) 80%, rgba(20,184,166,0.1) 100%)'
                }}
              />
              {/* Dots on the line */}
              <div className="absolute inset-0 flex items-center justify-between px-[10%]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-teal-300 rounded-full" />
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {detailedSteps.map((step, index) => {
                const Icon = step.icon;
                const isFirst = index === 0;
                return (
                  <div key={step.number} className="relative group z-10">
                    <div className={`
                      bg-white rounded-2xl p-6 h-full
                      border transition-all duration-300 ease-out
                      hover:-translate-y-2 hover:shadow-xl
                      ${isFirst
                        ? 'border-teal-300 shadow-lg shadow-teal-100/60'
                        : 'border-slate-200 shadow-md hover:border-teal-200 hover:shadow-teal-100/40'
                      }
                    `}>
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-teal-50/0 to-transparent group-hover:from-teal-50/60 transition-all duration-300 pointer-events-none" />

                      <div className="relative flex items-center gap-3 mb-4">
                        {/* Icon - consistent tint */}
                        <div className={`
                          w-11 h-11 rounded-xl flex items-center justify-center
                          transition-all duration-300 group-hover:scale-110
                          ${isFirst
                            ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-md shadow-teal-500/30'
                            : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 group-hover:from-teal-500 group-hover:to-teal-600 group-hover:border-transparent group-hover:shadow-md group-hover:shadow-teal-500/30'
                          }
                        `}>
                          <Icon
                            className={`w-5 h-5 transition-all duration-300 ${isFirst ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${isFirst ? 'text-teal-600' : 'text-slate-400 group-hover:text-teal-600'}`}>
                          Step {step.number}
                        </span>
                      </div>

                      {/* Title - larger */}
                      <h4 className="relative font-bold text-slate-900 text-base mb-2 leading-snug">
                        {step.title}
                      </h4>

                      {/* Description - larger, better contrast */}
                      <p className="relative text-slate-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SUPPORTING: Why This Approach Works */}
        {/* ================================================================ */}
        <div className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 border border-slate-200/60 rounded-2xl p-8 lg:p-10">
            {/* Subtle decorative blur */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">
                  Why It Matters
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  Why This Approach Works
                </h3>
                <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
                  Most traders fail not from bad strategies, but from inconsistent execution. We address that first.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-[15px] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* Final CTA Section */}
        {/* ================================================================ */}
        <div className="relative text-center py-4">
          {/* Soft glow */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
              Ready to get started?
            </h3>
            <p className="text-slate-500 text-base mb-8 max-w-md mx-auto">
              Explore the platform at your own pace.
            </p>

            <div className="flex items-center justify-center">
              <Link
                href="/#products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl font-semibold hover:from-slate-900 hover:to-slate-800 transition-all duration-300 shadow-xl shadow-slate-500/25 hover:shadow-2xl hover:-translate-y-1"
              >
                Browse Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
