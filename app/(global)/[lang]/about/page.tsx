'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Award, TrendingUp } from 'lucide-react';
import { company } from '@/data/company';
import { LeadershipSection } from '@/components/sections/leadership';
import { useTranslations } from '@/lib/hooks/use-translations';

export default function AboutPage() {
  const { t } = useTranslations();
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('About.title') || 'About Steedoo Group'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('About.subtitle') || 'A diversified global corporation driving innovation and sustainable growth across multiple industry sectors in Africa and beyond.'}
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
            <h2 className="text-2xl font-semibold mb-4">
              {t('About.companyOverview') || 'Company Overview'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('About.overviewDescription') || 'Steedoo Group stands as a beacon of innovation and strategic excellence in the global business landscape. Our commitment to fostering sustainable development across emerging markets has positioned us as a trusted partner for organizations seeking transformative growth.'}
            </p>
            <p className="text-muted-foreground">
              {t('About.ourApproach') || 'We believe in the power of strategic partnerships and collaborative innovation. Our multidisciplinary approach combines deep industry knowledge with cutting-edge technology to deliver solutions that drive measurable impact.'}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                {t('About.corporateRegistration.title') || 'Corporate Registration'}
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t('About.corporateRegistration.legalName') || 'Legal Name:'}</dt>
                  <dd className="font-medium">{entity.legalName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t('About.corporateRegistration.rccm') || 'RCCM:'}</dt>
                  <dd className="font-mono">{entity.registrations?.rccm}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t('About.corporateRegistration.taxId') || 'Tax ID:'}</dt>
                  <dd className="font-mono">{entity.registrations?.taxId}</dd>
                </div>
              </dl>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                {t('About.headquarters') || 'Headquarters'}
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
          <h2 className="text-3xl font-bold text-center mb-12">{t('About.ourIndustrySectors') || 'Our Industry Sectors'}</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">{t('About.coreCapabilities') || 'Core Capabilities'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.global.capabilities?.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{capability}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t('About.licensedCompliantOperations') || 'Licensed and compliant operations'}
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
            title={t('Leadership.title') || 'Leadership Team'}
            subtitle={t('Leadership.subtitle') || 'Meet the experienced leaders driving innovation and growth across our diverse business sectors'}
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
            <h3 className="font-semibold mb-2">{t('About.trustIndicators.dnbListed.title') || 'D&B Listed'}</h3>
            <p className="text-sm text-muted-foreground">
              {t('About.trustIndicators.dnbListed.description') || 'Verified and listed on Dun & Bradstreet business directory'}
            </p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">{t('About.trustIndicators.fullyCompliant.title') || 'Fully Compliant'}</h3>
            <p className="text-sm text-muted-foreground">
              {t('About.trustIndicators.fullyCompliant.description') || 'Operating with all required licenses and regulatory approvals'}
            </p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">{t('About.trustIndicators.globalReach.title') || 'Global Reach'}</h3>
            <p className="text-sm text-muted-foreground">
              {t('About.trustIndicators.globalReach.description') || 'Operations spanning Africa and North America'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}