'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine current locale from pathname
  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 'en';

  const switchLocale = (newLocale: string) => {
    if (newLocale === 'en') {
      // For English, remove /fr prefix if present
      const newPath = pathname.startsWith('/fr') ? pathname.replace('/fr', '') || '/' : pathname;
      router.push(newPath);
    } else {
      // For French, add /fr prefix or replace existing locale
      let newPath = pathname;
      if (pathname.startsWith('/fr')) {
        // Already French
        return;
      } else {
        // Add /fr prefix
        newPath = `/fr${pathname}`;
      }
      router.push(newPath);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={currentLocale === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('en')}
      >
        EN
      </Button>
      <Button
        variant={currentLocale === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('fr')}
      >
        FR
      </Button>
    </div>
  );
}