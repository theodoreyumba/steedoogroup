// src/components/invest/financial-reports.tsx
'use client';
import React from 'react';
import { Paper, Title, Table, Button, Group, Text, Accordion, Badge } from '@mantine/core';
import { IconDownload, IconChartBar, IconFileSpreadsheet } from '@tabler/icons-react';

const reports = [
  { year: 2023, q: 'Q4', revenue: '126.4M', profit: '32.1M', eps: '1.45', link: '#' },
  { year: 2023, q: 'Q3', revenue: '118.7M', profit: '28.9M', eps: '1.30', link: '#' },
  { year: 2023, q: 'Q2', revenue: '112.2M', profit: '26.5M', eps: '1.19', link: '#' },
  { year: 2023, q: 'Q1', revenue: '105.8M', profit: '24.3M', eps: '1.09', link: '#' },
  { year: 2022, q: 'Q4', revenue: '98.6M', profit: '22.7M', eps: '1.02', link: '#' },
];

const FinancialReports = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Financial Reports</Title>
      
      <Accordion variant="contained" radius="xl" mb="xl">
        <Accordion.Item value="latest-report">
          <Accordion.Control>
            <Group>
              <IconChartBar size={20} />
              <Text fw={500}>Latest Quarterly Report Highlights</Text>
              <Badge color="blue">Q4 2023</Badge>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Text mb="sm">Our Q4 2023 results demonstrate strong growth and profitability:</Text>
            <Table.ScrollContainer minWidth={500}>
              <Table>
              <Table.Thead>
                <Table.Tr>
                <Table.Th>Metric</Table.Th>
                <Table.Th>Value</Table.Th>
                <Table.Th>YoY Change</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                <Table.Td>Revenue</Table.Td>
                <Table.Td>$126.4M</Table.Td>
                <Table.Td>+28.2%</Table.Td>
                </Table.Tr>
                <Table.Tr>
                <Table.Td>Net Profit</Table.Td>
                <Table.Td>$32.1M</Table.Td>
                <Table.Td>+41.4%</Table.Td>
                </Table.Tr>
                <Table.Tr>
                <Table.Td>EPS</Table.Td>
                <Table.Td>$1.45</Table.Td>
                <Table.Td>+42.2%</Table.Td>
                </Table.Tr>
              </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
            <Button variant="light" color="blue" mt="md" leftSection={<IconFileSpreadsheet size={14} />}>
              View Full Report
            </Button>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Table.ScrollContainer minWidth={500} mb="md">
        <Table>
          <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Quarter</Table.Th>
          <Table.Th>Revenue</Table.Th>
          <Table.Th>Profit</Table.Th>
          <Table.Th>EPS</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
        {reports.map((report, index) => (
          <Table.Tr key={index}>
            <Table.Td>{report.year}</Table.Td>
            <Table.Td>{report.q}</Table.Td>
            <Table.Td>${report.revenue}</Table.Td>
            <Table.Td>${report.profit}</Table.Td>
            <Table.Td>${report.eps}</Table.Td>
            <Table.Td>
          <Button variant="subtle" color="blue" leftSection={<IconDownload size={14} />}>
            Download
          </Button>
            </Table.Td>
          </Table.Tr>
        ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      
      <Group justify="center">
        <Button variant="outline" color="blue" leftSection={<IconChartBar size={14} />}>
          View All Financial Reports
        </Button>
      </Group>
    </Paper>
  );
};

export default FinancialReports;