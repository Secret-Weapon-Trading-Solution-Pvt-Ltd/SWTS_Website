'use client';

import { MainLayout } from '@/components/layouts';
import {
  ProjectsHero,
  ProjectsGrid,
  TradingViewScripts,
} from '@/components/projects';

export default function ProjectsPage() {
  return (
    <MainLayout>
      <ProjectsHero />
      <ProjectsGrid />
      <TradingViewScripts />
    </MainLayout>
  );
}
