'use client';

import React, { useEffect, useState } from 'react';
import { ScoreResult, LeadQuality } from '@/types';
import { getReadinessLabel, getScoreInterpretation } from '@/lib/scoring';
import { cn } from '@/lib/utils';
import { Award, TrendingUp, Shield } from 'lucide-react';

export interface ScoreRevealProps {
  score: ScoreResult;
  userName?: string;
}

export const ScoreReveal: React.FC<ScoreRevealProps> = ({ score, userName }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Animate score on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = score.percentage / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score.percentage) {
        setAnimatedScore(score.percentage);
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 300);
      } else {
        setAnimatedScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score.percentage]);

  const getScoreColor = (quality: LeadQuality): string => {
    switch (quality) {
      case 'high':
        return 'text-emerald-600';
      case 'medium':
        return 'text-amber-600';
      case 'low':
        return 'text-orange-500';
      default:
        return 'text-gray-600';
    }
  };

  const getBadgeIcon = (quality: LeadQuality) => {
    switch (quality) {
      case 'high':
        return Award;
      case 'medium':
        return TrendingUp;
      case 'low':
        return Shield;
      default:
        return Shield;
    }
  };

  const BadgeIcon = getBadgeIcon(score.leadQuality);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {userName ? `${userName}, Your Results Are Ready` : 'Your Results Are Ready'}
        </h1>
        <p className="text-gray-600">
          Here&apos;s your personalized strategy assessment
        </p>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className={cn(
                'transition-all duration-1000 ease-out',
                getScoreColor(score.leadQuality)
              )}
              style={{
                strokeDasharray: `${2 * Math.PI * 88}`,
                strokeDashoffset: `${2 * Math.PI * 88 * (1 - animatedScore / 100)}`,
              }}
            />
          </svg>

          {/* Score Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={cn(
                'text-5xl font-bold',
                getScoreColor(score.leadQuality)
              )}
            >
              {animatedScore}%
            </span>
            <span className="text-sm text-gray-500 mt-1">Readiness Score</span>
          </div>
        </div>
      </div>

      {/* Readiness Badge */}
      <div
        className={cn(
          'flex items-center justify-center gap-2 py-3 px-6 rounded-full mx-auto w-fit mb-8 transition-all duration-500',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          score.leadQuality === 'high' && 'bg-emerald-100 text-emerald-700',
          score.leadQuality === 'medium' && 'bg-amber-100 text-amber-700',
          score.leadQuality === 'low' && 'bg-orange-100 text-orange-700'
        )}
      >
        <BadgeIcon className="w-5 h-5" />
        <span className="font-bold">{getReadinessLabel(score.leadQuality)}</span>
      </div>

      {/* Interpretation */}
      <div
        className={cn(
          'text-center transition-all duration-500 delay-200',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
          {getScoreInterpretation(score)}
        </p>
      </div>

      {/* Category Breakdown */}
      <div
        className={cn(
          'mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6 transition-all duration-500 delay-300',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-amber-600">
            {score.totalScore}
          </div>
          <div className="text-sm text-gray-500">Total Points</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">
            {score.maxScore}
          </div>
          <div className="text-sm text-gray-500">Maximum Points</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreReveal;
