import type { Metadata, Viewport } from "next";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/assets/styles/base.css';
import localFont from "next/font/local";
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { headers } from "next/headers";
import showConsoleWarning from "@/utils/console/consoleWarning";
import { Suspense } from "react";
import { AppLoading } from "@/components/transition/loading";
import Disclaimer from "@/components/legal/disclaimer";

const interSans = localFont({
  src: "./fonts/InterRegular.woff2",
  variable: "--font-inter-sans",
});
const robotoMono = localFont({
  src: "./fonts/RobotoRegular.woff",
  variable: "--font-roboto",
});

const theme = createTheme({
  fontFamily: 'Roboto,Inter,sans-serif',
  defaultRadius: 'xl',
  white: 'var(--mantine-color-gray-0)',
  autoContrast: true,
  cursorType: 'pointer',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false,
}

const app_name = "Steedoo Group";
const app_default_title = "Welcome - Steedoo Group";
const app_title_template = "%s - Steedoo Group";
const app_description = "African businesses to the forefront of the global stage.";

export const metadata: Metadata = {
  applicationName: app_name,
  title: {
    default: app_default_title,
    template: app_title_template,
  },
  description: app_description,
  manifest: "/manifest.json",
  keywords: ["Steedoo Group", "Steedoo", "Holding", "African businesses","global stage"],
  authors: [{ name: "Steedoo Group SAS" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/assets/images/logo/favicon-64.ico', type: 'image/x-icon', sizes: '64x64' },
      { url: '/assets/images/logo/favicon-32.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/assets/images/logo/favicon-16.ico', type: 'image/x-icon', sizes: '16x16' },
      { url: '/assets/images/logo/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/assets/images/logo/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: ['/assets/images/logo/icon-192.png'],
    apple: [
      { url: '/assets/images/logo/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: "Steedoo Group",
    description: "Empowering African businesses globally.",
    url: "https://www.steedoogroup.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.steedoogroup.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Steedoo Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SteedooGroup",
    title: "Steedoo Group",
    description: "Empowering African businesses globally.",
    images: [
      {
        url: "https://www.steedoogroup.com/assets/images/twitter-card.jpg",
        width: 1200,
        height: 630,
        alt: "Steedoo Group",
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = headers().get('x-nonce') ?? '';
  return (
    <html lang="en" dir="ltr" className="no-js sg-app" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
    <head>
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <script dangerouslySetInnerHTML={{
          __html: `
            (${showConsoleWarning.toString()})();
          `
        }} />
    </head>
      <body className={`${interSans.variable} ${robotoMono.variable}`}>
        <MantineProvider theme={theme} >
        <ColorSchemeScript nonce={nonce} />
            <Suspense fallback={<AppLoading/>}>
            <Disclaimer/>
              {children}
            </Suspense>
        </MantineProvider>
      </body>
    </html>
  );
}
