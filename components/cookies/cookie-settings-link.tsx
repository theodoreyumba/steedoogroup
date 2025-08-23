'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CookiePreferencesModal } from './cookie-preferences-modal';
import { getCookiePreferences, updateCookieConsent } from '@/lib/utils/cookie-consent';
import { CookiePreferences } from '@/lib/types/cookies';
import { useTranslations } from '@/lib/hooks/use-translations';

interface CookieSettingsLinkProps {
  variant?: 'link' | 'button';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function CookieSettingsLink({ 
  variant = 'link',
  size = 'sm',
  className 
}: CookieSettingsLinkProps) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslations();

  const handlePreferencesSaved = (preferences: CookiePreferences) => {
    updateCookieConsent(preferences);
    setShowModal(false);
  };

  if (variant === 'button') {
    return (
      <>
        <Button
          variant="outline"
          size={size}
          onClick={() => setShowModal(true)}
          className={`flex items-center gap-2 ${className}`}
        >
          <Settings className="h-4 w-4" />
          {t('CookieConsent.preferences.title') || 'Cookie Settings'}
        </Button>
        
        <CookiePreferencesModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={handlePreferencesSaved}
          initialPreferences={getCookiePreferences()}
        />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 ${className}`}
      >
        {t('CookieConsent.preferences.title') || 'Cookie Settings'}
      </button>
      
      <CookiePreferencesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handlePreferencesSaved}
        initialPreferences={getCookiePreferences()}
      />
    </>
  );
}