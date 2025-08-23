'use client';

import { NavDock } from '@/components/navigation/nav-dock';
import { Footer } from '@/components/navigation/footer';
import { StructuredData } from '@/components/seo/structured-data';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary, type Locale } from '@/lib/dictionaries-client';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dictionary, setDictionary] = useState<Record<string, unknown> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const loadDictionary = async () => {
      const locale = pathname?.startsWith('/fr') ? 'fr' : 'en';
      try {
        const dict = await getDictionary(locale as Locale);
        setDictionary(dict);
      } catch (error) {
        console.warn('Failed to load dictionary:', error);
      }
    };

    loadDictionary();
  }, [pathname]);

  return (
    <>
      <StructuredData />
      <NavDock dictionary={dictionary || undefined} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer dictionary={dictionary || undefined} />
    </>
  );
}