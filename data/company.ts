export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string; // Optional profile image path
  email?: string;
  linkedIn?: string;
}

export interface CompanyEntity {
  legalName: string;
  address: {
    street: string;
    quarter?: string;
    commune?: string;
    city: string;
    province?: string;
    state?: string;
    country: string;
    postalCode?: string;
  };
  registrations?: {
    rccm?: string;
    taxId?: string;
    wyomingId?: string;
    incorporationDate?: string;
  };
  registeredAgent?: {
    name: string;
    address: string;
  };
  sectors?: string[];
  capabilities?: string[];
  principal?: string;
  duns?: string; // To be added when available
  leadership?: LeadershipMember[];
}

export const company = {
  global: {
    legalName: 'STEEDOO GROUP SAS',
    address: {
      street: '20, Avenue Mpolo',
      quarter: 'Gambela',
      commune: 'Lubumbashi',
      city: 'Lubumbashi',
      province: 'Haut-Katanga',
      country: 'Democratic Republic of Congo',
    },
    registrations: {
      rccm: 'CD/LSH/RCCM/21-B-00576',
      taxId: '42166320L',
    },
    sectors: [
      'Technology',
      'Transportation',
      'Finance',
      'Investment',
      'Industrial & Commercial Services',
    ],
    capabilities: [
      'Production',
      'Research',
      'Exploitation',
      'Processing',
      'Transformation',
      'Commercialization',
    ],
    leadership: [
      {
        id: 'theodore-yumba',
        name: 'Theodore Yumba',
        title: 'Founder & Chairperson',
        description: 'Visionary leader and founder of Steedoo Group, driving strategic growth and innovation across multiple sectors in Africa and globally.',
      },
      {
        id: 'prudent-kabila',
        name: 'Prudent Kabila',
        title: 'Chief Executive Officer',
        description: 'Experienced executive leading operational excellence and business development initiatives across all Steedoo Group ventures.',
      },
      {
        id: 'dan-kinenkinda',
        name: 'Dan Kinenkinda',
        title: 'Secretary',
        description: 'Corporate governance expert ensuring compliance and regulatory adherence across all business operations and strategic initiatives.',
      },
      {
        id: 'vangeli-kouvas',
        name: 'Vangeli Kouvas',
        title: 'Board Member',
        description: 'Strategic advisor providing guidance on international expansion and investment opportunities in emerging markets.',
      },
    ],
  } as CompanyEntity,
  
  us: {
    legalName: 'Steedoo Group Inc.',
    address: {
      street: '1021 E Lincolnway Suite #5874',
      city: 'Cheyenne',
      state: 'Wyoming',
      country: 'United States',
      postalCode: '82001',
    },
    registrations: {
      wyomingId: '2022-001166904',
      incorporationDate: '2022-09-30',
    },
    registeredAgent: {
      name: 'Registered Agents Inc.',
      address: '30 N Gould St Ste R, Sheridan, WY 82801',
    },
    sectors: [
      'Technology',
      'Finance',
      'Investment',
      'Business Services',
    ],
    leadership: [
      {
        id: 'theodore-yumba-us',
        name: 'Theodore Yumba',
        title: 'Founder & Chairperson',
        description: 'Founding visionary leading strategic initiatives and investment opportunities across the United States market.',
      },
      {
        id: 'prudent-kabila-us',
        name: 'Prudent Kabila',
        title: 'Chief Executive Officer',
        description: 'Executive leader driving operational excellence and business growth in technology, finance, and investment sectors.',
      },
      {
        id: 'dan-kinenkinda-us',
        name: 'Dan Kinenkinda',
        title: 'Secretary',
        description: 'Corporate governance specialist ensuring regulatory compliance and best practices across all US operations.',
      },
      {
        id: 'vangeli-kouvas-us',
        name: 'Vangeli Kouvas',
        title: 'Board Member',
        description: 'Strategic advisor providing insights on market opportunities and investment strategies in the US business landscape.',
      },
    ],
  } as CompanyEntity,
  
  domains: {
    primary: 'steedoo.group',
    secondary: ['steedoogroup.com'],
  },
  
  contact: {
    email: 'info@steedoogroup.com',
  },
  
  social: {
    linkedin: 'https://linkedin.com/company/steedoo-group',
    twitter: 'https://twitter.com/steedoogroup',
  },
};

export type Region = 'global' | 'us';

export function getCompanyByRegion(region: Region): CompanyEntity {
  return region === 'us' ? company.us : company.global;
}

export function formatAddress(entity: CompanyEntity, singleLine = false): string {
  const { address } = entity;
  const parts = [
    address.street,
    address.quarter && `Q/${address.quarter}`,
    address.commune && `C/${address.commune}`,
    address.city && `V/${address.city}`,
    address.province && `P/${address.province}`,
    address.state,
    address.country,
    address.postalCode,
  ].filter(Boolean);
  
  return singleLine ? parts.join(', ') : parts.join('\n');
}