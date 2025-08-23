'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe2, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRegion } from '@/lib/context/region-context';

interface HeroSectionProps {
  dictionary?: Record<string, unknown>;
  lang?: string;
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  const { isUS } = useRegion();
  const baseUrl = isUS ? '/us' : '';
  
  // Helper to safely get nested values
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

  // Use translations if available, fallback to hardcoded text
  const getBadgeText = () => {
    const usLocation = getValue('Hero.badge.usLocation');
    const globalLocation = getValue('Hero.badge.globalLocation');
    if (usLocation && globalLocation) {
      return isUS ? usLocation : globalLocation;
    }
    return isUS ? 'Wyoming, USA • Established 2022' : 'Lubumbashi, DRC • Established 2021';
  };
  
  const getHeadline = () => {
    const part1 = getValue('Hero.headline.part1');
    const part2 = getValue('Hero.headline.part2');
    if (part1 && part2) {
      return { part1, part2 };
    }
    return {
      part1: "Building Tomorrow's",
      part2: "Global Infrastructure"
    };
  };
  
  const getSubheading = () => {
    const us = getValue('Hero.subheading.us');
    const global = getValue('Hero.subheading.global');
    if (us && global) {
      return isUS ? us : global;
    }
    return isUS 
      ? 'Driving innovation across technology, finance, and investment sectors with strategic expertise and global vision.'
      : 'Transforming industries through technology, transportation, finance, and sustainable industrial solutions across Africa and beyond.';
  };
  
  const getStatsText = () => {
    const sectors = getValue('Hero.stats.sectors');
    const regions = getValue('Hero.stats.regions');
    const commitment = getValue('Hero.stats.commitment');
    if (sectors && regions && commitment) {
      return { sectors, regions, commitment };
    }
    return {
      sectors: 'Industry Sectors',
      regions: 'Global Regions', 
      commitment: 'Commitment'
    };
  };
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-primary-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Animated Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-3xl"
      />
      
      <div className="container relative mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
          >
            <Globe2 className="w-4 h-4" />
            {getBadgeText()}
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-slate-900 via-primary-600 to-primary-500 dark:from-white dark:via-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              {getHeadline().part1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-slate-900 dark:from-primary-400 dark:to-white bg-clip-text text-transparent">
              {getHeadline().part2}
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {getSubheading()}
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {isUS ? '4+' : '5+'}
              </div>
              <div className="text-sm text-muted-foreground">{getStatsText().sectors}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                2
              </div>
              <div className="text-sm text-muted-foreground">{getStatsText().regions}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                100%
              </div>
              <div className="text-sm text-muted-foreground">{getStatsText().commitment}</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="xl" asChild>
              <Link href={`${baseUrl}/industries`}>
                Explore Industries
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href={`${baseUrl}/contact`}>
                Get in Touch
              </Link>
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span>Fully Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>D&B Listed</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Global Operations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}