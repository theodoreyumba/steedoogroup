import React from 'react';
import {
  Title, Text, Container, TextInput, Textarea, Button, Group, SimpleGrid, 
  Paper, ThemeIcon, Box, Anchor, Card, Divider, Stack, Input
} from "@mantine/core";
import { useForm } from '@mantine/form';
import { 
  IconMail, IconPhone, IconMapPin, IconBrandLinkedin, 
  IconBrandTwitter, IconBrandFacebook, IconSend, IconClock
} from "@tabler/icons-react";

const contactInfo = [
  { title: 'Email', value: 'info@steedoogroup.com', icon: IconMail },
  { title: 'Phone', value: '+1 (307) 555-0123 / +243 97 000 0000', icon: IconPhone },
  { title: 'Address', value: '1603 Capitol Avenue, Suite 413A, Cheyenne, WY 82001, USA', icon: IconMapPin },
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM (EST)' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM (EST)' },
  { day: 'Sunday', hours: 'Closed' },
];

const socialMedia = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/steedoogroup', icon: IconBrandLinkedin },
  { name: 'Twitter', url: 'https://twitter.com/steedoogroup', icon: IconBrandTwitter },
  { name: 'Facebook', url: 'https://www.facebook.com/steedoogroup', icon: IconBrandFacebook },
];

export default function ExtensiveContactPage() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name must have at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => (value.trim().length < 2 ? 'Subject must have at least 2 characters' : null),
      message: (value) => (value.trim().length < 10 ? 'Message must have at least 10 characters' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // Here you would typically send the form data to your backend
    console.log(values);
    // Reset form after submission
    form.reset();
  };

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl">Contact Us</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Text size="lg" mb="md">We'd love to hear from you. Please fill out this form or use our contact information below.</Text>
          
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              required
              mt="md"
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Subject"
              placeholder="Subject"
              required
              mt="md"
              {...form.getInputProps('subject')}
            />
            <Textarea
              label="Message"
              placeholder="Your message"
              required
              mt="md"
              minRows={4}
              {...form.getInputProps('message')}
            />
            <Group justify="flex-end" mt="xl">
              <Button type="submit" leftSection={<IconSend size={14} />}>Send Message</Button>
            </Group>
          </form>
        </div>
        
        <Stack>
          <Paper withBorder shadow="md" radius="xl" p="xl">
            <Title order={3} mb="md">Contact Information</Title>
            {contactInfo.map((item, index) => (
              <Group key={index} mb="xs">
                <ThemeIcon variant="light" size={40} radius="xl">
                  <item.icon size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>{item.title}</Text>
                  <Text size="sm">{item.value}</Text>
                </Box>
              </Group>
            ))}
          </Paper>

          <Paper withBorder shadow="md" radius="xl" p="xl">
            <Title order={3} mb="md">Office Hours</Title>
            {officeHours.map((item, index) => (
              <Group key={index} mb="xs">
                <ThemeIcon variant="light" size={40} radius="xl">
                  <IconClock size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>{item.day}</Text>
                  <Text size="sm">{item.hours}</Text>
                </Box>
              </Group>
            ))}
          </Paper>

          <Card withBorder shadow="md" radius="xl" p="xl">
            <Title order={3} mb="md">Follow Us</Title>
            <Group>
              {socialMedia.map((item, index) => (
                <Anchor key={index} href={item.url} target="_blank">
                  <ThemeIcon variant="light" size={40} radius="xl">
                    <item.icon size={20} />
                  </ThemeIcon>
                </Anchor>
              ))}
            </Group>
          </Card>
        </Stack>
      </SimpleGrid>

      <Divider my="xl" />

      <Title order={2} ta="center" mb="xl">Our Locations</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
        <Paper withBorder p="md" radius="xl">
          <Title order={3} mb="sm">USA Office</Title>
          <Text>1603 Capitol Avenue, Suite 413A</Text>
          <Text>Cheyenne, WY 82001</Text>
          <Text>United States</Text>
        </Paper>
        <Paper withBorder p="md" radius="xl">
          <Title order={3} mb="sm">DRC Office</Title>
          <Text>20, Avenue Mpolo</Text>
          <Text>Q/Gambela, Lubumbashi</Text>
          <Text>Democratic Republic of Congo</Text>
        </Paper>
      </SimpleGrid>

      <Box mt="xl">
        <Title order={2} ta="center" mb="xl">Have a Question?</Title>
        <Text ta="center" size="lg">
          Check out our <Anchor href="/faq">FAQ page</Anchor> for answers to common questions, or feel free to reach out to us directly.
        </Text>
      </Box>
    </Container>
  );
}