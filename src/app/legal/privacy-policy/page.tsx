// src/app/legal/policy/privacy/page.tsx
'use client';
import React from 'react';
import { Title, Text, Stack, Paper, List, ThemeIcon, Divider, Accordion } from '@mantine/core';
import { IconShield, IconLock, IconUserCircle, IconCookie, IconAlertCircle, IconGlobe, IconTruck, IconCreditCard, IconShirt, IconBuilding } from '@tabler/icons-react';

const dataCategories = [
  { title: "Personal Information", icon: IconUserCircle, examples: ["Name", "Email address", "Phone number", "Physical address"] },
  { title: "Financial Information", icon: IconCreditCard, examples: ["Bank account details", "Transaction history", "Credit information"] },
  { title: "Usage Data", icon: IconGlobe, examples: ["IP address", "Browser type", "Pages visited", "Time spent on site"] },
  { title: "Location Data", icon: IconTruck, examples: ["GPS coordinates", "Shipping addresses", "Delivery routes"] },
  { title: "Product Preferences", icon: IconShirt, examples: ["Size preferences", "Style choices", "Purchase history"] },
];

export default function PrivacyPolicyPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Privacy Policy</Title>
      <Text size="lg">
        At Steedoo Group, we are committed to protecting your privacy and ensuring the security of your personal information across our diverse portfolio of companies. This Privacy Policy outlines our practices concerning the collection, use, and protection of your data in our operations spanning logistics, fintech, fashion, and real estate sectors.
      </Text>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Information We Collect</Title>
        <Text mb="md">
          Given the diverse nature of our operations, we collect various types of information across our portfolio companies:
        </Text>
        <Accordion>
          {dataCategories.map((category, index) => (
            <Accordion.Item key={index} value={category.title}>
              <Accordion.Control icon={<category.icon size={20} />}>
                {category.title}
              </Accordion.Control>
              <Accordion.Panel>
                <List
                  spacing="xs"
                  size="sm"
                  icon={
                    <ThemeIcon color="blue" size={20} radius="xl">
                      <IconShield size={12} />
                    </ThemeIcon>
                  }
                >
                  {category.examples.map((example, i) => (
                    <List.Item key={i}>{example}</List.Item>
                  ))}
                </List>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">How We Use Your Information</Title>
        <List
          spacing="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconShield size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>To provide and maintain our services across logistics, fintech, fashion, and real estate sectors</List.Item>
          <List.Item>To process transactions and manage financial services through our fintech platforms</List.Item>
          <List.Item>To optimize logistics and delivery routes for our transportation services</List.Item>
          <List.Item>To personalize fashion recommendations and improve product offerings</List.Item>
          <List.Item>To develop and manage smart real estate projects</List.Item>
          <List.Item>To communicate with you about our services and provide customer support</List.Item>
          <List.Item>To comply with legal obligations across the jurisdictions we operate in</List.Item>
        </List>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Data Protection Measures</Title>
        <Text>
          We implement robust security measures to protect your personal information across all our operations:
        </Text>
        <List
          spacing="md"
          icon={
            <ThemeIcon color="red" size={24} radius="xl">
              <IconLock size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>End-to-end encryption for sensitive data transmission</List.Item>
          <List.Item>Regular security audits and vulnerability assessments across all our platforms</List.Item>
          <List.Item>Strict access controls and multi-factor authentication for our employees</List.Item>
          <List.Item>Compliance with international data protection standards, including GDPR</List.Item>
          <List.Item>Ongoing employee training on data protection and privacy best practices</List.Item>
        </List>
      </Paper>

      <Divider my="xl" />

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Your Rights</Title>
        <Text>
          As a user of Steedoo Group's services, you have the following rights regarding your personal data:
        </Text>
        <List
          spacing="md"
          icon={
            <ThemeIcon color="orange" size={24} radius="xl">
              <IconAlertCircle size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Access the personal data we hold about you</List.Item>
          <List.Item>Request correction of inaccurate data</List.Item>
          <List.Item>Request deletion of your data (subject to legal requirements)</List.Item>
          <List.Item>Object to or restrict the processing of your data</List.Item>
          <List.Item>Request a copy of your data in a portable format</List.Item>
          <List.Item>Withdraw consent for data processing where applicable</List.Item>
        </List>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">International Data Transfers</Title>
        <Text>
          As a multinational company operating across Africa and the United States, Steedoo Group may transfer your data across borders. We ensure that any such transfers comply with applicable data protection laws and maintain appropriate safeguards to protect your information.
        </Text>
      </Paper>

      <Paper withBorder p="md" radius="xl">
        <Title order={2} size="h3" mb="md">Contact Us</Title>
        <Text>
          If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at dpo@steedoogroup.com or write to us at:
        </Text>
        <Text mt="md">
          Steedoo Group Inc.<br />
          1603 Capitol Avenue, Suite 413A<br />
          Cheyenne, WY 82001, USA
        </Text>
      </Paper>

      <Text size="sm" c="dimmed">
        Last updated: {new Date().toLocaleDateString()}
      </Text>
    </Stack>
  );
}