// src/components/invest/dividend-information.tsx
'use client';
import React from 'react';
import { Paper, Title, Table, Text, Group, ThemeIcon, Progress } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconMinus } from '@tabler/icons-react';

const dividendHistory = [
  { year: 2024, quarter: 'Q1', amount: 0.50, exDate: '2024-03-15', paymentDate: '2024-03-30' },
  { year: 2023, quarter: 'Q4', amount: 0.50, exDate: '2023-12-15', paymentDate: '2023-12-30' },
  { year: 2023, quarter: 'Q3', amount: 0.45, exDate: '2023-09-15', paymentDate: '2023-09-30' },
  { year: 2023, quarter: 'Q2', amount: 0.45, exDate: '2023-06-15', paymentDate: '2023-06-30' },
  { year: 2023, quarter: 'Q1', amount: 0.40, exDate: '2023-03-15', paymentDate: '2023-03-30' },
];

const DividendInformation = () => {
  const latestDividend = dividendHistory[0];
  const previousDividend = dividendHistory[1];
  const dividendChange = latestDividend.amount - previousDividend.amount;
  const dividendYield = 2.5; // This would typically be calculated based on current stock price

  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Dividend Information</Title>
      
      <Group justify="apart" mb="xl">
        <div>
          <Text size="lg" fw={700}>Latest Dividend</Text>
          <Group gap="xs">
            <Text size="xl" fw={700}>${latestDividend.amount.toFixed(2)}</Text>
            <ThemeIcon 
              color={dividendChange >= 0 ? 'green' : 'red'} 
              variant="light" 
              size="sm"
            >
              {dividendChange > 0 ? <IconArrowUpRight size={14} /> : 
               dividendChange < 0 ? <IconArrowDownRight size={14} /> : 
               <IconMinus size={14} />}
            </ThemeIcon>
            <Text color={dividendChange >= 0 ? 'green' : 'red'} size="sm">
              {dividendChange > 0 ? '+' : ''}{dividendChange.toFixed(2)} ({((dividendChange / previousDividend.amount) * 100).toFixed(2)}%)
            </Text>
          </Group>
        </div>
        <div>
          <Text size="lg" fw={700}>Dividend Yield</Text>
          <Text size="xl" fw={700}>{dividendYield.toFixed(2)}%</Text>
        </div>
      </Group>

      <Text fw={500} mb="xs">Payout Ratio</Text>
      <Progress value={65} size="xl" radius="xl" mb="md" />
      <Text size="sm" color="dimmed" mb="xl">65% of earnings paid as dividends</Text>

      <Title order={3} size="h3" mb="md">Dividend History</Title>
      <Table.ScrollContainer minWidth={500}>
        <Table>
          <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Quarter</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Ex-Dividend Date</Table.Th>
          <Table.Th>Payment Date</Table.Th>
        </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
        {dividendHistory.map((dividend, index) => (
          <Table.Tr key={index}>
            <Table.Td>{dividend.year}</Table.Td>
            <Table.Td>{dividend.quarter}</Table.Td>
            <Table.Td>${dividend.amount.toFixed(2)}</Table.Td>
            <Table.Td>{dividend.exDate}</Table.Td>
            <Table.Td>{dividend.paymentDate}</Table.Td>
          </Table.Tr>
        ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      
      <Text size="sm" mt="md" color="dimmed">
        * Past performance does not guarantee future results. Dividend payments are subject to approval by the Board of Directors.
      </Text>
    </Paper>
  );
};

export default DividendInformation;