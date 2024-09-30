

import { ColorSchemeScript as MantineColorSchemeScript } from '@mantine/core';

export function ColorSchemeScript({ nonce }: { nonce: string }) {
  return <MantineColorSchemeScript nonce={nonce} />;
}