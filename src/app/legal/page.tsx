// app/legal/page.tsx

import React from 'react';
import dynamic from 'next/dynamic';

const HomePageComponent = dynamic(() => import('@/components/legal/home-page'), { ssr: false });

export default function LegalPage() {
  return (
    <HomePageComponent />
  );
}