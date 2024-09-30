import { Suspense } from 'react';
import { generateMetadata } from "@/utils/page/title";
import { AppLoading } from '@/components/transition/loading';

export const metadata = generateMetadata("Investor");

export default function ChatLayout({
    newconversation,
    conversation,
}: Readonly<{
    newconversation: React.ReactNode
    conversation: React.ReactNode
}>) {
  return (
    <Suspense fallback={<AppLoading />}>
    </Suspense>
  );
}