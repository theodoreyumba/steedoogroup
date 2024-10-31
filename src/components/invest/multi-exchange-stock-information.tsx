// src/components/invest/multi-exchange-stock-information.tsx
'use client';
import React from 'react';
import { Paper, Title, Table, Text, Group, ThemeIcon } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconMinus } from '@tabler/icons-react';

const exchangeData = [
  { exchange: 'NYSE', symbol: 'STDO', price: 50.25, change: 0.75, changePercent: 1.51, currency: 'USD' },
  { exchange: 'LSE', symbol: 'STDO.L', price: 39.80, change: -0.20, changePercent: -0.50, currency: 'GBP' },
  { exchange: 'FRA', symbol: 'ST6.F', price: 46.90, change: 0.30, changePercent: 0.64, currency: 'EUR' },
  { exchange: 'TSE', symbol: '9983.T', price: 5430, change: 45, changePercent: 0.83, currency: 'JPY' },
];

const MultiExchangeStockInfo = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Stock Information Across Exchanges</Title>
      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover>
          <Table.Thead>
        <Table.Tr>
          <Table.Th>Exchange</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Change</Table.Th>
          <Table.Th>% Change</Table.Th>
        </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
        {exchangeData.map((data, index) => (
          <Table.Tr key={index}>
            <Table.Td>{data.exchange}</Table.Td>
            <Table.Td>{data.symbol}</Table.Td>
            <Table.Td>{data.currency} {data.price.toFixed(2)}</Table.Td>
            <Table.Td>
          <Group gap="xs">
            <ThemeIcon 
              color={data.change > 0 ? 'green' : data.change < 0 ? 'red' : 'gray'} 
              variant="light" 
              size="sm"
            >
              {data.change > 0 ? <IconArrowUpRight size={14} /> : 
               data.change < 0 ? <IconArrowDownRight size={14} /> : 
               <IconMinus size={14} />}
            </ThemeIcon>
            <Text c={data.change > 0 ? 'green' : data.change < 0 ? 'red' : 'gray'}>
              {data.change > 0 ? '+' : ''}{data.change.toFixed(2)}
            </Text>
          </Group>
            </Table.Td>
            <Table.Td>
          <Text c={data.changePercent > 0 ? 'green' : data.changePercent < 0 ? 'red' : 'gray'}>
            {data.changePercent > 0 ? '+' : ''}{data.changePercent.toFixed(2)}%
          </Text>
            </Table.Td>
          </Table.Tr>
        ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Text size="sm" mt="md" c="dimmed">
        * Prices are delayed by at least 15 minutes. Last updated: {new Date().toLocaleString()}
      </Text>
    </Paper>
  );
};

export default MultiExchangeStockInfo;