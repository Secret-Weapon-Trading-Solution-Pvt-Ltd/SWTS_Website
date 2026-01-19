import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata: Metadata = {
  title: 'Services | SWTS - Trading Technology Solutions',
  description: 'Custom trading technology solutions including Pine Script development, Python algorithmic trading, AmiBroker AFL, MetaTrader EA development, and broker API integration.',
  keywords: [
    'algorithmic trading',
    'trading automation',
    'Pine Script development',
    'Python trading bot',
    'AmiBroker AFL',
    'MetaTrader EA',
    'broker API integration',
    'trading technology',
    'quantitative trading',
    'fintech development'
  ],
  openGraph: {
    title: 'Trading Technology Services | SWTS',
    description: 'Enterprise-grade trading technology solutions for serious traders and institutions.',
    type: 'website',
  }
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <ServicesHero />
      <ServicesGrid />
    </MainLayout>
  );
}
