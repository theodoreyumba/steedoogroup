'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Target, 
  Shield, 
  Globe, 
  Cog,
  BarChart3,
  Handshake
} from 'lucide-react';
import { useRegion } from '@/lib/context/region-context';

interface OurServicesSectionProps {
  dictionary?: Record<string, unknown>;
}

export function OurServicesSection({ dictionary }: OurServicesSectionProps) {
  const { isUS } = useRegion();

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
  
  const globalServices = [
    {
      icon: Building2,
      title: getValue('Services.global.corporateDevelopment.title') || 'Corporate Development',
      description: getValue('Services.global.corporateDevelopment.description') || 'Strategic business development, market entry strategies, and corporate restructuring for sustainable growth across African markets.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: getValue('Services.global.investmentManagement.title') || 'Investment Management',
      description: getValue('Services.global.investmentManagement.description') || 'Portfolio optimization, venture capital, and strategic investments in high-growth sectors across technology and industrial markets.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: getValue('Services.global.strategicConsulting.title') || 'Strategic Consulting',
      description: getValue('Services.global.strategicConsulting.description') || 'Management consulting, operational excellence, and transformation strategies tailored for African business environments.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: getValue('Services.global.innovationAdvisory.title') || 'Innovation Advisory',
      description: getValue('Services.global.innovationAdvisory.description') || 'Technology adoption, digital transformation, and innovation strategy development for traditional and emerging industries.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Target,
      title: getValue('Services.global.marketIntelligence.title') || 'Market Intelligence',
      description: getValue('Services.global.marketIntelligence.description') || 'Comprehensive market research, competitive analysis, and business intelligence for informed decision-making.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Shield,
      title: getValue('Services.global.regulatoryCompliance.title') || 'Regulatory Compliance',
      description: getValue('Services.global.regulatoryCompliance.description') || 'Full regulatory compliance support, licensing assistance, and legal framework navigation across multiple jurisdictions.',
      color: 'from-slate-600 to-slate-800'
    }
  ];
  
  const usServices = [
    {
      icon: BarChart3,
      title: getValue('Services.us.financialAdvisory.title') || 'Financial Advisory',
      description: getValue('Services.us.financialAdvisory.description') || 'Comprehensive financial planning, wealth management, and investment advisory services for individuals and corporations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Handshake,
      title: getValue('Services.us.maAdvisory.title') || 'M&A Advisory',
      description: getValue('Services.us.maAdvisory.description') || 'Merger and acquisition consulting, due diligence, and transaction advisory for strategic business combinations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: getValue('Services.us.internationalExpansion.title') || 'International Expansion',
      description: getValue('Services.us.internationalExpansion.description') || 'Strategic guidance for US companies looking to expand into African markets and global opportunities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cog,
      title: getValue('Services.us.technologySolutions.title') || 'Technology Solutions',
      description: getValue('Services.us.technologySolutions.description') || 'Custom technology implementations, digital transformation, and cybersecurity solutions for modern enterprises.',
      color: 'from-amber-500 to-orange-500'
    }
  ];
  
  const services = isUS ? usServices : globalServices;
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {getValue('Services.title') || 'Our Services'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {isUS 
              ? 'Comprehensive professional services designed to accelerate business growth and strategic success in the US market.'
              : 'End-to-end business solutions designed to drive growth, innovation, and sustainable success across African markets.'}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white dark:bg-slate-900 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Service Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-3 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-primary-50 dark:bg-primary-950/20 rounded-2xl">
            <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground max-w-md">
              Let our experienced team help you achieve your strategic objectives and drive sustainable growth.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-600 transition-colors">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}