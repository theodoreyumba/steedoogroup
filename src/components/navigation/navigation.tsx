'use client';

import { SGFullLogo } from '@/assets/images/sg-full-logo.svg';
import { AppShell, Burger, Button, Container, Flex, Group, Paper, rem, Tabs, Skeleton, Transition, LoadingOverlay, ScrollAreaAutosize, ScrollArea, Box, Center, useMantineTheme } from '@mantine/core';
import { useDisclosure, useInViewport, useIsomorphicEffect, useMediaQuery, useViewportSize, useWindowScroll } from '@mantine/hooks';
import { IconAddressBook, IconBuildingSkyscraper, IconChartInfographic, IconHome, IconUsersGroup } from '@tabler/icons-react';
import { Suspense, useState } from 'react';
import { EnhancedHomePageCarousel } from '../carousel/home-carousel';
import { Footer } from './footer';
import { ComingSoonPage } from '../maintenance/coming-soon';
import { usePathname } from 'next/navigation';
import { PageContent } from '../home/home-page';

export default function Navigation({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { height, width } = useViewportSize();
    const pathname = usePathname();
    const [scroll, scrollTo] = useWindowScroll();
    const { ref, inViewport } = useInViewport();
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
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

    const NavigationMenu = <Flex justify="center" align="center" style={{ width: '100%' }} px={rem(20)}>
        <Transition
            mounted={!isLoading || activeTab !== null}
            transition="fade-down"
            duration={transitionDuration}
            timingFunction="ease"
        >
            {(styles) => (
                <Paper maw={1000} w={'100%'} h={headerHeight} bg={mobile?'light-dark(hsl(210, 100%, 95%, 0.8),hsl(210, 30%, 10%, 0.8))':'light-dark(hsl(210, 100%, 95%, 0.6),hsl(210, 30%, 10%, 0.6))'} style={{ ...styles, backdropFilter: 'blur(8px)' }} shadow='md' radius='xl'>
                    <Center px='md' h='100%' w='100%'>
                        <SGFullLogo height={headerHeight - 20} link={pathname} width={180} visibleFrom='sm' mr={60} />
                        <ScrollArea w='100%' scrollbarSize={0} scrollbars='x' style={{ borderRadius: 'var(--mantine-radius-xl)' }}>
                            <Box w={564}><Group gap="md">
                                <Tabs.List>
                                    <Tabs.Tab value="home" leftSection={<IconHome style={iconStyle} />}>
                                        Home
                                    </Tabs.Tab>
                                    <Button leftSection={<IconChartInfographic style={iconStyle} />} hiddenFrom='xs' variant="subtle" color="green">Investor</Button>
                                    <Tabs.Tab value="portfolio" leftSection={<IconBuildingSkyscraper style={iconStyle} />}>
                                        Portfolio
                                    </Tabs.Tab>
                                    <Tabs.Tab value="about-us" leftSection={<IconUsersGroup style={iconStyle} />}>
                                        About Us
                                    </Tabs.Tab>
                                    <Tabs.Tab value="contact" leftSection={<IconAddressBook style={iconStyle} />}>
                                        Contact
                                    </Tabs.Tab>
                                    <Button leftSection={<IconChartInfographic style={iconStyle} />} visibleFrom='xs' variant="subtle" color="green">Investor</Button>
                                </Tabs.List>
                            </Group>
                            </Box>
                        </ScrollArea>
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
                    <AppShell.Footer withBorder={false} mb={navbarTop} bg='transparent' hidden={inViewport}>
                        {NavigationMenu}
                    </AppShell.Footer>
                    {isLoading && <Skeleton height={'100vh'} animate />}
                    <Suspense fallback={<Skeleton height={'100vh'} animate />}>
                        <EnhancedHomePageCarousel height={height} activeTab={activeTab || 'home'} mounted={!isLoading || activeTab === 'home'} globalTransitionDuration={transitionDuration} />
                    </Suspense>
                    <AppShell.Main pb={10}>
                        <PageContent children={children} activeTab={activeTab || 'home'} transitionDuration={transitionDuration} />
                        <Footer ref={ref}>
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