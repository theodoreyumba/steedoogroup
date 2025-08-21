'use client';

import Script from 'next/script';
import { useRegion } from '@/lib/context/region-context';
import { company } from '@/data/company';

export function StructuredData() {
  const { isUS } = useRegion();
  const entity = isUS ? company.us : company.global;
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: entity.legalName,
    description: isUS
      ? 'Strategic investment and technology corporation providing comprehensive business services across the United States.'
      : 'Diversified corporation operating across technology, transportation, finance, investment, and industrial services in the Democratic Republic of Congo and globally.',
    url: isUS ? 'https://steedoo.group/us' : 'https://steedoo.group',
    logo: 'https://steedoo.group/assets/images/bimi/steedoo-group-logo-625.svg',
    foundingDate: isUS ? '2022-09-30' : '2021',
    legalName: entity.legalName,
    address: isUS
      ? {
          '@type': 'PostalAddress',
          streetAddress: entity.registeredAgent?.address,
          addressLocality: 'Sheridan',
          addressRegion: 'WY',
          postalCode: '82801',
          addressCountry: 'US',
        }
      : {
          '@type': 'PostalAddress',
          streetAddress: entity.address.street,
          addressLocality: entity.address.city,
          addressRegion: entity.address.province,
          addressCountry: 'CD',
        },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: isUS ? 'https://steedoo.group/us/contact' : 'https://steedoo.group/contact',
    },
    sameAs: [
      'https://www.dnb.com/business-directory/company-profiles.steedoo_group_sas.html',
      company.social.linkedin,
      company.social.twitter,
    ].filter(Boolean),
    ...(isUS
      ? {
          identifier: {
            '@type': 'PropertyValue',
            name: 'Wyoming Filing Number',
            value: entity.registrations?.wyomingId,
          },
        }
      : {
          identifier: [
            {
              '@type': 'PropertyValue',
              name: 'RCCM',
              value: entity.registrations?.rccm,
            },
            {
              '@type': 'PropertyValue',
              name: 'Tax ID',
              value: entity.registrations?.taxId,
            },
          ],
        }),
  };
  
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: isUS ? 'Steedoo Group Inc.' : 'Steedoo Group SAS',
    url: isUS ? 'https://steedoo.group/us' : 'https://steedoo.group',
    description: organizationData.description,
    publisher: {
      '@type': 'Organization',
      name: entity.legalName,
    },
  };
  
  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}