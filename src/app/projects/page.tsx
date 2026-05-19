'use client';

import { MainLayout } from '@/components/layouts';
import {
  ProjectsHero,
  TradeDistributorCard,
  FeaturedCaseStudy,
  DualAccountHedgingCard,
  OptionsTradingDashboardCard,
  TradingViewScripts,
} from '@/components/projects';

export default function ProjectsPage() {
  return (
    <MainLayout>
      {/* Hero - Clean headline with stats */}
      <ProjectsHero />

      {/* Trade Distributor System - First project */}
      <TradeDistributorCard />

      {/* Delta Exchange Crypto Screener - Second project */}
      <FeaturedCaseStudy />

      {/* Dual Account Hedging - Third project */}
      <DualAccountHedgingCard />

      {/* Automated Options Trading Dashboard - Fourth project */}
      <OptionsTradingDashboardCard />

      {/* TradingView Scripts */}
      <TradingViewScripts />
    </MainLayout>
  );
}
