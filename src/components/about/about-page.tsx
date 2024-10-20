import React from 'react';
import {
  Title, Container, Text, Group, Image, List, ThemeIcon, Card, Grid, Paper, Anchor, Badge, Box, Divider, ActionIcon, Tooltip,
} from "@mantine/core";
import { IconBuildingBank, IconGlobe, IconUsers, IconFlag, IconBrandLinkedin, IconMail, IconMapPin, IconPhone, IconBrandTwitter, IconBrandFacebook } from "@tabler/icons-react";
import { IframeGoogleMaps } from "@/components/map/iframe-google-maps"; // Adjust path accordingly

interface Director {
  name: string;
  justify: string;
  photo: string;
  description: string;
}

const directors: Director[] = [
  {
    name: "Theodore Yumba Mutumba",
    justify: "Founder & President",
    photo: "/images/theodore.jpg",
    description: "Experienced entrepreneur leading Steedoo's growth across emerging markets.",
  },
  {
    name: "Kabila Nsungu Prudent",
    justify: "Executive Vice President",
    photo: "/images/prudent.jpg",
    description: "Operational leader managing the African division.",
  },
  {
    name: "Kouvas Ilunga Vangeli",
    justify: "Director of Technology",
    photo: "/images/vangeli.jpg",
    description: "Overseeing technological innovation and infrastructure development.",
  },
  {
    name: "Kinenkinda Mulume Dan",
    justify: "Director of Finance",
    photo: "/images/dan.jpg",
    description: "Leading financial operations and investment initiatives.",
  },
];

const services = [
  {
    title: "Technology Solutions",
    description: "Building innovative digital platforms and transforming industries.",
    icon: <IconGlobe size={24} />,
  },
  {
    title: "Financial Services",
    description: "Delivering banking, investment, and fintech services to empower clients.",
    icon: <IconBuildingBank size={24} />,
  },
  {
    title: "Real Estate and Infrastructure",
    description: "Promoting sustainable development through strategic investments.",
    icon: <IconMapPin size={24} />,
  },
  {
    title: "Logistics and Trade",
    description: "Facilitating cross-border commerce and supply chain efficiency.",
    icon: <IconUsers size={24} />,
  },
];

export default function EnhancedAboutPage() {
  return (
    <Container size="xl" mt="xl" mb="xl">
      <Box mb={50}>
        <Group justify="center" mb="xl">
          <Image
            src="/steedoo-logo.png"
            alt="Steedoo Group Logo"
            width={180}
          />
        </Group>
        <Title order={1} ta="center" mb="md">About Steedoo Group</Title>
        <Text ta="center" size="xl" mx="auto" maw={800}>
          Steedoo Group is a multinational holding company specializing in technological, financial, and investment solutions across Africa and the United States. We are committed to innovation, sustainability, and empowering businesses to thrive.
        </Text>
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="md" mb={50}>
        <Title order={2} ta="center" mb="xl">Corporate Structure</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder padding="lg">
              <Group mb="md">
                <ThemeIcon color="blue" size={40} radius="md">
                  <IconBuildingBank size={24} />
                </ThemeIcon>
                <Title order={3}>Steedoo Group Inc. (USA)</Title>
              </Group>
              <Text mb="sm">Corporate and strategic hub established on September 30, 2022, in Wyoming.</Text>
              <Text size="sm" c="dimmed"><IconMapPin size={16} /> 1603 Capitol Avenue, Suite 413A, Cheyenne, WY 82001, USA.</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder padding="lg">
              <Group mb="md">
                <ThemeIcon color="green" size={40} radius="md">
                  <IconBuildingBank size={24} />
                </ThemeIcon>
                <Title order={3}>Steedoo Group SAS (DRC)</Title>
              </Group>
              <Text mb="sm">Founded on May 31, 2021, and based in Lubumbashi, Katanga.</Text>
              <Text size="sm" c="dimmed"><IconMapPin size={16} /> 20, Avenue Mpolo, Q/Gambela, Lubumbashi, DRC.</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      <Box mb={50}>
        <Title order={2} ta="center" mb="xl">Our Leadership</Title>
        <Grid gutter="xl">
          {directors.map((director) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={director.name}>
              <Card shadow="md" radius="md" padding="lg">
                <Card.Section>
                  <Image src={director.photo} height={220} alt={`${director.name} photo`} />
                </Card.Section>
                <Title order={4} mt="md">{director.name}</Title>
                <Badge color="blue" size="lg" mt="xs">{director.justify}</Badge>
                <Text mt="sm" size="sm">{director.description}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="md" mb={50}>
        <Title order={2} ta="center" mb="xl">Key Services and Industries</Title>
        <Grid gutter="xl">
          {services.map((service, index) => (
            <Grid.Col span={{ base: 12, sm: 6 }} key={index}>
              <Group>
                <ThemeIcon color="blue" size={50} radius="md" variant="light">
                  {service.icon}
                </ThemeIcon>
                <Box>
                  <Title order={4}>{service.title}</Title>
                  <Text size="sm">{service.description}</Text>
                </Box>
              </Group>
            </Grid.Col>
          ))}
        </Grid>
      </Paper>

      <Box mb={50}>
        <Title order={2} ta="center" mb="xl">Office Locations</Title>
        <IframeGoogleMaps width="100%" height="400px" />
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="md" mb={50}>
        <Title order={2} ta="center" mb="xl">Get in Touch</Title>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={3} mb="md">Contact Information</Title>
            <List spacing="lg" size="sm" center icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconPhone size={16} />
              </ThemeIcon>
            }>
              <List.Item>+1 (307) 555-0123 (USA)</List.Item>
              <List.Item>+243 97 000 0000 (DRC)</List.Item>
            </List>
            <Divider my="md" />
            <Title order={3} mb="md">Follow Us</Title>
            <Group>
              <Tooltip label="LinkedIn">
                <ActionIcon size="lg" variant="default" radius="xl">
                  <Anchor href="https://cd.linkedin.com/company/steedoogroup" target="_blank">
                    <IconBrandLinkedin size={18} />
                  </Anchor>
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Twitter">
                <ActionIcon size="lg" variant="default" radius="xl">
                  <Anchor href="#" target="_blank">
                    <IconBrandTwitter size={18} />
                  </Anchor>
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Facebook">
                <ActionIcon size="lg" variant="default" radius="xl">
                  <Anchor href="#" target="_blank">
                    <IconBrandFacebook size={18} />
                  </Anchor>
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Email Us">
                <ActionIcon size="lg" variant="default" radius="xl">
                  <Anchor href="mailto:info@steedoogroup.com">
                    <IconMail size={18} />
                  </Anchor>
                </ActionIcon>
              </Tooltip>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={3} mb="md">Headquarters</Title>
            <Card withBorder padding="lg">
              <Group>
                <ThemeIcon color="blue" size={40} radius="xl">
                  <IconFlag size={24} />
                </ThemeIcon>
                <Box>
                  <Text fw={700}>Lubumbashi, DRC & Cheyenne, USA</Text>
                  <Text size="sm" c="dimmed">Serving clients globally from our strategic locations</Text>
                </Box>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}