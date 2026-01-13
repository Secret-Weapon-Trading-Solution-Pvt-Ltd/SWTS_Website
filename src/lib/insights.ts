import { Answer, Insight, NextStep, LeadQuality } from '@/types';
import { getQuestionById } from './questions';

// Insight definitions based on question responses
const insightDefinitions: Record<string, (value: string) => Insight | null> = {
  // Q1: Experience with options trading
  q_1: (value) => {
    if (value === 'new') {
      return {
        id: 'insight_new_trader',
        title: 'Great Starting Point',
        description:
          'As someone new to options trading, you\'re at an ideal stage to learn proper systematic trading habits from the start.',
        recommendation:
          'Consider starting with paper trading or small positions while learning. Our platform can help you develop discipline early.',
        priority: 'high',
      };
    }
    if (value === 'experienced') {
      return {
        id: 'insight_experienced',
        title: 'Ready for Advanced Features',
        description:
          'Your experience in options trading positions you well to take advantage of advanced automation features.',
        recommendation:
          'Explore our advanced strategy builder and backtesting tools to optimize your existing approaches.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q2: Option buying or selling interest
  q_2: (value) => {
    if (value === 'buying') {
      return {
        id: 'insight_option_buying',
        title: 'Option Buying Focus',
        description:
          'Option buying strategies can benefit greatly from precise timing and quick execution that automation provides.',
        recommendation:
          'Use our tools to set alerts and auto-execute when your conditions are met, capturing opportunities you might otherwise miss.',
        priority: 'medium',
      };
    }
    if (value === 'selling') {
      return {
        id: 'insight_option_selling',
        title: 'Option Selling Strategy',
        description:
          'Option selling requires consistent risk management and position monitoring - perfect for automation.',
        recommendation:
          'Automate your position management, including stop-losses and profit targets, to maintain discipline.',
        priority: 'medium',
      };
    }
    if (value === 'both') {
      return {
        id: 'insight_both_strategies',
        title: 'Versatile Trading Approach',
        description:
          'Using both buying and selling strategies gives you flexibility across market conditions.',
        recommendation:
          'Our platform supports complex multi-leg strategies. Consider automating your strategy selection based on market conditions.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q3: Trades in past month
  q_3: (value) => {
    if (value === 'zero') {
      return {
        id: 'insight_no_recent_trades',
        title: 'Ready to Start Trading',
        description:
          'Starting fresh is a great opportunity to build good habits from day one with systematic trading.',
        recommendation:
          'Begin with our strategy templates and paper trading to build confidence before going live.',
        priority: 'high',
      };
    }
    if (value === 'more10') {
      return {
        id: 'insight_active_trader',
        title: 'Active Trader Benefits',
        description:
          'Your active trading frequency means automation could save you significant time and improve execution consistency.',
        recommendation:
          'Automate your routine trades to focus your attention on strategy development and market analysis.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q4: Monthly return expectation
  q_4: (value) => {
    if (value === 'high') {
      return {
        id: 'insight_high_expectations',
        title: 'Ambitious Goals',
        description:
          'Higher return targets require disciplined execution and proper risk management - areas where automation excels.',
        recommendation:
          'Use backtesting to validate your strategy can achieve these returns, and let automation ensure consistent execution.',
        priority: 'medium',
      };
    }
    if (value === 'steady') {
      return {
        id: 'insight_steady_returns',
        title: 'Steady Returns Focus',
        description:
          'Targeting consistent returns is a mature approach. Automation helps maintain this consistency across all market conditions.',
        recommendation:
          'Our risk management tools can help you maintain steady returns while limiting drawdowns.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q5: How will you use SWTS
  q_5: (value) => {
    if (value === 'manual') {
      return {
        id: 'insight_manual_trading',
        title: 'Strategy Building Focus',
        description:
          'Our Strategy Builder and Backtesting tools will help you develop and validate your trading ideas before execution.',
        recommendation:
          'Start by backtesting your current strategy to identify strengths and areas for improvement.',
        priority: 'medium',
      };
    }
    if (value === 'algo') {
      return {
        id: 'insight_algo_ready',
        title: 'Algo Trading Ready',
        description:
          'You\'re ready to fully automate your trading. Our platform handles everything from signal generation to execution.',
        recommendation:
          'Let\'s discuss your strategy requirements and set up your first automated trading system.',
        priority: 'high',
      };
    }
    if (value === 'automate') {
      return {
        id: 'insight_indicator_automation',
        title: 'Indicator Automation',
        description:
          'We specialize in converting indicator-based strategies from TradingView, Chartink, or Python into fully automated systems.',
        recommendation:
          'Share your indicator logic and we\'ll help you automate the entire workflow from signal to execution.',
        priority: 'high',
      };
    }
    if (value === 'notsure') {
      return {
        id: 'insight_exploration',
        title: 'Explore Your Options',
        description:
          'Not sure where to start? That\'s perfectly fine. We offer various tools for different trading styles and experience levels.',
        recommendation:
          'Start with our free strategy consultation to determine which approach best fits your trading goals.',
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
      title: 'Strong Trading Foundation',
      description:
        'Your responses indicate you have experience and clear goals. You\'re well-positioned for algorithmic trading.',
      recommendation:
        'Focus on automating your proven strategies to improve consistency and free up time for analysis.',
      priority: 'low',
    };
  }

  return null;
};
