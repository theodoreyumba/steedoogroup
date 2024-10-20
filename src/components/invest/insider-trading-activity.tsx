// src/components/invest/insider-trading-activity.tsx
'use client';
import React from 'react';
import { Paper, Title, Table, Text, Group, ThemeIcon, Progress, Badge } from '@mantine/core';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';

const insiderTrades = [
  { insider: 'John Doe', position: 'CEO', action: 'Buy', shares: 10000, price: 48.50, date: '2024-03-10' },
  { insider: 'Jane Smith', position: 'CFO', action: 'Sell', shares: 5000, price: 49.75, date: '2024-03-05' },
  { insider: 'Mike Johnson', position: 'Director', action: 'Buy', shares: 2000, price: 47.80, date: '2024-02-28' },
  { insider: 'Sarah Lee', position: 'CTO', action: 'Sell', shares: 3000, price: 50.25, date: '2024-02-20' },
  { insider: 'Tom Brown', position: 'COO', action: 'Buy', shares: 5000, price: 46.90, date: '2024-02-15' },
];

const InsiderTrading = () => {
  const totalBuyShares = insiderTrades.filter(trade => trade.action === 'Buy').reduce((sum, trade) => sum + trade.shares, 0);
  const totalSellShares = insiderTrades.filter(trade => trade.action === 'Sell').reduce((sum, trade) => sum + trade.shares, 0);
  const totalShares = totalBuyShares + totalSellShares;

  return (
    <Paper withBorder p="md" radius="md">
      <Title order={2} size="h2" mb="xl">Insider Trading Activity</Title>
      
      <Group gap="apart" mb="md">
        <Text>Net Insider Trading: 
          <Badge color={totalBuyShares > totalSellShares ? 'green' : 'red'} ml="xs">
            {totalBuyShares > totalSellShares ? 'Net Buying' : 'Net Selling'}
          </Badge>
        </Text>
        <Text>Total Shares Traded: {totalShares.toLocaleString()}</Text>
      </Group>
      
      <Progress.Root size="xl" mb="sm">
        <Progress.Section value={(totalBuyShares / totalShares) * 100} color="green">
            <Progress.Label>Buy</Progress.Label>
        </Progress.Section>
        <Progress.Section value={(totalSellShares / totalShares) * 100} color="red">
            <Progress.Label>Sell</Progress.Label>
        </Progress.Section>
    </Progress.Root>
      <Group gap="apart" mb="xl">
        <Text size="sm">Buy: {totalBuyShares.toLocaleString()} shares</Text>
        <Text size="sm">Sell: {totalSellShares.toLocaleString()} shares</Text>
      </Group>
      
      <Table.ScrollContainer minWidth={500}>
        <Table>
          <Table.Thead>
        <Table.Tr>
          <Table.Th>Insider</Table.Th>
          <Table.Th>Position</Table.Th>
          <Table.Th>Action</Table.Th>
          <Table.Th>Shares</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
        {insiderTrades.map((trade, index) => (
          <Table.Tr key={index}>
            <Table.Td>{trade.insider}</Table.Td>
            <Table.Td>{trade.position}</Table.Td>
            <Table.Td>
              <Group gap="xs">
                <ThemeIcon color={trade.action === 'Buy' ? 'green' : 'red'} variant="light" size="sm">
                  {trade.action === 'Buy' ? <IconArrowUp size={14} /> : <IconArrowDown size={14} />}
                </ThemeIcon>
                <Text>{trade.action}</Text>
              </Group>
            </Table.Td>
            <Table.Td>{trade.shares.toLocaleString()}</Table.Td>
            <Table.Td>${trade.price.toFixed(2)}</Table.Td>
            <Table.Td>{trade.date}</Table.Td>
          </Table.Tr>
        ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
};

export default InsiderTrading;