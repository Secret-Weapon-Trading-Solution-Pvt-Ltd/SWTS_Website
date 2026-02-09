'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-teal-400 uppercase tracking-wider mb-4">
              Ready to Get Started?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Your{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Trading Edge
              </span>{' '}
              Together
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether you have a strategy ready to automate or just an idea to explore,
              we&apos;re here to help you take the next step. Start with our free assessment
              or reach out directly.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                'Free strategy assessment',
                'Personalized recommendations',
                'No commitment required',
                'Expert consultation',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/strategy-assessment"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)',
                }}
              >
                Take Free Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="mailto:support@secretweapon.in"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-5">
                <a
                  href="tel:+917083718306"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Call us</div>
                    <div className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                      +91 7083718306
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 ml-auto group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:support@secretweapon.in"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email us</div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      support@secretweapon.in
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="text-white font-semibold">Kolhapur, Maharashtra, India</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>1000+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>100% Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>500+ Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
