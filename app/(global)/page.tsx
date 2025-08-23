import { HeroSection } from '@/components/sections/hero';
import { WhoWeAreSection } from '@/components/sections/who-we-are';
import { OurCompaniesSection } from '@/components/sections/our-companies';
import { SectorsSection } from '@/components/sections/sectors';
import { OurServicesSection } from '@/components/sections/our-services';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';
import { getDictionary } from '@/lib/dictionaries';

export default async function HomePage() {
  // Default to English for root path
  const dictionary = await getDictionary('en');
  
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <WhoWeAreSection />
      <OurCompaniesSection />
      <SectorsSection />
      <OurServicesSection />
      <WhyChooseUsSection />
    </>
  );
}