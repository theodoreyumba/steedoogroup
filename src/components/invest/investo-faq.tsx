// src/components/invest/investor-faq.tsx
'use client';
import React from 'react';
import { Paper, Title, Accordion, Button, Group } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';

const faqs = [
  {
    question: "How can I purchase Steedoo Group stock?",
    answer: "Steedoo Group stock can be purchased through most major brokerage firms. Our stock is listed on the NYSE under the ticker symbol 'STDO'."
  },
  {
    question: "When is your next earnings release?",
    answer: "Our next earnings release is scheduled for April 15, 2024. You can find the exact time and conference call details on our Investor Events page."
  },
  {
    question: "Do you offer a dividend?",
    answer: "Yes, Steedoo Group currently pays a quarterly dividend. The amount and declaration of dividends are subject to the discretion of our Board of Directors."
  },
  {
    question: "How can I receive financial reports and updates?",
    answer: "You can sign up for email alerts on our Investor Relations page to receive the latest financial reports, press releases, and other important updates."
  },
  {
    question: "What is your stock split history?",
    answer: "Steedoo Group has not undergone any stock splits since its IPO in 2020. Any future stock splits will be communicated to shareholders well in advance."
  },
  {
    question: "How does Steedoo Group approach Environmental, Social, and Governance (ESG) issues?",
    answer: "We are committed to sustainable and responsible business practices. You can find detailed information about our ESG initiatives and performance in our annual Sustainability Report."
  }
];

const InvestorFAQ = () => {
  return (
    <Paper withBorder p="md" radius="xl">
      <Title order={2} size="h2" mb="xl">Frequently Asked Questions</Title>
      <Accordion variant="separated">
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} value={`faq-${index}`}>
            <Accordion.Control icon={<IconQuestionMark size={20} />}>
              {faq.question}
            </Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Group justify="center" mt="xl">
        <Button variant="light" color="blue">View All FAQs</Button>
      </Group>
    </Paper>
  );
};

export default InvestorFAQ;