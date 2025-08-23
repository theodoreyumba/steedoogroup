import Cookies from 'js-cookie';

export type Locale = 'en' | 'fr' | 'sw' | 'sw-CD' | 'ln';

const LANGUAGE_COOKIE_NAME = 'preferred-language';
const COOKIE_EXPIRES_DAYS = 365;

/**
 * Get the preferred language from cookie
 */
export function getPreferredLanguage(): Locale | null {
  const language = Cookies.get(LANGUAGE_COOKIE_NAME) as Locale;
  return language && ['en', 'fr', 'sw', 'sw-CD', 'ln'].includes(language) ? language : null;
}

/**
 * Set the preferred language in cookie
 */
export function setPreferredLanguage(language: Locale): void {
  Cookies.set(LANGUAGE_COOKIE_NAME, language, {
    expires: COOKIE_EXPIRES_DAYS,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  });
}

/**
 * Remove the preferred language cookie
 */
export function removePreferredLanguage(): void {
  Cookies.remove(LANGUAGE_COOKIE_NAME);
}

/**
 * Get the default language based on browser locale or fallback
 */
export function getDefaultLanguage(): Locale {
  if (typeof window !== 'undefined') {
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('fr')) {
      return 'fr';
    }
    if (browserLanguage === 'sw-cd') {
      return 'sw-CD';
    }
    if (browserLanguage.startsWith('sw')) {
      return 'sw';
    }
    if (browserLanguage.startsWith('ln')) {
      return 'ln';
    }
  }
  return 'en';
}

/**
 * Get the current language from URL pathname
 */
export function getCurrentLanguageFromPath(pathname: string): Locale {
  if (pathname.startsWith('/fr')) {
    return 'fr';
  }
  if (pathname.startsWith('/sw-CD')) {
    return 'sw-CD';
  }
  if (pathname.startsWith('/sw')) {
    return 'sw';
  }
  if (pathname.startsWith('/ln')) {
    return 'ln';
  }
  return 'en';
}