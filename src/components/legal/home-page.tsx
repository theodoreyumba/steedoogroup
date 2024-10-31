// src/components/legal/home-page.tsx
'use client';
import React from 'react';
import { Title, Text, List, ThemeIcon, Group, Button, Stack, Paper, Divider, SimpleGrid, Card, Accordion } from '@mantine/core';
import { IconCheck, IconFileDescription, IconScale, IconGlobe, IconUsers, IconBuildingBank, IconTruck, IconShield, IconLock, IconAlertCircle } from '@tabler/icons-react';

const legalDocuments = [
  { 
    title: "Terms of Service", 
    icon: IconScale, 
    description: "Defines your relationship with Steedoo Group and the rules for using our services.",
    link: "/legal/terms/service"
  },
  { 
    title: "Privacy Policy", 
    icon: IconShield, 
    description: "Explains how we collect, use, and protect your personal information across our services.", 
    link: "/legal/policy/privacy"
  },
  { 
    title: "Cookie Policy", 
    icon: IconFileDescription, 
    description: "Details how we use cookies and similar technologies across our platforms.", 
    link: "/legal/policy/cookies"
  },
  { 
    title: "Acceptable Use Policy", 
    icon: IconAlertCircle, 
    description: "Outlines the rules for appropriate use of our technology and financial services.", 
    link: "/legal/terms/acceptable-use"
  },
  { 
    title: "Data Processing Agreement", 
    icon: IconLock, 
    description: "For business clients, details how we process data in compliance with GDPR and other regulations.", 
    link: "/legal/policy/data-processing"
  },
];

const keyFacts = [
  { icon: IconGlobe, label: "Multinational Presence", value: "Africa & USA" },
  { icon: IconUsers, label: "Employees", value: "10,000+" },
  { icon: IconBuildingBank, label: "Portfolio Companies", value: "4+" },
  { icon: IconTruck, label: "Industries", value: "Logistics, Fintech, Fashion, Real Estate" },
];

export default function LegalHomePageComponent() {
  return (
    <Stack gap="xl">
      <Title order={1}>Steedoo Group Legal Center</Title>
      <Text size="lg">
        Welcome to the Steedoo Group Legal Center. Here you'll find important information about your rights, responsibilities, and how we protect your data across our diverse portfolio of services in logistics, fintech, fashion, and real estate.
      </Text>
      
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
        {keyFacts.map((fact, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="xl" withBorder>
            <fact.icon size={30} style={{ marginBottom: '0.5rem' }} />
            <Text fw={700}>{fact.value}</Text>
            <Text size="sm" c="dimmed">{fact.label}</Text>
          </Card>
        ))}
      </SimpleGrid>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Key Legal Documents</Title>
        <Accordion>
          {legalDocuments.map((doc, index) => (
            <Accordion.Item key={index} value={doc.title}>
              <Accordion.Control icon={<doc.icon size={20} />}>
                {doc.title}
              </Accordion.Control>
              <Accordion.Panel>
                <Text mb="md">{doc.description}</Text>
                <Button component="a" href={doc.link} variant="light">Read Full Document</Button>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Your Rights and Choices</Title>
        <Text mb="md">
          We're committed to giving you control over your data and how it's used across our services. You have the right to:
        </Text>
        <List
          spacing="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Access and review your personal information</List.Item>
          <List.Item>Correct inaccuracies in your data</List.Item>
          <List.Item>Delete your data (subject to legal requirements)</List.Item>
          <List.Item>Object to or restrict the processing of your data</List.Item>
          <List.Item>Export your data in a portable format</List.Item>
        </List>
        <Button component="a" href="/legal/rights" variant="light" mt="md">Learn More About Your Rights</Button>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Updates to Our Legal Documents</Title>
        <Text>
          We may update our legal documents from time to time to reflect changes in our services, business practices, or legal requirements. We'll notify you of any significant changes and provide you with the opportunity to review them.
        </Text>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Contact Us</Title>
        <Text>
          If you have any questions about our legal documents or your rights, please contact our legal team at <a href="mailto:legal@steedoogroup.com">legal@steedoogroup.com</a> or write to us at:
        </Text>
        <Text mt="md">
          Steedoo Group Inc.<br />
          1603 Capitol Avenue, Suite 413A<br />
          Cheyenne, WY 82001, USA
        </Text>
      </Paper>

      <Divider my="xl" />

      <Group>
        <Button component="a" href="/legal/faq" variant="filled" leftSection={<IconFileDescription size={14} />}>
          Legal FAQ
        </Button>
        <Button component="a" href="/legal/glossary" variant="light" leftSection={<IconScale size={14} />}>
          Legal Glossary
        </Button>
      </Group>
    </Stack>
  );
}