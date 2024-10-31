// src/components/legal/navigation.tsx
'use client';
import React from 'react';
import { AppShell, Text, Container, Group, Anchor, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { IconGauge, IconHome2 } from '@tabler/icons-react';
import { ColorSchemeToggle } from '../color-scheme/color-scheme-toggle';

export default function LegalNavigation({
    children,
}: {
    children: React.ReactNode;
}) {
    const [opened, { toggle }] = useDisclosure();
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const basePath = segments[0] ? `/${segments[0]}` : "/";
    const subPath = segments[1] ? `/${segments[0]}/${segments[1]}` : basePath;
    const navLinks = [
        { label: "Privacy Policy", path: "/legal/privacy-policy", icon: <IconHome2 size="1rem" stroke={1.5} /> },
        { label: "Cookie Policy", path: "/legal/cookie-policy", icon: <IconGauge size="1rem" stroke={1.5} /> },
        { label: "Data Processing Addendum", path: "/legal/dpa", icon: <IconGauge size="1rem" stroke={1.5} /> },
    ];

    return (
        <AppShell
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: false, mobile: true } }}
            footer={{ height: 60 }}
            padding="md"
        >
            <AppShell.Navbar p="md">
                <Anchor href="/" fw={700} size="xl">
                    Steedoo Group
                </Anchor>
                <AppShell.Section grow mt="md">
                    <NavLink
                        label="Privacy"
                        defaultOpened={navLinks.map(link => link.path).includes(subPath)}
                        active={navLinks.map(link => link.path).includes(subPath)}
                        childrenOffset={28}
                        href="#policy"
                        onClick={() => router.push('/legal/privacy-policy')}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                label={link.label}
                                active={subPath === link.path}
                                leftSection={link.icon}
                                onClick={() => router.push(link.path)}
                                href="#policy"
                            />
                        ))}
                    </NavLink>
                </AppShell.Section>
                <ColorSchemeToggle />
            </AppShell.Navbar>

            <AppShell.Main>
                <Container size="xl">
                    {children}
                </Container>
            </AppShell.Main>

            <AppShell.Footer p="md">
                <Container size="xl">
                    <Text ta="center" size="sm">
                        © {new Date().getFullYear()} Steedoo Group. All rights reserved.
                    </Text>
                </Container>
            </AppShell.Footer>
        </AppShell>
    );
}