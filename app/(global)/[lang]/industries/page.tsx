import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Steedoo Group operates across technology, transportation, finance, investment, and industrial sectors.',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Industries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Steedoo Group operates across multiple strategic sectors, driving innovation and sustainable growth in the Democratic Republic of Congo and globally.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Technology */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Technology</h3>
            <p className="text-muted-foreground mb-6">
              Digital transformation solutions, software development, and technology infrastructure for modern enterprises across Africa.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Software Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Digital Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Technology Consulting
              </li>
            </ul>
          </div>
          
          {/* Transportation */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Transportation</h3>
            <p className="text-muted-foreground mb-6">
              Integrated logistics and mobility solutions connecting communities and businesses across land, air, and sea transportation networks.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Logistics Management
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Fleet Operations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Supply Chain Solutions
              </li>
            </ul>
          </div>
          
          {/* Finance */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Finance</h3>
            <p className="text-muted-foreground mb-6">
              Strategic financial services and banking solutions supporting economic growth and financial inclusion across emerging markets.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Financial Services
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Banking Solutions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Financial Advisory
              </li>
            </ul>
          </div>
          
          {/* Investment */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Investment</h3>
            <p className="text-muted-foreground mb-6">
              Strategic portfolio management and venture capital opportunities, driving economic development and business growth initiatives.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Portfolio Management
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Venture Capital
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Strategic Investments
              </li>
            </ul>
          </div>
          
          {/* Industrial & Commercial */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Industrial & Commercial</h3>
            <p className="text-muted-foreground mb-6">
              Production, processing, transformation, and commercialization of industrial products and substances with full regulatory compliance.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Manufacturing & Production
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Processing & Transformation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Commercial Distribution
              </li>
            </ul>
          </div>
        </div>
        
        {/* Capabilities Section */}
        <div className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Licensed Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Operating under RCCM: CD/LSH/RCCM/21-B-00576 with comprehensive licensing for all regulated activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Production',
              'Research',
              'Exploitation',
              'Processing',
              'Transformation',
              'Commercialization'
            ].map((capability) => (
              <div key={capability} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}