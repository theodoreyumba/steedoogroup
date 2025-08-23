'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine current locale from pathname
  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 
                       pathname.startsWith('/sw-CD') ? 'sw-CD' : 
                       pathname.startsWith('/sw') ? 'sw' : 
                       pathname.startsWith('/ln') ? 'ln' : 'en';

  const switchLocale = (newLocale: string) => {
    if (newLocale === 'en') {
      // For English, remove locale prefix if present
      let newPath = pathname;
      if (pathname.startsWith('/fr')) {
        newPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw-CD')) {
        newPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/sw')) {
        newPath = pathname.replace('/sw', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        newPath = pathname.replace('/ln', '') || '/';
      }
      router.push(newPath);
    } else if (newLocale === 'fr') {
      // For French, add /fr prefix or replace existing locale
      let cleanPath = pathname;
      if (pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/sw')) {
        cleanPath = pathname.replace('/sw', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        cleanPath = pathname.replace('/ln', '') || '/';
      }
      const newPath = pathname.startsWith('/fr') ? pathname : `/fr${cleanPath}`;
      router.push(newPath);
    } else if (newLocale === 'sw') {
      // For Swahili, add /sw prefix or replace existing locale
      let cleanPath = pathname;
      if (pathname.startsWith('/fr')) {
        cleanPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        cleanPath = pathname.replace('/ln', '') || '/';
      }
      const newPath = pathname.startsWith('/sw') && !pathname.startsWith('/sw-CD') ? pathname : `/sw${cleanPath}`;
      router.push(newPath);
    } else if (newLocale === 'sw-CD') {
      // For Swahili-DRC, add /sw-CD prefix or replace existing locale
      let cleanPath = pathname;
      if (pathname.startsWith('/fr')) {
        cleanPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw') && !pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        cleanPath = pathname.replace('/ln', '') || '/';
      }
      const newPath = pathname.startsWith('/sw-CD') ? pathname : `/sw-CD${cleanPath}`;
      router.push(newPath);
    } else if (newLocale === 'ln') {
      // For Lingala, add /ln prefix or replace existing locale
      let cleanPath = pathname;
      if (pathname.startsWith('/fr')) {
        cleanPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/sw')) {
        cleanPath = pathname.replace('/sw', '') || '/';
      }
      const newPath = pathname.startsWith('/ln') ? pathname : `/ln${cleanPath}`;
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
      <Button
        variant={currentLocale === 'sw' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('sw')}
      >
        SW
      </Button>
      <Button
        variant={currentLocale === 'sw-CD' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('sw-CD')}
      >
        SW-CD
      </Button>
      <Button
        variant={currentLocale === 'ln' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('ln')}
      >
        LN
      </Button>
    </div>
  );
}