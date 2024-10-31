// src/components/invest/key-financial-metrics.tsx
'use client';
import React from 'react';
import { Paper, Title, Grid, Text, Group, ThemeIcon } from '@mantine/core';
import { IconTrendingUp, IconTrendingDown, IconEqual } from '@tabler/icons-react';

const metrics = [
  { name: 'Revenue (TTM)', value: '$462.7M', change: '+18.5%' },
  { name: 'Net Income (TTM)', value: '$112.3M', change: '+22.7%' },
  { name: 'EPS (TTM)', value: '$5.03', change: '+21.9%' },
  { name: 'Market Cap', value: '$4.8B', change: '+15.2%' },
  { name: 'P/E Ratio', value: '21.5', change: '-5.3%' },
  { name: 'Dividend Yield', value: '2.1%', change: '0%' },
];

const KeyMetrics = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Key Financial Metrics</Title>
      <Grid>
        {metrics.map((metric, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, sm: 4 }}>
            <Group gap="sm">
              <ThemeIcon 
                size="lg" 
                variant="light" 
                color={metric.change.startsWith('+') ? 'green' : metric.change.startsWith('-') ? 'red' : 'blue'}
              >
                {metric.change.startsWith('+') ? <IconTrendingUp size={20} /> : 
                 metric.change.startsWith('-') ? <IconTrendingDown size={20} /> : 
                 <IconEqual size={20} />}
              </ThemeIcon>
              <div>
                <Text size="sm" c="dimmed">{metric.name}</Text>
                <Text size="lg" fw={700}>{metric.value}</Text>
                <Text 
                  size="sm" 
                  color={metric.change.startsWith('+') ? 'green' : metric.change.startsWith('-') ? 'red' : 'blue'}
                >
                  {metric.change}
                </Text>
              </div>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  );
};

export default KeyMetrics;