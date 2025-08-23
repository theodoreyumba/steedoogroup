'use client';

import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Settings, BarChart3, Target } from 'lucide-react';
import { CookiePreferences } from '@/lib/types/cookies';
import { useTranslations } from '@/lib/hooks/use-translations';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
  initialPreferences: CookiePreferences;
}

export function CookiePreferencesModal({
  isOpen,
  onClose,
  onSave,
  initialPreferences,
}: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>(initialPreferences);
  const { t } = useTranslations();

  useEffect(() => {
    setPreferences(initialPreferences);
  }, [initialPreferences]);

  const handlePreferenceChange = (category: keyof CookiePreferences, enabled: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: enabled,
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    onSave(allAccepted);
  };

  const categories = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: t('CookieConsent.categories.necessary.title') || 'Necessary',
      description: t('CookieConsent.categories.necessary.description') || 'Enables security and basic functionality.',
      required: true,
    },
    {
      key: 'preferences' as keyof CookiePreferences,
      icon: Settings,
      title: t('CookieConsent.categories.preferences.title') || 'Preferences',
      description: t('CookieConsent.categories.preferences.description') || 'Enables personalized content and settings.',
      required: false,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: BarChart3,
      title: t('CookieConsent.categories.analytics.title') || 'Analytics',
      description: t('CookieConsent.categories.analytics.description') || 'Enables tracking of performance.',
      required: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: Target,
      title: t('CookieConsent.categories.marketing.title') || 'Marketing',
      description: t('CookieConsent.categories.marketing.description') || 'Enables ads personalization and tracking.',
      required: false,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {t('CookieConsent.preferences.title') || 'Cookie Preferences'}
          </DialogTitle>
          <DialogDescription>
            {t('CookieConsent.preferences.description') || 
             'Customize your cookie preferences. You can change these settings at any time.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isEnabled = preferences[category.key];
            
            return (
              <Card key={category.key} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-base flex items-center gap-2">
                          {category.title}
                          {category.required && (
                            <Badge variant="secondary" className="text-xs">
                              {t('CookieConsent.required') || 'Required'}
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Switch
                      checked={isEnabled}
                      onCheckedChange={(checked) => handlePreferenceChange(category.key, checked)}
                      disabled={category.required}
                    />
                  </div>
                </CardHeader>
                
                {/* Additional details for each category */}
                {category.key === 'necessary' && (
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {t('CookieConsent.categories.necessary.details') ||
                       'These cookies are essential for the website to function properly. They include session cookies, authentication cookies, and security cookies.'}
                    </p>
                  </CardContent>
                )}
                
                {category.key === 'preferences' && (
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {t('CookieConsent.categories.preferences.details') ||
                       'These cookies remember your preferences such as language settings, region selection, and theme preferences.'}
                    </p>
                  </CardContent>
                )}
                
                {category.key === 'analytics' && (
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {t('CookieConsent.categories.analytics.details') ||
                       'These cookies help us understand how visitors interact with our website by collecting anonymous information about page views and user behavior.'}
                    </p>
                  </CardContent>
                )}
                
                {category.key === 'marketing' && (
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {t('CookieConsent.categories.marketing.details') ||
                       'These cookies are used to show you relevant advertisements and measure the effectiveness of our marketing campaigns.'}
                    </p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button variant="outline" onClick={onClose}>
            {t('Common.close') || 'Cancel'}
          </Button>
          <Button variant="outline" onClick={handleAcceptAll}>
            {t('CookieConsent.acceptAll') || 'Accept All'}
          </Button>
          <Button onClick={handleSave}>
            {t('CookieConsent.savePreferences') || 'Save Preferences'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}