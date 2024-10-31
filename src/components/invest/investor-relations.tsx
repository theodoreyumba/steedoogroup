// src/components/invest/investor-relations.tsx
'use client';
import React from 'react';
import { Paper, Title, Text, Group, Button, List, ThemeIcon, Accordion, Badge } from '@mantine/core';
import { IconCalendarEvent, IconFileText, IconNews, IconMail, IconPhone, IconBrandTwitter, IconCheck } from '@tabler/icons-react';

const InvestorRelations = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Investor Relations</Title>

      <Accordion variant="contained" radius="xl" mb="xl">
        <Accordion.Item value="upcoming-events">
          <Accordion.Control icon={<IconCalendarEvent size={20} />}>
            Upcoming Investor Events
          </Accordion.Control>
          <Accordion.Panel>
            <List spacing="sm">
              <List.Item>Q1 2024 Earnings Call - April 15, 2024</List.Item>
              <List.Item>Annual Shareholders Meeting - May 20, 2024</List.Item>
              <List.Item>Investor Day 2024 - September 10, 2024</List.Item>
            </List>
            <Button variant="light" color="blue" mt="md">View Full Calendar</Button>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="latest-filings">
          <Accordion.Control icon={<IconFileText size={20} />}>
            Latest SEC Filings
          </Accordion.Control>
          <Accordion.Panel>
            <List spacing="sm">
              <List.Item>10-K Annual Report - Filed on March 1, 2024</List.Item>
              <List.Item>8-K Current Report - Filed on February 15, 2024</List.Item>
              <List.Item>10-Q Quarterly Report - Filed on January 31, 2024</List.Item>
            </List>
            <Button variant="light" color="blue" mt="md">View All Filings</Button>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="press-releases">
          <Accordion.Control icon={<IconNews size={20} />}>
            Recent Press Releases
          </Accordion.Control>
          <Accordion.Panel>
            <List spacing="sm">
              <List.Item>Steedoo Group Announces Record Q4 2023 Results</List.Item>
              <List.Item>Steedoo Group Completes Acquisition of TechInnovate Inc.</List.Item>
              <List.Item>Steedoo Group Launches New Sustainable Energy Initiative</List.Item>
            </List>
            <Button variant="light" color="blue" mt="md">View All Press Releases</Button>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Title order={3} size="h3" mb="md">Corporate Governance</Title>
      <List
        spacing="sm"
        size="sm"
        mb="xl"
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item>Board of Directors</List.Item>
        <List.Item>Executive Leadership Team</List.Item>
        <List.Item>Committee Charters</List.Item>
        <List.Item>Corporate Governance Guidelines</List.Item>
        <List.Item>Code of Ethics</List.Item>
      </List>

      <Title order={3} size="h3" mb="md">Contact Investor Relations</Title>
      <Group gap="xl">
        <Group>
          <ThemeIcon size="lg" variant="light" color="blue">
            <IconMail size={20} />
          </ThemeIcon>
          <Text>ir@steedoogroup.com</Text>
        </Group>
        <Group>
          <ThemeIcon size="lg" variant="light" color="blue">
            <IconPhone size={20} />
          </ThemeIcon>
          <Text>+1 (307) 555-0100</Text>
        </Group>
        <Group>
          <ThemeIcon size="lg" variant="light" color="blue">
            <IconBrandTwitter size={20} />
          </ThemeIcon>
          <Text>@SteedooIR</Text>
        </Group>
      </Group>

      <Button variant="outline" color="blue" mt="xl" fullWidth>
        Sign Up for Investor Email Alerts
      </Button>
    </Paper>
  );
};

export default InvestorRelations;