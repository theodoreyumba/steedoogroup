'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, Mail, Linkedin } from 'lucide-react';
import { LeadershipMember } from '@/data/company';

interface LeadershipSectionProps {
  leadership: LeadershipMember[];
  title?: string;
  subtitle?: string;
}

export function LeadershipSection({ 
  leadership, 
  title = "Leadership Team",
  subtitle = "Meet the experienced professionals driving our vision and growth"
}: LeadershipSectionProps) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadership.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Profile Image Placeholder */}
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-primary" />
                )}
              </div>
              
              {/* Name & Title */}
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {member.description}
              </p>
              
              {/* Contact Links */}
              <div className="flex justify-center gap-3">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}