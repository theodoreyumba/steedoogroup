// src/components/invest/stock-chart.tsx
'use client';
import React, { useState } from 'react';
import { Paper, Title, SegmentedControl, Group, Text } from '@mantine/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const generateChartData = (days: number) => {
  const data = [];
  let price = 100;
  for (let i = days; i > 0; i--) {
    price += Math.random() * 5 - 2.5;
    data.push({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: Number(price.toFixed(2))
    });
  }
  return data;
};

const StockChart = () => {
  const [timeRange, setTimeRange] = useState('1M');
  const [chartData, setChartData] = useState(() => generateChartData(30));

  const handleRangeChange = (value: React.SetStateAction<string>) => {
    setTimeRange(value);
    const days = value === '1W' ? 7 : value === '1M' ? 30 : value === '3M' ? 90 : 365;
    setChartData(generateChartData(days));
  };

  return (
    <Paper withBorder p="md" radius="md">
      <Title order={2} size="h2" mb="md">Stock Performance</Title>
      <Group justify="apart" mb="md">
        <SegmentedControl
          value={timeRange}
          onChange={handleRangeChange}
          data={[
            { label: '1W', value: '1W' },
            { label: '1M', value: '1M' },
            { label: '3M', value: '3M' },
            { label: '1Y', value: '1Y' },
          ]}
        />
        <Text size="xl" fw={700} color="blue">
          ${chartData[chartData.length - 1].price.toFixed(2)}
        </Text>
      </Group>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default StockChart;