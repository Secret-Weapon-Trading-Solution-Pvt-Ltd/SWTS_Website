'use client';

import { useRouter } from 'next/navigation';
import { LandingLayout } from '@/components/layouts';
import { LandingHero } from '@/components/landing';

export default function StrategyAssessmentPage() {
  const router = useRouter();

  const handleStartAssessment = () => {
    router.push('/strategy-assessment/questionnaire');
  };

  return (
    <LandingLayout>
      <LandingHero onStartAssessment={handleStartAssessment} />
    </LandingLayout>
  );
}
