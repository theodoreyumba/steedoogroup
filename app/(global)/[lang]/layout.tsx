import { Locale, getDictionary } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'sw' }, { lang: 'sw-CD' }, { lang: 'ln' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  if (lang !== 'en' && lang !== 'fr' && lang !== 'sw' && lang !== 'sw-CD' && lang !== 'ln') {
    notFound();
  }
  
  // Pre-load dictionary for this locale (for performance)
  await getDictionary(lang as Locale);
  
  return (
    <div data-locale={lang}>
      {children}
    </div>
  );
}