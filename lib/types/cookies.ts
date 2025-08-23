export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentDate: string;
  lastUpdated: string;
}

export const COOKIE_CATEGORIES: Record<string, CookieCategory> = {
  necessary: {
    id: 'necessary',
    name: 'Necessary',
    description: 'Enables security and basic functionality.',
    required: true,
    enabled: true,
  },
  preferences: {
    id: 'preferences',
    name: 'Preferences',
    description: 'Enables personalized content and settings.',
    required: false,
    enabled: false,
  },
  analytics: {
    id: 'analytics',
    name: 'Analytics',
    description: 'Enables tracking of performance.',
    required: false,
    enabled: false,
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing',
    description: 'Enables ads personalization and tracking.',
    required: false,
    enabled: false,
  },
};

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};