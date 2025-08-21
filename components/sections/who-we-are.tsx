'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, Calendar, Users, TrendingUp, Shield } from 'lucide-react';
import { useRegion } from '@/lib/context/region-context';

export function WhoWeAreSection() {
  const { isUS } = useRegion();
  
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Steedoo Group is a multinational holding company that empowers African businesses by providing 
            innovative and effective strategies to promote growth and sustainability across industries.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Foundation</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Built on a vision of transforming the African business landscape, we combine local market 
              expertise with global best practices to deliver exceptional results. Our diverse portfolio 
              spans technology, finance, transportation, and industrial sectors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From our headquarters in Lubumbashi and Cheyenne, we drive strategic initiatives that 
              create lasting value for our partners, stakeholders, and the communities we serve.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-border">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Established</h4>
              <p className="text-2xl font-bold text-primary">2021</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-border">
              <Building2 className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Headquarters</h4>
              <p className="text-sm text-muted-foreground">
                Lubumbashi, DRC<br />
                Cheyenne, USA
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-border">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Operating</h4>
              <p className="text-sm text-muted-foreground">
                Africa &<br />
                United States
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-border">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Portfolio</h4>
              <p className="text-sm text-muted-foreground">
                Diverse<br />
                Innovative Companies
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-primary-50 dark:bg-primary-950/20 rounded-2xl"
          >
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses across Africa and globally through innovative strategies, 
              sustainable practices, and transformative technologies that drive economic growth 
              and create lasting positive impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-primary-50 dark:bg-primary-950/20 rounded-2xl"
          >
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading multinational holding company driving African business 
              transformation, recognized for innovation, sustainability, and excellence 
              across all sectors we operate in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}