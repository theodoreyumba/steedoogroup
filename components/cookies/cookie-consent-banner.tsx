'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  hasUserConsented, 
  setCookieConsent, 
  getCookiePreferences 
} from '@/lib/utils/cookie-consent';
import { CookiePreferences, DEFAULT_COOKIE_PREFERENCES } from '@/lib/types/cookies';
import { CookiePreferencesModal } from './cookie-preferences-modal';
import { useTranslations } from '@/lib/hooks/use-translations';

interface CookieConsentBannerProps {
  className?: string;
}

export function CookieConsentBanner({ className }: CookieConsentBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    setMounted(true);
    
    // Check if user has already consented
    const hasConsented = hasUserConsented();
    setShowBanner(!hasConsented);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    
    setCookieConsent(allAccepted);
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    setCookieConsent(DEFAULT_COOKIE_PREFERENCES);
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  const handlePreferencesSaved = (preferences: CookiePreferences) => {
    setCookieConsent(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleClose = () => {
    // If user closes without making a choice, assume essential only
    setCookieConsent(DEFAULT_COOKIE_PREFERENCES);
    setShowBanner(false);
  };

  // Don't render on server side
  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-4 left-4 z-50 w-full max-w-sm ${className}`}
          >
            <Card className="bg-background/95 backdrop-blur-sm border shadow-2xl">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        {t('CookieConsent.title') || 'Cookie Settings'}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleClose}
                        className="text-muted-foreground hover:text-foreground p-1"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('CookieConsent.description') || 'We use cookies to personalize content, run ads, and analyze traffic.'}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCustomize}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <Settings className="h-4 w-4" />
                      {t('CookieConsent.customize') || 'Customize'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAcceptEssential}
                      className="whitespace-nowrap"
                    >
                      {t('CookieConsent.acceptEssential') || 'Accept Essential'}
                    </Button>
                    
                    <Button
                      size="sm"
                      onClick={handleAcceptAll}
                      className="whitespace-nowrap"
                    >
                      {t('CookieConsent.acceptAll') || 'Accept All'}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <CookiePreferencesModal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        onSave={handlePreferencesSaved}
        initialPreferences={getCookiePreferences()}
      />
    </>
  );
}