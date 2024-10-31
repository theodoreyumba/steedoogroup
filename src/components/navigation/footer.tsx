import { Container, Grid, Text, Anchor, Divider, Group, SimpleGrid, Center, Stack, Paper, Space, Button } from '@mantine/core';
import { IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { ColorSchemeToggle } from '../color-scheme/color-scheme-toggle';
import Link from 'next/link';
import { IframeGoogleMaps } from '../map/iframe-google-maps';

interface FooterProps {
  includeMap?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
}

export const Footer = ({ includeMap = true, ref, children }: FooterProps) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  // Update year automatically
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <>
      <Divider my="sm" />
      <footer ref={ref}>
          <Paper p="xl" shadow="md" radius="xl" style={{ backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))' }} mb={5}>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
            <Stack justify='center'>
                {children}
            </Stack>
            {/* Map (Optional) */}
            {includeMap && (
              <Stack align='center'>
                <Text size="lg" fw={600}>
                  Visit Us
                </Text>
                <Group mt="sm">
                  <IconMapPin size={20} />
                  <Text>20 Av. Mpolo, Lubumbashi, Democratic Republic of the Congo</Text>
                </Group>
                <IframeGoogleMaps width={'100%'} height={'300'}/>
              </Stack>
            )}

            {/* Company Info & Links */}
            <Stack align='center'>
              <Text size="lg" fw={600}>
                Steedoo Group
              </Text>
              <Text size="sm" c="dimmed">
                Empowering African businesses globally.
              </Text>
              <Group mt="sm" gap="xs">
                <Anchor href="https://www.linkedin.com/company/steedoogroup" target="_blank" aria-label="LinkedIn">
                  <IconBrandLinkedin size={24} />
                </Anchor>
                <Anchor href='https://www.x.com/steedoogroup' target="_blank" aria-label="X">
                    <IconBrandX size={24} />
                </Anchor>
                <Anchor href="https://www.github.com/steedoogroup" target="_blank" aria-label="Github">
                  <IconBrandGithub size={24} />
                </Anchor>
              </Group>
                <Space h="xl" />
                <ColorSchemeToggle />
            </Stack>
            </SimpleGrid>
            <Divider my="md" mt={20} />
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
            {/* Copyright */}
                <Text size="sm" ta="center">
                    &copy; {year} Steedoo Group SAS. All rights reserved.
                </Text>
                <Group align="end" justify="center">
                    <Text  size="sm" component="a" c="gray" href=''>Privacy Policy</Text>
                    <Text  size="sm" component="a" c="gray" href=''>Terms & Conditions</Text>
                </Group>
            </SimpleGrid>
          </Paper>
      </footer>
    </>
  );
};