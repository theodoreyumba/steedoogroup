'use client';

import { SGFullLogo } from '@/assets/images/sg-full-logo.svg';
import { AppShell, Burger, Button, Container, Flex, Group, Paper, rem, Tabs, Skeleton, Transition, LoadingOverlay, ScrollAreaAutosize, ScrollArea, Box, Center } from '@mantine/core';
import { useDisclosure, useIsomorphicEffect, useViewportSize } from '@mantine/hooks';
import { IconAddressBook, IconBuildingSkyscraper, IconChartInfographic, IconHome, IconUsersGroup } from '@tabler/icons-react';
import { Suspense, useState } from 'react';
import { HomePageCarousel } from '../carousel/home-carousel';
import { Footer } from './footer';
import { ComingSoonPage } from '../maintenance/coming-soon';
import { usePathname } from 'next/navigation';

export function Navigation({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { height, width } = useViewportSize();
    const pathname = usePathname()
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

    const NavigationMenu = <Flex justify="center" align="center" style={{ width: '100%' }}>
        <Transition
            mounted={!isLoading || activeTab !== null}
            transition="fade-down"
            duration={transitionDuration}
            timingFunction="ease"
        >
            {(styles) => (
                <Paper maw={1000} w={'100%'} h={headerHeight} bg={'hsl(210, 100%, 95%, 0.5)'} style={{ ...styles, backdropFilter: 'blur(8px)' }} shadow='md' radius='xl'>
                    <Center px='md' h='100%'>
                        <SGFullLogo height={headerHeight - 20} link={pathname} width={180} visibleFrom='sm' mr={60} />
                        <ScrollArea w='100%' scrollbarSize={0} scrollbars='x' style={{ borderRadius: 'var(--mantine-radius-xl)' }}>
                            <Box w={600}><Group gap="md">
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
                            </Box>
                        </ScrollArea>
                        <Group ml="xl" gap={0} visibleFrom="sm">
                        </Group>
                    </Center>
                </Paper>
            )}
        </Transition>
    </Flex>;
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
                footer={{ height: headerHeight }}
                padding="md"
            >
                <Tabs variant="pills" defaultValue="home" value={activeTab} onChange={setActiveTab}>
                    <AppShell.Footer withBorder={false} mb={navbarTop} bg='transparent'>
                        {NavigationMenu}
                    </AppShell.Footer>

                    <AppShell.Navbar py="md" px={4}>
                    </AppShell.Navbar>
                    {isLoading && <Skeleton height={'100vh'} animate />}
                    <Suspense fallback={<Skeleton height={'100vh'} animate />}>
                        <HomePageCarousel height={height} activeTab={activeTab || 'home'} mounted={!isLoading || activeTab === 'home'} globalTransitionDuration={transitionDuration} />
                    </Suspense>
                    <AppShell.Main>
                        <Container>
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
                        <Footer>
                            <Tabs.Tab value="home" leftSection={<IconHome style={{ width: rem(20), height: rem(20) }} />}>
                                Home
                            </Tabs.Tab>
                            <Tabs.Tab value="portfolio" leftSection={<IconBuildingSkyscraper style={{ width: rem(20), height: rem(20) }} />}>
                                Portfolio
                            </Tabs.Tab>
                            <Tabs.Tab value="about-us" leftSection={<IconUsersGroup style={{ width: rem(20), height: rem(20) }} />}>
                                About Us
                            </Tabs.Tab>
                            <Tabs.Tab value="contact" leftSection={<IconAddressBook style={{ width: rem(20), height: rem(20) }} />}>
                                Contact
                            </Tabs.Tab>
                            <Button leftSection={<IconChartInfographic style={{ width: rem(20), height: rem(20) }} />} variant="subtle" color="green">Investor</Button>
                        </Footer>
                    </AppShell.Main>
                </Tabs>
            </AppShell>
        </>
    );
}