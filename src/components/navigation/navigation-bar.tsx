'use client';

import { SGFullLogo } from '@/assets/images/sg-full-logo.svg';
import Autoplay from 'embla-carousel-autoplay';
import { AppShell, Burger, Button, Container, Flex, Group, Paper, rem, Tabs, UnstyledButton, Image, BackgroundImage, Skeleton, Transition, LoadingOverlay, Stack } from '@mantine/core';
import { useDisclosure, useIsomorphicEffect, useViewportSize } from '@mantine/hooks';
import { IconAddressBook, IconBuildingSkyscraper, IconChartInfographic, IconHome, IconMessageCircle, IconPhoto, IconSettings, IconUsersGroup } from '@tabler/icons-react';
import { Suspense, useRef, useState } from 'react';
import { HomePageCarousel } from '../carousel/home-carousel';
import { Footer } from './footer';
import { ComingSoonPage } from '../maintenance/coming-soon';

export function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [opened, { toggle }] = useDisclosure();
    const { height, width } = useViewportSize();
    const [activeTab, setActiveTab] = useState<string | null>('home');
    const [isLoading, setLoading] = useState(true);
    const navbarTop = width > 1100 ? 20 : 0;
    const headerHeight = 60;
    const iconStyle = { width: rem(16), height: rem(16) };
    const transitionDuration = 600;

    useIsomorphicEffect(() => {
        setLoading(false);
        return () => {
          setLoading(true); 
        };
      }, []);

    return (
        <>
        <LoadingOverlay 
            visible={isLoading} 
            zIndex={1000} 
            overlayProps={{ blur: 0 }} 
            loaderProps={{ color: 'blue', type: 'bars' }} 
            transitionProps={{ transition: 'fade', duration: 100 }}
        />
        <AppShell
            header={{ height: headerHeight }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <Tabs variant="pills" defaultValue="home" value={activeTab} onChange={setActiveTab}>
                <AppShell.Header withBorder={false} mt={navbarTop} bg='transparent'>
                    <Flex justify="center" align="center" style={{ width: '100%' }}>
                    <Transition
                        mounted={!isLoading || activeTab !== null}
                        transition="fade-down"
                        duration={transitionDuration}
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <Paper maw={1000} w={'100%'} h={headerHeight} bg={'hsl(210, 100%, 95%, 0.5)'} style={{ ...styles, backdropFilter: 'blur(8px)' }} shadow='md' radius='md'>
                                <Group h="100%" px="md">
                                    <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
                                    <Group justify="space-between" style={{ flex: 1 }}>
                                        <SGFullLogo height={headerHeight-20} width={180}/>
                                        <Group gap="md" visibleFrom="md">
                                            <Tabs.List>
                                                <Tabs.Tab value="home" leftSection={<IconHome style={iconStyle} />}>
                                                    Home
                                                </Tabs.Tab>
                                                <Tabs.Tab value="portfolio" leftSection={<IconBuildingSkyscraper style={iconStyle} />}>
                                                    Portfolio
                                                </Tabs.Tab>
                                                <Tabs.Tab value="about-us" leftSection={<IconUsersGroup style={iconStyle} />}>
                                                    About Us
                                                </Tabs.Tab>
                                                <Tabs.Tab value="contact" leftSection={<IconAddressBook style={iconStyle} />}>
                                                    Contact
                                                </Tabs.Tab>
                                            </Tabs.List>
                                            <Button leftSection={<IconChartInfographic style={iconStyle} />} variant="subtle" color="green">Investor</Button>
                                        </Group>
                                        <Group ml="xl" gap={0} visibleFrom="sm">
                                        </Group>
                                    </Group>
                                </Group>
                            </Paper>
                        )}
                    </Transition>
                    </Flex>
                </AppShell.Header>

                <AppShell.Navbar py="md" px={4}>
                            <Tabs.Tab value="home" onClick={toggle} leftSection={<IconHome style={{width: rem(20), height: rem(20)}} />}>
                                Home
                            </Tabs.Tab>
                            <Tabs.Tab value="portfolio" onClick={toggle} leftSection={<IconBuildingSkyscraper style={{width: rem(20), height: rem(20)}} />}>
                                Portfolio
                            </Tabs.Tab>
                            <Tabs.Tab value="about-us" onClick={toggle} leftSection={<IconUsersGroup style={{width: rem(20), height: rem(20)}} />}>
                                About Us
                            </Tabs.Tab>
                            <Tabs.Tab value="contact" onClick={toggle} leftSection={<IconAddressBook style={{width: rem(20), height: rem(20)}} />}>
                                Contact
                            </Tabs.Tab>
                        <Button leftSection={<IconChartInfographic style={{width: rem(20), height: rem(20)}} />} variant="subtle" color="green">Investor</Button>
                </AppShell.Navbar>
                {isLoading && <Skeleton height={'100vh'} animate />}
                <Suspense fallback={<Skeleton height={'100vh'} animate/>}>
                            <HomePageCarousel height={height} activeTab={activeTab || 'home'} mounted={!isLoading || activeTab === 'home'} globalTransitionDuration={transitionDuration}/>
                </Suspense>
                <AppShell.Main>
                    <Container mt={20}>
                        <Tabs.Panel value="home">
                            <Transition mounted={activeTab === 'home'} transition="fade-up" duration={transitionDuration} timingFunction="ease">
                                {(styles) => (
                                    <div style={styles}>
                                        {children}
                                    </div>
                                )}
                            </Transition>
                        </Tabs.Panel>
                        <Tabs.Panel value="portfolio">
                            <Transition mounted={activeTab === 'portfolio'} transition="fade-up" duration={transitionDuration} timingFunction="ease">
                                {(styles) => (
                                    <div style={styles}>
                                        <ComingSoonPage /> 
                                    </div>
                                )}
                            </Transition>
                        </Tabs.Panel>
                        <Tabs.Panel value="about-us">
                            <Transition mounted={activeTab === 'about-us'} transition="fade-up" duration={transitionDuration} timingFunction="ease">
                                {(styles) => (
                                    <div style={styles}>
                                        <ComingSoonPage /> 
                                    </div>
                                )}
                            </Transition>
                        </Tabs.Panel>
                        <Tabs.Panel value="contact">
                            <Transition mounted={activeTab === 'contact'} transition="fade-up" duration={transitionDuration} timingFunction="ease">
                                {(styles) => (
                                    <div style={styles}>
                                        <ComingSoonPage /> 
                                    </div>
                                )}
                            </Transition>
                        </Tabs.Panel>
                    </Container>
                    <Footer><Tabs radius="md" orientation="vertical" defaultValue="home" value={activeTab} onChange={setActiveTab}>
                        <Stack>
                            
                        <Tabs.Tab value="home" leftSection={<IconHome style={{width: rem(20), height: rem(20)}} />}>
                                Home
                            </Tabs.Tab>
                            <Tabs.Tab value="portfolio" leftSection={<IconBuildingSkyscraper style={{width: rem(20), height: rem(20)}} />}>
                                Portfolio
                            </Tabs.Tab>
                            <Tabs.Tab value="about-us" leftSection={<IconUsersGroup style={{width: rem(20), height: rem(20)}} />}>
                                About Us
                            </Tabs.Tab>
                            <Tabs.Tab value="contact" leftSection={<IconAddressBook style={{width: rem(20), height: rem(20)}} />}>
                                Contact
                            </Tabs.Tab>
                        <Button leftSection={<IconChartInfographic style={{width: rem(20), height: rem(20)}} />} variant="subtle" color="green">Investor</Button>
                        </Stack>
                        </Tabs>
                    </Footer>
                </AppShell.Main>
            </Tabs>
        </AppShell>
        </>
    );
}