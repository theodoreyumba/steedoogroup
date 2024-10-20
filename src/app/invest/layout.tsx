import { Suspense } from 'react';
import { generateMetadata } from "@/utils/page/title";
import { AppLoading } from '@/components/transition/loading';

export const metadata = generateMetadata("Invest");

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<AppLoading />}>
      {children}
    </Suspense>
  );
}