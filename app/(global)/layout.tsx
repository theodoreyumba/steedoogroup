'use client';

import { NavDock } from '@/components/navigation/nav-dock';
import { Footer } from '@/components/navigation/footer';
import { StructuredData } from '@/components/seo/structured-data';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      <NavDock />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}