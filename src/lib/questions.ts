import { Question } from '@/types';

// Optimized 5-Question Algo Trading Readiness Assessment
// Order: Algo Knowledge → Strategy Clarity → Current Execution → Capital Readiness → Automation Goal
// Purpose: Assess algo trading readiness, qualify leads, and segment for personalized follow-up
export const assessmentQuestions: Question[] = [
  // Q1: Algo Trading Knowledge - Determines education level & onboarding path
  {
    id: 'q_experience',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'How familiar are you with algorithmic trading?',
    description: 'This helps us understand your current knowledge of algo trading systems',
    required: true,
    weight: 10,
    options: [
      { id: 'q_exp_beginner', label: 'New to it – I\'ve heard of algo trading but never used it', value: 'beginner', score: 4 },
      { id: 'q_exp_intermediate', label: 'Some knowledge – I understand concepts like backtesting, signals & execution logic', value: 'intermediate', score: 7 },
      { id: 'q_exp_advanced', label: 'Experienced – I\'ve built or used algo trading systems before', value: 'advanced', score: 10 },
    ],
  },
  // Q2: Strategy Clarity - MOST CRITICAL - Do they have a rule-based strategy?
  {
    id: 'q_risk',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'Do you have a defined, rule-based trading strategy?',
    description: 'Algo trading requires clear entry/exit rules — this tells us your readiness',
    required: true,
    weight: 15,
    options: [
      { id: 'q_risk_low', label: 'No – I trade based on tips, news, or gut feeling', value: 'low', score: 6 },
      { id: 'q_risk_medium', label: 'Partially – I have some rules but still use discretion', value: 'medium', score: 10 },
      { id: 'q_risk_high', label: 'Yes – I have a fully defined strategy with clear rules for entry, exit & risk', value: 'high', score: 8 },
    ],
  },
  // Q3: Current Execution Method - Manual vs automated detection
  {
    id: 'q_frequency',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'How do you currently execute your trades?',
    description: 'Tells us where automation can add the most value for you',
    required: true,
    weight: 10,
    options: [
      { id: 'q_freq_rarely', label: 'Fully manual – I place every order myself on the broker platform', value: 'rarely', score: 4 },
      { id: 'q_freq_moderate', label: 'Semi-automated – I use alerts/scanners but execute manually', value: 'moderate', score: 7 },
      { id: 'q_freq_active', label: 'Automated – I already use APIs or algo platforms for execution', value: 'active', score: 10 },
    ],
  },
  // Q4: Capital & Commitment - Align expectations with investment readiness
  {
    id: 'q_returns',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'What capital are you planning to allocate for algo trading?',
    description: 'Helps us recommend the right strategy tier and risk parameters',
    required: true,
    weight: 10,
    options: [
      { id: 'q_ret_high', label: 'Above ₹10 Lakhs – Serious capital for dedicated algo strategies', value: 'high', score: 6 },
      { id: 'q_ret_medium', label: '₹2–10 Lakhs – Ready to deploy meaningful capital', value: 'medium', score: 10 },
      { id: 'q_ret_steady', label: 'Under ₹2 Lakhs – Starting small, want to test first', value: 'steady', score: 8 },
    ],
  },
  // Q5: Primary Goal with Algo Trading - Intent & feature mapping
  {
    id: 'q_usage',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'What is your primary goal with algo trading?',
    description: 'This determines which automation features we recommend for you',
    required: true,
    weight: 10,
    options: [
      { id: 'q_use_manual', label: 'Remove emotions – I want discipline in my execution', value: 'manual', score: 6 },
      { id: 'q_use_algo', label: 'Full automation – I want my strategy to run 24/7 without me', value: 'algo', score: 10 },
      { id: 'q_use_semi', label: 'Speed & accuracy – I want faster execution than manual trading', value: 'semi', score: 8 },
      { id: 'q_use_learn', label: 'Backtesting & validation – I want to test my ideas before going live', value: 'learn', score: 4 },
    ],
  },
];

// Combined Questions Array
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
