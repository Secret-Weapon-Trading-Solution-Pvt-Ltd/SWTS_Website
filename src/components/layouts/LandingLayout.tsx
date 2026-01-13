'use client';

import React from 'react';
import { MinimalHeader } from './MinimalHeader';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default LandingLayout;
