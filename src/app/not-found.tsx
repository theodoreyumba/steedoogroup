'use client';

import { SGImages } from '@/assets/images/index';
import { SGFullLogo } from '@/assets/images/sg-full-logo.svg';
import { Button, Container, Text, Title, Center, Stack, BackgroundImage, Paper, rem } from '@mantine/core';

export default function NotFound() {
  return (
    <BackgroundImage src={SGImages.FlamboyantBg.src} h='100%' w='100%'>
      <Container size="xl" style={{ textAlign: 'center' }} h='100%'>
            <Center h='100%'>
<Paper p="xl" shadow="xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} mih={rem(400)}>
<Center mih={rem(380)}>
<Stack justify='center' align='center'>
{/* Logo */}
<SGFullLogo width={rem(300)} height={rem(90)} mr={0} />
                  {/* Main Title */}
                  <Title order={1} style={{ fontSize: '3rem', color: 'var(--sg-logo-accent-color)' }}>
                404 - Page Not Found
              </Title>

              {/* Subtext */}
              <Text c="dimmed" size="lg">
                Oops! The page you&apos;re looking for does not exist.
              </Text>

              {/* Back to Home Button */}
              <Button
                variant="outline"
                size="md"
                radius="md"
                color="indigo"
                onClick={() => window.location.href = '/'}
              >
                Go back to Home
              </Button>
</Stack>
</Center>
</Paper>
            </Center>
      </Container>
    </BackgroundImage>
  );
}
