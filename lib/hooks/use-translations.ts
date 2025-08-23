'use client';

import { usePathname } from 'next/navigation';
import { getDictionary, type Locale } from '@/lib/dictionaries';
import { useState, useEffect } from 'react';

type Dictionary = Record<string, unknown>;

export function useTranslations() {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<Dictionary | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Determine current locale from pathname
  const currentLocale: Locale = pathname.startsWith('/fr') ? 'fr' : 'en';
  
  useEffect(() => {
    async function loadTranslations() {
      try {
        const dict = await getDictionary(currentLocale);
        setTranslations(dict);
      } catch (error) {
        console.error('Failed to load translations:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadTranslations();
  }, [currentLocale]);
  
  const t = (key: string) => {
    if (!translations || loading) return key;
    
    const keys = key.split('.');
    let value: unknown = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, locale: currentLocale, loading };
}