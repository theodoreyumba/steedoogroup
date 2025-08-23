'use client';

import { createContext, useContext, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export type Region = 'global' | 'us';

interface RegionContextType {
  region: Region;
  isUS: boolean;
  switchRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const region: Region = pathname?.startsWith('/us') ? 'us' : 'global';
  const isUS = region === 'us';
  
  const switchRegion = (newRegion: Region) => {
    const currentPath = pathname || '/';
    let targetPath = currentPath;
    
    if (newRegion === 'us' && !currentPath.startsWith('/us')) {
      // Remove any locale prefix when switching to US (US is English only)
      const pathWithoutLocale = currentPath.replace(/^\/fr/, '') || '/';
      targetPath = `/us${pathWithoutLocale}`;
    } else if (newRegion === 'global' && currentPath.startsWith('/us')) {
      targetPath = currentPath.replace(/^\/us/, '') || '/';
    }
    
    // Use the set-region endpoint to switch regions
    const returnPath = targetPath.replace(/^\/us/, '');
    window.location.href = `/set-region?to=${newRegion}&return=${encodeURIComponent(returnPath)}`;
  };
  
  return (
    <RegionContext.Provider value={{ region, isUS, switchRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}