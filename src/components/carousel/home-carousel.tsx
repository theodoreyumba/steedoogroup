import React, { useRef, useState } from 'react';
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Text, Flex, Button, Image, Paper, Transition, SimpleGrid, Stack, Title, Group, Card, Box, ThemeIcon, rem } from "@mantine/core";
import { useIsomorphicEffect } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade"
import { IconArrowBigRight, IconBuildingSkyscraper, IconCoin, IconTruck, IconUsers, IconLeaf, IconSun, IconRobot, IconChartBar, IconMicrophone, IconBuildingBank, IconPlanet, IconDeviceMobile, IconDatabase, IconShield } from "@tabler/icons-react";

interface HomePageCarouselProps {
    height: number;
    activeTab: string;
    mounted: boolean;
    globalTransitionDuration?: number;
}

const features = [
    { icon: IconBuildingSkyscraper, label: "Smart City Development" },
    { icon: IconCoin, label: "Fintech Solutions" },
    { icon: IconTruck, label: "Optimized Logistics" },
    { icon: IconUsers, label: "Empowering Communities" },
    { icon: IconLeaf, label: "Sustainable Practices" },
    { icon: IconSun, label: "Renewable Energy" },
    { icon: IconRobot, label: "AI Integration" },
    { icon: IconChartBar, label: "Data Analytics" },
    { icon: IconMicrophone, label: "Voice Technology" },
    { icon: IconBuildingBank, label: "Digital Banking" },
    { icon: IconPlanet, label: "Global Connectivity" },
    { icon: IconDeviceMobile, label: "Mobile-First Solutions" },
    { icon: IconDatabase, label: "Blockchain Technology" },
    { icon: IconShield, label: "Cybersecurity" },
];

export const EnhancedHomePageCarousel: React.FC<HomePageCarouselProps> = ({ height, activeTab, mounted, globalTransitionDuration = 300 }) => {
    const [isMounted, setIsMounted] = useState(false);
    const autoplay = useRef(Autoplay({ delay: 6000 }));
    const fadeOptions = {
        active: true,
        breakpoints: {}
    }
    const fade = useRef(Fade(fadeOptions));
    const featureAutoplay = useRef(Autoplay({ delay: 2000 }));

    useIsomorphicEffect(() => {
        setIsMounted(activeTab === 'home' && mounted);
    }, [activeTab, mounted]);

    const slides = [
        {
            content: (
                <Flex justify="center" style={{ height: '100%' }} p={'xl'}>
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} p={'lg'}>
                        <Stack align="stretch" justify="center">
                            <Card shadow="md" h={'100%'} bg={'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))'}>
                                <Card.Section>
                                    <Image
                                        src="/api/placeholder/800/400"
                                        h={height / 2.5}
                                        alt="Steedoo Group Headquarters"
                                    />
                                </Card.Section>
                                <Stack>
                                    <Title order={3} c={'dimmed'} mt={5}>Empowering African businesses globally.</Title>
                                    <Group>
                                        <Text style={{ fontSize: 30 }} fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 332 }}>Welcome to Steedoo Group!</Text>
                                    </Group>
                                </Stack>
                                <Stack align="end" justify="end" style={{ height: '100%' }}>
                                    <Button variant="light" rightSection={<IconArrowBigRight height={20} width={20} />}>Discover Our Vision</Button>
                                </Stack>
                            </Card>
                        </Stack>
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
                            <Card shadow="md" h={'100%'} w={'100%'} p={0} >
                                <BackgroundImage src="/api/placeholder/400/300" h='100%' w='100%'>
                                    <Stack align="stretch" justify='space-between' h='100%' p={20}>
                                    <Box></Box>
                                        <Text fw={700} truncate="end">
                                        Steedoo Group Inc., established on September 30, 2022, in Wyoming, USA, serves as our corporate and strategic hub. With a focus on innovation and global expansion, we're bridging markets between Africa and the United States.
                                        </Text>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>Our History</Button>
                                    </Stack>
                                </BackgroundImage>
                            </Card>
                            <Box visibleFrom="sm"></Box>
                            <Box visibleFrom="sm"></Box>
                            <Card shadow="md" h={'100%'} w={'100%'} p={0} visibleFrom="xs">
                                <BackgroundImage src="/api/placeholder/400/300" h='100%' w='100%'>
                                    <Stack align="stretch" justify='space-between' h='100%' p={20}>
                                    <Box></Box>
                                        <Text fw={700} truncate="end">
                                        Steedoo Group SAS, founded on May 31, 2021, in Lubumbashi, DRC, is our African powerhouse. We're driving technological advancement and financial empowerment across the continent, fostering sustainable growth and innovation.
                                        </Text>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>African Operations</Button>
                                    </Stack>
                                </BackgroundImage>
                            </Card>
                            <Card shadow="md" h={'100%'} w={'100%'} p={0} visibleFrom="xs">
                                <BackgroundImage src="/api/placeholder/400/300" h='100%' w='100%'>
                                    <Stack align="stretch" justify='space-between' h='100%' p={20}>
                                        <Box></Box>
                                        <Text fw={700} truncate="end">
                                        Our diverse portfolio includes Juniaboss, a cutting-edge fintech platform, Dereva, an AI-powered logistics company, and Ogun, a sustainable luxury fashion brand. Together, we're shaping the future of African business.
                                        </Text>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>Our Companies</Button>
                                    </Stack>
                                </BackgroundImage>
                            </Card>
                        </SimpleGrid>
                    </SimpleGrid>
                </Flex>
            ),
        },
        {
            content: (
                <Flex justify="center" style={{ height: '100%' }} p={'xl'}>
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
                        <Card shadow="md" h={'100%'} w={'100%'} p={0} hiddenFrom="xs">
                            <BackgroundImage src="/api/placeholder/600/400" h='100%' w='100%'>
                                <Stack align="end" justify="end" p={20}>
                                    <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>Explore Juniaboss</Button>
                                </Stack>
                            </BackgroundImage>
                        </Card>
                        <Card shadow="md" h={'100%'} w={'100%'} p={0} hiddenFrom="xs">
                            <BackgroundImage src="/api/placeholder/600/400" h='100%' w='100%'>
                                <Stack align="end" justify="end" p={20}>
                                    <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>Discover Dereva</Button>
                                </Stack>
                            </BackgroundImage>
                        </Card>
                        <Stack justify='center'>
                            <Image src="/api/placeholder/200/200" alt="Steedoo Group Logo" width={rem(100)} height={rem(100)} />
                        </Stack>
                        <Stack justify='center' h='100%'>
                            <Card shadow="md" h='100%' mah={rem(400)} p={0}>
                                <BackgroundImage src="/api/placeholder/600/400" h='100%' w='100%'>
                                    <Stack align="end" justify="end" p={20}>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>View Our Projects</Button>
                                    </Stack>
                                </BackgroundImage>
                            </Card>
                        </Stack>
                    </SimpleGrid>
                </Flex>
            ),
        },
        {
            content: <BackgroundImage src="/api/placeholder/1200/800" h={height} w={'100%'}>
                <Flex justify="center" align="center" style={{ height: '100%' }}>
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} p={'lg'}>
                        <Stack align="center" justify="center">
                            <Card shadow="md" h={'100%'} bg={'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))'}>
                                <Card.Section>
                                    <Image
                                        src="/api/placeholder/800/400"
                                        h={height / 2.5}
                                        alt="Steedoo Group Projects"
                                    />
                                </Card.Section>
                                <Stack>
                                    <Title order={3} c={'dimmed'} mt={5}>Shaping the Future of African Business</Title>
                                    <Group>
                                        <Text style={{ fontSize: 30 }} fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 332 }}>Innovation Across Industries</Text>
                                    </Group>
                                </Stack>
                                <Stack align="end" justify="end" style={{ height: '100%' }}>
                                    <Button variant="light" rightSection={<IconArrowBigRight height={20} width={20} />}>Our Innovations</Button>
                                </Stack>
                            </Card>
                        </Stack>
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
                            <Card shadow="md" h={'100%'} w={'100%'} p={0} >
                                <BackgroundImage src="/api/placeholder/400/300" h='100%' w='100%'>
                                    <Stack align="end" justify="end" p={20}>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>Fintech Solutions</Button>
                                    </Stack>
                                </BackgroundImage>
                            </Card>
                            <Box visibleFrom="sm"></Box>
                            <Box visibleFrom="sm"></Box>
                            <Card shadow="md" h={'100%'} w={'100%'} p={0} visibleFrom="xs">
                                <BackgroundImage src="/api/placeholder/400/300" h='100%' w='100%'>
                                    <Stack align="end" justify="end" p={20}>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20} />}>Sustainable Fashion</Button>
                                    </Stack>
                                </BackgroundImage>
                            </Card>
                        </SimpleGrid>
                    </SimpleGrid>
                </Flex>
            </BackgroundImage>
        },
    ];

    const featureSlides = features.map((feature, index) => (
        <Carousel.Slide key={index}>
            <Card padding="md" radius="xl" withBorder h={80} style={{ display: 'flex', alignItems: 'center' }}>
                <Group gap="xs">
                    <ThemeIcon variant="light" size={40} radius="xl">
                        <feature.icon size={24} />
                    </ThemeIcon>
                    <Text size="sm" fw={500}>{feature.label}</Text>
                </Group>
            </Card>
        </Carousel.Slide>
    ));

    return (
        <Transition mounted={isMounted} transition="fade" duration={globalTransitionDuration} timingFunction="ease">
            {(styles) => (
                <Paper radius="md" style={styles}>
                    <Carousel
                        slideGap="xs"
                        loop
                        draggable={false}
                        withControls={false}
                        withIndicators
                        plugins={[autoplay.current, fade.current]}
                        mih={height}
                        styles={{
                            indicator: {
                                width: rem(12),
                                height: rem(4),
                                transition: 'width 250ms ease',
                                '&[data-active]': {
                                    width: rem(40),
                                },
                            },
                        }}
                    >
                        {slides.map((slide, index) => (
                            <Carousel.Slide key={index}>
                                {slide.content}
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                    <Box bg="rgba(0,0,0,0.03)" py="md">
                        <Carousel
                            slideSize="33.333333%"
                            slideGap="md"
                            align="start"
                            slidesToScroll={1}
                            loop
                            draggable={false}
                            withControls={false}
                            plugins={[featureAutoplay.current]}
                            styles={{
                                container: {
                                    margin: '0 -8px',
                                },
                            }}
                        >
                            {featureSlides}
                        </Carousel>
                    </Box>
                </Paper>
            )}
        </Transition>
    );
};