import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { RegionProvider } from '@/lib/context/region-context';
import { LocaleProvider } from '@/components/providers/locale-provider';
import { StructuredData } from '@/components/structured-data';
import { CookieConsentBanner } from '@/components/cookies/cookie-consent-banner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const interDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Steedoo Group | Global Technology & Investment Corporation',
    template: '%s | Steedoo Group',
  },
  description: 'Steedoo Group is a global corporation operating across technology, transportation, finance, investment, and industrial services sectors.',
  metadataBase: new URL('https://steedoo.group'),
  keywords: [
    'Steedoo Group',
    'Technology',
    'Transportation',
    'Finance',
    'Investment',
    'Industrial Services',
    'DRC',
    'USA',
    'Lubumbashi',
    'Wyoming',
  ],
  authors: [{ name: 'Steedoo Group' }],
  creator: 'Steedoo Group',
  publisher: 'Steedoo Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://steedoo.group',
    siteName: 'Steedoo Group',
    title: 'Steedoo Group | Global Technology & Investment Corporation',
    description: 'Operating across technology, transportation, finance, investment, and industrial services sectors globally.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Steedoo Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steedoo Group',
    description: 'Global corporation in technology, finance, and industrial sectors',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://steedoo.group',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" />
      </head>
      <body className={`${inter.variable} ${interDisplay.variable} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RegionProvider>
            <LocaleProvider>
              {children}
              <CookieConsentBanner />
            </LocaleProvider>
          </RegionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
