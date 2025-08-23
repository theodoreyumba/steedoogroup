import { HeroSection } from '@/components/sections/hero';
import { WhoWeAreSection } from '@/components/sections/who-we-are';
import { OurCompaniesSection } from '@/components/sections/our-companies';
import { SectorsSection } from '@/components/sections/sectors';
import { OurServicesSection } from '@/components/sections/our-services';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';
import { getDictionary, type Locale } from '@/lib/dictionaries';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <WhoWeAreSection dictionary={dictionary} />
      <OurCompaniesSection dictionary={dictionary} />
      <SectorsSection dictionary={dictionary} />
      <OurServicesSection dictionary={dictionary} />
      <WhyChooseUsSection dictionary={dictionary} />
    </>
  );
}