'use client';

import { useState, useCallback, useEffect } from 'react';
import { Answer, ContactInfo, AssessmentState } from '@/types';
import { allQuestions } from '@/lib/questions';
import { storage } from '@/lib/utils';

const STORAGE_KEY = 'swts_assessment_progress';

interface UseAssessmentReturn {
  state: AssessmentState;
  currentQuestion: typeof allQuestions[0] | undefined;
  setAnswer: (answer: Answer) => void;
  getAnswer: (questionId: string) => Answer | undefined;
  nextQuestion: () => void;
  previousQuestion: () => void;
  setContactInfo: (info: Partial<ContactInfo>) => void;
  reset: () => void;
  canProceed: boolean;
  progress: number;
}

const initialState: AssessmentState = {
  currentStep: 0,
  totalSteps: allQuestions.length,
  contactInfo: {
    name: '',
    email: '',
    phone: undefined,
  },
  answers: [],
  isComplete: false,
};

export const useAssessment = (): UseAssessmentReturn => {
  const [state, setState] = useState<AssessmentState>(initialState);

  // Load saved progress on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setState(parsed);
        } catch {
          // Invalid saved data, use initial state
        }
      }
    }
  }, []);

  // Save progress on state change
  useEffect(() => {
    if (typeof window !== 'undefined' && state.currentStep > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const currentQuestion = allQuestions[state.currentStep];

  const setAnswer = useCallback((answer: Answer) => {
    setState((prev) => {
      const existingIndex = prev.answers.findIndex(
        (a) => a.questionId === answer.questionId
      );

      let newAnswers: Answer[];
      if (existingIndex >= 0) {
        newAnswers = [...prev.answers];
        newAnswers[existingIndex] = answer;
      } else {
        newAnswers = [...prev.answers, answer];
      }

      return {
        ...prev,
        answers: newAnswers,
      };
    });
  }, []);

  const getAnswer = useCallback(
    (questionId: string): Answer | undefined => {
      return state.answers.find((a) => a.questionId === questionId);
    },
    [state.answers]
  );

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      const nextStep = Math.min(prev.currentStep + 1, prev.totalSteps - 1);
      const isComplete = nextStep === prev.totalSteps - 1;
      return {
        ...prev,
        currentStep: nextStep,
        isComplete,
      };
    });
  }, []);

  const previousQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0),
    }));
  }, []);

  const setContactInfo = useCallback((info: Partial<ContactInfo>) => {
    setState((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        ...info,
      },
    }));
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const canProceed = useCallback((): boolean => {
    if (!currentQuestion) return false;
    if (!currentQuestion.required) return true;

    const answer = getAnswer(currentQuestion.id);
    return !!(answer && answer.value && String(answer.value).trim());
  }, [currentQuestion, getAnswer])();

  const progress = Math.round(((state.currentStep + 1) / state.totalSteps) * 100);

  return {
    state,
    currentQuestion,
    setAnswer,
    getAnswer,
    nextQuestion,
    previousQuestion,
    setContactInfo,
    reset,
    canProceed,
    progress,
  };
};

export default useAssessment;
