// app/legal/layout.tsx

import React from 'react';
import dynamic from 'next/dynamic';

const LegalNavigation = dynamic(() => import('@/components/legal/navigation'), { ssr: false });

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LegalNavigation>
        {children}
    </LegalNavigation>
  );
}