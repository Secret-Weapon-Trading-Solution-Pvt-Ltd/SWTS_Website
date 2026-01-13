'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060610]/80 backdrop-blur-sm text-gray-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="font-semibold text-white mb-5">About Us</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We transform profitable manual trading strategies into reliable automated
              systems. Specializing in TradingView, AmiBroker, Python, and MetaTrader
              development.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/#services', label: 'Services' },
                { href: '/#projects', label: 'Projects' },
                { href: '/#about', label: 'About Us' },
                { href: '/strategy-assessment', label: 'Free Assessment' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@swts.in"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-500" />
                  contact@swts.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-500" />
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-500" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Secret Weapon Trading Solution Pvt. Ltd.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-xs text-gray-600 text-center">
          <p>
            Trading involves substantial risk. Past performance does not guarantee future
            results. We do not provide financial advice or profit guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
