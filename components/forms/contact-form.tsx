'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRegion } from '@/lib/context/region-context';
import { useTranslations } from '@/lib/hooks/use-translations';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  honeypot: string; // Hidden field for spam protection
}

export function ContactForm() {
  const { region } = useRegion();
  const { t } = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    honeypot: '', // Should remain empty
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          region,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || t('Contact.form.error') || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        honeypot: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };
  
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t('Contact.form.fullName') || 'Full Name'} {t('Contact.form.required') || '*'}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={t('Contact.form.placeholders.fullName') || 'John Doe'}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t('Contact.form.emailAddress') || 'Email Address'} {t('Contact.form.required') || '*'}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={t('Contact.form.placeholders.email') || 'john@example.com'}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            {t('Contact.form.company') || 'Company'}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={t('Contact.form.placeholders.company') || 'Acme Corp'}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            {t('Contact.form.subject') || 'Subject'} {t('Contact.form.required') || '*'}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{t('Contact.form.subjects.select') || 'Select a subject'}</option>
            <option value="general">{t('Contact.form.subjects.general') || 'General Inquiry'}</option>
            <option value="partnership">{t('Contact.form.subjects.partnership') || 'Partnership Opportunity'}</option>
            <option value="investment">{t('Contact.form.subjects.investment') || 'Investment Inquiry'}</option>
            <option value="technology">{t('Contact.form.subjects.technology') || 'Technology Services'}</option>
            <option value="other">{t('Contact.form.subjects.other') || 'Other'}</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t('Contact.form.message') || 'Message'} {t('Contact.form.required') || '*'}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder={t('Contact.form.placeholders.message') || 'Tell us about your inquiry...'}
        />
      </div>
      
      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 rounded-lg"
        >
          <CheckCircle className="w-5 h-5" />
          <span>{t('Contact.form.success') || 'Thank you! Your message has been sent successfully.'}</span>
        </motion.div>
      )}
      
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 rounded-lg"
        >
          <AlertCircle className="w-5 h-5" />
          <span>{errorMessage || t('Contact.form.error') || 'An error occurred. Please try again.'}</span>
        </motion.div>
      )}
      
      <Button
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className="w-full md:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('Contact.form.submitting') || 'Sending...'}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            {t('Contact.form.submit') || 'Send Message'}
          </>
        )}
      </Button>
    </motion.form>
  );
}