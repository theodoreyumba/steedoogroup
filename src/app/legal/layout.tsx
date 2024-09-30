import { Suspense } from 'react';
import { generateMetadata } from "@/utils/page/title";
import { AppLoading } from '@/components/transition/loading';
import { ComingSoonPage } from '@/components/maintenance/coming-soon';

export const metadata = generateMetadata("Investor");

export default function ChatLayout({
    terms,
    policy,
}: Readonly<{
    terms: React.ReactNode
    policy: React.ReactNode
}>) {
  return (
    <Suspense fallback={<AppLoading />}>
    <ComingSoonPage/>;
    </Suspense>
  );
}