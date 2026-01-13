'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Question, Answer } from '@/types';
import { allQuestions } from '@/lib/questions';
import { calculateScore } from '@/lib/scoring';
import { generateInsights, getNextSteps, generatePositiveInsight } from '@/lib/insights';
import { storage } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Send, Shield } from 'lucide-react';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export const AssessmentForm: React.FC = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
  });

  const currentQuestion = allQuestions[currentQuestionIndex];
  const totalQuestions = allQuestions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Get current answer
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id);

  // Handle answer change
  const handleAnswer = (answer: Answer) => {
    setError(null);
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === answer.questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = answer;
        return updated;
      }
      return [...prev, answer];
    });
  };

  // Validate current answer
  const validateCurrentAnswer = (): boolean => {
    if (!currentQuestion.required) return true;

    const answer = answers.find((a) => a.questionId === currentQuestion.id);
    if (!answer || !answer.value || (typeof answer.value === 'string' && !answer.value.trim())) {
      setError('Please answer this question to continue');
      return false;
    }

    return true;
  };

  // Validate contact info
  const validateContactInfo = (): boolean => {
    if (!contactInfo.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!contactInfo.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  // Navigate to next question
  const handleNext = () => {
    if (!validateCurrentAnswer()) return;

    if (isLastQuestion) {
      // Show contact form instead of submitting
      setShowContactForm(true);
      setError(null);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setError(null);
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (showContactForm) {
      setShowContactForm(false);
      setError(null);
    } else if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setError(null);
    }
  };

  // Submit assessment with contact info
  const handleSubmit = async () => {
    if (!validateContactInfo()) return;

    setIsSubmitting(true);

    try {
      // Calculate score
      const score = calculateScore(answers);

      // Generate insights
      let insights = generateInsights(answers);

      // Add positive insight for high performers
      const positiveInsight = generatePositiveInsight(answers);
      if (positiveInsight && insights.length < 3) {
        insights = [positiveInsight, ...insights].slice(0, 3);
      }

      // Get next steps based on lead quality
      const nextSteps = getNextSteps(score.leadQuality);

      // Store results in session storage
      const result = {
        score,
        insights,
        nextSteps,
        answers,
        contactInfo,
        timestamp: new Date().toISOString(),
      };

      storage.setAssessmentData(result);

      // Redirect to results page
      router.push('/strategy-assessment/results');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (showContactForm) {
          handleSubmit();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, answers, showContactForm, contactInfo]);

  // Render contact form
  if (showContactForm) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-xl mx-auto">
          {/* Simple Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Get Your Results
            </h1>
            <p className="text-gray-500">
              Enter your details to see your personalized assessment
            </p>
          </div>

          {/* Progress Bar - Complete */}
          <div className="mb-10">
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-full" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Phone Field (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-6 p-3 bg-green-50 rounded-lg flex items-start gap-2">
              <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-green-700">
                Your information is secure. No spam, ever.
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Get My Results
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Strategy Assessment
          </h1>
          <p className="text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
        </div>

        {/* Progress Bar - Simple */}
        <div className="mb-10">
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Form Card */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
          {/* Question Number Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {currentQuestionIndex + 1}
            </span>
            {currentQuestion.required && (
              <span className="text-xs text-red-500 font-medium">Required</span>
            )}
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {currentQuestion.question}
          </h2>

          {currentQuestion.description && (
            <p className="text-gray-500 text-sm mb-6">{currentQuestion.description}</p>
          )}

          {/* Answer Options */}
          <div className="mt-6 space-y-3">
            {currentQuestion.type === 'multiple_choice' || currentQuestion.type === 'yes_no' ? (
              currentQuestion.options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer({ questionId: currentQuestion.id, value: option.value })}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                    currentAnswer?.value === option.value
                      ? 'border-amber-500 bg-amber-50 text-gray-900'
                      : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                </button>
              ))
            ) : (
              <textarea
                value={(currentAnswer?.value as string) || ''}
                onChange={(e) => handleAnswer({ questionId: currentQuestion.id, value: e.target.value })}
                placeholder="Type your answer here..."
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none min-h-[120px] resize-none"
              />
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
          >
            {isLastQuestion ? 'Continue' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Skip Optional */}
        {!currentQuestion.required && !isLastQuestion && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Skip this question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentForm;
