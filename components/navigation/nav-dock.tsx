'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Factory, 
  Briefcase, 
  Beaker, 
  Users, 
  Mail,
  Globe,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRegion } from '@/lib/context/region-context';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const globalNavItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Industries', href: '/industries', icon: Factory },
  { label: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { label: 'Research', href: '/research-processing', icon: Beaker },
  { label: 'About', href: '/about', icon: Users },
  { label: 'Contact', href: '/contact', icon: Mail },
];

const usNavItems: NavItem[] = [
  { label: 'Home', href: '/us', icon: Home },
  { label: 'Industries', href: '/us/industries', icon: Factory },
  { label: 'Portfolio', href: '/us/portfolio', icon: Briefcase },
  { label: 'About', href: '/us/about', icon: Users },
  { label: 'Contact', href: '/us/contact', icon: Mail },
];

export function NavDock() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { isUS, switchRegion } = useRegion();
  const { theme, setTheme } = useTheme();
  
  const navItems = isUS ? usNavItems : globalNavItems;
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const isActive = (href: string) => {
    if (href === '/' || href === '/us') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };
  
  return (
    <>
      {/* Desktop Navigation Dock */}
      <div className="fixed bottom-4 md:bottom-6 left-0 right-0 z-50 hidden sm:block pointer-events-none">
        <div className="flex justify-center">
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: isVisible ? 0 : 100, 
              opacity: isVisible ? 1 : 0 
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30 
            }}
            className="pointer-events-auto"
          >
            <div className="flex items-center justify-center gap-1 bg-background/80 backdrop-blur-xl border border-border rounded-full px-2 sm:px-3 py-2 shadow-2xl whitespace-nowrap">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  'hover:bg-accent hover:text-accent-foreground',
                  active && 'bg-primary text-primary-foreground hover:bg-primary-600'
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
                {active && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          <div className="w-px h-6 bg-border mx-0.5 sm:mx-1" />
          
          {/* Region Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => switchRegion(isUS ? 'global' : 'us')}
            className="rounded-full px-2 sm:px-3"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden md:inline ml-2">
              {isUS ? 'Global' : 'US'}
            </span>
          </Button>
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full px-2 sm:px-3"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
            </div>
          </motion.nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-2xl"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
        
        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-x-4 bottom-20 z-40 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                        'hover:bg-accent hover:text-accent-foreground',
                        active && 'bg-primary text-primary-foreground'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                
                <div className="h-px bg-border my-2" />
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      switchRegion(isUS ? 'global' : 'us');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {isUS ? 'Switch to Global' : 'Switch to US'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}