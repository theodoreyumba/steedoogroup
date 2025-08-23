import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Processing',
  description: 'Steedoo Group capabilities in production, research, exploitation, processing, transformation, and commercialization.',
};

export default function ResearchProcessingPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Processing</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive capabilities in production, research, exploitation, processing, transformation, and commercialization of products and substances.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            'Production',
            'Research',
            'Exploitation',
            'Processing',
            'Transformation',
            'Commercialization'
          ].map((capability) => (
            <div key={capability} className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-3">{capability}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Licensed and compliant operations with full regulatory approval.
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Operating under RCCM: CD/LSH/RCCM/21-B-00576 with comprehensive licensing for all activities involving the production, research, exploitation, processing, transformation, and commercialization of products and substances.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Our operations maintain strict adherence to environmental, safety, and quality standards across all sectors.
          </p>
        </div>
      </div>
    </div>
  );
}