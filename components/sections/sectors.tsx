'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Truck, 
  TrendingUp, 
  Briefcase, 
  Factory,
  ArrowRight,
  Zap,
  Shield,
  BarChart
} from 'lucide-react';
import Link from 'next/link';
import { useRegion } from '@/lib/context/region-context';
import { cn } from '@/lib/utils';

interface Sector {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  href: string;
}

interface SectorsSectionProps {
  dictionary?: Record<string, unknown>;
}

export function SectorsSection({ dictionary }: SectorsSectionProps) {
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

const globalSectors: Sector[] = [
  {
    id: 'technology',
    title: getValue('Industries.technology') || 'Technology',
    description: 'Digital transformation and innovation solutions for modern enterprises.',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    features: ['Software Development', 'AI & Machine Learning', 'Cloud Infrastructure'],
    href: '/industries/technology',
  },
  {
    id: 'transportation',
    title: getValue('Industries.transportation') || 'Transportation',
    description: 'Integrated logistics and mobility solutions across land, air, and sea.',
    icon: Truck,
    color: 'from-green-500 to-emerald-500',
    features: ['Logistics Management', 'Fleet Operations', 'Supply Chain'],
    href: '/industries/transportation',
  },
  {
    id: 'finance',
    title: getValue('Industries.finance') || 'Finance',
    description: 'Strategic financial services and investment management expertise.',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    features: ['Investment Banking', 'Asset Management', 'Financial Advisory'],
    href: '/industries/finance',
  },
  {
    id: 'investment',
    title: 'Investment',
    description: 'Strategic portfolio management and venture capital opportunities.',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-500',
    features: ['Private Equity', 'Venture Capital', 'Real Estate'],
    href: '/industries/investment',
  },
  {
    id: 'industrial',
    title: getValue('Industries.industrial') || 'Industrial & Commercial',
    description: 'Production, processing, and commercialization of industrial products.',
    icon: Factory,
    color: 'from-slate-600 to-slate-800',
    features: ['Manufacturing', 'Processing', 'Distribution'],
    href: '/industries/industrial-commercial',
  },
];

const usSectors: Sector[] = [
  {
    id: 'technology',
    title: getValue('Industries.technology') || 'Technology',
    description: 'Cutting-edge digital solutions and innovation consulting.',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    features: ['Digital Strategy', 'Cloud Solutions', 'Cybersecurity'],
    href: '/us/industries/technology',
  },
  {
    id: 'finance',
    title: getValue('Industries.finance') || 'Finance',
    description: 'Comprehensive financial services and wealth management.',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    features: ['Wealth Management', 'Corporate Finance', 'Risk Management'],
    href: '/us/industries/finance',
  },
  {
    id: 'investment',
    title: 'Investment',
    description: 'Strategic investment opportunities and portfolio optimization.',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-500',
    features: ['Alternative Investments', 'Growth Equity', 'M&A Advisory'],
    href: '/us/industries/investment',
  },
  {
    id: 'business-services',
    title: 'Business Services',
    description: 'Professional services and strategic business consulting.',
    icon: BarChart,
    color: 'from-indigo-500 to-blue-600',
    features: ['Management Consulting', 'Business Development', 'Strategic Planning'],
    href: '/us/industries/business-services',
  },
];

  const sectors = isUS ? usSectors : globalSectors;
  
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {getValue('Industries.title') || 'Industries We Serve'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getValue('Industries.subtitle') || (isUS 
              ? 'Strategic expertise across key business sectors'
              : 'Comprehensive capabilities spanning production, research, and commercialization')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={sector.href}
                  className="group block h-full"
                >
                  <div className="relative h-full p-6 bg-white dark:bg-slate-900 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon with gradient background */}
                    <div className={cn(
                      'inline-flex p-3 rounded-xl bg-gradient-to-br text-white mb-4',
                      sector.color
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {sector.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {sector.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="w-3 h-3 text-primary-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {!isUS && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-primary-50 dark:bg-primary-950/20 rounded-2xl border border-primary-200 dark:border-primary-800"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                  <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Fully Licensed & Compliant</h3>
                <p className="text-muted-foreground">
                  Operating under RCCM: CD/LSH/RCCM/21-B-00576 with full regulatory compliance
                  for production, research, exploitation, processing, transformation, and commercialization
                  of products and substances.
                </p>
              </div>
              <Link
                href="/research-processing"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-600 transition-colors"
              >
                View Capabilities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}