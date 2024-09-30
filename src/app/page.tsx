
'use client';
import { SGImages } from '@/assets/images';
import { ColorSchemeToggle } from '@/components/color-scheme/color-scheme-toggle';
import {Title, Text, Button, Image, Space, Grid, Skeleton } from '@mantine/core';
import { IconBuildingStore, IconBusinessplan, IconSettingsSearch } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = dynamic(
  () => import('@/components/navigation/navigation-bar').then(mod => mod.Navbar),
  {
    loading: () => <Skeleton height={'100vh'} animate />,
  }
)

export default function HomePage() {
  return (
      <>
          <Navbar>
      {/* Hero Section */}
      <Grid>
        <Grid.Col span={6}>
          <Title order={1} size="3rem" fw={700} mt="xl">
            Empowering African Businesses Globally
          </Title>
          <Text size="lg" mt="md" c="dimmed">
            Steedoo Group is committed to advancing African businesses to the forefront of the global stage, through innovative solutions and partnerships.
          </Text>
          <Space h="md" />
          <Link href="/about" passHref>
            <Button size="lg" radius="md">
              Learn More About Us
            </Button>
          </Link>
        </Grid.Col>
        <Grid.Col span={6}>
          <Image
            src={SGImages.BackgroundBlue.src}
            alt="Steedoo Group Hero"
            radius="md"
            width="100%"
          />
        </Grid.Col>
      </Grid>

      <Space h="xl" />

      {/* Company Overview */}
      <section>
        <Title order={2} size="2.5rem" fw={600}>
          Who We Are
        </Title>
        <Text size="lg" mt="md">
          Steedoo Group is a holding company that empowers African businesses by providing innovative and effective strategies to promote growth and sustainability across industries.
        </Text>
      </section>

      <Space h="xl" />

      {/* Services Section */}
      <section>
        <Title order={2} size="2.5rem" fw={600}>
          Our Services
        </Title>
        <Grid mt="md">
          <Grid.Col span={4}>
          <IconSettingsSearch width={40} height={40} color='orange' />
            <Title order={3} mt="sm" size="lg">
              Contracting
            </Title>
            <Text>Providing expert business contracting to accelerate growth.</Text>
          </Grid.Col>
          <Grid.Col span={4}>
          <IconBusinessplan width={40} height={40} color='green' />
            <Title order={3} mt="sm" size="lg">
              Investment Solutions
            </Title>
            <Text>Offering smart investment strategies for sustainable growth.</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <IconBuildingStore width={40} height={40} color='blue' />
            <Title order={3} mt="sm" size="lg">
              Market Expansion
            </Title>
            <Text>Helping African businesses expand to global markets.</Text>
          </Grid.Col>
        </Grid>
      </section>
      {/* Contact CTA */}
      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <Title order={2} size="2.5rem" fw={600}>
          Get in Touch
        </Title>
        <Text size="lg" mt="md">
          Interested in working with Steedoo Group? Reach out to us for more information.
        </Text>
        <Space h="md" />
        <Link href="/contact" passHref>
          <Button size="lg" radius="md">
            Contact Us
          </Button>
        </Link>
      </section>
      </Navbar>
      </>
  );
}
