import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Steedoo Group Inc. portfolio of strategic investments and business ventures.',
};

export default function USPortfolioPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Strategic investments and business ventures across technology, finance, and investment sectors in the United States.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Technology Investments</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Strategic investments in emerging technology companies and digital innovation.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Comprehensive financial solutions and wealth management services.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Business Consulting</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Strategic consulting and business development services for growth companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}