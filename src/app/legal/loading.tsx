// app/legal/loading.tsx
import React from 'react';
import { Center, Loader } from '@mantine/core';

export default function LegalLoading() {
  return (
    <Center style={{ height: '100vh' }}>
      <Loader size="xl" variant="bars" />
    </Center>
  );
}