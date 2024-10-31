// src/components/invest/investments.tsx
'use client';
import React from 'react';
import { Paper, Title, Text, SimpleGrid, Card, Group, Badge, Button, Progress, Accordion } from '@mantine/core';
import { IconBuildingSkyscraper, IconChartPie, IconPlant2, IconSun } from '@tabler/icons-react';

const investmentSectors = [
  { name: 'Technology', allocation: 40, icon: IconBuildingSkyscraper, color: 'blue' },
  { name: 'Financial Services', allocation: 25, icon: IconChartPie, color: 'green' },
  { name: 'Real Estate', allocation: 20, icon: IconBuildingSkyscraper, color: 'orange' },
  { name: 'Renewable Energy', allocation: 15, icon: IconSun, color: 'yellow' },
];

const featuredInvestments = [
  { name: 'TechCorp Inc.', sector: 'Technology', amount: '$50M', performance: '+15%' },
  { name: 'GreenEnergy Solutions', sector: 'Renewable Energy', amount: '$30M', performance: '+22%' },
  { name: 'UrbanDev Properties', sector: 'Real Estate', amount: '$45M', performance: '+8%' },
];

const Investments = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Investment Portfolio</Title>

      <Text size="lg" mb="md">Sector Allocation</Text>
      <SimpleGrid cols={2} spacing="lg" mb="xl">
        {investmentSectors.map((sector, index) => (
          <Card key={index} shadow="sm" p="lg" radius="xl" withBorder>
            <Group justify="apart" mb="xs">
              <Text fw={500}>{sector.name}</Text>
              <Badge color={sector.color} variant="light">
                {sector.allocation}%
              </Badge>
            </Group>
            <Progress value={sector.allocation} color={sector.color} size="lg" radius="xl" />
            <Group mt="md" justify="apart">
              <sector.icon size={24} color={sector.color} />
              <Button variant="light" color={sector.color} >
                Learn More
              </Button>
            </Group>
          </Card>
        ))}
      </SimpleGrid>

      <Text size="lg" mb="md">Featured Investments</Text>
      <Accordion variant="contained" radius="xl">
        {featuredInvestments.map((investment, index) => (
          <Accordion.Item key={index} value={investment.name}>
            <Accordion.Control>
              <Group>
                <Text>{investment.name}</Text>
                <Badge color="blue">{investment.sector}</Badge>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Text>Investment Amount: {investment.amount}</Text>
              <Text>Performance: <Text component="span" color={investment.performance.startsWith('+') ? 'green' : 'red'}>{investment.performance}</Text></Text>
              <Button variant="light" mt="sm">View Details</Button>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Group justify="center" mt="xl">
        <Button variant="outline" color="blue">View Full Investment Portfolio</Button>
      </Group>
    </Paper>
  );
};

export default Investments;