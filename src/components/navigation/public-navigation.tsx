// src/components/portfolio/portfolio-page.tsx
'use client';

import React from 'react';
import { SGImages } from "@/assets/images";
import { Grid, Title, Text, Space, Button, Image, Container, Card, Group, Badge, SimpleGrid, Timeline, ThemeIcon, Divider, Accordion, Box, List, Avatar } from "@mantine/core";
import { IconBuildingStore, IconBusinessplan, IconSettingsSearch, IconRocket, IconUsers, IconGlobe, IconChartBar, IconLeaf, IconBuildingBank, IconTruck, IconShirt, IconAward, IconCertificate } from "@tabler/icons-react";
import Navbar from "@/components/navigation/navigation";
import Link from "next/link";

export function PublicNavigation() {
    return (
        <Navbar>
            
            <Container size="xl">
                {/* Mission Statement */}
                <Box my={80}>
                    <Title order={2} size="3rem" fw={700} ta="center">
                        Empowering African Businesses Globally
                    </Title>
                    <Text size="xl" mt="xl" c="dimmed" ta="center" maw={800} mx="auto">
                        Steedoo Group is committed to advancing African businesses to the forefront of the global stage, through innovative solutions and strategic partnerships.
                    </Text>
                    <Group justify="center" mt="xl">
                        <Link href="/about" passHref>
                            <Button size="lg" radius="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                                Learn More About Us
                            </Button>
                        </Link>
                        <Link href="/contact" passHref>
                            <Button size="lg" radius="xl" variant="outline">
                                Contact Us
                            </Button>
                        </Link>
                    </Group>
                </Box>

                {/* Company Overview */}
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50} my={80}>
                    <div>
                        <Title order={2} size="2.5rem" fw={600}>
                            Who We Are
                        </Title>
                        <Text size="lg" mt="xl">
                            Steedoo Group is a multinational holding company that empowers African businesses by providing innovative and effective strategies to promote growth and sustainability across industries.
                        </Text>
                        <List spacing="sm" size="lg" mt="md" icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconRocket size={12} stroke={1.5} />
                            </ThemeIcon>
                        }>
                            <List.Item>Established in 2021</List.Item>
                            <List.Item>Headquartered in Lubumbashi, DRC & Cheyenne, USA</List.Item>
                            <List.Item>Operating across Africa and the United States</List.Item>
                            <List.Item>Diverse portfolio of innovative companies</List.Item>
                        </List>
                    </div>
                    <Image
                        src={'/assets/images/sg/steedoo-group-hq.webp'}
                        alt="Steedoo Group Headquarters"
                        radius="xl"
                    />
                </SimpleGrid>

                {/* Our Companies */}
                <Box my={80}>
                    <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">
                        Our Companies
                    </Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
                        <Card shadow="md" radius="xl" padding="lg">
                            <ThemeIcon size={50} radius="xl" variant="light" color="blue">
                                <IconBuildingBank size={30} />
                            </ThemeIcon>
                            <Text fw={700} fz="lg" mt="md">Juniaboss</Text>
                            <Text fz="sm" c="dimmed" mt={5}>Cutting-edge fintech solutions revolutionizing African banking</Text>
                        </Card>
                        <Card shadow="md" radius="xl" padding="lg">
                            <ThemeIcon size={50} radius="xl" variant="light" color="green">
                                <IconTruck size={30} />
                            </ThemeIcon>
                            <Text fw={700} fz="lg" mt="md">Dereva</Text>
                            <Text fz="sm" c="dimmed" mt={5}>AI-powered logistics optimizing supply chains across the continent</Text>
                        </Card>
                        <Card shadow="md" radius="xl" padding="lg">
                            <ThemeIcon size={50} radius="xl" variant="light" color="yellow">
                                <IconShirt size={30} />
                            </ThemeIcon>
                            <Text fw={700} fz="lg" mt="md">Ogun</Text>
                            <Text fz="sm" c="dimmed" mt={5}>Sustainable luxury fashion celebrating African heritage</Text>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Services Section */}
                <Box my={80}>
                    <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">
                        Our Services
                    </Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
                        <Card shadow="md" radius="xl" padding="lg">
                            <IconSettingsSearch width={40} height={40} color='orange' />
                            <Title order={3} mt="sm" size="lg">
                                Contracting
                            </Title>
                            <Text mt="xs">Providing expert business contracting to accelerate growth and ensure compliance.</Text>
                        </Card>
                        <Card shadow="md" radius="xl" padding="lg">
                            <IconBusinessplan width={40} height={40} color='green' />
                            <Title order={3} mt="sm" size="lg">
                                Investment Solutions
                            </Title>
                            <Text mt="xs">Offering smart investment strategies for sustainable growth and market expansion.</Text>
                        </Card>
                        <Card shadow="md" radius="xl" padding="lg">
                            <IconBuildingStore width={40} height={40} color='blue' />
                            <Title order={3} mt="sm" size="lg">
                                Market Expansion
                            </Title>
                            <Text mt="xs">Helping African businesses expand to global markets with tailored strategies.</Text>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Why Choose Us */}
                <Box my={80}>
                    <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">
                        Why Choose Steedoo Group
                    </Title>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
                        <div>
                            <Timeline active={1} bulletSize={24} lineWidth={2}>
                                <Timeline.Item bullet={<IconGlobe size={12} />} title="Global Perspective">
                                    <Text c="dimmed" size="sm">Bridging African innovation with international markets</Text>
                                </Timeline.Item>
                                <Timeline.Item bullet={<IconUsers size={12} />} title="Local Expertise">
                                    <Text c="dimmed" size="sm">Deep understanding of African business landscapes</Text>
                                </Timeline.Item>
                                <Timeline.Item bullet={<IconChartBar size={12} />} title="Proven Track Record">
                                    <Text c="dimmed" size="sm">Consistent growth and success across our portfolio</Text>
                                </Timeline.Item>
                                <Timeline.Item bullet={<IconLeaf size={12} />} title="Sustainable Practices">
                                    <Text c="dimmed" size="sm">Commitment to environmentally responsible business</Text>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                        <Image
                            src="/api/placeholder/600/400"
                            alt="Steedoo Group Team"
                            radius="xl"
                        />
                    </SimpleGrid>
                </Box>

                {/* Testimonials */}
                <Box my={80}>
                    <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">
                        What Our Partners Say
                    </Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} shadow="md" radius="xl" padding="lg">
                                <Text fz="lg" style={{ fontStyle: 'italic' }}>
                                    "Steedoo Group has been instrumental in our company's growth. Their innovative solutions and global network have opened new doors for us."
                                </Text>
                                <Group mt="md">
                                    <Avatar src={`/api/placeholder/48/48`} radius="xl" />
                                    <div>
                                        <Text fz="sm" fw={500}>John Doe</Text>
                                        <Text fz="xs" c="dimmed">CEO, TechInnovate Africa</Text>
                                    </div>
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Awards and Recognition */}
                <Box my={80}>
                    <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">
                        Awards and Recognition
                    </Title>
                    <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="xl">
                        {[
                            { icon: IconAward, title: "African Business Excellence Award 2023" },
                            { icon: IconCertificate, title: "Top 10 Innovative Companies in Africa" },
                            { icon: IconAward, title: "Sustainability Leadership Award" },
                            { icon: IconCertificate, title: "Best Place to Work in DRC 2022" },
                        ].map((award, index) => (
                            <Card key={index} shadow="md" radius="xl" padding="lg" ta="center">
                                <award.icon size={40} style={{ marginBottom: '1rem' }} />
                                <Text fw={500}>{award.title}</Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* FAQ Section */}
                <Box my={80}>
                    <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">
                        Frequently Asked Questions
                    </Title>
                    <Accordion variant="separated">
                        <Accordion.Item value="what-is-steedoo">
                            <Accordion.Control>What is Steedoo Group?</Accordion.Control>
                            <Accordion.Panel>Steedoo Group is a multinational holding company that specializes in empowering African businesses through innovative technological, financial, and investment solutions.</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="services-offered">
                            <Accordion.Control>What services does Steedoo Group offer?</Accordion.Control>
                            <Accordion.Panel>We offer a range of services including fintech solutions, logistics optimization, sustainable fashion, and strategic business consulting for African companies looking to expand globally.</Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="partner-with-steedoo">
                            <Accordion.Control>How can my company partner with Steedoo Group?</Accordion.Control>
                            <Accordion.Panel>To explore partnership opportunities, please visit our Contact page and reach out to our business development team. We're always looking for innovative companies that align with our mission.</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Box>

                {/* Contact CTA */}
                <Box my={80} ta="center">
                    <Title order={2} size="2.5rem" fw={600}>
                        Ready to Grow with Us?
                    </Title>
                    <Text size="xl" mt="xl" maw={600} mx="auto">
                        Join Steedoo Group in shaping the future of African business. Let's innovate, expand, and succeed together.
                    </Text>
                    <Group justify="center" mt="xl">
                        <Link href="/contact" passHref>
                            <Button size="xl" radius="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                                Get Started Today
                            </Button>
                        </Link>
                    </Group>
                </Box>
            </Container>
        </Navbar>
    );
}