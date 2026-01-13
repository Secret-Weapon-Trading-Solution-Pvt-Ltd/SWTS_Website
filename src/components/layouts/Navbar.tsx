'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#060610]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors relative text-gray-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Empty space for balance on desktop */}
          <div className="hidden lg:block" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0a0a14]/95 backdrop-blur-md rounded-2xl border border-white/10 mb-4 overflow-hidden animate-slide-up">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg font-medium transition-colors"
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
