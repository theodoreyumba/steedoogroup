'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Globe } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { company } from '@/data/company';

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team in Lubumbashi, Democratic Republic of Congo.
            We&apos;re here to help with your business needs.
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
                Whether you&apos;re interested in our services, exploring partnership
                opportunities, or have general inquiries, we&apos;d love to hear from you.
              </p>
            </div>
            
            {/* Office Location */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Headquarters
              </h3>
              <address className="not-italic text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">{entity.legalName}</p>
                <p>{entity.address.street}</p>
                <p>Q/{entity.address.quarter}, C/{entity.address.commune}</p>
                <p>V/{entity.address.city}, P/{entity.address.province}</p>
                <p>{entity.address.country}</p>
              </address>
            </div>
            
            {/* Business Information */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Business Information
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">RCCM:</dt>
                  <dd className="font-mono">{entity.registrations?.rccm}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Tax ID:</dt>
                  <dd className="font-mono">{entity.registrations?.taxId}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Principal:</dt>
                  <dd>{company.global.principal}</dd>
                </div>
              </dl>
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
                  <span>8:00 AM - 6:00 PM CAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM CAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
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
        
        {/* Map Section (placeholder) */}
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
                Lubumbashi, Haut-Katanga Province<br />
                Democratic Republic of Congo
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}