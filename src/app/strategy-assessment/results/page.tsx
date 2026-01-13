'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LandingLayout } from '@/components/layouts';
import { ScoreReveal, InsightCard, NextSteps } from '@/components/results';
import { storage } from '@/lib/utils';
import { ScoreResult, Insight, NextStep, Answer } from '@/types';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface AssessmentResult {
  score: ScoreResult;
  insights: Insight[];
  nextSteps: NextStep[];
  answers: Answer[];
  contactInfo: ContactInfo;
  timestamp: string;
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = storage.getAssessmentData<AssessmentResult>();

    if (!data) {
      router.push('/strategy-assessment');
      return;
    }

    setResult(data);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <LandingLayout>
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4" />
            <p className="text-gray-600">Calculating your results...</p>
          </div>
        </div>
      </LandingLayout>
    );
  }

  if (!result) {
    return null;
  }

  // Get first name from full name
  const firstName = result.contactInfo?.name?.split(' ')[0] || '';

  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50/30 py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Score Reveal */}
          <ScoreReveal score={result.score} userName={firstName} />

          {/* Personalized Insights */}
          {result.insights.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Your Personalized Insights
              </h2>
              <div className="space-y-4">
                {result.insights.map((insight, index) => (
                  <InsightCard key={insight.id} insight={insight} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Next Steps */}
          <NextSteps nextSteps={result.nextSteps} leadQuality={result.score.leadQuality} />

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Take the Next Step?
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with our team to discuss how we can help automate your trading strategy.
            </p>
            <a
              href="mailto:contact@swts.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/30"
            >
              Contact Us
            </a>
          </div>

          {/* Retake Assessment */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                storage.clearAssessmentData();
                router.push('/strategy-assessment');
              }}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Retake Assessment
            </button>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-gray-400 pb-8">
            <p>
              This assessment provides educational insights only. Trading involves risk.
              Past performance does not guarantee future results. We do not provide
              financial advice or profit guarantees.
            </p>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
