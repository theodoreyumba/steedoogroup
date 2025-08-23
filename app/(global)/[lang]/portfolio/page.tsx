import { Metadata } from 'next';
import { getDictionary, type Locale } from '@/lib/dictionaries';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Steedoo Group portfolio of ventures and strategic investments.',
};

interface PortfolioPageProps {
  params: Promise<{ lang: string }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  const getValue = (path: string) => {
    if (!dictionary) return null;
    const keys = path.split('.');
    let value: unknown = dictionary;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return null;
      }
    }
    return typeof value === 'string' ? value : null;
  };
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {getValue('Portfolio.title') || 'Our Portfolio'}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {getValue('Portfolio.subtitle') || 'Strategic investments and ventures across technology, transportation, finance, and industrial sectors.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">
              {getValue('Portfolio.technologyVentures.title') || 'Technology Ventures'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {getValue('Portfolio.technologyVentures.description') || 'Investment in emerging technology companies and digital transformation initiatives.'}
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">
              {getValue('Portfolio.industrialProjects.title') || 'Industrial Projects'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {getValue('Portfolio.industrialProjects.description') || 'Production, processing, and commercialization of industrial products and materials.'}
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">
              {getValue('Portfolio.strategicPartnerships.title') || 'Strategic Partnerships'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {getValue('Portfolio.strategicPartnerships.description') || 'Collaborative ventures with industry leaders and emerging market players.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}