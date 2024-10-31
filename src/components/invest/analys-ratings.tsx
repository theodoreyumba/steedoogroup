// src/components/invest/analyst-ratings.tsx
'use client';
import React from 'react';
import { Paper, Title, Table, Text, Group, ThemeIcon, Progress, Badge } from '@mantine/core';
import { IconArrowUp, IconArrowDown, IconMinus } from '@tabler/icons-react';

const analystRatings = [
  { firm: 'Goldman Sachs', analyst: 'John Smith', rating: 'Buy', priceTarget: 55, date: '2024-03-15' },
  { firm: 'Morgan Stanley', analyst: 'Jane Doe', rating: 'Overweight', priceTarget: 52, date: '2024-03-10' },
  { firm: 'JP Morgan', analyst: 'Mike Johnson', rating: 'Neutral', priceTarget: 48, date: '2024-03-05' },
  { firm: 'Bank of America', analyst: 'Sarah Lee', rating: 'Buy', priceTarget: 56, date: '2024-02-28' },
  { firm: 'Citigroup', analyst: 'Tom Brown', rating: 'Sell', priceTarget: 42, date: '2024-02-20' },
];

const getRatingColor = (rating: string) => {
  switch (rating.toLowerCase()) {
    case 'buy':
    case 'overweight':
      return 'green';
    case 'neutral':
    case 'hold':
      return 'yellow';
    case 'sell':
    case 'underweight':
      return 'red';
    default:
      return 'gray';
  }
};

const AnalystRatings = () => {
  const currentPrice = 50; // Assume current stock price is $50

  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Analyst Ratings &amp; Price Targets</Title>
      
      <Group justify="apart" mb="md">
        <Text>Consensus Rating: <Badge color="green">Buy</Badge></Text>
        <Text>Average Price Target: <Badge color="blue">$50.60</Badge></Text>
      </Group>
      
      <Table.ScrollContainer minWidth={500} mb="xl">
        <Table>
          <Table.Thead>
        <Table.Tr>
          <Table.Th>Firm</Table.Th>
          <Table.Th>Analyst</Table.Th>
          <Table.Th>Rating</Table.Th>
          <Table.Th>Price Target</Table.Th>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
        {analystRatings.map((rating, index) => (
          <Table.Tr key={index}>
            <Table.Td>{rating.firm}</Table.Td>
            <Table.Td>{rating.analyst}</Table.Td>
            <Table.Td>
          <Badge color={getRatingColor(rating.rating)}>{rating.rating}</Badge>
            </Table.Td>
            <Table.Td>
          <Group gap="xs">
            ${rating.priceTarget}
            <ThemeIcon 
              color={rating.priceTarget > currentPrice ? 'green' : rating.priceTarget < currentPrice ? 'red' : 'gray'} 
              variant="light" 
              size="sm"
            >
              {rating.priceTarget > currentPrice ? <IconArrowUp size={14} /> : 
               rating.priceTarget < currentPrice ? <IconArrowDown size={14} /> : 
               <IconMinus size={14} />}
            </ThemeIcon>
          </Group>
            </Table.Td>
            <Table.Td>{rating.date}</Table.Td>
          </Table.Tr>
        ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      
    <Text size="sm" mb="xs">Price Target Range</Text>
    <Progress.Root size="xl">
      <Progress.Section value={20} color="red" />
      <Progress.Section value={60} color="yellow" />
      <Progress.Section value={20} color="green" />
    </Progress.Root>
      <Group justify="apart" mt="xs">
        <Text size="sm">$42</Text>
        <Text size="sm">$56</Text>
      </Group>
    </Paper>
  );
};

export default AnalystRatings;