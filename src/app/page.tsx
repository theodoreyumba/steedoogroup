
import { Skeleton } from '@mantine/core';
import dynamic from 'next/dynamic';

const PublicNavigation = dynamic(
  () => import('@/components/navigation/public-navigation').then(mod => mod.PublicNavigation),
  {
    loading: () => <Skeleton height={'100vh'} animate />,
  }
)

export default function HomePage() {
  return (
    <>
      <PublicNavigation />
    </>
  );
}
