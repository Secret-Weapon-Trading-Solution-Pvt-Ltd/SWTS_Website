'use client';

import { MainLayout } from '@/components/layouts';
import {
  ProjectsHero,
  FeaturedCaseStudy,
  TradingViewScripts,
} from '@/components/projects';

export default function ProjectsPage() {
  return (
    <MainLayout>
      {/* Hero - Clean headline with stats */}
      <ProjectsHero />

      {/* Featured Case Study - Flagship project highlight */}
      <FeaturedCaseStudy />

      {/* TradingView Scripts - commented out for future use */}
      {/* <TradingViewScripts /> */}
    </MainLayout>
  );
}
