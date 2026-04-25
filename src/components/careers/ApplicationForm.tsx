'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  User, Mail, Phone, MapPin, Briefcase, Github, Linkedin, Globe,
  FileText, Upload, Send, CheckCircle2, AlertCircle, Link2, X,
} from 'lucide-react';
import { sendJobApplicationToTelegram } from '@/lib/telegram';
import { jobOpenings } from '@/data/careers';

const MAX_RESUME_BYTES = 10 * 1024 * 1024; // 10 MB
const ACCEPTED_TYPES = '.pdf,.doc,.docx';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  experience: '',
  currentRole: '',
  currentCompany: '',
  currentCtc: '',
  noticePeriod: '',
  expectedCtc: '',
  portfolio: '',
  github: '',
  linkedin: '',
  taskLink: '',
  coverNote: '',
  jobTitle: jobOpenings[0]?.title ?? '',
};

export const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    setResumeError(null);
    if (!file) {
      setResume(null);
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResumeError('Resume must be 10 MB or smaller.');
      setResume(null);
      return;
    }
    const ok = /\.(pdf|docx?|odt)$/i.test(file.name);
    if (!ok) {
      setResumeError('Please upload a PDF, DOC, or DOCX file.');
      setResume(null);
      return;
    }
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!resume) {
      setResumeError('Please attach your resume.');
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await sendJobApplicationToTelegram({ ...formData, resume });
      if (success) {
        setIsSubmitted(true);
      } else {
        setError('Failed to submit application. Please email support@secretweapon.in directly.');
      }
    } catch {
      setError('Something went wrong. Please email support@secretweapon.in directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Received</h3>
            <p className="text-slate-700 mb-8">
              Thanks for applying. We&apos;ve received your resume and details. If your profile fits the role,
              we&apos;ll reach out within 5–7 working days.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData(initialState);
                setResume(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors"
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 overflow-hidden scroll-mt-20">
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="section-label">Apply</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Submit Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Application
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Fill in the details below and attach your resume. Include the link to your hiring task
              submission once it&apos;s ready.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100/80"
          >
            {/* Role */}
            <div className="mb-6">
              <label htmlFor="jobTitle" className="block text-sm font-semibold text-slate-700 mb-2">
                Role <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  id="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all cursor-pointer"
                >
                  {jobOpenings.map((j) => (
                    <option key={j.id} value={j.title}>{j.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <Field id="fullName" label="Full Name" required icon={User} placeholder="Jane Doe"
                value={formData.fullName} onChange={(v) => setFormData({ ...formData, fullName: v })} />
              <Field id="email" label="Email" required type="email" icon={Mail} placeholder="you@example.com"
                value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} />
              <Field id="phone" label="Phone" required type="tel" icon={Phone} placeholder="+91 98765 43210"
                value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} />
              <Field id="location" label="Location" required icon={MapPin} placeholder="Bengaluru, India"
                value={formData.location} onChange={(v) => setFormData({ ...formData, location: v })} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <Field id="experience" label="Years of Experience" required placeholder="e.g. 3 years"
                value={formData.experience} onChange={(v) => setFormData({ ...formData, experience: v })} />
              <Field id="currentRole" label="Current Role" required placeholder="e.g. Backend Engineer"
                value={formData.currentRole} onChange={(v) => setFormData({ ...formData, currentRole: v })} />
              <Field id="currentCompany" label="Current Company" required placeholder="e.g. Acme Trading"
                value={formData.currentCompany} onChange={(v) => setFormData({ ...formData, currentCompany: v })} />
              <Field id="currentCtc" label="Current CTC" required placeholder="e.g. ₹14 LPA"
                value={formData.currentCtc} onChange={(v) => setFormData({ ...formData, currentCtc: v })} />
              <Field id="expectedCtc" label="Expected CTC" required placeholder="e.g. ₹18 LPA"
                value={formData.expectedCtc} onChange={(v) => setFormData({ ...formData, expectedCtc: v })} />
              <Field id="noticePeriod" label="Notice Period" placeholder="e.g. 30 days / Immediate"
                value={formData.noticePeriod} onChange={(v) => setFormData({ ...formData, noticePeriod: v })} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <Field id="github" label="GitHub" icon={Github} placeholder="https://github.com/yourhandle"
                value={formData.github} onChange={(v) => setFormData({ ...formData, github: v })} />
              <Field id="linkedin" label="LinkedIn" icon={Linkedin} placeholder="https://linkedin.com/in/yourhandle"
                value={formData.linkedin} onChange={(v) => setFormData({ ...formData, linkedin: v })} />
              <Field id="portfolio" label="Portfolio / Website" icon={Globe} placeholder="https://yourdomain.com"
                value={formData.portfolio} onChange={(v) => setFormData({ ...formData, portfolio: v })} />
              <Field id="taskLink" label="Hiring Task Link (repo / Loom)" icon={Link2}
                placeholder="https://github.com/you/swts-task"
                value={formData.taskLink} onChange={(v) => setFormData({ ...formData, taskLink: v })} />
            </div>

            {/* Resume Upload */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Resume (PDF / DOC / DOCX, max 10 MB) <span className="text-red-400">*</span>
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_TYPES}
                onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                className="hidden"
                id="resume-input"
              />
              {!resume ? (
                <label
                  htmlFor="resume-input"
                  className="flex flex-col items-center justify-center gap-2 w-full px-4 py-8 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 hover:bg-slate-50 hover:border-teal-400 transition-all cursor-pointer"
                >
                  <Upload className="w-8 h-8 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Click to upload your resume</span>
                  <span className="text-xs text-slate-500">PDF, DOC, or DOCX — up to 10 MB</span>
                </label>
              ) : (
                <div className="flex items-center justify-between px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">{resume.name}</p>
                      <p className="text-xs text-slate-500">{(resume.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setResume(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors flex-shrink-0"
                    aria-label="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {resumeError && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  {resumeError}
                </p>
              )}
            </div>

            {/* Cover Note */}
            <div className="mb-8">
              <label htmlFor="coverNote" className="block text-sm font-semibold text-slate-700 mb-2">
                Why this role? (short cover note)
              </label>
              <textarea
                id="coverNote"
                rows={5}
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                placeholder="Tell us briefly about a trading system you've built or contributed to, and why you want to work on algo trading at SWTS."
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </>
              )}
            </motion.button>

            <p className="mt-4 text-xs text-slate-500 text-center">
              By submitting, you agree to be contacted by Secret Weapon Trading Solution Pvt. Ltd. about this role.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ComponentType<{ className?: string }>;
}

const Field: React.FC<FieldProps> = ({ id, label, required, type = 'text', placeholder, value, onChange, icon: Icon }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />}
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all`}
      />
    </div>
  </div>
);

export default ApplicationForm;
