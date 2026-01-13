'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/*
 * DESIGN SYSTEM
 * -------------
 * Primary Headline:    #0F172A
 * Secondary Headline:  #64748B
 * Body Text:           #475569
 * Micro Labels:        #0EA5A4
 * Page BG:             linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)
 * CTA BG:              linear-gradient(180deg, #0F172A 0%, #1E293B 100%)
 */

export const FrustrationHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Page background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}
      />

      {/* Background Image - Right side only */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: 'url(/bg_new.png)',
          animationDuration: '1s',
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}
      />

      {/* Soft gradient overlay - fades image into background on left edge */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #F8FAFC 0%, #F8FAFC 45%, rgba(248,250,252,0.8) 55%, transparent 70%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-32">
        <div className="max-w-2xl">

          {/* Micro label with accent line - Animation 1 */}
          <div
            className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span
              className="w-12 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #0EA5A4, #14B8A6)' }}
            />
            <span
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: '#0EA5A4' }}
            >
              For serious traders
            </span>
          </div>

          {/* Headlines */}
          <h1 className="mb-8 font-inter">
            {/* Primary headline - Animation 2 */}
            <span
              className="block text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.08] tracking-[-0.02em] opacity-0 animate-fade-in-up"
              style={{
                color: '#0F172A',
                fontWeight: 700,
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
            >
              Your strategy works.
            </span>
            {/* Secondary headline - Animation 3 */}
            <span
              className="block mt-3 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.08] tracking-[-0.01em] opacity-0 animate-fade-in-up"
              style={{
                color: '#64748B',
                fontWeight: 600,
                animationDelay: '0.6s',
                animationFillMode: 'forwards'
              }}
            >
              Until you have to execute it.
            </span>
          </h1>

          {/* Body text - Animation 4 */}
          <p
            className="text-lg sm:text-xl leading-[1.7] mb-12 max-w-lg opacity-0 animate-fade-in-up"
            style={{
              color: '#475569',
              fontWeight: 400,
              animationDelay: '0.8s',
              animationFillMode: 'forwards'
            }}
          >
            The analysis is sound. The backtest is profitable. But when real money is on the line,
            hesitation and emotion take over.
          </p>

          {/* CTA Group - Animation 5 */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            {/* Primary CTA */}
            <Link
              href="/strategy-assessment/questionnaire"
              className="group inline-flex items-center px-8 py-4 text-white rounded-full
                       shadow-[0_4px_16px_rgba(15,23,42,0.2)] hover:shadow-[0_6px_24px_rgba(15,23,42,0.28)]
                       hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(15,23,42,0.15)]
                       transition-all duration-200 ease-out"
              style={{
                background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
                fontWeight: 500
              }}
            >
              Find Your Execution Gap
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary text */}
            <span
              className="text-sm tracking-wide"
              style={{ color: '#94A3B8' }}
            >
              3 minutes · No signup required
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(0deg, #F1F5F9 0%, transparent 100%)' }}
      />
    </section>
  );
};

export default FrustrationHero;
