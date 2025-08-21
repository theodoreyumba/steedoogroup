import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Steedoo Group Inc. provides strategic expertise across technology, finance, investment, and business services sectors.',
};

export default function USIndustriesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Industries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Steedoo Group Inc. delivers strategic expertise and innovative solutions across key business sectors in the United States market.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Technology */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Technology</h3>
            <p className="text-muted-foreground mb-6">
              Cutting-edge digital solutions, cloud infrastructure, and innovation consulting for modern enterprises.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Digital Strategy
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Cloud Solutions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Cybersecurity
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
              Comprehensive financial services, wealth management, and corporate finance solutions for businesses and individuals.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Wealth Management
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Corporate Finance
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Risk Management
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
              Strategic investment opportunities, portfolio optimization, and alternative investment solutions for sophisticated investors.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Alternative Investments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Growth Equity
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                M&A Advisory
              </li>
            </ul>
          </div>
          
          {/* Business Services */}
          <div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Business Services</h3>
            <p className="text-muted-foreground mb-6">
              Professional services and strategic business consulting to help organizations optimize operations and drive growth.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Management Consulting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Business Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Strategic Planning
              </li>
            </ul>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Steedoo Group</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strategic expertise, proven track record, and commitment to excellence make us the ideal partner for your business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Years of experience across multiple industries with a track record of successful outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Cutting-edge solutions and strategic thinking to drive your business forward.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
              <p className="text-muted-foreground text-sm">
                Dedicated to understanding your unique needs and delivering tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}