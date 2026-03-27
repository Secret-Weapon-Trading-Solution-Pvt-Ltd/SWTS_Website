'use client';

import { MainLayout } from '@/components/layouts';
import {
  ProjectsHero,
  TradeDistributorCard,
  FeaturedCaseStudy,
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

      {/* TradingView Scripts */}
      <TradingViewScripts />
    </MainLayout>
  );
}
