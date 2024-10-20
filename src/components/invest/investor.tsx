// src/components/invest/investor.tsx

'use client';
import React from 'react';
import { Container, Tabs, Grid, Paper, Title, Text, Group, ThemeIcon, Stack, Button, Avatar } from '@mantine/core';
import { IconChartLine, IconReportMoney, IconCalendarEvent, IconNews, IconInfoCircle } from '@tabler/icons-react';
import SharePrice from '@/components/invest/share-price';
import FinancialReports from '@/components/invest/financial-reports';
import Investments from '@/components/invest/investments';
import StockChart from '@/components/invest/stock-chart';
import InvestorRelations from '@/components/invest/investor-relations';
import KeyMetrics from '@/components/invest/key-financial-metrics';
import InvestorFAQ from '@/components/invest/investo-faq';
import InsiderTrading from '@/components/invest/insider-trading-activity';
import AnalystRatings from '@/components/invest/analys-ratings';
import MultiExchangeStockInfo from '@/components/invest/multi-exchange-stock-information';
import NewsAndPressReleases from '@/components/invest/news-press';
import DividendInformation from '@/components/invest/dividend-information';
import FinancialCalendar from '@/components/invest/financial-calendar';


const PageHeader = () => (
  <Paper p="md" mb="xl" radius={0} style={{ background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)' }}>
    <Container size="xl">
      <Group justify="apart" align="flex-end">
        <div>
          <Title order={1} style={{ color: 'white' }}>Investor Relations</Title>
          <Text size="xl" style={{ color: 'white' }}>Steedoo Group Inc. (NYSE: STDO)</Text>
        </div>
        <Button variant="white" color="blue">Subscribe to Updates</Button>
      </Group>
    </Container>
  </Paper>
);

const QuickLinks = () => (
  <Paper withBorder p="md" radius="md" mb="xl">
    <Group justify="apart">
      <Text fw={700}>Quick Links:</Text>
      <Group gap="xs">
        <Button variant="subtle" size='compact'>Annual Report</Button>
        <Button variant="subtle"  size='compact'>SEC Filings</Button>
        <Button variant="subtle"  size='compact'>Corporate Governance</Button>
        <Button variant="subtle"  size='compact'>ESG Report</Button>
      </Group>
    </Group>
  </Paper>
);

const LatestNews = () => (
  <Paper withBorder p="md" radius="md" mb="xl">
    <Group justify="apart" mb="md">
      <Title order={3}>Latest News</Title>
      <Button variant="subtle" rightSection={<IconNews size={14} />}>View All</Button>
    </Group>
    <Text>Steedoo Group Reports Record Q4 2023 Earnings, Surpassing Analyst Expectations</Text>
    <Text size="sm" color="dimmed" mt="xs">March 15, 2024</Text>
  </Paper>
);

const ContactInfo = () => (
  <Paper withBorder p="md" radius="md">
    <Title order={3} mb="md">Investor Contact</Title>
    <Group>
      <Avatar size="lg" radius="xl" src="/images/investor-relations-contact.jpg" />
      <div>
        <Text fw={500}>Jane Doe</Text>
        <Text size="sm">Head of Investor Relations</Text>
        <Text size="sm" c="dimmed">ir@steedoogroup.com</Text>
        <Text size="sm" c="dimmed">+1 (307) 555-0100</Text>
      </div>
    </Group>
  </Paper>
);

export default function Investor() {
  return (
    <>
      <PageHeader />
      <Container size="xl">
        <QuickLinks />
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 8}}>
            <SharePrice />
            <StockChart />
            <Tabs defaultValue="overview" mb="xl">
              <Tabs.List grow>
                <Tabs.Tab value="overview" leftSection={<IconChartLine size={14} />}>Overview</Tabs.Tab>
                <Tabs.Tab value="financials" leftSection={<IconReportMoney size={14} />}>Financials</Tabs.Tab>
                <Tabs.Tab value="events" leftSection={<IconCalendarEvent size={14} />}>Events</Tabs.Tab>
                <Tabs.Tab value="news" leftSection={<IconNews size={14} />}>News</Tabs.Tab>
                <Tabs.Tab value="resources" leftSection={<IconInfoCircle size={14} />}>Resources</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview" pt="xs">
                <Stack gap="xl">
                  <KeyMetrics />
                  <MultiExchangeStockInfo />
                  <DividendInformation />
                </Stack>
              </Tabs.Panel>

              <Tabs.Panel value="financials" pt="xs">
                <Stack gap="xl">
                  <FinancialReports />
                  <Investments />
                  <AnalystRatings />
                  <InsiderTrading />
                </Stack>
              </Tabs.Panel>

              <Tabs.Panel value="events" pt="xs">
                <FinancialCalendar />
              </Tabs.Panel>

              <Tabs.Panel value="news" pt="xs">
                <NewsAndPressReleases />
              </Tabs.Panel>

              <Tabs.Panel value="resources" pt="xs">
                <Stack gap="xl">
                  <InvestorRelations />
                  <InvestorFAQ />
                </Stack>
              </Tabs.Panel>
            </Tabs>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4}}>
            <Stack gap="xl">
              <LatestNews />
              <ContactInfo />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}