'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Banknote, Truck, Shirt } from 'lucide-react';

interface OurCompaniesSectionProps {
  dictionary?: Record<string, unknown>;
}

export function OurCompaniesSection({ dictionary }: OurCompaniesSectionProps) {
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
  const companies = [
    {
      name: 'Juniaboss',
      description: 'Cutting-edge fintech solutions revolutionizing African banking',
      icon: Banknote,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Digital Banking Solutions',
        'Mobile Payment Systems',
        'Financial Inclusion',
        'Blockchain Technology'
      ]
    },
    {
      name: 'Dereva',
      description: 'AI-powered logistics optimizing supply chains across the continent',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Route Optimization',
        'Supply Chain Management',
        'Real-time Tracking',
        'Predictive Analytics'
      ]
    },
    {
      name: 'Ogun',
      description: 'Sustainable luxury fashion celebrating African heritage',
      icon: Shirt,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Sustainable Materials',
        'African-Inspired Designs',
        'Luxury Craftsmanship',
        'Cultural Heritage'
      ]
    }
  ];
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {getValue('OurCompanies.title') || 'Our Companies'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getValue('OurCompanies.subtitle') || 'Our diverse portfolio of innovative companies is transforming industries and creating sustainable value across Africa and beyond.'}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const Icon = company.icon;
            
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white dark:bg-slate-900 rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Company Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Company Name */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {company.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {company.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <div className="mt-auto">
                    <button className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      {getValue('Buttons.learnMore') || 'Learn More'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium">{getValue('OurCompanies.comingSoon') || 'More companies coming soon'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}