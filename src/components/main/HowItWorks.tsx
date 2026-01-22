'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Check,
} from 'lucide-react';
import { ProcessFlowHorizontal } from './ProcessFlowHorizontal';

const benefits = [
  'Focuses on execution, not prediction',
  'Reduces emotional decision-making',
  'Aligns strategy with trader behavior',
  'Designed for consistency and risk control',
];

// ============================================================================
// Main Component
// ============================================================================
export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background - subtle gradient bands */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />

      {/* Radial glow behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* ================================================================ */}
        {/* Page Header - Modern Enterprise Style */}
        {/* ================================================================ */}
        <div className="text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Our Process
            </span>
          </div>

          {/* Heading with gradient accent */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-slate-800">From Idea to </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Execution</span>
          </h2>

          {/* Subheading */}
          <p className="text-base lg:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Six steps to transform your trading strategy into a live automated system
          </p>
        </div>

        {/* ================================================================ */}
        {/* PRIMARY: Horizontal Process Flow */}
        {/* ================================================================ */}
        <ProcessFlowHorizontal />

        {/* ================================================================ */}
        {/* SECONDARY: Choose Your Starting Point - Modern Redesign */}
        {/* ================================================================ */}
        <div className="mb-16 mt-20 pt-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Get Started
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
              Ready to Begin?
            </h3>
            <p className="text-slate-500 text-base max-w-md mx-auto">
              Pick the option that works best for you
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* Path A - Recommended */}
            <div className="group relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-3xl opacity-70" />

              <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full">
                {/* Recommended badge */}
                <div className="absolute -top-4 left-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/25">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Recommended</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mb-6 mt-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <ClipboardCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h4 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">
                  Start with Assessment
                </h4>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Get personalized recommendations based on your trading profile and goals.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Personalized strategy insights',
                    'Risk profile analysis',
                    'Custom recommendations',
                    'Tailored next steps',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    100% Free
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="/strategy-assessment"
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Take Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Path B - Explore */}
            <div className="group relative">
              {/* Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl group-hover:from-slate-300 group-hover:to-slate-400 transition-colors duration-300" />

              <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl shadow-slate-500/10 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h4 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">
                  Explore Platform
                </h4>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Browse our tools and services at your own pace. No commitment required.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Browse all products',
                    'View live demos',
                    'Read documentation',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-slate-500" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Self-guided
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    No signup
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="/#products"
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-500/15 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom connector */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-slate-300" />
              <span>or</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-slate-300" />
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SUPPORTING: Why This Approach Works - Premium Redesign */}
        {/* ================================================================ */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />

            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative px-8 lg:px-14 py-14 lg:py-16">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Our Philosophy
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Why This Approach{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Works
                  </span>
                </h3>
                <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                  Most traders fail not from bad strategies, but from inconsistent execution.
                  <span className="text-white font-medium"> We address that first.</span>
                </p>
              </div>

              {/* Benefits Grid - Modern Cards */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Card glow on hover */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                    {/* Card */}
                    <div className="relative flex items-center gap-4 bg-white/[0.07] backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.1] transition-all duration-300">
                      {/* Number indicator */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                        <span className="text-white font-bold text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Text */}
                      <span className="text-white/90 text-[15px] lg:text-base font-medium leading-snug group-hover:text-white transition-colors duration-300">
                        {benefit}
                      </span>

                      {/* Check icon */}
                      <div className="ml-auto flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="flex justify-center mt-10">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
