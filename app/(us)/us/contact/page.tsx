'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Building2 } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { company } from '@/data/company';

export default function USContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team for strategic investments, technology solutions,
            and business services across the United States.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to explore opportunities in technology, finance, or investment?
                Our team is here to help you achieve your business objectives.
              </p>
            </div>
            
            {/* Corporate Information */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Corporate Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">{entity.legalName}</p>
                  <p className="text-muted-foreground">Wyoming Corporation</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wyoming ID:</span>
                  <span className="font-mono">{entity.registrations?.wyomingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Incorporated:</span>
                  <span>{entity.registrations?.incorporationDate}</span>
                </div>
              </div>
            </div>
            
            {/* Headquarters */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Headquarters
              </h3>
              <address className="not-italic text-muted-foreground">
                {entity.address.street}<br />
                {entity.address.city}, {entity.address.state} {entity.address.postalCode}<br />
                {entity.address.country}
              </address>
            </div>
            
            {/* Business Hours */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Business Hours
              </h3>
              <div className="text-muted-foreground space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM MST</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
            
            {/* Service Areas */}
            <div className="p-6 bg-primary-50 dark:bg-primary-950/20 rounded-xl">
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {entity.sectors?.map((sector) => (
                  <div key={sector} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Sheridan, Wyoming<br />
                United States
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}