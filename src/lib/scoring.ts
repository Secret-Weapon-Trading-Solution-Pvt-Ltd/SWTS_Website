import { Answer, ScoreResult, LeadQuality } from '@/types';
import { assessmentQuestions, getQuestionById } from './questions';

// Calculate score from a single answer
export const calculateAnswerScore = (answer: Answer): number => {
  const question = getQuestionById(answer.questionId);
  if (!question || !question.options) return 0;

  const selectedOption = question.options.find((opt) => opt.value === answer.value);
  return selectedOption?.score || 0;
};

// Calculate total score from all answers
export const calculateTotalScore = (answers: Answer[]): number => {
  return answers.reduce((sum, answer) => sum + calculateAnswerScore(answer), 0);
};

// Calculate max possible score
export const getMaxScore = (): number => {
  return assessmentQuestions.reduce((sum, q) => {
    if (!q.options) return sum;
    const maxOptionScore = Math.max(...q.options.map((opt) => opt.score || 0));
    return sum + maxOptionScore;
  }, 0);
};

// Determine lead quality based on percentage
export const determineLeadQuality = (percentage: number): LeadQuality => {
  if (percentage >= 70) return 'high';
  if (percentage >= 40) return 'medium';
  return 'low';
};

// Main scoring function
export const calculateScore = (answers: Answer[]): ScoreResult => {
  const totalScore = calculateTotalScore(answers);
  const maxScore = getMaxScore();

  // Prevent division by zero
  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return {
    totalScore,
    maxScore,
    percentage,
    leadQuality: determineLeadQuality(percentage),
    categoryScores: {
      bestPractices: totalScore,
      qualifying: 0,
    },
  };
};

// Get score interpretation message
export const getScoreInterpretation = (score: ScoreResult): string => {
  const { percentage, leadQuality } = score;

  if (leadQuality === 'high') {
    return `Your strategy readiness score of ${percentage}% indicates you have a strong foundation for automation. Your trading practices align well with systematic trading requirements.`;
  }

  if (leadQuality === 'medium') {
    return `Your strategy readiness score of ${percentage}% shows promising potential. With some refinements to your trading practices, you could benefit significantly from automation.`;
  }

  return `Your strategy readiness score of ${percentage}% suggests there are opportunities to strengthen your trading foundation before automation. Building solid fundamentals will maximize automation benefits.`;
};

// Get readiness level label
export const getReadinessLabel = (leadQuality: LeadQuality): string => {
  switch (leadQuality) {
    case 'high':
      return 'Automation Ready';
    case 'medium':
      return 'Building Foundations';
    case 'low':
      return 'Early Stage';
    default:
      return 'Assessment Complete';
  }
};
