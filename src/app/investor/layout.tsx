import { Suspense } from 'react';
import { generateMetadata } from "@/utils/page/title";
import { AppLoading } from '@/components/transition/loading';

export const metadata = generateMetadata("Investor");

export default function ChatLayout({
    data,
    children,
}: Readonly<{
    data: React.ReactNode
    children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<AppLoading />}>
      {children}
    </Suspense>
  );
}