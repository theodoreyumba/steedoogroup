'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Award, TrendingUp } from 'lucide-react';
import { company } from '@/data/company';
import { LeadershipSection } from '@/components/sections/leadership';

export default function AboutPage() {
  const entity = company.global;
  
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Steedoo Group</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diversified global corporation driving innovation and sustainable growth
            across multiple industry sectors in Africa and beyond.
          </p>
        </motion.div>
        
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To transform industries through innovative technology, sustainable practices,
              and strategic investments that create lasting value for our stakeholders
              and communities across the Democratic Republic of Congo and globally.
            </p>
            <p className="text-muted-foreground">
              Founded in 2021, {entity.legalName} operates at the intersection of
              technology, transportation, finance, investment, and industrial services,
              with comprehensive capabilities in production, research, exploitation,
              processing, transformation, and commercialization of products and substances.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Corporate Registration
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Legal Name:</dt>
                  <dd className="font-medium">{entity.legalName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">RCCM:</dt>
                  <dd className="font-mono">{entity.registrations?.rccm}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Tax ID:</dt>
                  <dd className="font-mono">{entity.registrations?.taxId}</dd>
                </div>
              </dl>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Headquarters
              </h3>
              <address className="not-italic text-sm text-muted-foreground">
                {entity.address.street}<br />
                Q/{entity.address.quarter}, C/{entity.address.commune}<br />
                V/{entity.address.city}, P/{entity.address.province}<br />
                {entity.address.country}
              </address>
            </div>
          </div>
        </motion.div>
        
        {/* Key Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Industry Sectors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {entity.sectors?.map((sector) => (
              <div
                key={sector}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">{sector}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.global.capabilities?.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{capability}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Licensed and compliant operations
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Leadership */}
        {entity.leadership && (
          <LeadershipSection 
            leadership={entity.leadership}
            title="Leadership Team"
            subtitle="Meet the experienced leaders driving innovation and growth across our diverse business sectors"
          />
        )}
        
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">D&B Listed</h3>
            <p className="text-sm text-muted-foreground">
              Verified and listed on Dun & Bradstreet business directory
            </p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Fully Compliant</h3>
            <p className="text-sm text-muted-foreground">
              Operating with all required licenses and regulatory approvals
            </p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              Operations spanning Africa and North America
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}