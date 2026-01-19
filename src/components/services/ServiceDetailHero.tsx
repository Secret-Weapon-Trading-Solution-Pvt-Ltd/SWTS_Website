'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Navy gradient overlay at top */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-navy-100/50 to-transparent" />

        {/* Accent gradient orbs */}
        <motion.div
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl`}
          style={{ background: `linear-gradient(135deg, ${service.accentColor}20, transparent)` }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl`}
          style={{ background: `linear-gradient(135deg, ${service.accentColor}15, transparent)` }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [5, 0, 5]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Grid pattern - slightly more visible */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="detail-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-navy-900"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#detail-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">All Services</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div>
            {/* Service badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white text-sm font-semibold shadow-lg`}>
                {service.shortTitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 leading-[1.1] tracking-tight mb-6"
            >
              {service.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-navy-600 leading-relaxed mb-8"
            >
              {service.description}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {service.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl px-5 py-4 border border-navy-100 shadow-sm"
                >
                  <div className={`text-2xl font-bold text-navy-700`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Confident styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/strategy-assessment"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-navy-800 text-white font-semibold hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white border-2 border-navy-200 text-navy-700 font-semibold hover:bg-navy-50 hover:border-navy-300 transition-all duration-300"
              >
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right column - Brand Logos Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main logo showcase card */}
            <div className="relative bg-white rounded-3xl border border-navy-200 shadow-lg overflow-hidden">
              {/* Decorative header bar */}
              <div className="h-2 bg-gradient-to-r from-navy-600 via-teal-500 to-cyan-500" />

              {/* Check if service has a custom hero image */}
              {service.slug === 'python-algo-development' ? (
                /* Python service - Full hero image */
                <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/python.png"
                    alt={service.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ) : service.slug === 'algo-strategy-development' ? (
                /* Algo Strategy service - Full hero image, extends up to cover header line */
                <div className="relative w-full aspect-[4/3] overflow-hidden -mt-2">
                  <Image
                    src="/algo1.png"
                    alt={service.title}
                    fill
                    className="object-cover scale-[1.35]"
                    priority
                  />
                </div>
              ) : service.slug === 'pine-script-development' ? (
                /* Pine Script service - Full hero image */
                <div className="relative w-full aspect-[4/3] overflow-hidden -mt-2">
                  <Image
                    src="/tradingview.png"
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
              <div className="p-8 lg:p-10">
                {/* Section label */}
                <div className="text-center mb-8">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Powered By
                  </span>
                </div>

                {/* Brand logos - Full color, prominent */}
                {service.brandLogos.length > 0 ? (
                  <div className="space-y-8">
                    {/* Primary logo - Large and centered */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex justify-center"
                    >
                      <div className="relative group">
                        <div className="w-32 h-32 rounded-2xl bg-white border border-navy-200 flex items-center justify-center p-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                          {/* TradingView Logo */}
                          {service.brandLogos[0].name === 'TradingView' ? (
                            /* TradingView Logo - Official full color */
                            <svg className="w-20 h-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id="tvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#2962FF"/>
                                  <stop offset="100%" stopColor="#2979FF"/>
                                </linearGradient>
                              </defs>
                              {/* Background circle */}
                              <circle cx="100" cy="100" r="95" fill="url(#tvGradient)"/>
                              {/* TV Logo - stylized chart icon */}
                              <g fill="white">
                                {/* Candlestick chart representation */}
                                <rect x="45" y="70" width="12" height="60" rx="2"/>
                                <rect x="49" y="55" width="4" height="90" rx="1"/>
                                <rect x="75" y="50" width="12" height="70" rx="2"/>
                                <rect x="79" y="40" width="4" height="95" rx="1"/>
                                <rect x="105" y="65" width="12" height="55" rx="2"/>
                                <rect x="109" y="50" width="4" height="85" rx="1"/>
                                <rect x="135" y="45" width="12" height="75" rx="2"/>
                                <rect x="139" y="35" width="4" height="100" rx="1"/>
                              </g>
                            </svg>
                          ) : service.brandLogos[0].name === 'Zerodha' ? (
                            /* Zerodha Logo - Kite icon with brand colors */
                            <svg className="w-20 h-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id="zerodhaGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#387ED1"/>
                                  <stop offset="100%" stopColor="#2563EB"/>
                                </linearGradient>
                              </defs>
                              {/* Kite shape - stylized diamond/kite */}
                              <path d="M100 20 L170 100 L100 180 L30 100 Z" fill="url(#zerodhaGradientPrimary)"/>
                              {/* Inner kite detail - using darker blue instead of white */}
                              <path d="M100 45 L145 100 L100 155 L55 100 Z" fill="#1e40af" opacity="0.25"/>
                              {/* Center lines - using darker blue */}
                              <line x1="100" y1="20" x2="100" y2="180" stroke="#1e3a8a" strokeWidth="2" opacity="0.4"/>
                              <line x1="30" y1="100" x2="170" y2="100" stroke="#1e3a8a" strokeWidth="2" opacity="0.4"/>
                              {/* Z letter - dark blue for visibility */}
                              <text x="100" y="115" textAnchor="middle" fill="#0f172a" fontSize="50" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
                            </svg>
                          ) : (
                            <div className="text-4xl font-bold text-slate-600">
                              {service.brandLogos[0].name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full border border-navy-200 shadow-sm">
                          <span className="text-sm font-semibold text-navy-700">
                            {service.brandLogos[0].name}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Secondary logos - smaller row */}
                    {service.brandLogos.length > 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-center gap-6"
                      >
                        {service.brandLogos.slice(1).map((logo, index) => (
                          <div key={logo.name} className="text-center group">
                            <div className="w-16 h-16 rounded-xl bg-white border border-navy-200 flex items-center justify-center p-2 shadow-sm group-hover:shadow-lg transition-all duration-300">
                              {/* Pandas Logo */}
                              {logo.name === 'Pandas' ? (
                                <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="117" y="0" width="70" height="140" fill="#130754"/>
                                  <rect x="117" y="170" width="70" height="170" fill="#130754"/>
                                  <rect x="117" y="370" width="70" height="142" fill="#130754"/>
                                  <rect x="218" y="117" width="70" height="276" fill="#130754"/>
                                  <rect x="324" y="0" width="70" height="140" fill="#FFCA00"/>
                                  <rect x="324" y="170" width="70" height="170" fill="#FFCA00"/>
                                  <rect x="324" y="370" width="70" height="142" fill="#FFCA00"/>
                                </svg>
                              ) : logo.name === 'NumPy' ? (
                                <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M128.002 0L0 64.002v127.996L128.002 256 256 191.998V64.002L128.002 0z" fill="#4DABCF"/>
                                  <path d="M128.002 0L0 64.002v127.996l128.002 64.004V0z" fill="#4D77CF"/>
                                  <path d="M128.002 256L256 191.998V64.002L128.002 0v256z" fill="#4DABCF"/>
                                  <path d="M128.002 34.194L35.753 80.097l92.249 45.905 92.249-45.905-92.249-45.903z" fill="#FFF"/>
                                  <path d="M128.002 148.188v73.618l-64.564-32.143v-73.618l64.564 32.143z" fill="#4D77CF"/>
                                  <path d="M192.566 115.963v73.7l-64.564 32.143v-73.618l64.564-32.225z" fill="#4DABCF"/>
                                </svg>
                              ) : logo.name === 'PineScript' ? (
                                /* Pine Script Logo - Pine tree with code brackets */
                                <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="pineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stopColor="#22C55E"/>
                                      <stop offset="100%" stopColor="#16A34A"/>
                                    </linearGradient>
                                  </defs>
                                  {/* Pine tree shape */}
                                  <polygon points="50,10 25,40 35,40 20,60 33,60 15,85 50,70 85,85 67,60 80,60 65,40 75,40" fill="url(#pineGradient)"/>
                                  {/* Tree trunk */}
                                  <rect x="45" y="70" width="10" height="20" fill="#8B5A2B"/>
                                  {/* Code brackets overlay */}
                                  <path d="M30,45 L22,55 L30,65" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                                  <path d="M70,45 L78,55 L70,65" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                                </svg>
                              ) : logo.name === 'TradingView' ? (
                                /* TradingView Logo - smaller version */
                                <svg className="w-10 h-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="tvGradientSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#2962FF"/>
                                      <stop offset="100%" stopColor="#2979FF"/>
                                    </linearGradient>
                                  </defs>
                                  <circle cx="100" cy="100" r="95" fill="url(#tvGradientSmall)"/>
                                  <g fill="white">
                                    <rect x="45" y="70" width="12" height="60" rx="2"/>
                                    <rect x="49" y="55" width="4" height="90" rx="1"/>
                                    <rect x="75" y="50" width="12" height="70" rx="2"/>
                                    <rect x="79" y="40" width="4" height="95" rx="1"/>
                                    <rect x="105" y="65" width="12" height="55" rx="2"/>
                                    <rect x="109" y="50" width="4" height="85" rx="1"/>
                                    <rect x="135" y="45" width="12" height="75" rx="2"/>
                                    <rect x="139" y="35" width="4" height="100" rx="1"/>
                                  </g>
                                </svg>
                              ) : logo.name === 'IBKR' ? (
                                /* Interactive Brokers Logo */
                                <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="ibkrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#D41F2C"/>
                                      <stop offset="100%" stopColor="#B91C28"/>
                                    </linearGradient>
                                  </defs>
                                  <rect x="5" y="5" width="90" height="90" rx="12" fill="url(#ibkrGradient)"/>
                                  <text x="50" y="42" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">IB</text>
                                  <text x="50" y="68" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">KR</text>
                                </svg>
                              ) : logo.name === 'Alpaca' ? (
                                /* Alpaca Markets Logo */
                                <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="alpacaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#FFCD00"/>
                                      <stop offset="100%" stopColor="#F5B800"/>
                                    </linearGradient>
                                  </defs>
                                  <circle cx="50" cy="50" r="45" fill="url(#alpacaGradient)"/>
                                  {/* Stylized alpaca head */}
                                  <ellipse cx="50" cy="45" rx="25" ry="30" fill="#1A1A1A"/>
                                  <ellipse cx="50" cy="50" rx="18" ry="22" fill="#FFCD00"/>
                                  {/* Eyes */}
                                  <circle cx="42" cy="42" r="4" fill="#1A1A1A"/>
                                  <circle cx="58" cy="42" r="4" fill="#1A1A1A"/>
                                  {/* Nose */}
                                  <ellipse cx="50" cy="55" rx="6" ry="4" fill="#1A1A1A"/>
                                  {/* Ears */}
                                  <ellipse cx="32" cy="28" rx="6" ry="12" fill="#1A1A1A" transform="rotate(-20 32 28)"/>
                                  <ellipse cx="68" cy="28" rx="6" ry="12" fill="#1A1A1A" transform="rotate(20 68 28)"/>
                                </svg>
                              ) : logo.name === 'Zerodha' ? (
                                /* Zerodha Logo - smaller version */
                                <svg className="w-10 h-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="zerodhaGradientSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#387ED1"/>
                                      <stop offset="100%" stopColor="#2563EB"/>
                                    </linearGradient>
                                  </defs>
                                  <path d="M100 20 L170 100 L100 180 L30 100 Z" fill="url(#zerodhaGradientSmall)"/>
                                  <text x="100" y="115" textAnchor="middle" fill="#0f172a" fontSize="50" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
                                </svg>
                              ) : (
                                <span className="text-xl font-bold text-slate-600">
                                  {logo.name.charAt(0)}
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-medium text-navy-600 mt-2 block">
                              {logo.name}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-20 flex items-center justify-center`}>
                      <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-slate-500">Expert consulting & training</p>
                  </div>
                )}

                {/* Technology note */}
                <div className="mt-8 pt-6 border-t border-navy-100">
                  <p className="text-sm text-navy-600 text-center">
                    Built with industry-standard tools trusted by quantitative teams worldwide
                  </p>
                </div>
              </div>
              )}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg opacity-60`}
              style={{ background: `linear-gradient(135deg, ${service.accentColor}, ${service.accentColor}80)` }}
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-40`}
              style={{ background: `linear-gradient(135deg, ${service.accentColor}, ${service.accentColor}60)` }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
