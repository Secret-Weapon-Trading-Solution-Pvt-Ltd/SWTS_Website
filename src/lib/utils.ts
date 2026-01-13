import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (basic)
export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
};

// Format percentage
export const formatPercentage = (value: number): string => {
  return `${Math.round(value)}%`;
};

// Delay function for animations
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Capitalize first letter
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Get first name from full name
export const getFirstName = (fullName: string): string => {
  return fullName.split(' ')[0] || fullName;
};

// Storage helpers for assessment state
export const storage = {
  setAssessmentData: (data: unknown): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('swts_assessment', JSON.stringify(data));
    }
  },
  getAssessmentData: <T>(): T | null => {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem('swts_assessment');
      return data ? JSON.parse(data) : null;
    }
    return null;
  },
  clearAssessmentData: (): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('swts_assessment');
    }
  },
};
