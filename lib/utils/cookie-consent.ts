import Cookies from 'js-cookie';
import { CookieConsentState, CookiePreferences, DEFAULT_COOKIE_PREFERENCES } from '../types/cookies';

const CONSENT_COOKIE_NAME = 'cookie-consent';
const CONSENT_COOKIE_EXPIRES = 365; // 1 year

export function getCookieConsent(): CookieConsentState | null {
  try {
    const consentData = Cookies.get(CONSENT_COOKIE_NAME);
    if (!consentData) return null;
    
    return JSON.parse(consentData) as CookieConsentState;
  } catch (error) {
    console.error('Error parsing cookie consent:', error);
    return null;
  }
}

export function setCookieConsent(preferences: CookiePreferences): void {
  const consentState: CookieConsentState = {
    hasConsented: true,
    preferences,
    consentDate: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };

  Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentState), {
    expires: CONSENT_COOKIE_EXPIRES,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  // Apply cookie preferences
  applyCookiePreferences(preferences);
}

export function updateCookieConsent(preferences: CookiePreferences): void {
  const existingConsent = getCookieConsent();
  
  const consentState: CookieConsentState = {
    hasConsented: true,
    preferences,
    consentDate: existingConsent?.consentDate || new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };

  Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentState), {
    expires: CONSENT_COOKIE_EXPIRES,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  // Apply cookie preferences
  applyCookiePreferences(preferences);
}

export function resetCookieConsent(): void {
  Cookies.remove(CONSENT_COOKIE_NAME);
  
  // Remove all non-essential cookies
  const preferences = DEFAULT_COOKIE_PREFERENCES;
  applyCookiePreferences(preferences);
}

export function hasUserConsented(): boolean {
  const consent = getCookieConsent();
  return consent?.hasConsented || false;
}

export function getCookiePreferences(): CookiePreferences {
  const consent = getCookieConsent();
  return consent?.preferences || DEFAULT_COOKIE_PREFERENCES;
}

function applyCookiePreferences(preferences: CookiePreferences): void {
  // Clear analytics cookies if not consented
  if (!preferences.analytics) {
    clearAnalyticsCookies();
  }
  
  // Clear marketing cookies if not consented
  if (!preferences.marketing) {
    clearMarketingCookies();
  }
  
  // Clear preferences cookies if not consented
  if (!preferences.preferences) {
    clearPreferencesCookies();
  }

  // Trigger events for third-party services
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: { preferences }
    }));
  }
}

function clearAnalyticsCookies(): void {
  // Google Analytics cookies
  const gaCookies = ['_ga', '_ga_*', '_gid', '_gat', '_gat_*'];
  gaCookies.forEach(cookie => {
    if (cookie.includes('*')) {
      // Handle wildcard cookies
      const prefix = cookie.replace('*', '');
      Object.keys(Cookies.get()).forEach(key => {
        if (key.startsWith(prefix)) {
          Cookies.remove(key, { path: '/', domain: `.${window.location.hostname}` });
          Cookies.remove(key, { path: '/' });
          Cookies.remove(key);
        }
      });
    } else {
      Cookies.remove(cookie, { path: '/', domain: `.${window.location.hostname}` });
      Cookies.remove(cookie, { path: '/' });
      Cookies.remove(cookie);
    }
  });
}

function clearMarketingCookies(): void {
  // Common marketing/advertising cookies
  const marketingCookies = [
    '_fbp', '_fbc', // Facebook Pixel
    '__utma', '__utmb', '__utmc', '__utmt', '__utmz', // Google Analytics (old)
    'fr', 'tr', // Facebook
    'IDE', 'DSID', 'FLC', 'AID', 'TAID', // Google Ads
    '_gcl_au', '_gcl_aw', '_gcl_dc', '_gcl_gf', '_gcl_ha', // Google conversion linker
  ];
  
  marketingCookies.forEach(cookie => {
    Cookies.remove(cookie, { path: '/', domain: `.${window.location.hostname}` });
    Cookies.remove(cookie, { path: '/' });
    Cookies.remove(cookie);
  });
}

function clearPreferencesCookies(): void {
  // Keep language and theme cookies as they're essential for UX
  // Only clear non-essential preference cookies
  const preferenceCookies = [
    'user-preferences',
    'customization-settings',
  ];
  
  preferenceCookies.forEach(cookie => {
    Cookies.remove(cookie, { path: '/' });
    Cookies.remove(cookie);
  });
}

export function getConsentBannerText(region: 'eu' | 'us' | 'other' = 'other') {
  switch (region) {
    case 'eu':
      return "We use cookies to personalize content, run ads, and analyze traffic. By clicking 'Accept All', you consent to our use of cookies.";
    case 'us':
      return "We use cookies to personalize content, run ads, and analyze traffic. You can manage your preferences or opt out at any time.";
    default:
      return "We use cookies to personalize content, run ads, and analyze traffic.";
  }
}