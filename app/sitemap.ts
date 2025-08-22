import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://steedoo.group';
  const lastModified = new Date();
  
  const globalRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/industries/technology', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/industries/transportation', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/industries/finance', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/industries/investment', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/industries/industrial-commercial', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/portfolio', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/research-processing', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/legal/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/code-of-conduct', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/anti-corruption', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const usRoutes = [
    { path: '/us', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/us/about', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/us/industries', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/us/industries/technology', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/us/industries/transportation', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/us/industries/finance', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/us/industries/investment', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/us/industries/industrial-commercial', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/us/portfolio', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/us/research-processing', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/us/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/us/legal/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/us/legal/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/us/legal/code-of-conduct', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const allRoutes = [...globalRoutes, ...usRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}