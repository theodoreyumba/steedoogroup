'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Shield, Award, Globe } from 'lucide-react';
import { company } from '@/data/company';
import { LeadershipSection } from '@/components/sections/leadership';

export default function USAboutPage() {
  const entity = company.us;
  
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Steedoo Group Inc.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A strategic investment and technology corporation headquartered in Wyoming,
            driving innovation and growth across key business sectors.
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
              To deliver exceptional value through strategic investments, cutting-edge
              technology solutions, and comprehensive business services that empower
              organizations to thrive in the modern economy.
            </p>
            <p className="text-muted-foreground">
              Incorporated in 2022, {entity.legalName} leverages deep expertise
              in technology, finance, and investment to create transformative
              opportunities for our clients and partners across the United States
              and internationally.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Corporate Information
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Legal Name:</dt>
                  <dd className="font-medium">{entity.legalName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Wyoming ID:</dt>
                  <dd className="font-mono">{entity.registrations?.wyomingId}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Incorporated:</dt>
                  <dd>{entity.registrations?.incorporationDate}</dd>
                </div>
              </dl>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Headquarters
              </h3>
              <address className="not-italic text-sm text-muted-foreground">
                {entity.address.street}<br />
                {entity.address.city}, {entity.address.state} {entity.address.postalCode}<br />
                {entity.address.country}
              </address>
            </div>
          </div>
        </motion.div>
        
        {/* Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entity.sectors?.map((sector) => (
              <div
                key={sector}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{sector}</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic expertise and proven track record
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-primary-50 dark:bg-primary-950/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Conducting business with the highest ethical standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Delivering exceptional results and value
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Pioneering solutions for tomorrow&apos;s challenges
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Leadership */}
        {entity.leadership && (
          <LeadershipSection 
            leadership={entity.leadership}
            title="Leadership Team"
            subtitle="Meet the strategic leaders guiding our operations and growth in the United States market"
          />
        )}
        
        {/* Corporate Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Corporate Structure</h2>
          <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-xl border border-border">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">Jurisdiction</span>
                <span className="font-medium">Wyoming, United States</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">Entity Type</span>
                <span className="font-medium">Corporation</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600 dark:text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Established</span>
                <span className="font-medium">September 30, 2022</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}