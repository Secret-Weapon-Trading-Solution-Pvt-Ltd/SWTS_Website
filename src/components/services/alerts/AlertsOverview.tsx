'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Bell, Zap, CheckCircle, ArrowRight, Clock, Eye, Smartphone, Mail, MessageSquare, Send, AlertTriangle, TrendingUp, Moon, Wifi } from 'lucide-react';

interface AlertsOverviewProps {
  service: Service;
}

// Clean background - no decorative elements
const BackgroundPattern = () => null;

// Alert Notification Illustration
const AlertNotificationIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-auto">
    <defs>
      <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="greenAlert" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <filter id="alertShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* Phone mockup */}
    <motion.g initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <rect x="100" y="20" width="200" height="240" rx="24" fill="#1F2937" filter="url(#alertShadow)"/>
      <rect x="108" y="35" width="184" height="210" rx="4" fill="#111827"/>

      {/* Status bar */}
      <text x="120" y="52" fill="#9CA3AF" fontSize="10">9:41</text>
      <rect x="250" y="44" width="30" height="12" rx="3" fill="#4ADE80"/>

      {/* Notification 1 - Active */}
      <motion.g
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <rect x="118" y="70" width="164" height="55" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <circle cx="138" cy="90" r="12" fill="url(#alertGrad)"/>
        <path d="M138 82v6m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <text x="156" y="88" fill="#92400E" fontSize="9" fontWeight="600">BREAKOUT ALERT</text>
        <text x="156" y="100" fill="#78350F" fontSize="8">NIFTY crossed 22,500</text>
        <text x="156" y="112" fill="#9CA3AF" fontSize="7">Just now</text>
        <circle cx="270" cy="90" r="4" fill="#F59E0B">
          <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite"/>
        </circle>
      </motion.g>

      {/* Notification 2 */}
      <motion.g
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <rect x="118" y="135" width="164" height="50" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1"/>
        <circle cx="138" cy="155" r="12" fill="url(#greenAlert)"/>
        <path d="M133 155l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="156" y="152" fill="#065F46" fontSize="9" fontWeight="600">RSI SIGNAL</text>
        <text x="156" y="164" fill="#047857" fontSize="8">RELIANCE oversold at 32</text>
        <text x="156" y="175" fill="#9CA3AF" fontSize="7">2 min ago</text>
      </motion.g>

      {/* Notification 3 */}
      <motion.g
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <rect x="118" y="195" width="164" height="40" rx="10" fill="#F3F4F6"/>
        <circle cx="138" cy="215" r="10" fill="#6B7280"/>
        <text x="156" y="212" fill="#374151" fontSize="9" fontWeight="600">VOLUME SPIKE</text>
        <text x="156" y="224" fill="#6B7280" fontSize="8">TCS +150% volume</text>
      </motion.g>
    </motion.g>

  </svg>
);

// Multi-Channel Delivery Illustration
const DeliveryChannelsIllustration = () => (
  <svg viewBox="0 0 480 320" className="w-full h-auto">
    <defs>
      <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="channelShadow2" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
      </filter>
    </defs>

    <rect x="10" y="10" width="460" height="300" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#channelShadow2)"/>

    {/* Title */}
    <text x="30" y="40" fill="#F59E0B" fontSize="14" fontWeight="bold">Your Alert Reaches You Instantly</text>
    <text x="30" y="58" fill="#6B7280" fontSize="10">Multiple delivery channels, your choice</text>

    {/* Center Hub - Alert System */}
    <motion.g
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="240" cy="160" r="50" fill="url(#hubGrad)"/>
      <path d="M240 125v20m0 30v10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="240" cy="185" r="4" fill="white"/>
      <text x="240" y="205" fill="white" fontSize="8" fontWeight="600" textAnchor="middle">24/7</text>
    </motion.g>

    {/* Connection lines with animation */}
    {[
      { x1: 190, y1: 130, x2: 100, y2: 95 },
      { x1: 290, y1: 130, x2: 380, y2: 95 },
      { x1: 190, y1: 190, x2: 100, y2: 225 },
      { x1: 290, y1: 190, x2: 380, y2: 225 },
    ].map((line, i) => (
      <motion.line
        key={i}
        x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
        stroke="#F59E0B"
        strokeWidth="2"
        strokeDasharray="6,4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
      >
        <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
      </motion.line>
    ))}

    {/* Telegram */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <rect x="40" y="70" width="90" height="60" rx="12" fill="#EFF6FF" stroke="#0088CC" strokeWidth="2"/>
      <circle cx="85" cy="95" r="14" fill="#0088CC"/>
      <path d="M85 85l-8 4 2 2-1 4 3-2 4 3 6-11z" fill="white"/>
      <text x="85" y="122" fill="#1D4ED8" fontSize="9" fontWeight="600" textAnchor="middle">Telegram</text>
    </motion.g>

    {/* WhatsApp */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <rect x="350" y="70" width="90" height="60" rx="12" fill="#ECFDF5" stroke="#25D366" strokeWidth="2"/>
      <circle cx="395" cy="95" r="14" fill="#25D366"/>
      <path d="M395 83c-5 0-9 4-9 9 0 1.6.4 3.1 1.2 4.4l-1.2 4.4 4.5-1.2c1.3.7 2.7 1.1 4.5 1.1 5 0 9-4 9-9s-4-8.7-9-8.7z" fill="white"/>
      <text x="395" y="122" fill="#059669" fontSize="9" fontWeight="600" textAnchor="middle">WhatsApp</text>
    </motion.g>

    {/* Email */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <rect x="40" y="200" width="90" height="60" rx="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
      <circle cx="85" cy="225" r="14" fill="#F59E0B"/>
      <path d="M77 220h16v10H77zm0 0l8 5 8-5" stroke="white" strokeWidth="1.5" fill="none"/>
      <text x="85" y="252" fill="#D97706" fontSize="9" fontWeight="600" textAnchor="middle">Email</text>
    </motion.g>

    {/* Webhook */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
    >
      <rect x="350" y="200" width="90" height="60" rx="12" fill="#F3E8FF" stroke="#A855F7" strokeWidth="2"/>
      <circle cx="395" cy="225" r="14" fill="#A855F7"/>
      <path d="M388 225h14m-7-7v14" stroke="white" strokeWidth="2"/>
      <text x="395" y="252" fill="#7C3AED" fontSize="9" fontWeight="600" textAnchor="middle">Webhook</text>
    </motion.g>

    {/* Bottom stats */}
    <rect x="30" y="275" width="420" height="28" rx="6" fill="#FEF9C3"/>
    <text x="130" y="293" fill="#92400E" fontSize="9" fontWeight="600" textAnchor="middle">Instant Delivery</text>
    <line x1="220" y1="280" x2="220" y2="298" stroke="#FDE68A" strokeWidth="1"/>
    <text x="310" y="293" fill="#92400E" fontSize="9" fontWeight="600" textAnchor="middle">Never Miss a Signal</text>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What are Strategy Alerts?",
    description: "Strategy alerts are automated notifications that fire the moment YOUR specific trading conditions are met. We code YOUR exact rules—whether it's a breakout, indicator crossover, or custom pattern—and connect them to instant delivery channels so you never miss a setup again.",
    highlights: [
      "Your exact conditions",
      "24/7 market monitoring",
      "Instant notifications",
      "Multiple channels"
    ]
  },
  whyAlerts: {
    title: "Why You Need Custom Alerts",
    description: "You can't watch charts 24 hours a day. Your setups happen while you sleep, work, or live your life. Custom alerts ensure you never miss an opportunity.",
    problems: [
      { icon: Moon, title: "Setups While You Sleep", description: "Markets move around the clock—your best trades might happen at 3 AM" },
      { icon: Eye, title: "Chart Fatigue", description: "Staring at screens all day burns you out and leads to mistakes" },
      { icon: AlertTriangle, title: "Generic Alerts Fail", description: "Simple price alerts can't capture YOUR multi-condition setups" },
      { icon: Clock, title: "Delayed Reaction", description: "By the time you manually spot the setup, the optimal entry is gone" },
      { icon: TrendingUp, title: "Missed Opportunities", description: "Every missed setup is potential profit left on the table" }
    ]
  },
  deliveryChannels: {
    title: "How Your Alerts Reach You",
    description: "Choose how you want to be notified. We integrate with all major platforms for instant, reliable delivery.",
    channels: [
      { icon: Send, name: "Telegram", description: "Fast, reliable bot messages to your phone", color: "from-blue-500 to-cyan-500" },
      { icon: MessageSquare, name: "WhatsApp", description: "Alerts to your most-used messaging app", color: "from-green-500 to-emerald-500" },
      { icon: Mail, name: "Email", description: "Detailed alerts with charts attached", color: "from-amber-500 to-orange-500" },
      { icon: Wifi, name: "Webhook", description: "Direct API calls for automation", color: "from-violet-500 to-purple-500" }
    ]
  },
  whoShouldUse: {
    title: "Who Needs Custom Alerts?",
    profiles: [
      { icon: Clock, title: "Part-Time Traders", description: "You have a day job but want to catch setups during market hours" },
      { icon: Moon, title: "Global Market Traders", description: "You trade markets in different time zones while you sleep" },
      { icon: TrendingUp, title: "Swing Traders", description: "You hold positions for days and need entry/exit signals without constant monitoring" }
    ]
  }
};

export default function AlertsOverview({ service }: AlertsOverviewProps) {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      <BackgroundPattern />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200"
          >
            <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
            Understanding Strategy Alerts
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-navy-900">
            Never Miss a Signal
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Get notified instantly when YOUR exact trading conditions trigger—24/7, even while you sleep.
          </p>
        </motion.div>

        {/* What It Is - Content LEFT, Visual RIGHT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold mb-5 border border-slate-200">
              <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
              The Basics
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              {overviewData.whatItIs.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.whatItIs.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.whatItIs.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-white border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="text-sm font-semibold text-navy-800">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:order-last"
          >
            <div className="relative w-full bg-white rounded-xl p-1 border border-slate-200 shadow-sm overflow-hidden">
              <AlertNotificationIllustration />
            </div>
          </motion.div>
        </div>

        {/* Why Alerts - FULL WIDTH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full text-red-700 text-sm font-semibold mb-4 border border-red-200/50">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
                  The Problem
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-amber-900 to-navy-900 bg-clip-text text-transparent mb-4">
                  {overviewData.whyAlerts.title}
                </h3>
                <p className="text-lg text-black max-w-2xl mx-auto">
                  {overviewData.whyAlerts.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                {overviewData.whyAlerts.problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-white border border-slate-200">
                        <problem.icon className="w-7 h-7 text-slate-700" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">{problem.title}</h4>
                    <p className="text-base text-black leading-relaxed">{problem.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delivery Channels - Visual LEFT, Text RIGHT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:order-first"
          >
            <div className="relative w-full bg-white rounded-2xl p-3 border border-slate-200 shadow-sm overflow-hidden">
              <DeliveryChannelsIllustration />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-last"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full text-emerald-700 text-sm font-semibold mb-5 border border-emerald-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              Delivery Channels
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-emerald-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.deliveryChannels.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.deliveryChannels.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.deliveryChannels.channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-white to-slate-50/50 rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-white border border-slate-200 shadow-md">
                    <channel.icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="text-lg font-bold text-black mb-1">{channel.name}</div>
                  <div className="text-sm text-black font-medium">{channel.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Who Should Use */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-700 text-sm font-semibold mb-5 border border-violet-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></span>
              Ideal For
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-amber-900 bg-clip-text text-transparent">
              {overviewData.whoShouldUse.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {overviewData.whoShouldUse.profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-amber-200 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-md bg-white border border-slate-200">
                  <profile.icon className="w-7 h-7 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-amber-900 transition-colors">{profile.title}</h4>
                  <p className="text-black leading-relaxed">{profile.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 group"
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
