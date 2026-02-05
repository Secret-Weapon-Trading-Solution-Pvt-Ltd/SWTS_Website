'use client';

import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import AlgoTradingHero from '@/components/learn/AlgoTradingHero';
import AlgoIntroSection from '@/components/learn/AlgoIntroSection';
import DataImportSection from '@/components/learn/DataImportSection';
import StrategySignalSection from '@/components/learn/StrategySignalSection';
import UIDecisionSection from '@/components/learn/UIDecisionSection';
import DeploymentSection from '@/components/learn/DeploymentSection';
import ExecutionSection from '@/components/learn/ExecutionSection';
import AlgoSummary from '@/components/learn/AlgoSummary';

export default function AlgoTradingExplained() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <AlgoTradingHero />

      {/* Introduction + Flowchart */}
      <AlgoIntroSection />

      {/* Section 1: Data Import - Detail */}
      <DataImportSection />

      {/* Section 2: Strategy Building & Signal Generation - Detail */}
      <StrategySignalSection />

      {/* Section 3: UI Decision - With/Without UI */}
      <UIDecisionSection />

      {/* Section 4: Deployment - PC vs Server */}
      <DeploymentSection />

      {/* Section 5: Order Execution & Notifications - Detail */}
      <ExecutionSection />

      {/* Summary Section */}
      <AlgoSummary />
    </MainLayout>
  );
}
