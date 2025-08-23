'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getCurrentLanguageFromPath, setPreferredLanguage, getPreferredLanguage } from '@/lib/language-cookie';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Determine current locale from pathname
    const currentLocale = getCurrentLanguageFromPath(pathname);
    
    // Update the html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLocale;
    }
    
    // Handle language persistence
    const savedLanguage = getPreferredLanguage();
    
    // If no saved preference or different from current, save the current language
    if (!savedLanguage || savedLanguage !== currentLocale) {
      setPreferredLanguage(currentLocale);
    }
  }, [pathname]);
  
  return <>{children}</>;
}