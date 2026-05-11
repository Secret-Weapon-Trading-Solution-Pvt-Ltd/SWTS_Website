import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts';
import { PrivacyHero, PrivacyContent } from '@/components/privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Secret Weapon Trading Solution',
  description:
    'Read the Privacy Policy of Secret Weapon Trading Solution Pvt. Ltd. Learn how we collect, use, store, and protect your personal information.',
  keywords: [
    'SWTS privacy policy',
    'Secret Weapon Trading privacy',
    'data protection',
    'personal data policy',
  ],
  openGraph: {
    title: 'Privacy Policy | Secret Weapon Trading Solution',
    description:
      'How Secret Weapon Trading Solution Pvt. Ltd. collects, uses, and protects your personal information.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <MainLayout>
      <PrivacyHero />
      <PrivacyContent />
    </MainLayout>
  );
}
