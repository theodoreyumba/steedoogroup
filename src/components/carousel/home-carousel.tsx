import { SGImages } from "@/assets/images";
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Text, Flex, UnstyledButton, Image, Skeleton, rem, Paper, Transition, SimpleGrid, Stack, Title, Group, Card, Grid, Button } from "@mantine/core";
import classes from '@/assets/styles/carousel/home-carousel.module.css';
import { useRef, useState } from "react";
import { useIsomorphicEffect } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade"
import { ComingSoonPage } from "../maintenance/coming-soon";
import { IconArrowAutofitLeft, IconArrowBigLeft, IconArrowBigRight } from "@tabler/icons-react";

interface HomePageCarouselProps {
    height: number;
    activeTab: string;
    mounted: boolean;
    globalTransitionDuration?: number;
}

export const HomePageCarousel = (homecarousel: HomePageCarouselProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const autoplay = useRef(Autoplay({ delay: 9000 }));
    const fadeOptions = {
        active: true,
        breakpoints: {}
      }
    const fade = useRef(Fade(fadeOptions));

    useIsomorphicEffect(() => {
        if (homecarousel.activeTab === 'home' && homecarousel.mounted) {
            setIsMounted(true);
        } else {
            setIsMounted(false);
        }
    }, [homecarousel.activeTab, homecarousel.mounted]);

    const slides = [
        {
            content: (
                        <Flex align="center" justify="center" style={{ height: '100%' }} p={'sm'}>
                            <SimpleGrid  cols={{ base: 1, sm: 2, lg: 2 }}>
                                <Card shadow="md" h={homecarousel.height/1.25} bg={'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))'}>
                                <Card.Section>
                                    <Image
                                    src={SGImages.FlamboyantBg.src}
                                    h={homecarousel.height/2.5}
                                    alt="Flamboyant tree in bloom"
                                    />
                                </Card.Section>
                                <Stack>
                                    <Title order={3} c={'dimmed'} mt={5}>Empowering African businesses globally.</Title>
                                    <Group>
                                    <Text style={{fontSize: 30}} fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 332 }}>Welcome to Steedoo Group!</Text>
                                    </Group>
                                </Stack>
                                <Stack align="end" justify="end" style={{height:'100%'}}>
                                    <Button variant="light" rightSection={<IconArrowBigRight height={20} width={20}/>}>Learn More</Button>
                                </Stack>
                                </Card>
                                <SimpleGrid cols={{base: 1, sm: 2, lg: 2 }}>
                                <Card shadow="md" h={'100%'} w={'100%'} p={0}>
                                    <BackgroundImage src={SGImages.FlamboyantBg.src} h='100%' w='100%'>
                                        <Stack align="end" justify="end" p={20}>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20}/>}>Learn More</Button>
                                        </Stack>
                                    </BackgroundImage>
                                </Card>
                                <div></div>
                                <div></div>
                                <Card shadow="md" h={'100%'} w={'100%'} p={0}>
                                    <BackgroundImage src={SGImages.FlamboyantBg.src} h='100%' w='100%'>
                                        <Stack align="end" justify="end" p={20}>
                                        <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20}/>}>Learn More</Button>
                                        </Stack>
                                    </BackgroundImage>
                                </Card>
                                <Card shadow="md" h={'100%'} w={'100%'} p={0}>
                                    <BackgroundImage src={SGImages.FlamboyantBg.src} h='100%' w='100%'>
                                        <Stack align="end" justify="end" p={20}>
                                            <Button variant="white" rightSection={<IconArrowBigRight height={20} width={20}/>}>Learn More</Button>
                                        </Stack>
                                    </BackgroundImage>
                                </Card>
                                </SimpleGrid>
                            </SimpleGrid>
                        </Flex>
            ),
        },
        { content: (
            
            <Flex align="center" justify="center" style={{ height: '100%' }} p={'xl'}>
            <SimpleGrid  cols={{ base: 1, sm: 2, lg: 2 }}>
                <Stack>
                    <Image src={SGImages.Logo.src} alt={SGImages.Logo.alt} width={rem(100)} height={rem(100)} />
                </Stack>
                <Skeleton width='100%' height='100%' animate/>
            </SimpleGrid>
        </Flex>
        ), },
        { content: <ComingSoonPage /> },
    ];

    return (
        <>
            {homecarousel.activeTab === 'home' ? (
                <Transition mounted={isMounted} transition="fade" duration={homecarousel.globalTransitionDuration} timingFunction="ease">
                    {(styles) => (
                        <Paper radius="md" style={styles}>
                            <Carousel slideGap="xs" controlsOffset="xs" loop draggable={false} withControls={false} withIndicators classNames={classes}
                             height={homecarousel.height} plugins={[autoplay.current, fade.current]}>
                                {slides.map((slide, index) => (
                                    <Carousel.Slide key={index}>
                                                    {slide.content}
                                    </Carousel.Slide>
                                ))}
                            </Carousel>
                        </Paper>
                    )}
                </Transition>
            ) : null}
        </>
    );
}