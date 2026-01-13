import { Question } from '@/types';

// Simple Trading Assessment Questions (5 Questions)
export const assessmentQuestions: Question[] = [
  {
    id: 'q_1',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'Describe your experience with options trading',
    description: '',
    required: true,
    weight: 10,
    options: [
      { id: 'q_1_new', label: "I'm new to options trading", value: 'new', score: 4 },
      { id: 'q_1_some', label: "I've done some options trading before", value: 'some', score: 7 },
      { id: 'q_1_experienced', label: "I'm an experienced options trader", value: 'experienced', score: 10 },
    ],
  },
  {
    id: 'q_2',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'Are you interested in option buying or selling?',
    description: '',
    required: true,
    weight: 10,
    options: [
      { id: 'q_2_buying', label: 'Options Buying', value: 'buying', score: 8 },
      { id: 'q_2_selling', label: 'Options Selling', value: 'selling', score: 8 },
      { id: 'q_2_both', label: "I'm interested in both", value: 'both', score: 10 },
    ],
  },
  {
    id: 'q_3',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'How many trades have you done in the past month?',
    description: '',
    required: true,
    weight: 10,
    options: [
      { id: 'q_3_zero', label: 'Zero', value: 'zero', score: 4 },
      { id: 'q_3_less10', label: 'Less than 10', value: 'less10', score: 7 },
      { id: 'q_3_more10', label: 'More than 10', value: 'more10', score: 10 },
    ],
  },
  {
    id: 'q_4',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'What is your monthly return expectation from your trading activities?',
    description: '',
    required: true,
    weight: 10,
    options: [
      { id: 'q_4_high', label: 'Greater than 5%', value: 'high', score: 10 },
      { id: 'q_4_medium', label: 'Around 2–5%', value: 'medium', score: 8 },
      { id: 'q_4_steady', label: 'Steady returns up to 2%', value: 'steady', score: 6 },
    ],
  },
  {
    id: 'q_5',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'How will you use SWTS?',
    description: '',
    required: true,
    weight: 10,
    options: [
      { id: 'q_5_manual', label: 'Manual Trading (Strategy Builder & Backtesting)', value: 'manual', score: 6 },
      { id: 'q_5_algo', label: 'Algo Trading', value: 'algo', score: 10 },
      { id: 'q_5_automate', label: 'I want to automate my indicator-based trading using tools like TradingView, Chartink, or Python', value: 'automate', score: 10 },
      { id: 'q_5_notsure', label: "I'm not sure", value: 'notsure', score: 4 },
    ],
  },
];

// Empty contact fields (kept for compatibility but not used)
export const contactFields: Question[] = [];

// For compatibility with existing code
export const bestPracticeQuestions: Question[] = [];
export const qualifyingQuestions: Question[] = [];

// Combined Questions Array (only assessment questions now)
export const allQuestions: Question[] = [...assessmentQuestions];

// Get questions by category
export const getQuestionsByCategory = (category: Question['category']): Question[] => {
  return allQuestions.filter((q) => q.category === category);
};

// Get question by ID
export const getQuestionById = (id: string): Question | undefined => {
  return allQuestions.find((q) => q.id === id);
};

// Calculate max possible score
export const getMaxPossibleScore = (): number => {
  return assessmentQuestions.reduce((sum, q) => sum + (q.weight || 0), 0);
};
