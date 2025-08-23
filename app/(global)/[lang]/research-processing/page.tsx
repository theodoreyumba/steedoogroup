import { Metadata } from 'next';
import { getDictionary, type Locale } from '@/lib/dictionaries';

export const metadata: Metadata = {
  title: 'Research & Processing',
  description: 'Steedoo Group capabilities in production, research, exploitation, processing, transformation, and commercialization.',
};

interface ResearchProcessingPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ResearchProcessingPage({ params }: ResearchProcessingPageProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{getValue('ResearchProcessing.title') || 'Research & Processing'}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {getValue('ResearchProcessing.subtitle') || 'Comprehensive capabilities in production, research, exploitation, processing, transformation, and commercialization of products and substances.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { key: 'production', label: getValue('ResearchProcessing.capabilities.production') || 'Production' },
            { key: 'research', label: getValue('ResearchProcessing.capabilities.research') || 'Research' },
            { key: 'exploitation', label: getValue('ResearchProcessing.capabilities.exploitation') || 'Exploitation' },
            { key: 'processing', label: getValue('ResearchProcessing.capabilities.processing') || 'Processing' },
            { key: 'transformation', label: getValue('ResearchProcessing.capabilities.transformation') || 'Transformation' },
            { key: 'commercialization', label: getValue('ResearchProcessing.capabilities.commercialization') || 'Commercialization' }
          ].map((capability) => (
            <div key={capability.key} className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-3">{capability.label}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {getValue('ResearchProcessing.capabilityDescription') || 'Licensed and compliant operations with full regulatory approval.'}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">{getValue('ResearchProcessing.regulatory.title') || 'Regulatory Compliance'}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {getValue('ResearchProcessing.regulatory.description1') || 'Operating under RCCM: CD/LSH/RCCM/21-B-00576 with comprehensive licensing for all activities involving the production, research, exploitation, processing, transformation, and commercialization of products and substances.'}
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            {getValue('ResearchProcessing.regulatory.description2') || 'Our operations maintain strict adherence to environmental, safety, and quality standards across all sectors.'}
          </p>
        </div>
      </div>
    </div>
  );
}