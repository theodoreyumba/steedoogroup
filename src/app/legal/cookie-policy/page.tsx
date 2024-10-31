// src/app/legal/policy/cookies/page.tsx
'use client';
import React from 'react';
import { Title, Text, Stack, Paper, List, ThemeIcon, Divider, Accordion } from '@mantine/core';
import { IconCookie, IconInfoCircle, IconSettings, IconTrash } from '@tabler/icons-react';

const cookieTypes = [
  {
    type: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    examples: ["Session cookies", "Security cookies"]
  },
  {
    type: "Performance Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    examples: ["Google Analytics cookies", "Load balancing cookies"]
  },
  {
    type: "Functionality Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalisation.",
    examples: ["Language preference cookies", "User customization cookies"]
  },
  {
    type: "Targeting Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
    examples: ["Advertisement cookies", "Social media cookies"]
  }
];

export default function CookiePolicyPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Cookie Policy</Title>
      <Text size="lg">
        This Cookie Policy explains how Steedoo Group uses cookies and similar technologies to recognize you when you visit our websites. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </Text>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">What are cookies?</Title>
        <Text>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </Text>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Types of Cookies We Use</Title>
        <Accordion>
          {cookieTypes.map((cookie, index) => (
            <Accordion.Item key={index} value={cookie.type}>
              <Accordion.Control icon={<IconCookie size={20} />}>
                {cookie.type}
              </Accordion.Control>
              <Accordion.Panel>
                <Text mb="sm">{cookie.description}</Text>
                <Text fw={500}>Examples:</Text>
                <List
                  spacing="xs"
                  size="sm"
                  icon={
                    <ThemeIcon color="blue" size={20} radius="xl">
                      <IconInfoCircle size={12} />
                    </ThemeIcon>
                  }
                >
                  {cookie.examples.map((example, i) => (
                    <List.Item key={i}>{example}</List.Item>
                  ))}
                </List>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Paper>

      <Divider my="xl" />

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">How can you control cookies?</Title>
        <Text mb="md">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. 
        </Text>
        <List
          spacing="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconSettings size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Use our cookie consent manager to select your cookie preferences</List.Item>
          <List.Item>Set or amend your web browser controls to accept or refuse cookies</List.Item>
          <List.Item>Delete cookies that have already been placed on your device</List.Item>
        </List>
      </Paper>

      <Text size="sm" c="dimmed">
        Last updated: {new Date().toLocaleDateString()}
      </Text>
    </Stack>
  );
}