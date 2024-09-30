'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Title,
  Text,
  Button,
  TextInput,
  Group,
  Stack,
  Transition,
  Progress,
  rem,
} from '@mantine/core';

export function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [launchDate, setLaunchDate] = useState<number>(0);

  useEffect(() => {
    // Fetch launch date from API (runs in the client)
    const fetchLaunchDate = async () => {
      const res = await fetch('/api/launch-date');
      const data = await res.json();
      setLaunchDate(new Date(data.launchDate).getTime());
    };

    fetchLaunchDate();
  }, []);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [launchDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  // Progress calculation logic
  const now = new Date().getTime();
  const totalDuration = launchDate - now;
  const initialDuration = launchDate - new Date().setHours(0, 0, 0, 0); // Example: start of the day

  const progressValue = totalDuration > 0 ? ((1 - totalDuration / initialDuration) * 100) : 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setSubscribed(true);
  };

  return (
    <Container size="md" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Stack gap="xl" align="center" style={{ width: '100%' }}>
        <Title order={1} style={{ fontSize: rem(48) }}>
          Steedoo Group Section Coming Soon
        </Title>
        <Text size="xl">
          We&apos;re working hard to bring you an amazing experience with Steedoo Group. Stay tuned!
        </Text>
        <Group gap="md">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <Text size="xl" fw={700}>
                {value}
              </Text>
              <Text size="sm" c="dimmed">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
            </div>
          ))}
        </Group>
        <Progress 
          value={progressValue} 
          size="xl" 
          radius="xl" 
          style={{ width: '100%', maxWidth: rem(400) }}
        />
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: rem(400) }}>
          <Stack gap="xs">
            <TextInput
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" fullWidth>
              Notify Me
            </Button>
          </Stack>
        </form>
        <Transition mounted={subscribed} transition="fade" duration={400} timingFunction="ease">
          {(styles) => (
            <Text style={styles} c="teal">
              Thanks for subscribing! We&apos;ll keep you updated.
            </Text>
          )}
        </Transition>
      </Stack>
    </Container>
  );
}
