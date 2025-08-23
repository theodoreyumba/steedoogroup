'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Determine current locale from pathname
    const currentLocale = pathname.startsWith('/fr') ? 'fr' : 'en';
    
    // Update the html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLocale;
    }
  }, [pathname]);
  
  return <>{children}</>;
}