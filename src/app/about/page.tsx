import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts';
import {
  AboutHero,
  OurStory,
  VisionMission,
} from '@/components/about';

export const metadata: Metadata = {
  title: 'About Us | Secret Weapon Trading Solution',
  description:
    'Learn about Secret Weapon Trading Solution - with over a decade in trading and expertise in algo development, we help traders automate their edge with precision and consistency.',
  keywords: [
    'about secret weapon',
    'trading automation company',
    'algo trading experts',
    'amibroker developers',
    'tradingview pine script',
    'trading solution india',
  ],
  openGraph: {
    title: 'About Us | Secret Weapon Trading Solution',
    description:
      'With over a decade in trading and expertise in algo development, we help traders automate their edge with precision and consistency.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section - Company intro with stats */}
      <AboutHero />

      {/* Our Story - Timeline journey */}
      <OurStory />

      {/* Vision & Mission - Side by side cards */}
      <VisionMission />
    </MainLayout>
  );
}
