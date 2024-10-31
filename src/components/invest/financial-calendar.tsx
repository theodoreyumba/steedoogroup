// src/components/invest/financial-calendar.tsx
'use client';
import React from 'react';
import { Paper, Title, Table, Badge, Text, Button } from '@mantine/core';

const calendarEvents = [
  { date: '2024-04-15', event: 'Q1 2024 Earnings Release', type: 'Earnings' },
  { date: '2024-05-20', event: 'Annual Shareholders Meeting', type: 'Corporate' },
  { date: '2024-07-18', event: 'Q2 2024 Earnings Release', type: 'Earnings' },
  { date: '2024-09-10', event: 'Investor Day 2024', type: 'Corporate' },
  { date: '2024-10-17', event: 'Q3 2024 Earnings Release', type: 'Earnings' },
  { date: '2025-01-16', event: 'Q4 2024 Earnings Release', type: 'Earnings' },
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case 'Earnings':
      return 'blue';
    case 'Corporate':
      return 'green';
    default:
      return 'gray';
  }
};

const FinancialCalendar = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Financial Calendar</Title>
      <Table.ScrollContainer minWidth={500}>
        <Table>
          <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Event</Table.Th>
          <Table.Th>Type</Table.Th>
        </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
        {calendarEvents.map((event, index) => (
          <Table.Tr key={index}>
            <Table.Td>{event.date}</Table.Td>
            <Table.Td>{event.event}</Table.Td>
            <Table.Td>
          <Badge color={getBadgeColor(event.type)}>{event.type}</Badge>
            </Table.Td>
          </Table.Tr>
        ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Text size="sm" mt="md" color="dimmed">
        * All dates are subject to change. Please check back for updates.
      </Text>
      <Button variant="outline" color="blue" fullWidth mt="xl">
        Add Events to Your Calendar
      </Button>
    </Paper>
  );
};

export default FinancialCalendar;