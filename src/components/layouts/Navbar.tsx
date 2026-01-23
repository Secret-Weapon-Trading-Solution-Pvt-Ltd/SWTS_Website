'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/strategy-assessment', label: 'Assessment' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-2'
          : 'py-3'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-end h-14 lg:h-16 transition-all duration-300 rounded-2xl px-6",
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200/50'
            : 'bg-white/90 backdrop-blur-md shadow-md border border-slate-200/30'
        )}>
          {/* Right Side - All Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 text-slate-700 bg-slate-100/80 hover:bg-blue-100 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 text-slate-700 bg-slate-100/80 hover:bg-blue-100 hover:text-blue-700"
              >
                Services
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isServicesOpen && "rotate-180"
                )} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl py-2 animate-fade-in z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                    >
                      View All Services →
                    </Link>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-3 hover:bg-slate-50 transition-colors mx-2 rounded-xl"
                    >
                      <span className="block text-sm font-semibold text-slate-800">{service.shortTitle}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">{service.oneLiner}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 text-slate-700 bg-slate-100/80 hover:bg-blue-100 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-all duration-200 text-slate-700 bg-slate-100/80 hover:bg-blue-100 hover:text-blue-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Outside the main container for full width */}
      {isOpen && (
        <div className="lg:hidden mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl overflow-hidden animate-fade-in">
          <nav className="flex flex-col p-3 gap-1">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Expandable */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-200"
              >
                Services
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isMobileServicesOpen && "rotate-180"
                )} />
              </button>

              {isMobileServicesOpen && (
                <div className="mt-1 ml-2 border-l-2 border-blue-200 pl-2 space-y-1">
                  <Link
                    href="/services"
                    onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                    className="block py-2 px-3 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                  >
                    View All Services →
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                      className="block py-2.5 px-3 text-sm text-slate-700 bg-slate-50/50 hover:bg-slate-100 rounded-lg font-medium transition-all duration-200"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
