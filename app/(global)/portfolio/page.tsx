import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Steedoo Group portfolio of ventures and strategic investments.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Strategic investments and ventures across technology, transportation, finance, and industrial sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Technology Ventures</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Investment in emerging technology companies and digital transformation initiatives.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Industrial Projects</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Production, processing, and commercialization of industrial products and materials.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Strategic Partnerships</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Collaborative ventures with industry leaders and emerging market players.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}