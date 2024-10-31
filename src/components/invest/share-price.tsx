// src/components/invest/share-price.tsx
'use client';
import React from 'react';
import { Paper, Title, Group, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconTrendingUp, IconTrendingDown, IconCurrencyDollar } from '@tabler/icons-react';

const SharePrice = () => {
  const price = 45.67;
  const change = 1.23;
  const changePercent = 2.76;

  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="md">Share Price</Title>
      <SimpleGrid cols={3}>
        <Group>
          <ThemeIcon size="lg" variant="light" color="blue">
            <IconCurrencyDollar size={20} />
          </ThemeIcon>
          <div>
            <Text size="xl" fw={700}>${price.toFixed(2)}</Text>
            <Text size="sm" c="dimmed">Current Price</Text>
          </div>
        </Group>
        <Group>
          <ThemeIcon size="lg" variant="light" color={change >= 0 ? "green" : "red"}>
            {change >= 0 ? <IconTrendingUp size={20} /> : <IconTrendingDown size={20} />}
          </ThemeIcon>
          <div>
            <Text size="xl" fw={700} c={change >= 0 ? "green" : "red"}>
              ${Math.abs(change).toFixed(2)}
            </Text>
            <Text size="sm" c="dimmed">Daily Change</Text>
          </div>
        </Group>
        <Group>
          <ThemeIcon size="lg" variant="light" color={changePercent >= 0 ? "green" : "red"}>
            {changePercent >= 0 ? <IconTrendingUp size={20} /> : <IconTrendingDown size={20} />}
          </ThemeIcon>
          <div>
            <Text size="xl" fw={700} c={changePercent >= 0 ? "green" : "red"}>
              {Math.abs(changePercent).toFixed(2)}%
            </Text>
            <Text size="sm" c="dimmed">Percentage Change</Text>
          </div>
        </Group>
      </SimpleGrid>
    </Paper>
  );
};

export default SharePrice;