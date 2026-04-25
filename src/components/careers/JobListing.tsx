'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Clock, Mail, Phone, Sparkles } from 'lucide-react';
import { jobOpenings } from '@/data/careers';

export const JobListing: React.FC = () => {
  return (
    <section id="open-roles" className="relative py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Open Roles</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Roles We&apos;re{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Hiring For
              </span>
            </h2>
          </motion.div>

          {jobOpenings.map((job, idx) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-soft p-8 lg:p-10 mb-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                      Experience: {job.experience}
                    </span>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                  style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
                >
                  Apply Now
                </a>
              </div>

              <p className="text-base text-slate-700 leading-relaxed mb-8">{job.summary}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    Must-Haves ({job.experience})
                  </h4>
                  <ul className="space-y-2.5">
                    {job.mustHaves.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Nice to Have
                  </h4>
                  <ul className="space-y-2.5 mb-8">
                    {job.niceToHaves.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-base font-bold text-slate-900 mb-4">What You&apos;ll Do</h4>
                  <ul className="space-y-2.5">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="font-semibold text-slate-900">Apply via the form below — or email:</span>
                <a
                  href={`mailto:${job.applyEmail}?subject=${encodeURIComponent(job.emailSubject)}`}
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  {job.applyEmail}
                </a>
                <a
                  href={`tel:${job.applyPhone.replace(/\s|-/g, '')}`}
                  className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {job.applyPhone}
                </a>
                <span className="text-slate-500">Subject: {job.emailSubject}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
