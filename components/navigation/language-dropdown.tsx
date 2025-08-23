'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Languages, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { setPreferredLanguage, type Locale } from '@/lib/language-cookie';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
  { code: 'sw-CD', name: 'Kiswahili (DRC)', flag: '🇨🇩' },
  { code: 'ln', name: 'Lingala', flag: '🇨🇩' },
];

interface LanguageDropdownProps {
  className?: string;
  showLabel?: boolean;
}

export function LanguageDropdown({ className, showLabel = true }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Determine current locale from pathname
  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 
                       pathname.startsWith('/sw-CD') ? 'sw-CD' : 
                       pathname.startsWith('/sw') ? 'sw' : 
                       pathname.startsWith('/ln') ? 'ln' : 'en';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];
  
  // Don't show language dropdown on US routes
  const isUSRoute = pathname.startsWith('/us');
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isUSRoute) return null;

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    // Validate and cast the locale
    if (!['en', 'fr', 'sw', 'sw-CD', 'ln'].includes(newLocale)) {
      setIsOpen(false);
      return;
    }

    const locale = newLocale as Locale;

    // Save language preference in cookie
    setPreferredLanguage(locale);

    let newPath: string;
    
    if (locale === 'en') {
      // For English, remove locale prefix if present
      if (pathname.startsWith('/fr')) {
        newPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw-CD')) {
        newPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/sw')) {
        newPath = pathname.replace('/sw', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        newPath = pathname.replace('/ln', '') || '/';
      } else {
        newPath = pathname;
      }
    } else if (locale === 'fr') {
      // For French, add /fr prefix if not already present
      let cleanPath = pathname;
      if (pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/sw')) {
        cleanPath = pathname.replace('/sw', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        cleanPath = pathname.replace('/ln', '') || '/';
      }
      newPath = pathname.startsWith('/fr') ? pathname : `/fr${cleanPath}`;
    } else if (locale === 'sw') {
      // For Swahili, add /sw prefix if not already present
      let cleanPath = pathname;
      if (pathname.startsWith('/fr')) {
        cleanPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        cleanPath = pathname.replace('/ln', '') || '/';
      }
      newPath = pathname.startsWith('/sw') && !pathname.startsWith('/sw-CD') ? pathname : `/sw${cleanPath}`;
    } else if (locale === 'sw-CD') {
      // For Swahili-DRC, add /sw-CD prefix if not already present
      let cleanPath = pathname;
      if (pathname.startsWith('/fr')) {
        cleanPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw') && !pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw', '') || '/';
      } else if (pathname.startsWith('/ln')) {
        cleanPath = pathname.replace('/ln', '') || '/';
      }
      newPath = pathname.startsWith('/sw-CD') ? pathname : `/sw-CD${cleanPath}`;
    } else if (locale === 'ln') {
      // For Lingala, add /ln prefix if not already present
      let cleanPath = pathname;
      if (pathname.startsWith('/fr')) {
        cleanPath = pathname.replace('/fr', '') || '/';
      } else if (pathname.startsWith('/sw-CD')) {
        cleanPath = pathname.replace('/sw-CD', '') || '/';
      } else if (pathname.startsWith('/sw')) {
        cleanPath = pathname.replace('/sw', '') || '/';
      }
      newPath = pathname.startsWith('/ln') ? pathname : `/ln${cleanPath}`;
    } else {
      setIsOpen(false);
      return;
    }

    // Use window.location for more reliable navigation with locale changes
    window.location.href = newPath;
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full px-2 sm:px-3 gap-2"
      >
        <Languages className="w-4 h-4" />
        {showLabel && (
          <>
            <span className="hidden md:inline">
              {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
            </span>
            {isOpen ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl py-2 min-w-[140px] z-50"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLocale(language.code)}
                className={cn(
                  "w-full px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 text-sm",
                  currentLocale === language.code && "bg-accent text-accent-foreground"
                )}
              >
                <span className="text-base">{language.flag}</span>
                <span>{language.name}</span>
                {currentLocale === language.code && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}