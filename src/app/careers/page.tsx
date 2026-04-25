import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts';
import {
  CareersHero,
  JobListing,
  HiringTask,
  ApplicationForm,
} from '@/components/careers';

export const metadata: Metadata = {
  title: 'Careers | Secret Weapon Trading Solution',
  description:
    'Join Secret Weapon Trading Solution Pvt. Ltd. We are hiring full-stack developers for live trading systems, backtesting engines, and broker integrations. Remote, full-time.',
  keywords: [
    'algo trading jobs',
    'trading developer hiring',
    'fintech jobs India',
    'Python algo trading job',
    'quant developer job',
    'SWTS careers',
  ],
  openGraph: {
    title: 'Careers | Secret Weapon Trading Solution',
    description:
      'Hiring full-stack developers for algo trading systems. Remote, full-time. Apply now.',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <MainLayout>
      <CareersHero />
      <JobListing />
      <HiringTask />
      <ApplicationForm />
    </MainLayout>
  );
}
