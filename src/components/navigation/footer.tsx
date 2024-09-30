import { Container, Grid, Text, Anchor, Divider, Group, SimpleGrid, Center, Stack, Paper, Space, Button } from '@mantine/core';
import { IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { ColorSchemeToggle } from '../color-scheme/color-scheme-toggle';
import Link from 'next/link';

interface FooterProps {
  includeMap?: boolean;
  children?: React.ReactNode;
}

export const Footer = ({ includeMap = true, children }: FooterProps) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  // Update year automatically
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <>
      <Divider my="sm" />
      <footer>
          <Paper p="xl" shadow="md" radius="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))' }}>
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.9399881656791!2d27.480435075595814!3d-11.640447383919005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723937ac6d8b37%3A0xb85674e8815a1b4!2s20%20Av.%20Mpolo%2C%20Lubumbashi%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2ske!4v1727664312716!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 'var(--mantine-radius-md)', boxShadow: 'var(--mantine-shadow-md)' }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
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
            <SimpleGrid cols={2}>
            {/* Copyright */}
                <Text size="sm">
                    &copy; {year} Steedoo Group SAS. All rights reserved.
                </Text>
                <Group align="end" justify="end">
                    <Text  size="sm" component="a" c="gray" href=''>Privacy Policy</Text>
                    <Text  size="sm" component="a" c="gray" href=''>Terms & Conditions</Text>
                </Group>
            </SimpleGrid>
          </Paper>
      </footer>
    </>
  );
};