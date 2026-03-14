import { Answer, Insight, NextStep, LeadQuality } from '@/types';
import { getQuestionById } from './questions';

// Insight definitions based on question responses
// Updated to match new question IDs: q_experience, q_risk, q_frequency, q_returns, q_usage
const insightDefinitions: Record<string, (value: string) => Insight | null> = {
  // Q1: Algo Trading Knowledge
  q_experience: (value) => {
    if (value === 'beginner') {
      return {
        id: 'insight_beginner',
        title: 'Your Algo Journey Starts Here',
        description:
          'You\'re new to algo trading — and that\'s actually an advantage. No bad habits, no emotional baggage. You\'ll learn to think in systems from day one.',
        recommendation:
          'Start with our guided algo onboarding: understand how strategies are built, backtested, and deployed — before risking any real capital.',
        priority: 'high',
      };
    }
    if (value === 'intermediate') {
      return {
        id: 'insight_intermediate',
        title: 'You Know the Concepts — Time to Execute',
        description:
          'You understand backtesting, signals, and execution logic. The gap now is turning that knowledge into a live, automated system.',
        recommendation:
          'Focus on converting your best manual strategy into an algo. We\'ll help you define rules, backtest properly, and go live with confidence.',
        priority: 'medium',
      };
    }
    if (value === 'advanced') {
      return {
        id: 'insight_advanced',
        title: 'Ready for Advanced Algo Infrastructure',
        description:
          'You\'ve built or used algo systems before. You need a platform that matches your sophistication — multi-strategy deployment, dynamic risk, and API-level control.',
        recommendation:
          'Explore our API integrations, custom strategy builder, and multi-strategy portfolio management for institutional-grade automation.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q2: Strategy Clarity - Most Critical
  q_risk: (value) => {
    if (value === 'low') {
      return {
        id: 'insight_risk_low',
        title: 'Strategy First, Algo Second',
        description:
          'Trading on tips or gut feeling can\'t be automated — and that\'s the honest truth. But this is exactly where we add value.',
        recommendation:
          'We\'ll help you build a rule-based strategy from scratch. Define clear entry/exit conditions, backtest them, and only then automate.',
        priority: 'high',
      };
    }
    if (value === 'medium') {
      return {
        id: 'insight_risk_medium',
        title: 'Almost Algo-Ready',
        description:
          'You have some rules but still rely on discretion. That discretion is where emotions sneak in and hurt your P&L.',
        recommendation:
          'Let\'s formalize your partial rules into complete algo logic. Remove the grey areas so your system can execute without hesitation.',
        priority: 'medium',
      };
    }
    if (value === 'high') {
      return {
        id: 'insight_risk_high',
        title: 'Perfect Algo Candidate',
        description:
          'A fully defined, rule-based strategy is exactly what algo trading needs. Your strategy is ready to be automated.',
        recommendation:
          'Your clear rules translate directly into algo logic. Let\'s backtest, optimize, and deploy your strategy for automated execution.',
        priority: 'high',
      };
    }
    return null;
  },

  // Q3: Current Execution Method
  q_frequency: (value) => {
    if (value === 'rarely') {
      return {
        id: 'insight_rare_trader',
        title: 'Manual Execution is Holding You Back',
        description:
          'Placing every order manually means you\'re exposed to delays, emotional decisions, and missed entries — especially in fast markets.',
        recommendation:
          'Even partial automation (auto stop-loss, auto position sizing) can dramatically improve your execution. Start there.',
        priority: 'high',
      };
    }
    if (value === 'moderate') {
      return {
        id: 'insight_moderate_trader',
        title: 'Bridge the Last Mile to Full Automation',
        description:
          'Using alerts and scanners is smart, but manual execution is still the weakest link. The signal is only as good as its execution.',
        recommendation:
          'Connect your alerts directly to automated execution. Remove the human delay between signal and order placement.',
        priority: 'medium',
      };
    }
    if (value === 'active') {
      return {
        id: 'insight_active_trader',
        title: 'Already Automated — Time to Optimize',
        description:
          'You\'re already using APIs or algo platforms. The next level is optimizing execution, reducing slippage, and scaling strategies.',
        recommendation:
          'Explore our advanced features: multi-strategy deployment, smart order routing, and real-time risk dashboards.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q4: Capital Allocation
  q_returns: (value) => {
    if (value === 'high') {
      return {
        id: 'insight_high_returns',
        title: 'Serious Capital, Serious Algos',
        description:
          'With ₹10L+ capital, you can access advanced strategies — multi-leg options, hedged portfolios, and institutional-grade risk management.',
        recommendation:
          'Your capital level qualifies you for our premium strategy tiers. Let\'s discuss portfolio-level algo deployment with proper risk controls.',
        priority: 'high',
      };
    }
    if (value === 'medium') {
      return {
        id: 'insight_medium_returns',
        title: 'Sweet Spot for Algo Trading',
        description:
          '₹2–10L is the ideal range to start meaningful algo trading — enough to diversify across strategies while managing risk properly.',
        recommendation:
          'Start with 1-2 proven strategies, backtest thoroughly, and scale as you see consistent results. We\'ll help you find the right fit.',
        priority: 'low',
      };
    }
    if (value === 'steady') {
      return {
        id: 'insight_steady_returns',
        title: 'Smart Start with Paper Trading',
        description:
          'Starting small is wise. Use this phase to test and validate your algo strategies with paper trading before deploying real capital.',
        recommendation:
          'Our paper trading and backtesting tools let you validate ideas with zero risk. Build confidence, then scale up when ready.',
        priority: 'medium',
      };
    }
    return null;
  },

  // Q5: Primary Algo Trading Goal
  q_usage: (value) => {
    if (value === 'manual') {
      return {
        id: 'insight_manual',
        title: 'Emotion-Free Trading Through Algos',
        description:
          'Removing emotions is the #1 reason traders switch to algos. Fear, greed, and hesitation disappear when a system executes for you.',
        recommendation:
          'Start by automating your exit rules (stop-loss, target) — the point where emotions hurt most. Then gradually automate entries.',
        priority: 'medium',
      };
    }
    if (value === 'algo') {
      return {
        id: 'insight_algo',
        title: 'Full Automation — The Ultimate Goal',
        description:
          'You want your strategy running 24/7 without intervention. That\'s exactly what our platform is built for — hands-free algo execution.',
        recommendation:
          'Let\'s map your strategy into our algo engine. From signal generation to order execution to risk management — fully automated.',
        priority: 'high',
      };
    }
    if (value === 'semi') {
      return {
        id: 'insight_semi',
        title: 'Speed is Your Edge',
        description:
          'In fast markets, milliseconds matter. Algo execution eliminates the delay between seeing an opportunity and acting on it.',
        recommendation:
          'Our low-latency execution system ensures your orders hit the market faster than any manual click. Speed + accuracy = better fills.',
        priority: 'medium',
      };
    }
    if (value === 'learn') {
      return {
        id: 'insight_learn',
        title: 'Validate Before You Deploy',
        description:
          'Backtesting your ideas before going live is the smartest move in algo trading. Most traders skip this and pay the price.',
        recommendation:
          'Use our backtesting engine to test your strategies across years of historical data. Only deploy what actually works.',
        priority: 'high',
      };
    }
    return null;
  },
};

// Generate insights from answers
export const generateInsights = (answers: Answer[]): Insight[] => {
  const insights: Insight[] = [];

  answers.forEach((answer) => {
    const generateInsight = insightDefinitions[answer.questionId];
    if (generateInsight) {
      const insight = generateInsight(answer.value as string);
      if (insight) {
        insights.push(insight);
      }
    }
  });

  // Sort by priority (high first)
  const priorityOrder: Record<string, number> = { high: 0, medium: 1, low: 2 };
  insights.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  // Return top 3 insights
  return insights.slice(0, 3);
};

// Define next steps based on lead quality
export const getNextSteps = (leadQuality: LeadQuality): NextStep[] => {
  const allNextSteps: NextStep[] = [
    {
      id: 'consultation',
      title: 'Schedule Your Strategy Consultation',
      description:
        'Get a personalized 30-minute session with our automation experts to discuss your specific strategy and implementation roadmap.',
      ctaText: 'Book Free Consultation',
      ctaLink: 'mailto:contact@swts.in?subject=Strategy%20Consultation%20Request',
      forLeadQuality: ['high'],
    },
    {
      id: 'demo',
      title: 'See Our Platform in Action',
      description:
        'See our automation solutions in action. Learn how other traders are using algorithmic systems to improve consistency.',
      ctaText: 'Request Demo',
      ctaLink: 'mailto:contact@swts.in?subject=Demo%20Request',
      forLeadQuality: ['high', 'medium'],
    },
    {
      id: 'strategy_review',
      title: 'Get Your Strategy Reviewed',
      description:
        'Submit your trading strategy for a complimentary review. We\'ll assess automation potential and suggest improvements.',
      ctaText: 'Submit Strategy',
      ctaLink: 'mailto:contact@swts.in?subject=Strategy%20Review%20Request',
      forLeadQuality: ['medium'],
    },
    {
      id: 'learning_resources',
      title: 'Learn More About Algo Trading',
      description:
        'Discover how algorithmic trading can transform your trading results with our educational resources.',
      ctaText: 'Contact Us',
      ctaLink: 'mailto:contact@swts.in?subject=Learning%20Resources',
      forLeadQuality: ['medium', 'low'],
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      description:
        'Have questions? Our team is here to help you understand how SWTS can fit your trading needs.',
      ctaText: 'Contact Us',
      ctaLink: 'mailto:contact@swts.in',
      forLeadQuality: ['high', 'medium', 'low'],
    },
  ];

  return allNextSteps.filter((step) => step.forLeadQuality.includes(leadQuality));
};

// Generate positive insight for high performers
export const generatePositiveInsight = (answers: Answer[]): Insight | null => {
  const positiveAnswers = answers.filter((a) => {
    const q = getQuestionById(a.questionId);
    if (!q?.options) return false;
    const selectedOption = q.options.find((opt) => opt.value === a.value);
    const maxScore = Math.max(...q.options.map((opt) => opt.score || 0));
    return selectedOption?.score === maxScore;
  });

  // With only 5 questions, lower the threshold
  if (positiveAnswers.length >= 3) {
    return {
      id: 'insight_strong_foundation',
      title: 'High Algo-Readiness Score',
      description:
        'Your responses show you have the knowledge, strategy clarity, and capital readiness to succeed with algo trading.',
      recommendation:
        'You\'re in the top tier of algo-readiness. Let\'s fast-track your setup — strategy deployment, risk parameters, and live execution.',
      priority: 'low',
    };
  }

  return null;
};
