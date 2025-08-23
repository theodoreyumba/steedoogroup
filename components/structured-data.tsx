'use client';

import { useEffect, useState } from 'react';

export function StructuredData() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Steedoo Group',
    alternateName: 'Steedoo Group',
    url: 'https://steedoo.group',
    logo: 'https://steedoo.group/assets/images/logo/icon-512.png',
    description: 'Steedoo Group is a diversified international conglomerate operating across multiple sectors including technology, finance, transportation, and industrial development.',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Theodore Yumba',
        jobTitle: 'Chairman & CEO',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Avenue Kasai',
        addressLocality: 'Lubumbashi',
        addressRegion: 'Haut-Katanga',
        addressCountry: 'CD',
        name: 'Global Headquarters',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Cheyenne',
        addressRegion: 'Wyoming',
        postalCode: '82001',
        addressCountry: 'US',
        name: 'US Operations',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+243-XX-XXX-XXXX',
        contactType: 'customer service',
        areaServed: 'CD',
        availableLanguage: ['English', 'French', 'Swahili'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-XXX-XXX-XXXX',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@steedoo.group',
        contactType: 'general inquiries',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'French', 'Chinese'],
      },
    ],
    sameAs: [
      'https://linkedin.com/company/steedoo-group',
      'https://twitter.com/steedoogroup',
    ],
    knowsAbout: [
      'Technology Solutions',
      'Financial Services',
      'Transportation Systems',
      'Investment Management',
      'Industrial Development',
      'Commercial Real Estate',
      'International Trade',
      'Business Consulting',
    ],
    areaServed: {
      '@type': 'GeoShape',
      name: 'Worldwide',
    },
    member: [
      {
        '@type': 'Organization',
        name: 'Steedoo Technologies',
        description: 'Technology solutions and digital transformation',
      },
      {
        '@type': 'Organization',
        name: 'Steedoo Finance',
        description: 'Financial services and investment management',
      },
      {
        '@type': 'Organization',
        name: 'Steedoo Transport',
        description: 'Transportation and logistics solutions',
      },
      {
        '@type': 'Organization',
        name: 'Steedoo Industrial',
        description: 'Industrial and commercial development',
      },
    ],
    slogan: 'Global Leadership in Technology, Finance & Industry',
    naics: '551114',
    isicV4: '6420',
    legalName: 'Steedoo Group Corporation',
    taxID: 'XX-XXXXXXX',
    vatID: 'XXXXXXXXXXXX',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://steedoo.group',
    name: 'Steedoo Group',
    description: 'Official website of Steedoo Group',
    publisher: {
      '@type': 'Corporation',
      name: 'Steedoo Group',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://steedoo.group/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'fr', 'zh'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://steedoo.group',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}