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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16 lg:h-20">
          {/* Right Side - All Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                Services
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isServicesOpen && "rotate-180"
                )} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl border border-slate-200 shadow-lg py-2 animate-fade-in z-50">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs font-semibold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
                    >
                      View All Services →
                    </Link>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-3 py-2.5 hover:bg-slate-50 transition-colors"
                    >
                      <span className="block text-sm font-medium text-slate-700">{service.shortTitle}</span>
                      <span className="block text-xs text-slate-400 mt-0.5">{service.oneLiner}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl border border-slate-200 mb-4 overflow-hidden shadow-soft-lg animate-fade-in">
            <nav className="flex flex-col p-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services Expandable */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                >
                  Services
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isMobileServicesOpen && "rotate-180"
                  )} />
                </button>

                {isMobileServicesOpen && (
                  <div className="ml-4 border-l-2 border-slate-100 pl-2 pb-2">
                    <Link
                      href="/services"
                      onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                      className="block py-2 px-3 text-xs font-semibold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
                    >
                      View All Services →
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                        className="block py-2 px-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
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
                  className="py-3 px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
