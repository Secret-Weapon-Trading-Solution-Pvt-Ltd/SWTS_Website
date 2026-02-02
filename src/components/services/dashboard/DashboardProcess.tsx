'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Search, Palette, Code, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

interface DashboardProcessProps {
  service: Service;
}

const processSteps = [
  {
    step: 1,
    title: "Workflow Discovery",
    description: "We analyze your trading workflow to understand your data needs.",
    duration: "2-3 sessions",
    icon: Search,
    color: "slate",
    gradient: "from-slate-500 to-gray-600",
    details: [
      "Map tools & data sources",
      "Identify pain points",
      "Define key metrics"
    ]
  },
  {
    step: 2,
    title: "UX Design",
    description: "Create wireframes and prototypes based on your feedback.",
    duration: "1-2 weeks",
    icon: Palette,
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
    details: [
      "Wireframe dashboard views",
      "Interactive prototypes",
      "Finalize layouts"
    ]
  },
  {
    step: 3,
    title: "Development",
    description: "Build your dashboard with iterative sprints and feedback.",
    duration: "4-8 weeks",
    icon: Code,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    details: [
      "Data integrations",
      "Core components",
      "Real-time updates"
    ]
  },
  {
    step: 4,
    title: "Launch & Iterate",
    description: "Deploy and refine based on real-world usage.",
    duration: "Ongoing",
    icon: Rocket,
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    details: [
      "Deploy to environment",
      "Monitor performance",
      "Add new features"
    ]
  }
];

export default function DashboardProcess({ service }: DashboardProcessProps) {
  return (
    <section id="how-it-works" className="py-14 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dash-process-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#475569" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dash-process-grid)" />
          </svg>
        </div>
        <motion.div
          className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full blur-3xl opacity-50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section header */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full"></span>
            Our Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-slate-800 to-navy-900 bg-clip-text text-transparent">How We Build</span>{' '}
            <span className="bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 bg-clip-text text-transparent">Your Dashboard</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A collaborative process that ensures your dashboard fits your workflow perfectly
          </p>
        </motion.div>

        {/* Process steps - Horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-slate-200 via-gray-300 to-slate-200 rounded-full" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step number circle - positioned above the card on desktop */}
                  <div className="lg:flex lg:justify-center lg:mb-6 hidden">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-base shadow-md z-10`}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 h-full"
                  >
                    {/* Mobile step number */}
                    <div className="lg:hidden flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                        {step.step}
                      </div>
                      <div className={`flex-1 h-0.5 bg-gradient-to-r ${step.gradient} opacity-30 rounded-full`} />
                    </div>

                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-3 shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Title and duration */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: step.color === 'slate' ? '#f1f5f9' : step.color === 'blue' ? '#eff6ff' : step.color === 'emerald' ? '#ecfdf5' : '#fffbeb',
                          color: step.color === 'slate' ? '#475569' : step.color === 'blue' ? '#1d4ed8' : step.color === 'emerald' ? '#047857' : '#b45309'
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-900 font-medium mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: step.color === 'slate' ? '#64748B' : step.color === 'blue' ? '#3B82F6' : step.color === 'emerald' ? '#10B981' : '#F59E0B' }} />
                          <span className="text-base text-gray-800 font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Arrow to next step - hidden on last item and on mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[18px] -right-3 z-20">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-slate-400" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">
            Ready to Unify Your Trading Data?
          </h3>
          <p className="text-black mb-6 max-w-xl mx-auto">
            Let's discuss your workflow and design a dashboard that fits how you trade.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all duration-300 group"
          >
            Start Your Dashboard Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
