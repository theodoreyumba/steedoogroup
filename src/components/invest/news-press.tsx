// src/components/invest/news-press.tsx
'use client';
import React from 'react';
import { Paper, Title, Card, Text, Group, Button, Badge, Stack } from '@mantine/core';
import { IconCalendar, IconExternalLink } from '@tabler/icons-react';

const newsItems = [
  {
    title: "Steedoo Group Announces Record Q4 2023 Results",
    date: "2024-03-15",
    category: "Financial",
    summary: "Steedoo Group reported record-breaking revenue and profit for Q4 2023, surpassing analyst expectations.",
    link: "#"
  },
  {
    title: "Steedoo Group Completes Acquisition of TechInnovate Inc.",
    date: "2024-02-28",
    category: "Corporate",
    summary: "The strategic acquisition strengthens Steedoo Group's position in the AI and machine learning market.",
    link: "#"
  },
  {
    title: "Steedoo Group Launches New Sustainable Energy Initiative",
    date: "2024-02-10",
    category: "Sustainability",
    summary: "The company announces a major investment in renewable energy projects across its global operations.",
    link: "#"
  },
  {
    title: "Steedoo Group Named One of the Best Places to Work in 2024",
    date: "2024-01-20",
    category: "Corporate Culture",
    summary: "For the third consecutive year, Steedoo Group ranks in the top 10 of Fortune's Best Companies to Work For.",
    link: "#"
  }
];

const NewsAndPressReleases = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Latest News &amp; Press Releases</Title>
      <Stack gap="md">
        {newsItems.map((item, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="xl" withBorder>
            <Group justify="apart" mb="xs">
              <Text fw={500}>{item.title}</Text>
              <Badge color="blue" variant="light">
                {item.category}
              </Badge>
            </Group>
            <Text size="sm" color="dimmed" mb="md">
              <Group gap="xs">
                <IconCalendar size={14} />
                <span>{item.date}</span>
              </Group>
            </Text>
            <Text size="sm" mb="md">{item.summary}</Text>
            <Button 
              variant="light" 
              color="blue" 
              fullWidth 
              mt="md" 
              radius="xl"
              rightSection={<IconExternalLink size={14} />}
            >
              Read Full Article
            </Button>
          </Card>
        ))}
      </Stack>
      <Button variant="outline" color="blue" fullWidth mt="xl">
        View All News &amp; Press Releases
      </Button>
    </Paper>
  );
};

export default NewsAndPressReleases;