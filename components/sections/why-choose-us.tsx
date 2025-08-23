'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  Users, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Target,
  Handshake
} from 'lucide-react';
import { useRegion } from '@/lib/context/region-context';

interface WhyChooseUsSectionProps {
  dictionary?: Record<string, unknown>;
}

export function WhyChooseUsSection({ dictionary }: WhyChooseUsSectionProps) {
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
  
  const globalReasons = [
    {
      icon: Globe,
      title: getValue('WhyChooseUs.localKnowledge.title') || 'Local Expertise, Global Vision',
      description: getValue('WhyChooseUs.localKnowledge.description') || 'Deep understanding of African markets combined with international best practices and global strategic perspectives.',
      stat: '2 Continents'
    },
    {
      icon: Award,
      title: getValue('WhyChooseUs.provenResults.title') || 'Proven Track Record',
      description: getValue('WhyChooseUs.provenResults.description') || 'Demonstrated success across multiple sectors with a portfolio of innovative companies driving transformation.',
      stat: '3+ Companies'
    },
    {
      icon: Users,
      title: getValue('WhyChooseUs.globalExperience.title') || 'Experienced Leadership',
      description: getValue('WhyChooseUs.globalExperience.description') || 'Seasoned executives with decades of combined experience in finance, technology, and business development.',
      stat: '50+ Years'
    },
    {
      icon: Lightbulb,
      title: getValue('WhyChooseUs.innovativeSolutions.title') || 'Innovation-Driven',
      description: getValue('WhyChooseUs.innovativeSolutions.description') || 'Cutting-edge solutions and forward-thinking strategies that position businesses for future success.',
      stat: '100% Innovation'
    },
    {
      icon: Shield,
      title: getValue('WhyChooseUs.comprehensiveSupport.title') || 'Regulatory Compliance',
      description: getValue('WhyChooseUs.comprehensiveSupport.description') || 'Full licensing and regulatory compliance across all operations, ensuring secure and reliable partnerships.',
      stat: 'Fully Licensed'
    },
    {
      icon: TrendingUp,
      title: getValue('WhyChooseUs.strategicPartnership.title') || 'Sustainable Growth',
      description: getValue('WhyChooseUs.strategicPartnership.description') || 'Long-term value creation through sustainable practices and responsible business development.',
      stat: 'ESG Focused'
    }
  ];
  
  const usReasons = [
    {
      icon: Target,
      title: 'Strategic Excellence',
      description: 'Precision-focused strategies tailored to the unique demands of the US market with measurable outcomes.',
      stat: '95% Success Rate'
    },
    {
      icon: Handshake,
      title: 'Trusted Partnership',
      description: 'Building long-term relationships based on transparency, integrity, and mutual success.',
      stat: '100% Client Focus'
    },
    {
      icon: Clock,
      title: 'Rapid Execution',
      description: 'Fast-track implementation and agile project management to deliver results when you need them.',
      stat: '24/7 Support'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Documented success stories and quantifiable ROI across all client engagements and strategic initiatives.',
      stat: 'ROI Guaranteed'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive international connections and cross-border expertise for comprehensive market access.',
      stat: 'Worldwide Reach'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative problem-solving approaches for complex business challenges.',
      stat: 'Next-Gen Tech'
    }
  ];
  
  const reasons = isUS ? usReasons : globalReasons;
  
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {getValue('WhyChooseUs.title') || 'Why Choose Steedoo Group'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {getValue('WhyChooseUs.subtitle') || (isUS 
              ? 'Our commitment to excellence, innovation, and client success makes us the ideal partner for your strategic objectives in the US market.'
              : 'Our unique combination of local market knowledge, global expertise, and innovative solutions sets us apart as the premier choice for business transformation in Africa.')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white dark:bg-slate-800 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Reason Icon */}
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Stat Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {reason.stat}
                    </span>
                  </div>
                  
                  {/* Reason Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  {/* Reason Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Client Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-2xl font-medium text-foreground mb-6 italic">
              &ldquo;Steedoo Group&rsquo;s strategic vision and execution capabilities have been instrumental 
              in transforming our business operations and achieving sustainable growth.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Strategic Partner</p>
                <p className="text-sm text-muted-foreground">Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}