'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Settings,
  Share2,
  Lock,
  Cookie,
  Globe,
  UserCheck,
  Clock,
  Mail,
  Phone,
  RefreshCw,
} from 'lucide-react';

const sections = [
  {
    id: 1,
    icon: Database,
    title: 'Information We Collect',
    color: 'teal',
    content: 'We may collect the following information:',
    items: [
      'Name',
      'Email address',
      'Phone number',
      'Company details',
      'Lead form submissions',
      'Communication details',
      'Technical and device information',
      'Usage analytics and cookies',
    ],
  },
  {
    id: 2,
    icon: Settings,
    title: 'How We Use Information',
    color: 'blue',
    content: 'We use collected information to:',
    items: [
      'Respond to inquiries and support requests',
      'Manage customer relationships',
      'Process lead generation and CRM workflows',
      'Send notifications and follow-ups',
      'Improve our services and automation systems',
      'Provide algorithmic trading and software development services',
      'Maintain security and prevent fraud',
    ],
  },
  {
    id: 3,
    icon: Globe,
    title: 'Lead Generation and CRM Integration',
    color: 'cyan',
    content:
      'Our company may use third-party platforms such as LinkedIn, Meta (Facebook/WhatsApp), Google, CRM systems, and workflow automation tools including n8n to process and manage customer leads and communications.',
    items: [],
  },
  {
    id: 4,
    icon: Share2,
    title: 'Data Sharing',
    color: 'teal',
    content: 'We do not sell personal information. We may share information with:',
    items: [
      'Service providers and automation platforms',
      'CRM and cloud infrastructure providers',
      'Communication providers such as email or WhatsApp services',
      'Legal authorities when required by law',
    ],
  },
  {
    id: 5,
    icon: Lock,
    title: 'Data Security',
    color: 'blue',
    content:
      'We implement reasonable technical and organizational measures to protect personal data from unauthorized access, misuse, loss, or disclosure.',
    items: [],
  },
  {
    id: 6,
    icon: Cookie,
    title: 'Cookies and Analytics',
    color: 'cyan',
    content:
      'Our website may use cookies and analytics tools to improve user experience and analyze website traffic.',
    items: [],
  },
  {
    id: 7,
    icon: Globe,
    title: 'Third-Party Services',
    color: 'teal',
    content: 'Our services may integrate with third-party platforms including:',
    items: [
      'LinkedIn',
      'Meta / Facebook / WhatsApp',
      'Google',
      'CRM systems',
      'Automation platforms',
    ],
    footer:
      'These platforms may collect and process data according to their own privacy policies.',
  },
  {
    id: 8,
    icon: UserCheck,
    title: 'User Rights',
    color: 'blue',
    content: 'Users may request:',
    items: [
      'Access to their personal data',
      'Correction of inaccurate information',
      'Deletion of personal information',
      'Withdrawal of consent where applicable',
    ],
  },
  {
    id: 9,
    icon: Clock,
    title: 'Data Retention',
    color: 'cyan',
    content:
      'We retain information only as long as necessary for business, legal, or operational purposes.',
    items: [],
  },
  {
    id: 11,
    icon: RefreshCw,
    title: 'Changes to this Privacy Policy',
    color: 'blue',
    content:
      'We may update this Privacy Policy periodically. Updated versions will be posted on this page with the revised effective date.',
    items: [],
  },
];

const colorMap = {
  teal: {
    badge: 'bg-teal-50 text-teal-700',
    icon: 'bg-teal-100 text-teal-600',
    dot: 'text-teal-500',
    border: 'border-teal-100',
  },
  blue: {
    badge: 'bg-blue-50 text-blue-700',
    icon: 'bg-blue-100 text-blue-600',
    dot: 'text-blue-500',
    border: 'border-blue-100',
  },
  cyan: {
    badge: 'bg-cyan-50 text-cyan-700',
    icon: 'bg-cyan-100 text-cyan-600',
    dot: 'text-cyan-500',
    border: 'border-cyan-100',
  },
};

export const PrivacyContent: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="section-label">Policy Details</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              How We Handle{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Your Data
              </span>
            </h2>
          </motion.div>

          {/* Policy sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const colors = colorMap[section.color as keyof typeof colorMap];
              return (
                <motion.article
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className={`bg-white rounded-3xl border border-slate-200 shadow-soft p-8 lg:p-10`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                        {section.id}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed">
                    {section.content}
                  </p>

                  {section.items.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                        >
                          <span className={`mt-1 ${colors.dot}`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {'footer' in section && section.footer && (
                    <p className={`mt-4 pt-4 border-t ${colors.border} text-sm text-slate-600 leading-relaxed`}>
                      {section.footer}
                    </p>
                  )}
                </motion.article>
              );
            })}

            {/* Contact section — styled separately for emphasis */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-soft p-8 lg:p-10"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-teal-100 text-teal-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700">10</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Contact Information</h3>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                For any privacy-related queries or to exercise your rights, please reach out to us:
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="mailto:support@secretweapon.in"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  support@secretweapon.in
                </a>
                <a
                  href="tel:+917083718306"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-teal-50 text-teal-700 font-medium hover:bg-teal-100 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 7083718306
                </a>
                <a
                  href="https://www.secretweapon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  www.secretweapon.in
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
